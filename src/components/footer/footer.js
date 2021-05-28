import CompanyLogo from '../assets/companylogo.png'
import { SocialIcon } from 'react-social-icons';
import './_scss/footer.css'

function Footer() {
    return (
            <div className="footer">
            <div className="row">
                <div className="col">
                    <p>If you are in need of or looking for technical solution you are at the right place now. Just contact us.</p>
                    <div className="social">
                      <div className="row">
                        <div className="col"><SocialIcon bgColor="white" url="https://twitter.com/confegure"/></div>
                        <div className="col"><SocialIcon bgColor="white" url="https://www.linkedin.com/company/confegure/"/></div>
                        <div className="col"><SocialIcon bgColor="white" url="https://www.instagram.com/confegure/"/></div>
                        <div className="col"><SocialIcon bgColor="white" url="https://www.facebook.com/Confegure-104724778487036/"/></div>
                      </div>
                    </div>
                    <ul>
                    <li>confegure@gmail.com</li>
                </ul>
                </div>
            <div className="col">
                    <img src={CompanyLogo} alt="confegure" />
                    <p>CONFEGURE TECHSOLS PVT LTD</p>
                
            
            </div>
                
          {/* <div className="col">
            <p className="main-title">References</p>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Contributers</li>
            </ul>
          </div> */}
          {/* <div className="col">
            <div className="row">
              <div className="col"><SocialIcon bgColor="white" url="https://twitter.com/confegure"/></div>
              <div className="col"><SocialIcon bgColor="white" url="https://www.linkedin.com/company/confegure/"/></div>
              <div className="col"><SocialIcon bgColor="white" url="https://www.instagram.com/confegure/"/></div>
              <div className="col"><SocialIcon bgColor="white" url="https://www.facebook.com/Confegure-104724778487036/"/></div>
            </div>
          </div> */}
          <div className="col">
            <form>
              <label>Email</label>
              <input type="email" placeholder="Email Id..." required/>
              <label>FeedBack</label>
              <textarea placeholder="Feedback..." required/>
              <input type="submit" value="Submit" className="submit"/>
            </form>
          </div>
        </div>
        <div className="footer-subs">
          <p>Made with ❤ Confegure</p>
        </div>
      </div>
        )
}

export default Footer;