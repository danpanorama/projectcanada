import { NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";

function NavLinks() {
  return (
    <div className="w100 flexCol center allNav_Links displayNone">
        <div className="flexRow w70">
            <NavLink className={'link'} >HOME</NavLink>
            <NavLink className={'link'} >SERVICES</NavLink>
            <NavLink className={'link'} >PRICES</NavLink>
            <NavLink to={'/about'} className={'link'} >ABOUT</NavLink>
            <NavLink className={'link'} >BLOG</NavLink>
            <NavLink className={'link'} >CONTACT</NavLink>
            <NavLink className={'link'} >SERVICE AREAS</NavLink>
           

        </div>

      
    </div>
  );
}

export default NavLinks;
