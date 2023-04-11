const express = require("express");
const bodyParser = require("body-parser");
// const ObjectId = require("mongodb").ObjectId;
const mongoose = require('mongoose');
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const carRoute = require("./routes/carRoute");
const reviewRoute = require("./routes/reviewRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from auto deal server!");
});

// ROUTES
app.use("/api", userRoute);
app.use("/api", carRoute);
app.use("/api", reviewRoute);


// const client = new MongoClient(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   const carCollection = client.db("auto-deal").collection("car_details");
//   const reviewCollection = client.db("auto-deal").collection("reviews");
//   const shipmentCollection = client
//     .db("auto-deal")
//     .collection("shipment_details");
//   const usersCollection = client.db("auto-deal").collection("users");

//   // add car
//   app.post("/addCar", async (req, res) => {
//     const result = await carCollection.insertOne(req.body);
//     res.send(result);
//   });

//   // get car
//   app.get("/car", async (req, res) => {
//     const result = await carCollection.find({}).toArray();
//     res.send(result);
//   });

//   // get car
//   app.get("/car/:id", async (req, res) => {
//     const result = await carCollection
//       .find({
//         _id: ObjectId(req.params.id),
//       })
//       .toArray();
//     res.send(result);
//   });

//   // add review
//   app.post("/reviews", async (req, res) => {
//     const result = await reviewCollection.insertOne(req.body);
//     res.send(result);
//   });

//   // get review
//   app.get("/reviews", async (req, res) => {
//     const result = await reviewCollection.find({}).toArray();
//     res.send(result);
//   });

//   // post order
//   app.post("/shipment/:id", async (req, res) => {
//     const result = await shipmentCollection.insertOne(req.body);
//     res.send(result);
//   });

//   // get order
//   app.get("/shipment", async (req, res) => {
//     const result = await shipmentCollection.find({}).toArray();
//     res.send(result);
//   });

//   //place order
//   app.post("/shipment/:id", async (req, res) => {
//     const id = req.params.id;
//     const updatedName = req.body;
//     const filter = { _id: ObjectId(id) };
//     shipmentCollection
//       .insertOne(filter, {
//         $set: {
//           name: updatedName.name,
//         },
//       })
//       .then((result) => {
//         res.send(result);
//       });
//   });

//   //  my order
//   app.get("/myOrder/:email", async (req, res) => {
//     const result = await shipmentCollection
//       .find({ email: req.params.email })
//       .toArray();
//     res.send(result);
//   });

//   app.get("/orders", async (req, res) => {
//     const result = await shipmentCollection.find({}).toArray();
//     res.send(result);
//   });

//   // delete data from my order
//   app.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: ObjectId(id) };
//     const result = await shipmentCollection.deleteOne(query);
//     res.json(result);
//   });

//   // delete data from explore
//   app.delete("/car/:id", async (req, res) => {
//     const id = req.params.id;
//     const query = { _id: ObjectId(id) };
//     const result = await carCollection.deleteOne(query);
//     res.json(result);
//   });

//   // status update
//   app.put("/updateStatus/:id", (req, res) => {
//     const id = req.params.id;
//     const updatedStatus = req.body.status;
//     const filter = { _id: ObjectId(id) };
//     console.log(updatedStatus);
//     shipmentCollection
//       .updateOne(filter, {
//         $set: { status: updatedStatus },
//       })
//       .then((result) => {
//         res.send(result);
//       });
//   });

//   // client.close();
//   app.listen(port, () => {
//     console.log(`server is running @ http://localhost:${port}`);
//   });
// });

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
  })
}).catch((err) => {
  console.log(err, 'not connected!')
})