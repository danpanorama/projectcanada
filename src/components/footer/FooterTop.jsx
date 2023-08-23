import "../../css/home.css";
import "../../css/footer.css";

function FooterTop(props) {
  return (
    <div className="footer ">
        <div className="containerL">
            <div className="footer-left">
<div className="footer-logo">
<img src="https://res.cloudinary.com/dt0sbcfc6/image/upload/v1545778076/denver/bbb-no-logo.png" alt="" />
</div>           
            <div className="footer-nav">
                <ul>
                    <li><a href="" className="link">HOME</a></li>
                    <li><a href="" className="link">SERVICES</a></li>
                    <li><a href="" className="link">PRICES</a></li>
                   
                </ul>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><a href="" className="link">ABOUT</a></li>
                    <li><a href="" className="link">BLOG</a></li>
                    <li><a href="" className="link">CONTACT</a></li>
                   
                </ul>
            </div> 
            </div>
            <div className="footer-right">
                <h3>SIGN UP TO OUR NEWSLETTER</h3>
                <p>Sign up for our spam free newsletter and get updates about our promotions!</p>
                <span><input type="text" name="" id="" /></span>
                            <span><a href="" className="blue-btn">SUBSCRIBE</a></span>
                            </div>

                          

        </div>
   
    </div>
  );
}

export default FooterTop;
