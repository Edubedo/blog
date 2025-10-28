import { NextRequest, NextResponse } from 'next/server';
import Like from '../../../config/models/Like.js';

// POST a like to a comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { commentId } = body;

    if (!commentId) {
      return NextResponse.json(
        { error: 'Comment ID is required' },
        { status: 400 }
      );
    }

    // Get IP address from headers
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';

    // Check if like already exists from this IP
    const existingLike = await Like.findOne({
      where: { commentId, ipAddress }
    });

    if (existingLike) {
      return NextResponse.json(
        { error: 'Already liked', liked: true },
        { status: 200 }
      );
    }

    const like = await Like.create({
      commentId,
      ipAddress
    });

    return NextResponse.json({ like, success: true }, { status: 201 });
  } catch (error) {
    console.error('Error creating like:', error);
    return NextResponse.json(
      { error: 'Failed to create like' },
      { status: 500 }
    );
  }
}

// DELETE a like from a comment
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const commentId = searchParams.get('commentId');

    if (!commentId) {
      return NextResponse.json(
        { error: 'Comment ID is required' },
        { status: 400 }
      );
    }

    // Get IP address from headers
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';

    const deleted = await Like.destroy({
      where: { commentId, ipAddress }
    });

    if (deleted === 0) {
      return NextResponse.json(
        { error: 'Like not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting like:', error);
    return NextResponse.json(
      { error: 'Failed to delete like' },
      { status: 500 }
    );
  }
}

// GET if IP has liked a comment
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const commentId = searchParams.get('commentId');

    if (!commentId) {
      return NextResponse.json(
        { error: 'Comment ID is required' },
        { status: 400 }
      );
    }

    // Get IP address from headers
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';

    const like = await Like.findOne({
      where: { commentId, ipAddress }
    });

    return NextResponse.json({ liked: !!like }, { status: 200 });
  } catch (error) {
    console.error('Error checking like:', error);
    return NextResponse.json(
      { error: 'Failed to check like' },
      { status: 500 }
    );
  }
}

