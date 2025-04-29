const crypto = require('crypto');

function generateHash(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}

// Example usage:
const input = 'Hello, Crypto Tools!';
console.log(`SHA-256 Hash of "${input}": ${generateHash(input)}`);
