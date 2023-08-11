export default {
  name: "/",
  method: "get",

  async execute(req, res) {
    res
      .status(200)
      .json({
        message: "Hello, welcome.",
        rotas: "/user/:userID.",
        createdBy: "@fakie0",
      });
  },
};
