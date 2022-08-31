require("../src/db/mongoose");
const Task = require("../src/models/task");
// Task.findByIdAndDelete("62f2037b2d7ec709e8875b8f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const deleteTaskByAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
deleteTaskByAndCount("62ef774d64f4f7306ce6059b", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
