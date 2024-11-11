import "./Gallery.css";
import img1 from "../img/imgg1.jpg";
import imgg2 from "../img/imgg2.jpg";
import imgg3 from "../img/imgg3.jpg";
import imgg4 from "../img/imgg4.jpg";
import imgg5 from "../img/imgg5.jpg";
import imgg6 from "../img/imgg6.jpg";
import imgg7 from "../img/imgg7.jpg";
import imgg8 from "../img/imgg8.jpg";
import omgg9 from "../img/omgg9.jpg";

export const Gallery = () => {
  return (
    <div className="gallery row">
      <h2>Gallery</h2>
      <div className="width"></div>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </p>

      <div className="row imgg ">
        <img className="col-4" src={img1} />
        <img className="col-4" src={imgg2} />
        <img className="col-4" src={imgg3} />
        <img className="col-4" src={imgg4} />
        <img className="col-4" src={imgg5} />
        <img className="col-4" src={imgg6} />
        <img className="col-4" src={imgg7} />
        <img className="col-4" src={imgg8} />
        <img className="col-4" src={omgg9} />
      </div>
    </div>
  );
};
