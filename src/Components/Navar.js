import './Navar.css'
import React, { Component } from 'react';
import Modal from './Modal'

class Navar extends Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
    }

    toggle_modal_contact = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
      
    }
    
    render() {
        return(
            <nav>
                <div className='logo'>
                    <span className='nav__title'>RentaCar</span>
                </div>
                <div className='btn_items'>
                    <li>
                        <button onClick={this.toggle_modal_contact}>
                            Contactanos
                        </button>
                    </li>
    
                    <li>
                        <button>
                            Iniciar Sesion
                        </button>
                    </li>
                </div>

                {/* Modal de contacto */}
                <Modal show={this.state.isOpen}
                    onClose={this.toggle_modal_contact} title='Contactanos'>
                    
                    <div className='contact'>
                        <h1>Contactanos</h1>
                        <p>Puedes contactarnos a travez de <a href='/'>Whatsapp</a> o nuestro <a href='mailto:'>Email</a>, 
                        tambien puedes completar el siguiente formulario y nos pondremos en contacto a la brefdedad.</p>
                        <form action='' method='' style={{marginTop:12}}>
                            <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridGap:20}}>
                                <label>Nombre</label>
                                <label>Numero Telefono</label>
                            </div>
                            <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridGap:20}}>
                                <input type={Text} name='name'/>
                                <input type={Text} name='num'/>
                            </div>
                            <label>Correo Electronico</label>
                            <input type={Text} name='email'/>
                            <label>Mensaje</label>
                            <textarea></textarea>
                            <br></br>
                            <button className='btn_lx blue'>Enviar Formulario</button>
                        </form>
                    </div>
                    
                </Modal>
            </nav>
        );
    }
}


export default Navar;