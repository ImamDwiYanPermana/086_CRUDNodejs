import express, { Router } from "express";
const router = express.Router();

const mobil = [
  {
    nama_kendaraan: "Kendaraan",
    jenis: "Mobil",
    jenis_warna: "hitam",
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
  res.send(mobil);
});

export default router;