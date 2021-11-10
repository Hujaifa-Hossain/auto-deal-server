const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Hujaifa!");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wozmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const carCollection = client.db("car").collection("car_details");
  const reviewCollection = client.db("customers").collection("review");

  // add car
  app.post("/addCar", async (req, res) => {
    const result = await carCollection.insertOne(req.body);
    res.send(result);
  });

  // get car
  app.get("/addCar", async (req, res) => {
    const result = await carCollection.find({}).toArray();
    res.send(result);
  });

  // get destination
  app.get("/car/:id", async (req, res) => {
    console.log(req.params.id);
    const result = await carCollection
      .find({
        _id: ObjectId(req.params.id),
      })
      .toArray();
    res.send(result);
  });

  // add review
  app.post("/reviews", async (req, res) => {
    const result = await reviewCollection.insertOne(req.body);
    res.send(result);
  });

   // get review
   app.get("/reviews", async (req, res) => {
    const result = await reviewCollection.find({}).toArray();
    res.send(result);
  });




  // post order
  app.get("/orders", async (req, res) => {
    const result = await orderCollection.find({}).toArray();
    res.send(result);
  });

  // post order
  app.post("/orders/:id", async (req, res) => {
    // console.log(req.body.id);
    const result = await orderCollection.insertOne(req.body);
    res.send(result);
  });

  //place order
  app.post("/orders/:id", async (req, res) => {
    const id = req.params.id;
    const updatedName = req.body;
    const filter = { _id: ObjectId(id) };

    orderCollection
      .insertOne(filter, {
        $set: {
          name: updatedName.name,
        },
      })
      .then((result) => {
        res.send(result);
      });
  });

  // delete data from cart delete api
  app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) };
    const result = await orderCollection.deleteOne(query);
    res.json(result);
  });

  // get by email
  app.get("/orders/:email", async (req, res) => {
    const result = await orderCollection.find({
      email: req.params.email,
    }).toArray();
    res.send(result);
  });

  // client.close();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});