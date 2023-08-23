import "../../css/home.css";
import "../../css/footer.css";
import SocialAndBtn from "../callbottons/SocialAndBtn";
import FooterTop from "./FooterTop";
import CopyRights from "./CopyRights";

function FooterAll(props) {
  return (
    <div className=" ">
      <FooterTop/>
      <CopyRights/>
   
    </div>
  );
}

export default FooterAll;
