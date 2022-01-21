import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPagar} from '../redux/actions'
import BotonPagar from './BotonPagar'
// import { useParams } from 'react-router-dom'

import NavCheto from './NavCheto';

export default function DetalleCompra() {
    // const id = useParams()
    const dispatch = useDispatch()
    const orderId = useSelector((state) => state.order.id);
    // const newOrderId = orderId.Then(() => dispatch(getPagar(orderId)))
    console.log("Orden ID desde ordenCompra: ", orderId)
    const carrito = useSelector(state => state.carrito)


    function sumarCarrito(carrito) {
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            total += Math.round(carrito[i].sellPrice);
        }
        return Math.round(total);
    }
// Generar ID de mercadopago

    useEffect(() => {
        
        if (orderId) {

        dispatch(getPagar(orderId));
        
        
      }
    //   else {
    //     alert("No hay orden")
    //   }
    }, [orderId]);
    
     

    const mId = useSelector((state) => state.getpago)
   console.log("ID para Mercadopago:", mId);
    

    return (
        <div>
        <NavCheto />
        <div className="background-tienda">
            <div className="contenedor-tienda">

                <div className="titulo-tienda">
                    <h1>Detalle</h1>

                </div>
                

                <div className="seccion-compra">
                    <h1>Total:</h1>
                    <h3>$  {sumarCarrito(carrito)}</h3>
                </div>
                <div>
                { !mId.id
        ? <p>Aguarde un momento....</p> 
        : <BotonPagar data={mId}/>
      }
                </div>

            </div>
        </div>


    </div>
    )
 
  
}