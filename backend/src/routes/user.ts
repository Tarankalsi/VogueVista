import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const body = req.body;
    console.log(body)
  try {
    const user = await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    console.log(user)

    res.status(200).json({
      email: user.email,
      password: user.password,
    });

  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: "Error ",
    });
  }
});

export default userRouter;
