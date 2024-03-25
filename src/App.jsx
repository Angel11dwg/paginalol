import Carrusel from "./components/Carrusel";
import FormularioRequisitos from "./components/Form";



export default function App() {
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", backgroundColor: "pink" }}>Mascotas Disponibles</h1>
      <div style={{ display: "flex", justifyContent: "center", backgroundImage: 'url("https://m.media-amazon.com/images/I/71n67UKCw3L.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '50px',}}>
        <Carrusel />
      </div>
      <FormularioRequisitos />


    </div>
  );
}
