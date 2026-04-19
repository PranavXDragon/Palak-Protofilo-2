import { MongoClient } from 'mongodb';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Connect to MongoDB from New folder 3's backend
    const mongoUri = 'mongodb+srv://Test:Test@t.7bexn6b.mongodb.net/?appName=T&retryWrites=true&w=majority';
    if (!mongoUri) {
      console.error('MONGODB_URI not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const client = new MongoClient(mongoUri);
    await client.connect();

    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    // Insert the contact message
    const result = await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    });

    await client.close();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! Your message has been sent. We will get back to you within 24 hours!',
        id: result.insertedId,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Contact API endpoint' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
