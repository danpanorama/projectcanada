import "../../css/home.css";
import "../../css/about.css";

function AboutSection() {
  return (
    <div className="  flexCol center  aboutSection">
        <div className="gridAbout ">
            <div className="detailsLogos">
                <div className="image">
                    <img src="		https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/time-icon.png" className="img" alt="" />
                </div>
                <h2 className="headerLogo">20 MINUTES HELP!</h2>
                <p className="textLogo">20 minutes is the most you'll wait</p>
            </div>
            <div className="detailsLogos">
                <div className="image">
                    <img src="https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/metro-area-icon.png" className="img" alt="" />
                </div>
                <h2 className="headerLogo">DENVER-METRO AREA</h2>
                <p className="textLogo">We work all over the Denver-metro area</p>
            </div>
            <div className="detailsLogos">
                <div className="image">
                    <img src="https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/availablity-icon.png" className="img" alt="" />
                </div>
                <h2 className="headerLogo">AVAILABLE 24/7</h2>
                <p className="textLogo">All of our services are 24 hours a day, 7 days a week</p>
            </div>
            <div className="detailsLogos">
                <div className="image">
                    <img src="https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/card-icon.png" className="img" alt="" />
                </div>
                <h2 className="headerLogo">PAY WITH CREDIT CARD</h2>
                <p className="textLogo">We accept all credit and debit cards</p>
            </div>
            <div className="detailsLogos">
                <div className="image">
                    <img src="	https://res.cloudinary.com/dt0sbcfc6/image/upload/f_auto,q_auto/denver/badge-icon.png" className="img" alt="" />
                </div>
                <h2 className="headerLogo">TRUSTED COMPANY</h2>
                <p className="textLogo">Licensed and certified</p>
            </div>

        </div>
     
    </div>
  );
}

export default AboutSection;
