import { NextRequest, NextResponse } from 'next/server';
import Comment from '../../../config/models/Comment.js';
import Like from '../../../config/models/Like.js';
import sequelize from '../../../config/connectDatabase.js';

// GET comments for a specific post
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postSlug = searchParams.get('postSlug');

    if (!postSlug) {
      return NextResponse.json(
        { error: 'Post slug is required' },
        { status: 400 }
      );
    }

    const comments = await Comment.findAll({
      where: { postSlug },
      order: [['createdAt', 'DESC']],
      include: [{
        model: Like,
        as: 'likes'
      }]
    });

    // Count likes for each comment
    const commentsWithLikes = comments.map(comment => ({
      id: comment.id,
      postSlug: comment.postSlug,
      authorName: comment.authorName,
      content: comment.content,
      createdAt: comment.createdAt,
      likesCount: comment.likes ? comment.likes.length : 0
    }));

    return NextResponse.json({ comments: commentsWithLikes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST a new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postSlug, authorName, content } = body;

    if (!postSlug || !content) {
      return NextResponse.json(
        { error: 'Post slug and content are required' },
        { status: 400 }
      );
    }

    const comment = await Comment.create({
      postSlug,
      authorName: authorName || 'Anonymous',
      content
    });

    return NextResponse.json({ comment }, { status: 201 });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}

