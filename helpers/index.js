//Da formato a la fechas para desplegarlas en los componentes
export const formatFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year : 'numeric',
        month : 'long',
        day : '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}