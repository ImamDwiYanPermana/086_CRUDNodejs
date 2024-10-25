import express, { Router } from "express";
const router = express.Router();

const hewan = [
  {
    nama_hewan: "Hewan",
    jenis: "Anjing",
    jenis_kelamin: "hitam",
    tahun: "2015",
  },
  {
    merk: "Ferari",
    model: "sport",
    warna: "Merah",
    tahun: "2015",
  },
];

router.get("/", (req, res) => {
  res.send(hewan);
});

export default router;