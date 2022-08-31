require("../src/db/mongoose");
const User = require("../src/models/user");
// 62ef67ed7a9a720314864363
// User.findByIdAndUpdate("62ef67ed7a9a720314864363", { age: 23 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 23 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};
updateAgeAndCount("62ef67ed7a9a720314864363", 23)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
