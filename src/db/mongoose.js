const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateInddex: true,
  useFindAndModify: false,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     validator(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Type a valid Email");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value.toLoweCase().includes("password")) {
//         throw new Error("Password cannot contain password");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 30,
//     validate(value) {
//       if (value <= 0) {
//         throw new Error("Age must be possitive number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "Song Jihyo",
//   email: "song.mong@runningman.com",
//   password: "songJihyo_ace",
//   age: 40,
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   description: "Complete Hangout with yoo",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });
