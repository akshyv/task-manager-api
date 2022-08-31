const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// const Task = require("./models/task");
// const User = require("./models/user");
// const multer = require("multer");

const app = express();
const port = process.env.PORT;

// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     //cb is short for callback
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a Word doc"));
//     }
//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request are disabled");
//   } else {
//     next();
//   }
// });
// app.use((req, res, next) => {
//   res.status(503).send("Site under maintnence. Checkout Later.");
// });
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

// const main = async () => {
//   // const task = await Task.findById("62fa351adbc1b02428461a94");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);
//   const user = await User.findById("62fa3514dbc1b02428461a92");
//   try {
//     await user.populate("tasks").execPopulate();
//     console.log(user.tasks);
//   } catch (e) {
//     console.log("no data");
//   }
// };
// main();
// const pet = {
//   //explanation for toJSON in user model
//   name: "Husky",
// };
// console.log(JSON.stringify(pet)); // this is equal to
// pet.toJSON = function () {
//   console.log(this);
//   return this; //this if we replace this with return {} then result will be hidden
// };

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abcd123" }, "thisismynewcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myFunction();
// app.post("/users", (req, res) => {
//   const user = new User(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.get("/users", (req, res) => {
//   User.find({})
//     .then((users) => {
//       res.send(users);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/users/:id", (req, res) => {
//   const _id = req.params.id;

//   User.findById(_id)
//     .then((user) => {
// if (!user) {
//   return res.status(404).send();
// }

//       res.send(user);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.post("/tasks", (req, res) => {
//   const task = new Task(req.body);

//   task
//     .save()
//     .then(() => {
//       res.status(201).send(task);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.get("/tasks", (req, res) => {
//   Task.find({})
//     .then((tasks) => {
//       res.send(tasks);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.get("/tasks/:id", (req, res) => {
//   const _id = req.params.id;

//   Task.findById(_id)
//     .then((task) => {
//       if (!task) {
//         return res.status(404).send();
//       }

//       res.send(task);
//     })
//     .catch((e) => {
//       res.status(500).send();
//     });
// });

// app.listen(port, () => {
//   console.log("Server is up on port" + port);
// });
