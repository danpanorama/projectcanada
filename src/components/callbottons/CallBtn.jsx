import "../../css/home.css";

function CallBtn(props) {
  return (
    <div className={props.class +" flexRow center  serviceBTN"}>
     <div className="w70 flexRow center ">
     <a className="serviceBtn  grey-btn">OUR SERVICES</a>
        <a className="CallBtn blue-btn">CALL ME </a>

     </div>
    </div>
  );
}

export default CallBtn;
