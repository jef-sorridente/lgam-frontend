import "./gallery.css";
import image from "../../Img/default-image.png";

const Gallery = () => {
  return (
    <article className="container">
      <div className="championships">
        <h3 className="title">Eventos</h3>
        <div className="container-imagem">
          <div className="card-imagem">
            <img src={image} alt="" />
            <div className="card-imagem-descricao">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card-imagem">
            <img src={image} alt="" />
            <div className="card-imagem-descricao">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card-imagem">
            <img src={image} alt="" />
            <div className="card-imagem-descricao">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Gallery;
