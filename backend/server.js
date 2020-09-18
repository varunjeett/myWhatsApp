import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

//setting port and app instances

// mongoose.Promise=global.Promise;

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1074767",
  key: "9ccebb4fbd757823ba95",
  secret: "e6a00444dcb3f4b8c418",
  cluster: "ap2",
  useTLS: true,
});

//middleware, to convert json to normal data
app.use(express.json());

//DB config
const connection_url =
  "mongodb+srv://varunjeett:mAtW3hFdNC6iJ0d1@cluster0.mchrl.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose
  .connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // promiseLibrary: global.Promise
  })
  .then(() => console.log("Database Connected at config"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.once('open', (open) => {
  console.log("finallly connected");

  // const msg = mongoose.Collection("messagecontents")
  //   .then(() => console.log("Database Connected "))
  //   .catch((err) => console.log(err));

  // const changeStream = msg.watch();
  // changeStream.on("change", (change) => {
  //   console.log("Something was changed");
  // });
  // return (null,db);
});

//api routes
app.get("/", (req, res) => res.status(200).send("hello is it working"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`listen on :${port}`));
