import { readFile, writeFile } from "../utils/file.util.js"

const PATH_USER = './src/data/reservas.json'

export const getAllReservations = async () => {
    try {
        const dataReservation = await readFile(PATH_USER)
        const reservationJson = JSON.parse(dataReservation)
        return reservationJson
    } catch (error) {
        throw new Error("No se pudieron obtener las reservaciones")
    }
}

export const createReservation = async (reservation) => {
    try {
        const dataReservation = await readFile(PATH_USER)
        const reservations = JSON.parse(dataReservation)

        const nextId = String(reservations.length + 1)
        const newReservation = {id:nextId, ...reservation}

        reservations.push(newReservation)
        await writeFile(PATH_USER, JSON.stringify(reservations, null, 2)) 

        return newReservation

    } catch (error) {
        throw new Error ("No se pudo crear la reservación")
    }
}

export const getReservationById = async(id) => {
    console.log ("El id, es", id)
    try {
        const dataReservation = await readFile(PATH_USER)
        const reservationsJson = JSON.parse(dataReservation)
        
        const found = reservationsJson.find(r => r.id === id)
        return found
    } catch (error) {
        throw new Error(`Reserva con id ${id} no encontrada`)
    }
}

export const updateReservation = async(id, data) => {
    try {
        const dataReservation = await readFile(PATH_USER)
        const reservationsJson = JSON.parse(dataReservation)

        const index = reservationsJson.findIndex(r => r.id === id) 
        if (index === -1) throw new Error (`Reserva con ${id} no encontrada`)
        
        const originalReservation = reservationsJson[index]
        const updatedReservation = {...originalReservation, ...data}
        reservationsJson[index] = updatedReservation
        await writeFile(PATH_USER, JSON.stringify(reservationsJson, null, 2))
        return { originalReservation, updatedReservation };

    } catch (error) {
        throw new Error (`No se pudo actualizar la reservación`)
    }
}

export const deleteReservation = async(id, data) => {
    try {
        const dataReservation = await readFile(PATH_USER)
        const reservationsJson = JSON.parse(dataReservation)

        const index = reservationsJson.findIndex(r => r.id === id) 
        if (index === -1) throw new Error (`Reserva con ${id} no encontrada`)
        
        const originalReservation = reservationsJson[index]
        const updatedReservation = {...originalReservation, ...data}
        reservationsJson[index] = updatedReservation
        await writeFile(PATH_USER, JSON.stringify(reservationsJson, null, 2))
        return { originalReservation, updatedReservation };
        
    } catch (error) {
        throw new Error (`No se pudo eliminar la reservación`)
    }
}