import { Item } from "./Item"
import { ItemCart } from "./ItemCart"

export function ItemMap({ ropa, plantilla }) {
    return (
        <>
             {
            
                 plantilla === 'Lista'
                 ?
                 ropa.map (el => <Item key= {el.id} productos={el} />)
                 :
                 ropa.map (el => <ItemCart key= { el.id} productos={el} />)
                   
                }


        </>
    )
}

