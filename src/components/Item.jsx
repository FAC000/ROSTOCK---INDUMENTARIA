import { Link } from "react-router-dom"

export function Item({ productos }) {
    return (
        <div className="itemContainer">
            <div className="itemCard">
                <img src={`../img/${productos.imagen}`} alt="" />
                <h1>{productos.nombre}</h1>
                <div className="itemCompra">
                    <h2>$ {productos.precio}</h2>
                    
                    <Link className="linkCompra" to={`/productos/${productos.id}`}>
                    <button className="buttonComprar">Comprar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

