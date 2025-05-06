import crypto from "crypto";

const comparePassword = async (
  password: string,
  actualPassword: { hash: string; salt: string },
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, actualPassword.salt, 64, (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      const actualPasswordBuffer = Buffer.from(actualPassword.hash, "hex");
      resolve(crypto.timingSafeEqual(derivedKey, actualPasswordBuffer));
    });
  });
};

export default comparePassword;
