import express from "express";
// TODO: import router from users.route
import employeesRouter from "./employees.routes"
import userRouter from "./users.route"
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});
router.use("/users",(req,res)=>{
  res.send("working");
})
router.use("/users",userRouter)
router.use("/employees",employeesRouter)
// TODO: use the imported router to handle all routes matching "/users"
router.use("/users",userRouter)

export default router;
