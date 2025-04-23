// install: npm install livekit-server-sdk
const { AccessToken } = require('livekit-server-sdk');

async function generateToken() {
    const apiKey = 'APIHKyERpsvLZKv';
    const apiSecret = 'LeNU8Y1UQfBrP2c6jxfqNQjQae5eernhZBH2Vr77gy3K';
  const roomName = 'sala-prueba';
  const identity = 'usuario456'; // nombre único del usuario

  const token = new AccessToken(apiKey, apiSecret, {
    identity,
    ttl: '1h',
  });

  token.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true,
  });

  const jwt = await token.toJwt();
  console.log('\n✅ Token generado:\n');
  console.log(jwt);
}

generateToken().catch(console.error);

