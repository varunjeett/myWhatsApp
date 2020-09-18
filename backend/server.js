import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors  from 'cors';

//setting port and app instances
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: '1075140',
  key: '5cc4966bdf755a32c0f6',
  secret: '7ab50aec6a8ee8d9227c',
  cluster: 'ap2',
  useTLS: true
});

//middleware, to convert json to normal data
app.use(express.json());

// app.use((req,res,next) => {
//   res.setHeader("Access-Control-Allow-Origin","*");
//   res.setHeader("Access-Control-Allow-Headers","*");
//   next();
// });

// or 
app.use(cors());


//DB config
const connection_url =
  "mongodb+srv://varunjeett:mAtW3hFdNC6iJ0d1@cluster0.mchrl.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose
  .connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected at config"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.once("open", () => {
  console.log("finallly connected");

  const msg = db.collection("messagecontents");
  const changeStream = msg.watch();

  changeStream.on( "change", (change) => {
    console.log("Something was changed",change);

    if(change.operationType=== 'insert') {
      const msgdetails = change.fullDocument;
      pusher.trigger("messages","inserted", {
        name:msgdetails.name,
        message:msgdetails.message,
        timestamp:msgdetails.timestamp,
        received:msgdetails.received
      });
    }
    else {
      console.log("errror in trigerring pusher");
    }

  });
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
