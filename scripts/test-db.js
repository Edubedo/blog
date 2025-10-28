import Comment from '../config/models/Comment.js';

async function test() {
  try {
    // Test simple insert
    const result = await Comment.create({
      postSlug: 'test',
      authorName: 'Test User',
      content: 'This is a test comment'
    });
    console.log('✅ Comment created successfully:', result.toJSON());
    
    // Test read
    const comments = await Comment.findAll();
    console.log('✅ Comments found:', comments.length);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

test();
