import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Auto.css'

import { db } from './../../firebase'
import { doc, getDoc } from "firebase/firestore";

function withParams(Component) {
	return (props) => <Component {...props} params={useParams()} />;
}

function Auto(props) {
    let route = props.params.id
    const [docs, setDocs] = useState([]);

    const getCars = async () => {
        let document = await getDoc(doc(db, 'automoviles', route))
        setDocs(document.data());
    }

    useEffect(() => {
        getCars();
    });

    return(
        <div className='view_car'>
            <div className="summary">
                <div className="images">
                    <img className="main_img" src={docs.imagen} alt={docs.marca}/>
                </div>
                <div className="info">
                    <div className="top">
                        <span className="__marca">{docs.marca}</span>
                        <span className="__modelo">{docs.modelo}</span>
                    </div>
                    <div className="utils">
                        <p>
                            <b>Asientos: </b>
                            <i> {docs.asientos}</i>
                        </p>
                        <p>
                            <b>Combustible: </b>
                            <i> {docs.combustible}</i>
                        </p>
                        <p>
                            <b>Transmicion: </b>
                            <i> {docs.transmicion}</i>
                        </p>
                        <p>
                            <b>Puertas: </b>
                            <i> {docs.puertas}</i>
                        </p>
                        <p>
                            <b>Precio: </b>
                            <i> {docs.valor}/dia</i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="user_form">
                

            {JSON.stringify(docs)}
            </div>
        </div>
    );
}

export default withParams(Auto);