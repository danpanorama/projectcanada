import "../../css/home.css";
import "../../css/about.css";
import '../../css/details.css'


function DetailRow(props) {
  return (
  
   
    <div className=" choose-row flexRow">
    {!(props.active)?      <div className="thumbnail ">
      <img src={props.image} alt="" className="img thumbnailimg" />
     </div>:
     <div className="f"></div>
     }
 <div className="description">
  <h1 className="headerDetail">{props.Header}</h1>
  <span className="choseSpan">{props.Span}</span>
 <p className="choose-rowP">
{props.pText}
 </p>
 <a href="" className="choose-rowA">Read More</a>
 </div>
 
     
 {props.active?      <div className="thumbnail ">
      <img src={props.image} alt="" className="img thumbnailimg" />
     </div>:
     <div className="f"></div>
     }
      </div>


  
 
      
     
//     <div className="  ">
//   <div className="choose-rowlock">
//     <h4 className="descriptionh4">Locked out of your house or apartment? No Problem!</h4>
// <span className="choose-rowspan">
// At Front Range Locksmith Denver we can unlock any lock in a non destructive way, ensuring you will get back in quickly with no damage to the door.
// </span>
// <p className="choose-rowp">
// Our expert locksmiths at Front Range Locksmith are all professional lock-pickers and can pick almost any lock within seconds. Picking a lock does not damage it, so you won't have to change the lock after we let you in. In rare cases, when the lock is particularly hard to pick, we may be forced to drill it. Drilling a lock will cause no damage to your door, but it will make the lock unusable. If we ended up drilling your lock we will always be able to replace it with a new one.
// </p>
// <a href="" className="choose-rowa">Read more</a>
//   </div>
//   <div className="imageSide">
    
//   </div>

   
   
//     </div>
  );
}

export default DetailRow;
