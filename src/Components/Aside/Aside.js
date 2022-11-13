import './Aside.css'

const Aside = () => {

    return(
        <aside>
            <div className='_header'>
                <div className='input'>
                    <input type={Text} name='q' placeholder='Buscar Automovil'/>
                    <button>?</button>
                </div>

                {/* Este boton abrira el '.filter_list' */}
                <button className='filter_open'>Filtros</button>
            </div>

            <div className='filter_list'>
                <div className='wd_filter'>
                    <span className='wd_title'>Modelo</span>
                    <div className='options'>
                        <div className='opt'>
                            <input type="checkbox" id="id_auto1"/>
                            <label for="id_auto1">Audi</label>
                        </div>
                        <div className='opt'>
                            <input type="checkbox" id="id_auto2"/>
                            <label for="id_auto2">Chevrolet</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto3"/>
                            <label for="id_auto3">Ford</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto4"/>
                            <label for="id_auto4">Honda</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto5"/>
                            <label for="id_auto5">Nissan</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto6"/>
                            <label for="id_auto6">Peugeot</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto7"/>
                            <label for="id_auto7">Renault</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto8"/>
                            <label for="id_auto8">Subaru</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto9"/>
                            <label for="id_auto9">Suzuki</label>
                        </div>

                        <div className='opt'>
                            <input type="checkbox" id="id_auto10"/>
                            <label for="id_auto10">Toyota</label>
                        </div>
                    </div>
                </div>
                <div className='wd_filter'>
                    <span className='wd_title'>Numero de asientos</span>
                    <div className='range_box change_value'>
                        <input 
                            type="range" 
                            id='id_asientos' 
                            onChange={e => {document.getElementById('id_asientos_label').innerHTML = e.target.value}} 
                            name="asientos" 
                            min="2" 
                            max="8" 
                            defaultValue={8}
                            step="1"/>

                        <label for='id_asientos' id='id_asientos_label'>8</label>
                    </div>
                </div>
                <div className='wd_filter'>
                    <span className='wd_title'>Precio Minimo</span>
                    <div className='range_box change_price'>
                        <input 
                            type="range" 
                            id='id_price' 
                            onChange={e => {document.getElementById('id_price_label').innerHTML = e.target.value}} 
                            name="precio" 
                            min="10000" 
                            max="44000" 
                            defaultValue="44000" 
                            step="1000"/>

                        <label for='id_price' id='id_price_label'>44000</label>
                    </div>
                </div>

            </div>
        </aside>
    )
}

export default Aside;