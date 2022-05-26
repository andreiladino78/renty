import { useState } from 'react';
import Swal from 'sweetalert2';
import createUser from '../services/create.user.service';


const initialState = {
  name: '',
  phone: '',
  address: ''
}
export const Contact = (props) => {
  const [{ name, phone, address }, setState] = useState(initialState)

  const handleChange = (e) => {
    
    const { name, value } = e.target
    console.log(value);
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, phone, address);
    e.target.reset();
    let response = await createUser({
      name: name,
      wapPhone: phone,
      address: address
    });

    if(response.statusCode === 200)
      Swal.fire(
        'Datos Cargados',
        'Espera nuestra llamada en pocos minutos',
        'success'
      );
    else 
        alert("Tenemos problemas, intenta mas tarde.");
 
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            
              <div className='section-title'>
                <h2>Contacto</h2>
                <p>
                Completa el siguiente formulario, envíanos tus datos y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nombre'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Movil o fijo (604 + número) '
                        maxLength ='10'
                        minLength ='10'
                        pattern="[0-9]{0,13}"
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    name='address'
                    id='address'
                    className='form-control'
                    rows='4'
                    placeholder='Direccion'
                    required
                    onChange={handleChange}
                  ></input>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar Datos
                </button>
              </form>
            </div>
          </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; AlquilUP! 2022
          </p>
        </div>
      </div>
    </div>
  )
}
