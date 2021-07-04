const db = require("../models/index");
const admin = require("firebase-admin");
const { response } = require("express");
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
  private_key: PRIVATEKEY.replace(/\\n/g, "\n"),
  client_email: process.env.CLIENTEMAIL,
  client_id: process.env.CLIENTID,
  auth_uri: process.env.AUTHURI,
  token_uri: process.env.TOKENURI,
  auth_provider_x509_cert_url: process.env.AUTHPROVIDERX509CERTURL,
  client_x509_cert_url: process.env.CLIENTX509CERTURL,
};

//db.sequelize.sync();
const User = db.user;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  UserService: class UserService {
    static async getAllUsers() {
      try {
        const allUsers = await User.findAll();
        return allUsers;
      } catch (error) {
        console.log(`Could not fetch Users ${error}`);
      }
    }
    static async getUserData(phone_number) {
      try {
        const userData = await User.findAll({ attributes: ['user_id'], where: { phone: phone_number } });
        return userData;
      } catch (error) {
        console.log(`User does not exist ${error}`);
      }
    }
    static async addUser(data) {
      try {
        console.log("User = ", User);

        const newUser = {
          phone: data.phone.replace("+91", ""),
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
        console.log("Private Key = ", PRIVATEKEY);

        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("This is a token ", decodedToken);
        if (decodedToken) {
          const data = {
            phone: decodedToken.phone_number,
          };
          const dataExists = await UserService.getUserData(
            data.phone.replace("+91", "")
          );
          if (dataExists.length == 0) {
            // If user doesn't exist just send the phone number to the DB
            const dd = await UserService.addUser(data);
            dd.setDataValue("userExists", false);
            console.log("Here 1", dd);
            return dd;
          } else {
            //If user exists just retrieve all the user's data and send it to the front end
            dataExists[0].setDataValue("userExists", true);
            console.log("Here 2", dataExists[0]);
            return dataExists[0];
          }
        }
        //return decodedToken;
      } catch (error) {
        console.log(error);
        return error.message;
      }

      //   admin
      //     .auth()
      //     .verifyIdToken(token)
      //     .then(async (decodedToken) => {
      //       console.log("This is a token ", decodedToken);
      //       const data = {
      //         phone: decodedToken.phone_number,
      //       };
      //       const dataExists = await UserService.getUserData(data.phone);
      //       if (dataExists.length == 0) {
      //         const dd = await UserService.addUser(data);
      //         dd.setDataValue("userExists", false);
      //         console.log("Here 1", dd);
      //         return dd;
      //       } else {
      //         dataExists[0].setDataValue("userExists", true);
      //         console.log("Here 2", dataExists[0]);
      //         return dataExists[0];
      //       }
      //       //return decodedToken;
      //     })
      //     .catch((error) => {
      //       console.log("Error verifying custom token:", error);
      //     });
      // } catch (error) {
      //   console.log(error);
      // }
    }
  },
  admin: admin,
};
