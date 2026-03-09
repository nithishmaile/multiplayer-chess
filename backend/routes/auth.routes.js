const express=require("express");

const authRouter=express.Router()
const {verifyAuth}=require("../middlewares/verifyAuth")
const {login, signup,fetchMe, logout, refresh}=require("../controllers/auth.controller")

authRouter.post("/login",login)
authRouter.post("/signup",signup)
authRouter.get("/me",verifyAuth,fetchMe)
authRouter.post("/logout",logout)
authRouter.post("/refresh",refresh)

module.exports={authRouter}