import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetails } from "./ItemDetails"

export function ItemDetailsContainer() {
    const [item, setItem] = useState([])
    const { idc } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(producto => {
                const detalleProducto = producto.find(el => el.id == idc)
                if (detalleProducto)
                    setItem(detalleProducto)

            })

    }, [])

    return (
        <div className="itemdetailsContainer">
            <ItemDetails ropa={item} />
        </div>
    )
}
