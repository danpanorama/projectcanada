import "../../css/home.css";
import "../../css/about.css";

function NavOfSections(props) {
  return (
    <div className=" about-banner ">
   
   <div className="containerL">
    <h1>{props.h1}</h1>
    <div className="heading">
        <h2 className="headernav2">{props.textHeader}</h2>
    </div>
   </div>
    </div>
  );
}

export default NavOfSections;
