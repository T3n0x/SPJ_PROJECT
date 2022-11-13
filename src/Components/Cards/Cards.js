import './Cards.css'
import { Component } from "react";

class Cards extends Component{
    constructor(props){
        super(props)

        this.id = props.id
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
                </div>
                <div className="info">
                    <div className="__name">
                        <span className="_marca">{this.marca}</span>
                        <span className="_model">{this.modelo}</span>
                    </div>
                    <div className='utils'>
                        <p>
                            <b>Asientos: </b>
                            <i> {this.asientos}</i>
                        </p>
                        <p>
                            <b>Combustible: </b>
                            <i> {this.combustible}</i>
                        </p>
                        <p>
                            <b>Transmicion: </b>
                            <i> {this.transmicion}</i>
                        </p>
                        <p>
                            <b>Valor: </b>
                            <i> {this.valor}/dia</i>
                        </p>
                    </div>
                </div>
                <button className='view_more btn' onClick={e => {window.location = '/auto/'+this.id}}>Mas Informacion</button>
            </div>
        );
    }
}

export default Cards;