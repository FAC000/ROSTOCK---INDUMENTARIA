import { useState, useContext, createContext } from "react";

const CarritoContext = createContext()

export const UseCarritoContext = () => useContext (CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const DentroCarrito = (id) => {
        return carrito.some(el => el.id === id)
    }

    const addItem = (item, cantidad) => {
        if (DentroCarrito(item.id)) {
            const indice = carrito.findIndex(el => el.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }
            setCarrito([...carrito, newItem])
        }
    }

   const updateItem = (id, newQuantity) => {
    const indice = carrito.findIndex (el => el.id === id)
    const aux = carrito
    aux[indice].quantity = newQuantity
    setCarrito ([...aux])
   }
      

    const removeItem = (id) => {
        setCarrito(carrito.filter (el => el.id !== id))
    }

    const emptyCar = () =>{
        setCarrito ([])
    }

    const getItemQuantity = () => {
      return carrito.reduce ((acum,prod)=> acum += prod.quantity, 0)

    }
    
    const totalPrice = () =>{
        return carrito.reduce ((acum,prod)=> acum += (prod.quantity * prod.precio),0)
      }

      return (
    <CarritoContext.Provider value={{carrito, DentroCarrito, emptyCar, removeItem, getItemQuantity,totalPrice, addItem,updateItem}}>
        {props.children}
    </CarritoContext.Provider>
      )

}






