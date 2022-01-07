import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function(){
    const carrito = useSelector(state=> state.carrito)
    function sumarCarrito(carrito){
        let total = 0;
        for(let i = 0 ; i < carrito.length; i++){
            total += carrito[i].price;
        }
        return total;
    }
    return(
        <div>
            <h1>Carrito</h1>
            {
                carrito.map( dragon=>
                    <Card name={dragon.name} atack={dragon.atack} defense={dragon.defense}  img={dragon.img} price={dragon.price} />
                )
            }
            <div>
                <h1>Total</h1>
                <h3>{sumarCarrito(carrito)}</h3>
            </div>
        </div>
    )

}
