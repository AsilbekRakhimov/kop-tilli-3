import authService from "./auth.service.js";

class AuthController {
  #_service;
  constructor() {
    this.#_service = authService;
  }

  // sign up user
  signUp = async (req, res) => {
    try {
      const data = await this.#_service.signUpUser(req.body);
      res.status(201).send({
        data: data,
        message: "User signed up successfully",
      });
    } catch (error) {
      res.status(400).send({
        name: error.name,
        message: error.message + " :in controller",
      });
    }
  };
  // sign up user

  // sign in user
  signin = async (req, res) => {
    try {
        const data = await this.#_service.signInUser(req.body);
        if (data) {
            res.status(200).send({
                message:"Succesfully signed in"
            });
            return ;
        }
        res.status(404).send({
            message:"User is not found"
        });
    } catch (error) {
        res.status(400).send({
            name:error.name,
            message:error.message + " : in controller"
        })
    }
  }
  // sign in user

}

export default new AuthController();
