import './Cards.css'
import { Component } from "react";

class Cards extends Component{
    constructor(props){
        super(props)

        this.imagen = props.imagen
        this.marca = props.marca
        this.modelo = props.modelo
        this.asientos = props.asientos
        this.puertas = props.puertas
        this.combustible = props.combustible
        this.transmicion = props.transmicion
        this.valor = props.valor
    }

    render(){
        return(
            <div className="card">
                <div className="back">
                    <img className="__image" src={this.imagen} alt={this.marca+"_"+this.modelo}/>
                    <div className="__name">
                        <span className="_marca">{this.marca}</span>
                        <span className="_model">{this.modelo}</span>
                    </div>
                </div>
                <div className="info">
                    <p>
                        <b>Asientos </b><br/>
                        <i>{this.asientos}</i>
                    </p>
                    <p>
                        <b>Combustible </b><br/>
                        <i>{this.combustible}</i>
                    </p>
                    <p>
                        <b>Puertas </b><br/>
                        <i>{this.puertas}</i>
                    </p>
                    <p>
                        <b>Transmicion </b><br/>
                        <i>{this.transmicion}</i>
                    </p>
                </div>
                <button className='view_more btn'>Mas Informacion</button>
            </div>
        );
    }
}

export default Cards;