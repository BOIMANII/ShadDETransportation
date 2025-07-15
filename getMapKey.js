// getMapKey.js
require('dotenv').config();

exports.handler = async (event) => {
  try {
    const { password } = JSON.parse(event.body || '{}');

    // the password is literally "SHADDE"
    if (password !== 'SHADDE') {
      return {
        statusCode: 401,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: 'Unauthorized'
      };
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      throw new Error('Missing API key in environment');
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ key: apiKey })
    };

  } catch (e) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: 'Bad Request'
    };
  }
};
