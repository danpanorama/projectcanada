import "../../css/home.css";
import "../../css/about.css";
import '../../css/locksmith.css'
import SocialAndBtn from "../callbottons/SocialAndBtn";

function LockSmith() {
  return (
    <div className="lock-smith ">
   <div className="containerL ">
    <div className="">
        <div className="lock-smith-img">
            <img src="https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/men-thumbnail.png" alt="" className="lock-smith-imgimg" />
        </div>
    </div>
    <div className="lock-smith-left-detaii">
        <div className="lock-smith-left">
            <h3 className="lock-smith-lefth3">QUICK, PROFESSIONAL, AFFORDABLE - FRONT RANGE LOCKSMITH</h3>
        </div>
    </div>
  <SocialAndBtn/>
   </div>
    </div>
  );
}

export default LockSmith;
