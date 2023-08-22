import "../App.css";
import "../css/nav.css";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <div className="All_Nav w100 flexCol center">
      <div className="NavBar flexRow bet w65">
        <div className="logo">
          <h1>logo</h1>
        </div>

        <div className="BoxNav flexRow">
          <div className="SocialButtonsBox flexRow center">
            <div className="socialButtons marginRight">a</div>
            <div className="socialButtons marginRight">b</div>
            <div className="socialButtons">c</div>
          </div>
          <div className="Slogen flexRow center">
            <div className="callBtn flexCol center">btn</div>
            <div className="SlogenSide">
              <p className="SlogenParegraph flexRow">
                <span className="Buld">24/7  </span>
                 EMERGENCY LINE
              </p>
              <p className="PhonNumber">
                <h1 className="PhonNumberH2">720-455-5467</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavLinks/>
    </div>
  );
}

export default Nav;
