import { UseCarritoContext } from "../context/cartContext"
import { Link } from "react-router-dom"

export const CartIcon = () => {
const { getItemQuantity } = UseCarritoContext()
    return (
        <>
        <Link to={'/Cart'}>
            <i className="bi bi-cart3"> <span>{getItemQuantity()}</span></i>
            </Link>
        </>
    )
}

