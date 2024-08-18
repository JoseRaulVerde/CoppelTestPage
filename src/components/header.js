import React from 'react';
import '../css/header.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 


const Header = () => {

    
  return (
    <div >
        <div className='header'>

      <div className='specialOferts'>
        <p>
          Aprovecha Hot Fashion del 12 al 19 de agosto 2024
        </p>
        <button className='buttonOferts'>Ver ofertas</button>
      </div>
      </div>

      <div>
        <div className='searchBar'>
            <div className='bar'>
            <img className='coppelIcon' src='https://th.bing.com/th/id/R.a739b5e9fde0ce30225ebdebf7105a0d?rik=J3%2bqnBwgyyvP%2bQ&pid=ImgRaw&r=0'/>

                <input 
                className='inputBar'
                type="text" 
                name="search" 
                placeholder="Busca tus productos"
                />
            </div>
            <div className='barInfo'>
                <div className='barInfoContent'>
                    <span> comprar ahora</span>
                    <a href=''>800 220 7735</a>
                </div>
                <div className='barInfoContent'>
                    <button className='login'>
                    <p style={{margin: '0px'}}>Hola </p>
                    <span>Inicia sesión </span>
                    <i className="fas fa-chevron-down" style={{margin: '5px', fontSize: '10px' }}></i>

                    </button>
                    
                </div>
                <div>
                    <img className='iconCart' src='https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png' />
                </div>
            </div>
        </div>
        <div className='containerCatalogs'>
            <div >
                <button className='catalogsButton '>
                    Departamentos 
                    <i className="fas fa-chevron-down" style={{margin: '5px', fontSize: '10px' }}></i>
                </button>
                <button className='specialOfertsButton'>
                    Hot Fashion 
                    <i className="fas fa-chevron-down" style={{margin: '5px', fontSize: '10px' }}></i>

                </button>
                <button className='catalogsButton'>
                    Servicios 
                    <i className="fas fa-chevron-down" style={{ margin: '5px', fontSize: '10px' }}></i>
                </button>
            </div>
            <div>
                <button className='catalogsButton'> Ubica tu tienda </button>
                <button className='catalogsButton'> Seguir Pedido </button>
                <button className='catalogsButton'> Ayuda</button>
            </div>
        </div>

       
      </div>
    </div>
  );
}

export default Header;
