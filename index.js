import express from "express";
import bodyParser from "body-parser";
import mobilRoute from "./routes/mobil.js";
import userRoute from "./routes/user.js";
import anggotaRoute from "./routes/anggota.js";

const app = express();
const port = 3000;

app.use("/user", userRoute);
app.use("/mobil", mobilRoute);
app.use("/anggota", anggotaRoute);
app.get("/", (req, res) => {
  console.log(["GET ROUTE"]);
  res.send("Selamat datang Imam ");
});

app.use(bodyParser.json());
app.listen(port, 
    () => console.log(`Server berjalan di port: http://localhost:${port}`));
