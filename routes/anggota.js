import express, { Router } from "express";
const router = express.Router();

const teamMPL = [
    {
      nama: "Imam",
      role: "Captain",
      age: 25,
      nationality: "Indonesia",
    },
    {
      nama: "Rizky",
      role: "Support",
      age: 23,
      nationality: "Indonesia",
    },
    {
      nama: "Dika",
      role: "Assassin",
      age: 22,
      nationality: "Indonesia",
    },
    {
      nama: "Andre",
      role: "Marksman",
      age: 24,
      nationality: "Indonesia",
    },
    {
      nama: "Bayu",
      role: "Tank",
      age: 26,
      nationality: "Indonesia",
    },
  ];

router.get("/", (req, res) => {
  res.send(teamMPL);
});

export default router;