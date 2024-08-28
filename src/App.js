import './App.css';
import logo from './images/logo.svg';
import mockup from './images/illustration-mockups.svg';
import growTogether from './images/illustration-grow-together.svg';
import flowingConversations from './images/illustration-flowing-conversation.svg'
import yourUsers from './images/illustration-your-users.svg';
import location from './images/icon-location.svg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import footerLogo from './images/footer-logo.svg';


function App() {
  return (
    <>

      {/* Header Section */}
      <header>
        <img src={logo} alt="" />
        <button>Try it for free</button>
      </header>
      <div className='community' >
        <div className='community-info'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. 
            You have a voice, but so does your audience. Create connections
            with your users as you engage in genuine discussion.</p>
          <button className='get-started-btn' >Get started for free</button>
        </div>
        <div className='mockup'>
          <img src={mockup} alt="" />
        </div>
      </div>

      {/* Community Suggestions */}
      <div className='grow-together'>
        <div className='growTogetherImg'>
          <img src={growTogether} alt="" />
        </div>
        <div className='growTogetherInfo'>
          <h2>Grow Together</h2>
          <p>Generate meaningful discussions with your audience and build
           a strong, loyal community. Think of the insightful 
           conversations you miss out on with a feedback form. </p>
        </div>
      </div>

      <div className='flowing-conversations' >
        <div className='flowingConversationsImg'>
          <img src={flowingConversations} alt="" />
        </div>
        <div className='flowingConversationsInfo'>
          <h2>Flowing Conversations</h2>
          <p>You wouldn't paginate a conversation in real life,
            so why do it online? Our threads have just-in-time 
            loading for a more natural flow.</p>
        </div>
      </div>

      <div className='your-users'>
        <div className='yourUsersImg'>
          <img src={yourUsers} alt="" />
        </div>
        <div className='yourUsersInfo'>
          <h2>Your Users</h2>
          <p>It takes no time at all to integrate Huddle with your 
            app's authentication solution. This means, once signed in 
            to your app, your users can start chatting immediately.</p>
        </div>
        
        
      </div>

      {/* Ready to Build your Community? */}
      <div className='build-community'>
        <h2>Ready To Build Your Community?</h2>
        <button className='get-started-btn' >Get started for free</button>
      </div>

      {/* Footer Section */}
      <div className='footer'>
        <div className='footer-content'>
          
          <div className='section1'>
            <img className='footer-logo' src={footerLogo} alt="" />
            <div className='location'>
              <img src={location} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua</p>
            </div>
            <div className='phone'>
              <img src={phone} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className='email'>
              <img src={email} alt="" />
              <p>example@huddle.com</p>
            </div>
          </div>

          <ul className='links' >
            <div className='section2'>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </div>
            <div className='section3'>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </div>
          </ul>

          <div className='section4'>
            <div className='socials'>
              <div className='socials-border'>
                <img className='facebook' src={facebook} alt="" />
              </div>
              <div className='socials-border'>
                <img className='twitter' src={twitter} alt="" />
              </div>
              <div className='socials-border'>
                <img className='insta' src={instagram} alt="" />
              </div>
            </div>
            <div className='copyright'>
              <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
