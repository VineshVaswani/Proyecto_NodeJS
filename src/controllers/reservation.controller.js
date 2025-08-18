import {
    getAllReservations as getAllReservationsService,
    createReservation as createReservationService,
    updateReservation as updatedReservationService,
    getReservationById as getReservationByIdService
} from "../services/reservation.service.js";


export const getAllReservations = async(req, res) => {
    try {

        const reservationData = await getAllReservationsService()

        res.status(200).json({
            message:"reservación encontrada con exito",
            statusCode: 200,
            data: reservationData
        })
    } catch (error) {
        res.status(404).json({
            message: "No pudimos encontrar la reservación"
        })
    }
}

export const createReservation = async (req, res) => {
    try {

        const newReservation = await createReservationService(req.body)

        res.status(201).json({
            message: "Reservación creada con exito",
            statusCode: 201,
            data: newReservation
        })
        
    } catch (error) {
        res.status(404).json({
            message: "No pudimos publicar la reservación"
        })
    }
}

export const getReservationById = async (req, res) => {
    try {

        const id = (req.params.id)
        const newReservation = await getReservationByIdService(id)

        res.status(201).json({
            message: "Reservación encontrada con exito",
            statusCode: 201,
            data: newReservation
        })
        
    } catch (error) {
        res.status(500).json({
            message: "No pudimos publicar la reservación"
        })
    }
}

export const updateReservation = async() =>{
    try {
        const updatedReservation = await updatedReservationService()
        
        res.status(201).json({
            message: "Reservación creada con exito",
            statusCode: 201,
            data: updatedReservation
        })
    } catch (error) {
        res.status(500).json({
            message: "No pudimos actualizar la reservación"
    })
    

    }
}

export const deleteReservation = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}