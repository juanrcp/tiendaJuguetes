//Interfaz de proveedores
export interface Proveedores {

    nombreCompleto: string,
    cif: string,
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
