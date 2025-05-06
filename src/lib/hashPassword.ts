import crypto from "crypto";

const hashPassword = async (
  password: string,
): Promise<{ hash: string; salt: string }> => {
  const salt = crypto.randomBytes(64).toString("hex").normalize();
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      const hash = derivedKey.toString("hex").normalize();
      resolve({ hash, salt });
    });
  });
};

export default hashPassword;
