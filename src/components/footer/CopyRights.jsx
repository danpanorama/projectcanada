import "../../css/home.css";
import "../../css/footer.css";
import SocialAndBtn from "../callbottons/SocialAndBtn";

function CopyRights(props) {
  return (
    <div className="copy-right ">
      <div className="containerL">
        <div className="copy-right-left">
          <h3>Copyright © 2017 FRONT RANGE LOCKSMITH. All Rights Reserved.</h3>
        </div>
        <div className="copy-right-right">
          <div className="social-icons">
           <SocialAndBtn/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CopyRights;
