import { UseCarritoContext } from "../context/cartContext"
import { UseCounter } from "../hooks/UseCounter"


export const ItemCart = ({ productos }) => {
    const { count, incrementar, decrementar } = UseCounter(productos.quantity, productos.stock, 1)
    const { updateItem, removeItem } = UseCarritoContext()

    return (
        <div className="itemCartContainer">
            <img src={`../img/${productos.imagen}`} alt="" />
            <div className="itemCartTitulo">
                <h1>{productos.nombre}</h1>
                <div className="itemCartInfo">
                    <p>$ {productos.precio}</p>
                    <p>Stock: {productos.stock}</p>
                </div>

                <div className="itemCartFuncionalidad">
                    <button onClick={async () => {
                        updateItem(productos.id, count - 1)
                        decrementar()
                    }}> -
                    </button>

                    <span>{count}</span>
                    <button onClick={async () => {
                        updateItem(productos.id, count + 1)
                        incrementar()
                    }}>
                        +
                    </button>
                    <div onClick={() => removeItem(productos.id)} className="icon-trash">
                        <i className=" icon-remove bi bi-trash"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}
