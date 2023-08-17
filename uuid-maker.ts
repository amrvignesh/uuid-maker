import random from "random";

export function generateUUID() {
  // Generate a random 128-bit number.
  const uuidBytes = random.getrandbits(128).toBytes(16, byteorder="big");

  // Convert the number to a hex string.
  const uuidHex = uuidBytes.hex();

  // Return the UUID string.
  return uuidHex[:8] + "-" + uuidHex[8:12] + "-" + uuidHex[12:16] + "-" + uuidHex[16:20] + "-" + uuidHex[20:];
}
