import Mailgen from "mailgen";
import { ChangePassError } from "../../errors/new-password.error.js";
import { SignUserError } from "../../errors/sign.error.js";
import { user } from "./auth.schema.js";
import nodemailer from "nodemailer";
import { SendEmailError } from "../../errors/send-email.error.js";

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
      return data;
    } catch (error) {
      throw new SignUserError("Sign up error in service");
    }
  }
  // sign up user

  // sign in user
  async signInUser({ email, password }) {
    try {
      const data = await this.#_model.findOne({ email: email });
      if (data?.password == password) {
        return true;
      }
      return false;
    } catch (error) {
      throw new SignUserError("Error in service while sign in");
    }
  }
  // sign in user

  // change password
  async changeUserPassword({ ass_code }) {
    try {
    } catch (error) {
      throw new ChangePassError("Error in service while change password");
    }
  }
  // change password

  async send(id) {
    const user = await this.#_model.findById(id);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "asilbekrakhimov4333@gmail.com",
        pass: "qrxa uhvv muhe mfdb",
      },
    });

    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Quiz Tests",
        link: "https://mailgen.js/",
      },
    });

    
    const email = {
      body: {
        name: user.full_name,
        intro:
          "Bu xabar unutgan parolingizni yangilamoqchi bo'lib so'rov yuborganingiz uchun sizga jo'natildi.",
        action: {
          instructions: "Parolingizni yangilash uchun pastgi tugmaga bosing:",
          button: {
            color: "#DC4D2F",
            text: "Parolni yangilash",
            link: "https://mailgen.js/reset?s=b350163a1a010d9729feb74992c1a010",
          },
        },
        outro:
          "Agar siz parolni tiklashni talab qilmagan bo'lsangiz, sizdan boshqa hech qanday harakat talab etilmaydi.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    console.log(user.email);
    const mailOptions = {
      from: "asilbekrakhimov4333@gmail.com",
      to: user.email,
      subject:"Parolni yangilash",
      html: emailBody,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      throw new SendEmailError(
        "Error in service while sending message to email"
      );
    }
  }
}

export default new AuthService();
