function TarjetaProducto({ nombre, producto, valor, ciudad}) {
    return (
        <div className="tarjeta">
            <h2>{nombre}</h2>
            <p> producto : {producto}</p>
            <p> valor : ${valor}</p>
            <p> ciudad : {ciudad}</p>
        </div>
    );
}

export default TarjetaProducto;