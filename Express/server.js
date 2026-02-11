// import express from "express";
// const app = express();
// app.use(express.json());


// function requestLogger(req,res,next){
//     console.log(req.method + " " + req.url);
//     next();
// }

// app.use(requestLogger);

// const PORT = 3000;

// const users = [
//   {
//     id: 1,
//     name: "Tanmay",
//     batch: "obp3",
//     city: "Wardha",
//   },
//   {
//     id: 2,
//     name: "Soyam",
//     batch: "obp2",
//     city: "Aashti",
//   },
//   {
//     id: 3,
//     name: "Vishakha",
//     batch: "obp6",
//     city: "Wardha",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(users);
// });

// const products = [
//   { id: 168, title: "Charger SXT RWD", price: 32999.99 },
//   { id: 78, title: "Apple MacBook Pro 14 Inch Space Grey", price: 1999.99 },
//   { id: 183, title: "Green Oval Earring", price: 24.99 },
//   { id: 100, title: "Apple Airpods", price: 129.99 },
//   { id: 144, title: "Cricket Helmet", price: 44.99 },
// ];

// app.get("/oddTitles", (req, res) => {
//   //    let arr=products.map((product)=>{
//   //     if(product.id%2!=0){
//   //         return product.title;
//   //     }
//   //    })
//   //    res.send(arr);

//   const oddIds = products
//     .filter((product) => product.id % 2 !== 0)
//     .map((product) => product.title);
//   res.send(oddIds);
// });

// //Route Parameters
// app.get("/users/:id", (req, res) => {
//   console.log(req.params.id);
//   const id = req.params.id;
//   const user = users.find((ele) => id == ele.id);
//   res.send(user);
// });

// //Query Parameters
// app.get("/users", (req, res) => {
//   console.log(req.query);
//   const city = req.query.city;
//   const batch = req.query.batch;
//   const WardhaOBP3Users = users.filter(
//     (user) => user.city == city && user.batch == batch,
//   );
//   res.send(WardhaOBP3Users);
// });

// app.post("/add-gender", (req, res) => {
//   const { propertyName, id, propertyvalue } = req.body;

//   for (let i = 0; i < users.length; i++) {
//     const idx = id.indexOf(users[i].id);
//     if (idx !== -1) {
//       users[i][propertyName] = propertyvalue[idx];
//     }
//   }

//   console.log(users);
//   res.send("Successfully saved data");
// });



// app.listen(PORT, () => {
//   console.log("Running on PORT:", PORT);
// });
