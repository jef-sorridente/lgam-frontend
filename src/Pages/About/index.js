import "./about.css";
import lutadores from "../../Img/lutadores.png";
import linhas from "../../Img/linhas.png";

const About = () => {
  return (
    <main className="container">
      <div className="about">
        <h3 className="title">Liga Gaúcha de Artes Marciais</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          volutpat enim dolor, eu euismod ante semper at. Curabitur pellentesque
          vulputate urna vitae suscipit. Praesent ut orci placerat, facilisis
          magna et, ullamcorper sapien. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Duis eget tincidunt
          mauris. Nullam sed vehicula enim. In hac habitasse platea dictumst.{" "}
        </p>
      </div>
      <div className="about-img">
        <img className="about-image-figth" src={lutadores} alt="" />
        <img className="about-image" src={linhas} alt="" />
      </div>
    </main>
  );
};

export default About;
