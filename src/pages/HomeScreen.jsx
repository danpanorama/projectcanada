import Opening from '../components/home/Opening';
import '../App.css';
import AboutSection from '../components/home/AboutSection';
import CallBtn from '../components/callbottons/CallBtn';
import ChooseRow from '../components/home/ChooseRow';
import DetailFirst from '../components/detailscomponents/DetailFirst';
import DetailRow from '../components/detailscomponents/DetailRow';
import LockSmith from '../components/home/LockSmith';
import VisitBlog from '../components/home/VisitBlog';

function HomeScreen() {
  return (
    <div className="home">
      <Opening/>
      <br /><br /><br />
      <div className="w65 margin0Auto flexCol">
            <AboutSection/>
<CallBtn class={'borderBottom'} />
<ChooseRow/>
<DetailFirst/>
<DetailRow Header={'Locked out of your house or apartment? No Problem!'} Span={'At Front Range Locksmith Denver we can unlock any lock in a non destructive way, ensuring you will get back in quickly with no damage to the door.'} active={true} pText={" Our expert locksmiths at Front Range Locksmith are all professional lock-pickers and can pick almost any lock within seconds. Picking a lock does not damage it, so you won't have to change the lock after we let you in. In rare cases, when the lock is particularly hard to pick, we may be forced to drill it. Drilling a lock will cause no damage to your door, but it will make the lock unusable. If we ended up drilling your lock we will always be able to replace it with a new one."} image={'https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202830/denver/picking-lock.jpg'} />

<DetailRow 
Header={'Need to Change or Rekey your locks? We got you covered.'} 
Span={'We are fully equipped with locks from all brands and can match you the solution you need for your security needs and your budget.'} 
active={false} 
pText={" From medium grade security locks to high security and keypads. If all you need is to re-key your locks, we will happily change the old key to a new one while keeping your existing hardware. We offer same day rekey service at no additional cost. Every lock we change or rekey comes with 2 keys included. We will be happy to make additional copies on site when requested."} 
image={'	https://res.cloudinary.com/dt0sbcfc6/image/upload/v1572202534/denver/lock-change-thumbnail-2.jpg'} />
  

  <DetailRow 
Header={'Commercial work? You came to the right place.'} 
Span={'We have vast experience with any type of commercial work you may need. With literally thousands of stores, restaurants, apartment complexes and factories we worked with (and still do), we are proficient doing any sort of commercial work.'} 
active={true} 
pText={" Multilevel master key systems, panic bars installation and repair, detex exit alarms and commercial grade locks installation are just a partial list of the services we can offer your business. Ongoing maintenance and repair is part of the service so you always have someone to call in case of a problem."} 
image={'https://res.cloudinary.com/dt0sbcfc6/image/upload/v1571928863/denver/commercial-locks.jpg'} />
  
        
  <CallBtn/>
  <div className="heading">
    <h4 className="headingh4">What customers say about us</h4>
  </div>

 
  
      </div>
   <LockSmith/>

   <VisitBlog/>
 
    </div>
  );
}

export default HomeScreen;
