import './GridAutos.css'
import { Component } from "react";

import Cards from './Cards';
import Automoviles from './../TestJSON/Automoviles.json'

class GridAutos extends Component{
    render() {
        return(
            <main>
                <div className='grid_list'>
                    {Automoviles.map((e) => {
                        return(<Cards
                            imagen={e.imagen}
                            marca= {e.marca}
                            modelo= {e.modelo}
                            asientos= {e.asientos}
                            puertas= {e.puertas}
                            combustible={e.combustible}
                            transmicion={e.transmicion}
                            valor={e.valor}
                            ></Cards>)
                    })}
                </div>
            </main>
        );
    }
}

export default GridAutos;