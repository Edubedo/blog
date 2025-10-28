'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  postSlug: string;
  authorName: string;
  content: string;
  createdAt: string;
  likesCount?: number;
}

interface CommentsSectionProps {
  postSlug: string;
}

export function CommentsSection({ postSlug }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Fetch comments
  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?postSlug=${postSlug}`);
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  // Submit comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postSlug,
          authorName: authorName.trim() || 'Anonymous',
          content: content.trim()
        })
      });

      if (response.ok) {
        setContent('');
        setAuthorName('');
        fetchComments();
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle like
  const handleLike = async (commentId: number) => {
    try {
      // Check if already liked
      const checkResponse = await fetch(`/api/likes?commentId=${commentId}`);
      const { liked } = await checkResponse.json();

      if (liked) {
        // Unlike
        const deleteResponse = await fetch(`/api/likes?commentId=${commentId}`, {
          method: 'DELETE'
        });
        if (deleteResponse.ok) {
          fetchComments();
        }
      } else {
        // Like
        const postResponse = await fetch('/api/likes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ commentId })
        });
        if (postResponse.ok) {
          fetchComments();
        }
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
      <h2 className="text-xl font-semibold mb-6">Comentarios</h2>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tu nombre (opcional)"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Escribe un comentario..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={submitting || !content.trim()}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
        >
          {submitting ? 'Enviando...' : 'Publicar comentario'}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {loading ? (
          <p className="text-neutral-500">Cargando comentarios...</p>
        ) : comments.length === 0 ? (
          <p className="text-neutral-500">No hay comentarios aún. ¡Sé el primero en comentar!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    {comment.authorName}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
                <button
                  onClick={() => handleLike(comment.id)}
                  className="flex items-center gap-1 text-neutral-600 hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm">{comment.likesCount || 0}</span>
                </button>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

