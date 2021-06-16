const db = require("../models/index");
const admin = require("firebase-admin");
const PRIVATEKEY =
  process.env.PRIVATEKEY1 +
  process.env.PRIVATEKEY2 +
  process.env.PRIVATEKEY3 +
  process.env.PRIVATEKEY4 +
  process.env.PRIVATEKEY5 +
  process.env.PRIVATEKEY6 +
  process.env.PRIVATEKEY7;
const serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECTID,
  private_key_id: process.env.PROJECTKEYID,
  private_key: PRIVATEKEY,
  client_email: process.env.CLIENTEMAIL,
  client_id: process.env.CLIENTID,
  auth_uri: process.env.AUTHURI,
  token_uri: process.env.TOKENURI,
  auth_provider_x509_cert_url: process.env.AUTHPROVIDERX509CERTURL,
  client_x509_cert_url: process.env.CLIENTX509CERTURL,
};

db.sequelize.sync();
const User = db.user;

module.exports = class UserService {
  static async getAllUsers() {
    try {
      const allUsers = await User.findAll();
      return allUsers;
    } catch (error) {
      console.log(`Could not fetch Users ${error}`);
    }
  }
  static async addUser(data) {
    try {
      console.log("User = ", User);

      const newUser = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      };
      const response = await User.create(newUser);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async checkIDToken(IDToken) {
    try {
      const token = IDToken.token;
      console.log("IDToken = ", token);
      console.log("Project ID = ", serviceAccount.project_id);

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });

      admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
          console.log("This is a token ", decodedToken);
          return decodedToken;
        })
        .catch((error) => {
          console.log("Error verifying custom token:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
