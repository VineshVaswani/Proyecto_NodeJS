import { Router } from 'express'
import { getAllReservations, createReservation, getReservationById, updateReservation, deleteReservation } from '../controllers/reservation.controller.js'
const router = Router()

router.get("/", getAllReservations)
router.get("/:id", getReservationById)
router.post("/", createReservation)
router.put("/:id", updateReservation)
router.delete("/:id", deleteReservation)


export default router