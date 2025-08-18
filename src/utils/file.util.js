import {promises as fs} from 'fs'

export const readFile = async(path) => {
    try {
        return await fs.readFile(path,'utf-8')
    } catch (error) {
        throw new Error ('No se pudo leer el archivo')
    }
}

export const writeFile = async (path, data) => {
    try {
        return await fs.writeFile(path, data, 'utf-8')
    } catch (error) {
        throw new Error("No se pudo escribir el archivo")
    }
}