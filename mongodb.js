// // CRUD create read update delete
// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectID();
// // console.log(id);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("cannot connect to database");
//     }

//     const db = client.db(databaseName);
//     db.collection("task-list")
//       .deleteOne({
//         Task: "play sniper elite 4",
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(
//           "EEEEEEEEEEEEEEEEEEEEErrrrrrrrrrrrrrrrrooooooooorrrrrrrrrrrrrrrrrrrr!",
//           error
//         );
//       });
//     // db.collection("users")
//     //   .deleteMany({
//     //     age: 27,
//     //   })
//     //   .then((result) => {
//     //     console.log(result);
//     //   })
//     //   .catch((error) => {
//     //     console.log(
//     //       "EEEEEEEEEEEEEEEEEEEEErrrrrrrrrrrrrrrrrooooooooorrrrrrrrrrrrrrrrrrrr!",
//     //       error
//     //     );
//     //   });
//     // db.collection("task-list")
//     //   .updateMany(
//     //     {
//     //       time_started: 3,
//     //     },
//     //     {
//     //       $set: {
//     //         completed: true,
//     //       },
//     //     }
//     //   )
//     //   .then((result) => {
//     //     console.log("the result is", result);
//     //   })
//     //   .catch((error) => {
//     //     console.log("ERROR!!!!!!!!!", error);
//     //   });

//     // db.collection("users")
//     //   .updateOne(
//     //     { _id: new ObjectID("62e394c31a05572938b61cba") },
//     //     {
//     //       $set: {
//     //         name: "Kim Jung Kook",
//     //       },
//     //     }
//     //   )
//     //   .then((result) => {
//     //     console.log(result);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });
//     // db.collection("users")
//     //   .find({ age: 23 })
//     //   .toArray((error, user) => {
//     //     console.log(user);
//     //   });
//     //     db.collection("task-list")
//     //       .find({ time_started: 0.2 })
//     //       .toArray((error, taks) => {
//     //         console.log(taks);
//     //       });
//   }
// );

// // db.collection("users").insertOne(
// //   {
// //     name: "Song JiHyo",
// //     age: 40,
// //   },
// //   (erroe, result) => {
// //     if (error) {
// //       return console.log("Unable to insert!");
// //     }
// //     console.log(result.ops);
// //   }
// // );
// //     db.collection("users").insertMany(
// //       [
// //         {
// //           name: "Ji Suk Jin",
// //           age: 56,
// //         },
// //         {
// //           name: "Yoo Jae-suk",
// //           age: 49,
// //         },
// //       ],
// //       (error, result) => {
// //         if (error) {
// //           return console.log("Unable to insert documents!");
// //         }
// //         console.log(result.ops);
// //       }
// //     );
// //   }
// // );
// // db.collection("task-list").insertMany(
// //   [
// //     {
// //       Tak: "Watch Running Man",
// //       time_started: 13,
// //     },
// //     {
// //       Tak: "Watch Hang out with yoo jae suk",
// //       time_started: 3,
// //     },
// //     {
// //       Tak: "play sniper elite 4",
// //       time_started: 0.2,
// //     },
// //   ],
// //   (error, result) => {
// //     if (error) {
// //       return console.log("Unable to insert documents!");
// //     }
// //     console.log(result.ops);
// //   }
// // );
// //   }
// // );
