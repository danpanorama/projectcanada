import "../App.css";
import "../css/nav.css";

function Nav() {
  return (
    <div className="All_Nav w100 flexCol center">
      <div className="NavBar flexRow bet w70">
        <div className="logo">
          <h1>logo</h1>
        </div>

        <div className="BoxNav flexRow">
          <div className="SocialButtonsBox flexRow center">
            <div className="socialButtons">a</div>
            <div className="socialButtons">b</div>
            <div className="socialButtons">c</div>
          </div>
          <div className="Slogen flexRow center">
            <div className="callBtn">btn</div>
            <div className="SlogenSide">
              <p className="SlogenParegraph flexRow">
                <span className="Buld">24/7</span>
                EMERGENCY LINE
              </p>
              <p className="PhonNumber">
                <h2 className="PhonNumberH2">720-455-5467</h2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
