import './GridAutos.css'
import { Component } from "react";

import Cards from './Cards';
import Automoviles from './../TestJSON/Automoviles.json'

import { collection, getDocs } from "firebase/firestore";
import db from './../firebase'

async function getCars() {
    let retn = await getDocs(collection(db, "automoviles"));
    let card = []
    retn.forEach((e) => {
        card.push(<Cards
            imagen={e.imagen}
            marca= {e.marca}
            modelo= {e.modelo}
            asientos= {e.asientos}
            puertas= {e.puertas}
            combustible={e.combustible}
            transmicion={e.transmicion}
            valor={e.valor}
            ></Cards>)
    })

    return card
}

class GridAutos extends Component{
    render() {
        return(
            <main>
                <div className='grid_list'>
                    {getCars}
                </div>
            </main>
        );
    }
}

export default GridAutos;