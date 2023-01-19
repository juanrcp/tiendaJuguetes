export interface Clientes {

    //Interfaz de clientes
    nombreCompleto: string,
    nif: string,
    contacto: {
        telefono: number,
        movil: number,
        correo: string
    },
    direccion: {
        calle: string,
        ciudad: string
    }
}
