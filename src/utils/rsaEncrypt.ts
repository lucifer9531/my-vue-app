import JSEncrypt from 'jsencrypt/bin/jsencrypt.min';

export function encrypt(publicKey: string, txt: string) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(txt);
}
