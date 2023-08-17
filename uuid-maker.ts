import crypto from "crypto";

export function generateUUID() {
    // Generate a random 128-bit number.
    const uuidBytes = crypto.randomBytes(16);

    // Convert the number to a hex string.
    const uuidHex = uuidBytes.toString('hex');

    // Return the UUID string.
    return `${uuidHex.substring(0, 8)}-${uuidHex.substring(8, 12)}-${uuidHex.substring(12, 16)}-${uuidHex.substring(16, 20)}-${uuidHex.substring(20)}`;
}
