import { Link, useNavigate } from "react-router-dom"
import { ItemMap } from "./ItemMap"
import { UseCarritoContext } from "../context/cartContext"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




export const Cart = () => {
  const { carrito, getItemQuantity, totalPrice, emptyCar } = UseCarritoContext()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
     
  const style = {
    position: 'absolute',
    zIndex: 1,
    top: '40%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 200,
    bgcolor: '#424842',
    border: '1px solid #b5c4c7',
    boxShadow: 24,
    p: 5,
  };

const cerrarModal = () =>{
  navigate ('/')
  emptyCar()

}

  return (
    <>

      {
        carrito.length === 0 ?
          <div className="cartContainer">
            <h1>Carrito Vacio</h1>
            <Link to={'/productos'}>
              <h2 className="cartVolver">Volver a la tienda</h2>
              <hr />
            </Link>
          </div>
          :
          <div className="cartContainerFull">
            <ItemMap ropa={carrito} plantilla="ItemCart" />

            <div className="CartBuy">
              <h1>Tu compra:</h1>
              <h2>Cantidad de Productos: <span> {getItemQuantity()} </span> </h2>
              <h3>Precio Total: <span>{totalPrice()}</span></h3>
              <button onClick={handleOpen}>Finalizar Compra</button>

            </div>
            <Modal 
              open={open}

              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="animate__animated animate__backInDown"  sx={style}>
              <img src="./img/imgModal3.jpg" alt="" />
              <i onClick={cerrarModal} className  =" iconModal bi bi-x-lg"></i>
                
                <Typography className="modalText" id="modal-modal-title" variant="h6" component="h2">
                  Gracias Por Tu Compra ও
                  <hr className="modal" />
                </Typography>
                <Typography className="modalInfo" id="modal-modal-description" component={"p"} sx={{ mt: 2 }}>
                  Se envio un mail con el seguimiento del pedido.
                </Typography>
                
              </Box>
            </Modal>

          </div>

      }
      
    </>
  )

}
