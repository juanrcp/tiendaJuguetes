type edadesJuego = "hasta los 6 meses" | "6 a 12 meses" | "1 a 2 años" | "2 a 4 años" | "4 a 6 años" | "6 a 8 años" | "8 a 12 años" | "Mayores de 12 años";

export var EdadesJuegoSelect: string [] = [
    
    "hasta los 6 meses",
    "6 a 12 meses",
    "1 a 2 años",
    "2 a 4 años",
    "4 a 6 años",
    "6 a 8 años",
    "8 a 12 años",
    "Mayores de 12 años"

];

export interface Juguetes {

    identificador: string,
    nombre: string,
    descripcion: string,
    categoria:edadesJuego,
    familia: string,
    precioCompra: number,
    precioVenta: number
}
