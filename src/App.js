import './App.css';
import Logo1 from './imagenes/Recurso 1.png';
import Logo2 from './imagenes/Recurso 2.png';
import logo3 from './imagenes/sadasd.png'


function App() { 

  return (

    <div className='cuadroSuperior'>
      <div className="centrado-container">
      <div className="centrado"></div>
      <div className="centrado2"></div>
      </div>

      <div className="Texto" > 
        <h1>SICRP</h1>  
      </div>
      
      <div className="Linea2"></div>

      <div className="Texto1"><p>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p></div>

      <div className='Imagen1'>
        <img src={Logo1} alt='Logo1'className='image1-pagina1'style={{ width: '600px', height: 'auto' }} />
      </div>

      <div className='Imagen2'>
        <img src={Logo2} alt='Logo2'className="image2-pagina1"style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className="linea"></div>
        <div className ="linea superior"><div className ="linea2"> </div>
      </div>

      <div className="cuadroDeFondo"></div>

      <div className="patrullaFormulario">
        <div> <label><input name="pa1" placeholder="ID PATRULLA"/></label>
      </div>
      </div>

      <div className="cuadranteFormulario">
        <div><label><input  name="cu2" placeholder="CUADRANTE"/></label></div>
      </div>
      
      <div className="botonIngresar">
        <button className='boton'>Ingresar</button>
      </div>
      
      {/* -------------SEGUNDA PAGINA-------------*/}

      <div className='cuadroSuperior'>
        <div className="centrado-container">
        <div className="centrado"></div>
        <div className="centrado2"></div>
        </div>
      </div>

      <div className="cuadroDeFondo2"></div>

      <div className="marco"></div>

      <div className='Imagen2-paguina2'>
        <img src={Logo1} className='bottom'style={{ width: '550px', height: 'auto' }} />
      </div>

      <div className='Imagen1-paguina2'>
        <img src={Logo2}className='botton1'style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className='Imagen3-paguina2'>
        <img src={logo3} className='bottom2'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='w'><p>INICIO</p></div>

      <div className='Imagen4-paguina2'>
        <img src={logo3} className='bottom3'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='A'><p>REPORTE CUADRANTE</p></div>

      <div className='Imagen5-paguina2'>
        <img src={logo3} className='bottom4'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='S'><p>CUADRANTES</p></div>

      <div className='Imagen6-paguina2'>
        <img src={logo3} className='bottom5'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='D'><p>PATRULLAS</p></div>

          {/* -------------TERCERA PAGINA-------------*/}

      <div className='cuadroSuperior'>
        <div className="centrado-container">
        <div className="centrado"></div>
        <div className="centrado2"></div>
        </div>
      </div>

      <div className="cuadroDeFondo2"></div>

      <div className="marco"></div>

      <div className='Imagen7-paguina3'>
        <img src={Logo1} 
              className='bottom-left'style={{ width: '550px', height: 'auto' }} />
      </div>

      <div className='Imagen8-paguina3'>
        <img src={Logo2}className='image2'style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className='Imagen9-paguina3'>
        <img src={logo3} className='bottom2-left'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='Z'><p>INICIO</p></div>

      <div className='Imagen10-paguina3'>
        <img src={logo3} className='bottom2-left'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='X'><p>REPORTE CUADRANTE</p></div>

      <div className='Imagen11-paguina3'>
        <img src={logo3} className='bottom2-left'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='C'><p>CUADRANTES</p></div>

      <div className='Imagen12-paguina3'>
        <img src={logo3} className='bottom2-left'style={{ width: '50px', height: 'auto' }} />
      </div>
      <div className='V'><p>PATRULLAS</p></div>

      <div className="marco1"></div>

      <div className ="linea3"></div>

      <div className ="linea4"></div>

      <div className ="linea5"></div>

      <div className ="linea6"></div>

        <div className= "Tabla">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>PATRULLA</th>
              <th>CUADRANTE</th>
              <th>UBICACIÓN</th>
              <th>RECORRIDO</th>
            </tr>
          </thead>
        </table>
        </div>
      </div>
    );
  }
export default App