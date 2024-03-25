import { Carousel } from 'antd';
import CardItems from './CardItems';

const Carrusel = () => {
  <div style={{ backgroundColor: '#FF92FC'}}></div>
  return (
    <Carousel autoplay style={{ width: "200px" }}>
      <div>
        <CardItems imageUrl={"https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/conejo-dutch_0.jpg"} title={"Tambor"} description={"Conejito macho castrado, 2 años y bastante jueguetón"} />
      </div>
      <div>
        <CardItems imageUrl={"https://www.ciudaddemascotas.com/pub/media/wysiwyg/BlogImages/Agosto2016/cuidar-gatitos.jpg"} title={"Peter"} description={"Gatito macho de 3 meses, tiene antiparasitarios al dia"} />
      </div>
      <div>
        <CardItems imageUrl={"https://t2.ea.ltmcdn.com/es/posts/6/5/2/los_nombres_de_perritas_mas_populares_20256_1_600.jpg"} title={"Macarena"} description={"perrita de 3 meses con vacunas al dia"} />
      </div>
      <div>
      <CardItems imageUrl={"https://as01.epimg.net/diarioas/imagenes/2022/04/20/actualidad/1650466413_240889_1650466661_noticia_normal.jpg"} title={"Carlitos"} description={"Gatito de 1 año, esterilizado y muy cariñoso y dormilón"} />
      </div>
    </Carousel>
  );
};
export default Carrusel;