import "../../css/home.css";

function Opening() {
  return (
    <div className="openImage flexCol acenter ">
      <div className="w70 flexRow bet marginTop70">
        <div className="sideA">
          <div className="header">
            <h1 className="headerH1 cw">FRONT RANGE LOCKSMITH </h1>
            <h1 className="headerH1 cw marginBottom">DENVER</h1>
            <h3 className="smallHeader cw">
              Locksmith in Denver, Colorado - 24/7 
            </h3>
            <h3 className="smallHeader cw marginBottom">
            Service
            </h3>
            <div className="FourSquaresGrid ">
              <div className="oneSquare">LOCKED KEYS IN CAR?</div>
              <div className="oneSquare">LOCKED KEYS IN CAR?</div>
              <div className="oneSquare">LOCKED KEYS IN CAR?</div>
              <div className="oneSquare">LOCKED KEYS IN CAR?</div>
            </div>
          </div>
        </div>



        <div className="sideB ">
            <h1 className="headerH1 cy ">CALL US 24/7!</h1>
            <h3 className="smallHeader cw">
            Locked out of your car? 
            </h3>
            <h3 className="smallHeader cw">
             Lost your house keys? Need your locks changed?
            </h3>
            <div className="grinRow ButtonsCall">
                <button className="buttonNumber btn marginRight10">
                    1561-235-1653
                </button>
                <button className="buttonPhone btn">
call
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Opening;
