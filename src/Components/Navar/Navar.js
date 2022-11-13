import './Navar.css'
import { Component } from 'react';
import Modal from './../Modal/Modal'

class Navar extends Component {
    constructor(props) {
      super(props);
  
      this.state = { contact_isOpen: false, login_isOpenisOpen: false };
    }

    toggle_modal_contact = () => {
        this.setState({
            contact_isOpen: !this.state.contact_isOpen
        });
    }

    toggle_modal_login = () => {
        this.setState({
            login_isOpen: !this.state.login_isOpen
        });
    }
    
    formulario = () => {
        alert('Esta wea no hace nada aun')
    }

    render() {
        return(
            <nav>
                <div className='logo'>
                    <a href='/'><span className='nav__title'>RentaCar</span></a>
                </div>
                <div className='btn_items'>
                    <li>
                        <button onClick={this.toggle_modal_contact}>Contactanos</button>
                    </li>
    
                    <li>
                        <button onClick={this.toggle_modal_login}>Iniciar Sesion</button>
                    </li>
                </div>

                {/* Modal de contacto */}
                <Modal show={this.state.contact_isOpen}
                    onClose={this.toggle_modal_contact}>
                    
                    <div className='contact'>
                        <h1>Contactanos</h1>
                        <p>Puedes contactarnos a travez de <a href='/'>Whatsapp</a> o nuestro <a href='mailto:'>Email</a>, 
                        tambien puedes completar el siguiente formulario y nos pondremos en contacto a la brefdedad.</p>
                        <form onSubmit={this.formulario} method='' style={{marginTop:12}}>
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


                <Modal show={this.state.login_isOpen}
                    onClose={this.toggle_modal_login}>
                    
                    <div className='contact'>
                        <h1>Aca va la wea de inicio de sesion</h1>
                    </div>
                </Modal>
            </nav>
        );
    }
}


export default Navar;