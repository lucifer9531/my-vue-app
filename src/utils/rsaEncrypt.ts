import JSEncrypt from 'jsencrypt/bin/jsencrypt.min';

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey =
  'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==';

// 加密
export function encrypt(txt: string) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(txt);
}
