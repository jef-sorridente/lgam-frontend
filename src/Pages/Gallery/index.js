import "./gallery.css";
import image from "../../Img/default-image.png";

const Gallery = () => {
  return (
    <article className="container">
      <div className="gallery">
        <h3 className="title">Galeria</h3>
        <div className="gallery-container-image">
          <div className="gallery-image">
            <p>Torneio...</p>
            <img src={image} alt="Lutadores" />
          </div>
          <div className="gallery-image">
            <p>Torneio...</p>
            <img src={image} alt="Lutadores" />
          </div>
          <div className="gallery-image">
            <p>Torneio...</p>
            <img src={image} alt="Lutadores" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Gallery;
