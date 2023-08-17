import Opening from '../components/home/Opening';
import '../App.css';
import AboutSection from '../components/home/AboutSection';
import CallBtn from '../components/callbottons/CallBtn';
import ChooseRow from '../components/home/ChooseRow';

function HomeScreen() {
  return (
    <div className="home">
      <Opening/>
      <br /><br /><br />
      <div className="containerA">
            <AboutSection/>
<CallBtn/>
<ChooseRow/>
      </div>
  
 
    </div>
  );
}

export default HomeScreen;
