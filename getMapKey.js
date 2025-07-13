// getMapKey.js
exports.handler = async (event) => {
  try {
    const { password } = JSON.parse(event.body || '{}');
    // Only reveal the key if the password matches your secret
    if (password !== process.env.SHADDE) {
      return { statusCode: 401, body: 'Unauthorized' };
    }
    // Return the real Maps API key from env
    return {
      statusCode: 200,
      body: JSON.stringify({ key: process.env.GOOGLE_MAPS_API_KEY })
    };
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }
};
