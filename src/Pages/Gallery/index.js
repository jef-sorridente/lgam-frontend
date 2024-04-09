import "./gallery.css";
import image from "../../Img/default-image.png";

const Gallery = () => {
  return (
    <article className="container">
      <div className="gallery">
        <h3 className="title">Galeria</h3>
        <div className="gallery-container-image">
          <div className="gallery-card">
            <div className="gallery-date">
              <div className="gallery-date-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gallery-date-card">
                <h4 className="gallery-date-num">26</h4>
                <p>Março</p>
              </div>
            </div>
            <img src={image} alt="Lutadores" />
            <div className="gallery-date-descri">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-date">
              <div className="gallery-date-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gallery-date-card">
                <h4 className="gallery-date-num">26</h4>
                <p>Março</p>
              </div>
            </div>
            <img src={image} alt="Lutadores" />
            <div className="gallery-date-descri">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-date">
              <div className="gallery-date-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gallery-date-card">
                <h4 className="gallery-date-num">26</h4>
                <p>Março</p>
              </div>
            </div>
            <img src={image} alt="Lutadores" />
            <div className="gallery-date-descri">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-date">
              <div className="gallery-date-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gallery-date-card">
                <h4 className="gallery-date-num">26</h4>
                <p>Março</p>
              </div>
            </div>
            <img src={image} alt="Lutadores" />
            <div className="gallery-date-descri">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-date">
              <div className="gallery-date-title">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="gallery-date-card">
                <h4 className="gallery-date-num">26</h4>
                <p>Março</p>
              </div>
            </div>
            <img src={image} alt="Lutadores" />
            <div className="gallery-date-descri">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Gallery;
