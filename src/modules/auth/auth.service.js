import { ChangePassError } from "../../errors/new-password.error.js";
import { SignUserError } from "../../errors/sign.error.js";
import { user } from "./auth.schema.js";
import nodemailer from 'nodemailer';

class AuthService {
  #_model;
  constructor() {
    this.#_model = user;
  }

  // sign up user
  async signUpUser({ full_name, email, password }) {
    try {
      const data = await this.#_model.insertMany({
        full_name,
        email,
        password,
      });
      return data
    } catch (error) {
      throw new SignUserError("Sign up error in service");
    }
  }
  // sign up user

  // sign in user
  async signInUser({email, password}) {
    try {
        const data = await this.#_model.findOne({email:email});
        if (data?.password == password) {
            return true;
        }
        return false;
    } catch (error) {
        throw new SignUserError("Error in service while sign in")
    }
  }
  // sign in user

  // change password
  async changeUserPassword({ass_code}){
    try {
        
    } catch (error) {
        throw new ChangePassError("Error in service while change password")
    }
  }
  // change password

   async send({ to, subject, message }) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: "asilbekrakhimov4333@gmail.com",
        pass: "qrxa uhvv muhe mfdb",
      },
    });

    const mailOptions = {
      from: "asilbekrakhimov4333@gmail.com",
      to,
      subject,
      html: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('error sending email ', error);
      return false;
    }
  }

}

export default new AuthService();
