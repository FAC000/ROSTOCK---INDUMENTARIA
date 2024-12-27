import { useEffect, useState } from "react"
import { ItemMap } from "./ItemMap"
import { useParams } from "react-router-dom"



export function ItemListContainer({ }) {
    const [ropa, setRopa] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(lista => {
                const productos = lista.filter(el => el.stock > 0)
                if (cid) {
                    const productosFil = lista.filter(el => el.categoria == cid)
                    setRopa(productosFil)
                }
                else {
                    setRopa(productos)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])



    return (
        <div className="itemlistContainer">
            <ItemMap ropa={ropa} plantilla= "Lista" />
        </div>
    )
}

