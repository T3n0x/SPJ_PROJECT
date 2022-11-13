import './GridAutos.css'
import React, { useState, useEffect } from "react";

import Cards from './../Cards/Cards';
import Aside from './../Aside/Aside'

import { db } from './../../firebase'
import { collection, getDocs } from "firebase/firestore";


export const GridAutos = () => {
    const [docs, setDocs] = useState([]);

    const getCars = async () => {
        let query = await getDocs(collection(db, 'automoviles'));
        const lista = []
        query.forEach(e => {
            lista.push({...e.data(), id:e.id});
        });
        console.log(lista)
        setDocs(lista);
    }

    useEffect(() => {
        getCars();
    }, []);

    
    return(
        <div className='Home'>
            <Aside/>
            <div className='grid_list'>
                {docs.map((e)=>(
                    <Cards
                        id={e.id}
                        imagen={e.imagen}
                        marca= {e.marca}
                        modelo= {e.modelo}
                        asientos= {e.asientos}
                        puertas= {e.puertas}
                        combustible={e.combustible}
                        transmicion={e.transmicion}
                        valor={e.valor}
                        ></Cards>
                ))}
            </div>
        </div>
    );    
}