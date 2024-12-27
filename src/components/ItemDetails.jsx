import { UseCounter } from "../hooks/UseCounter"
import { UseCarritoContext } from "../context/cartContext"
import { toast } from "react-hot-toast"
import { Link } from "react-router-dom"


export function ItemDetails({ ropa }) {

  const { count, incrementar, decrementar } = UseCounter(1, ropa.stock, 1)
  const { addItem } = UseCarritoContext()

  const addToCart = () => {

    toast(() => (
      <div className="toastNotify">
        <img src={`../img/${ropa.imagen}`} alt="" />
        <p>Agregado Al Carrito</p>
      </div>
    ));
    addItem(ropa, count)
  }


  return (

    <div className="detailsContainer">
      <div className="navdetailsContainer">
      <p className="navDetails"> <Link to={'/'}>Home / </Link> <Link to={'/productos'}>Productos / </Link> <Link to={`/categoria/${ropa.categoria} ` }> <span> {ropa.categoria} </span> </Link>  </p>
      </div>
      <div className="detailsCard">
        <img src={`../img/${ropa.imagen}`} alt="" />

        <div className="detailsInfo">
          <h1>{ropa.nombre}</h1>
          <h2>Talles: {ropa.talle}</h2>
          <div className="detailsPS">
            <h3>$ {ropa.precio}</h3>
            <h4>Stock {ropa.stock}</h4>
          </div>
          <div className="detailsDescription">
            <p>{ropa.descripcion}</p>
          </div>

          <div className="detailsContador">
            <button onClick={decrementar}>-</button>
            <span>{count}</span>
            <button onClick={incrementar}>+</button>
          </div>

          <div className='detailsAdd'>
            <button onClick={addToCart}>Agregar AL carrito</button>
          </div>

        </div>
      </div>
    </div>

  )
}

