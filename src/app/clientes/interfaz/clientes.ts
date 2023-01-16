export interface Clientes {

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
