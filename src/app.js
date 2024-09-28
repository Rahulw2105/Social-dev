const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

console.log("Line 2: Script started");

// Connect to the database

app.post("/signup", async (req, res) => {
  const user = new User({
    fistName: "Rnnbkbkbahuk",
    lastName: "wanjkhede",
    emailId: "asdlknlkns@g.com",
    password: "sdd",
    age: 26,
    gender: "male",
  });
  await user.save();
  res.send("user added succesfull");
});
connectDB()
  .then(() => {
    console.log("Database connection established successfully");

    // Start the server once the database is connected
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

//app.use(/users , rh1 , [rh2,rh3] , rh4 , rh5);
// you can use as many router handlers(rh)

// app.use("/admin", (req, res, next) => {
//   const token = "xyz";
//   const authorisedToken = token === "xyz";
//   console.log("authorised checking");
//   if (authorisedToken) {
//     next();
//   } else {
//     res.status(401).send("unauthorised ");
//   }
// });

// app.get("/user", (req, res) => {
//   try {
//     res.send("suer");
//     throw new Error("some went wrong");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });
// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data send");
// });
// app.get("/admin/deleteAllUsers", (req, res) => {
//   res.send("Delete All Users");
// });
