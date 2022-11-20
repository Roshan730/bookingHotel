import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/:id", getHotel);
//get All
router.get("/", getHotels);

export default router;