import './_scss/home.css';
import Footer from '../footer/footer'
import {Container,Row,Col,Gliphicon} from 'react-bootstrap';
import {FaBars, FaBeer, FaBone} from 'react-icons/fa';
import Logo from '../assets/logo1.jpg'
import {SocialIcon} from 'react-social-icons';
function Homepage(){
    var fontSize = 18;
    var windowWidth = window.innerWidth;
    console.log(windowWidth+"common");
    if(windowWidth>480){
      var animateWidth = 450; 
    }else{
      var animateWidth = 150;
    }
    window.addEventListener('scroll', (event) => {
      console.log(window.scrollY);
        if(window.scrollY<770){
          //  document.querySelector('.heading1').style.color = "black";
        document.querySelector('.heading1').style.left = Math.max(animateWidth-0.35*window.scrollY,0)+"px";
        console.log(Math.max(350-0.35*window.scrollY,0)+"px");
        }else{
           // document.querySelector('.heading2').style.left = Math.max(100+0.35*window.scrollY,0)+"px";
        }
        
      });
      window.addEventListener('scroll', (event) => {
        //document.querySelector('.heading3').style.left = Math.max(500-0.35*window.scrollY,0)+"px";
        console.log("hello");
      });
    return (
        <div>
          <div className="NavBar">
            <div className="row">
            <p><img src={Logo} alt="confegure logo"/></p>
            <span><FaBars color='white'/></span>
            </div>
          </div>
          <div className="socialMediaIcons">
            <p><SocialIcon url="https://www.instagram.com/confegure/" bgColor='black'/></p>
            <p><SocialIcon url="https://twitter.com/confegure" bgColor='black'/></p>
            <p><SocialIcon url="https://www.facebook.com/Confegure-104724778487036/" bgColor='black'/></p>
          </div>
          <div className="intro">
          <div className="info">
          <span className="title_subs">Hey there,</span><br/>If you are looking for exquisite Mobile and Web Development 
          applications, you are at the right spot.
          With the growing traditions of taking businesses online, we're here to take you a step forward.
          We excel in varied domains from Servers and Networking assistance to Cloud based solutions.
          We are looking to cultivate nascent enthusiasts who are looking for guidance in the Industry
          with internships and additional perks. To sum up, we can help you in taking your product into the
          world with means of splendid Digital Marketing Services. We're Confegure Techsols Pvt.Ltd
          </div>
        </div>
        <div className="details">
          <div className="details_review">
            <div className="details_info">
              <div className="project_count">20+</div>
              <div className="project_title" >Projects</div>
            </div>
            <div className="details_info">
              <div className="project_count">12</div>
              <div className="project_title" >Webiste</div>
            </div>
            <div className="details_info">
              <div className="project_count">19+</div>
              <div className="project_title" >Application</div>
            </div>
        </div>
        </div>
            
        <h1 className="heading1" style={{ left: animateWidth - 100, color: 'black' }}>What We Do ... </h1>
        <h1 className="heading">What We Do ... </h1>
                <div className="aboutus">
          <div className="row">
            <div className="card1">
              <div className="card_title">Cross Platform</div>
              <div className="card_info">Our vital area of expertise lies in development of software applications
                    Developing Web and Mobile applications which are subtle and user friendly, added integration of 
                    world class UI is our significant forte.</div>
            </div>
            <div></div>
            <div className="card1">
              <div className="card_title">Network Solutions</div>
              <div className="card_info">We provide first rate servers to our clients and offer networking tools of the highest
                    grade. We come with skilled competence in delivering the required needs to meet your 
                    necessities.</div>
            </div>
            <div className="card1">
              <div className="card_title">Softwares</div>
              <div className="card_info">We aim to come up with solutions to the existing software issues your organisation might
                    be facing. Regardless of the application built by our company, we've set sights on applications
                    which aren't in our command too. If your application goes haywire we'd come in handy in solving
                    the issues.</div>
            </div>
            
            <div></div>
            <div className="card1">
              <div className="card_title">Cloud Services</div>
              <div className="card_info">With the cloud services on the rise across the globe, we associate ourselves 
                    with assistance to your organisation in this area. As all the enterprises in the world
                    see the growing benefits and their impact in production and efficiency on their application 
                    when using cloud services.</div>
            </div>
            <div className="card1">
              <div className="card_title">IoT Solutions</div>
              <div className="card_info">We bring forth sophisticated generation next IoT devices into the world. With the
                    infinite potential for this mammoth industry we render our services of the
                    highest quality.</div>
            </div>
            
            <div></div>
            <div className="card1">
              <div className="card_title">Digital Marketing</div>
              <div className="card_info">We bestow professional services in Digital Marketing that helps you 
                    advertise through SEO, Website Strategy, Social Media Marketing etc.</div>
            </div>
                    {/* <div className="col">
                     <div className="col" >
                      Cross Platform
                    </div>
                    <div className="col" >
                    Our vital area of expertise lies in development of software applications
                    Developing Web and Mobile applications which are subtle and user friendly, added integration of 
                    world class UI is our significant forte.
                    </div>
                    </div>
                    <div className="col" >
                    <div className="col" >
                      Network Solutions
                    </div>
                    <div className="col" >
                    We provide first rate servers to our clients and offer networking tools of the highest
                    grade. We come with skilled competence in delivering the required needs to meet your 
                    necessities.
                    </div>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="row" >
                    <div className="col" >
                    <div className="col" >
                      Softwares
                    </div>
                    <div className="col" >
                    We aim to come up with solutions to the existing software issues your organisation might
                    be facing. Regardless of the application built by our company, we've set sights on applications
                    which aren't in our command too. If your application goes haywire we'd come in handy in solving
                    the issues.
                    </div>
                    </div>
                    <div className="col" >
                    <div className="col" >
                      Cloud Services
                    </div>
                    <div className="col" >
                    With the cloud services on the rise across the globe, we associate ourselves 
                    with assistance to your organisation in this area. As all the enterprises in the world
                    see the growing benefits and their impact in production and efficiency on their application 
                    when using cloud services.
                    </div>
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div className="row">
                    <div className="col" >
                    <div className="col" >
                      IoT Solutions
                    </div>
                    <div className="col" >
                    We bring forth sophisticated generation next IoT devices into the world. With the
                    infinite potential for this mammoth industry we render our services of the
                    highest quality.
                    </div>
                    </div>
                    <div className="col" >
                    <div className="col" >
                      Digital Marketing
                    </div>
                    <div className="col" >
                    We bestow professional services in Digital Marketing that helps you 
                    advertise through SEO, Website Strategy, Social Media Marketing etc.
                    </div>
                    </div> */}
                  </div>
                </div>
                <br/>
                <Footer/>
        </div>
    );
}
export default Homepage;