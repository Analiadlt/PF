import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Card from '../components/Card'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Tienda(){
    const dragones = useSelector(state => state.dragonesbd)
    const carrito = useSelector(state => state.carrito)
    return(
        <div>
            
            <div className="contenedor-tienda">
                <div className="titulo-tienda">
                    <h1>Tienda</h1>
                    <Link to='/Carrito'>
                        <h3 className="carrito"><span className="carrito-num">{carrito.length}</span><ShoppingBasketIcon fontSize="5rem"/></h3>
                    </Link>
                </div>

                <div className="contenedor-tajetas">
                    <div className="grid-tienda">
                    {
                    dragones.map(dragon=>
                        <Card name={dragon.name} atack={dragon.atack} defense={dragon.defense}  img={dragon.img} price={dragon.price} />
                    ) 
                    }
                    </div>
                </div>
            </div>
        </div>

    )
}

