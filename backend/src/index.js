const express = require("express");
const {connectDB} = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")

app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
app.use(express.json())
app.use(cookieParser());

const authRouter = require("./routes/auth");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profileRoute");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
.then(() => {
    console.log(`MongoDB connected`);
    app.listen(process.env.PORT, () => {
        console.log("Server is running on " , process.env.PORT);
    })
})
.catch(() => {
    console.log("DB not Connected");
})



