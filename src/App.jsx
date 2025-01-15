import './styles/App.css'
import { CarritoProvider } from './context/cartContext';
import { Home } from './components/Home'
import { Navegacion } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailsContainer } from './components/ItemDetailsContainer';
import { Cart } from './components/Cart';
import { Toaster } from 'react-hot-toast';


export function App() {
  return (
    
      <BrowserRouter>
        <CarritoProvider>
          <Navegacion />
          
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
          
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/categoria/:cid' element={<ItemListContainer />} />
            <Route path='/productos/:idc' element={<ItemDetailsContainer />} />
            <Route path='/Cart' element={<Cart />} />
           
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    
  )
}

