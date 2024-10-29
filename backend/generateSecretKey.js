const crypto = require('crypto');
console.log('hi');
// Function to generate a JWT secret key
function generateJWTSecretKey(length = 32) {
    return crypto.randomBytes(length).toString('hex');
}

// Generate and print the secret key
const jwtSecretKey = generateJWTSecretKey();
console.log('Generated JWT Secret Key:', jwtSecretKey);
