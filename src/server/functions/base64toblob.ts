export function base64toBlob(base64Data: string) {
  return Buffer.from(base64Data, "base64");
}
export function blobToBase64(blob: Buffer) {
  return blob.toString("base64url");
}
