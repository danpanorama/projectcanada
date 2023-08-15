import { NavLink } from "react-router-dom";
import "../App.css";
import "../css/nav.css";

function NavLinks() {
  return (
    <div className="w100 flexCol center allNav_Links">
        <div className="flexRow w70">
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>
            <NavLink className={'link'} >link</NavLink>

        </div>

      
    </div>
  );
}

export default NavLinks;
