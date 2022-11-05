import react from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import AnnetteBlack from './img-1/profileImg.jpg';
import Arrow from './img-1/_Avatar share button.jpg';
import dot from './img-1/dot.jpg';
import slack from './img-1/slack.png';
import git from './img-1/git.jpg';




const Home = () => {
    return (
        <div className="App">
        <div  id='icon'>
        <img src={Arrow} alt='arrow' id='img-1' />
        <img src={dot} alt='dot' id='img-2' />
        </div>
      <div className='first-div'>
        <div >
        <img src={AnnetteBlack} alt='profile pic' id='profile_img'/>
        <p id='twitter'>AEfoneli</p>
      </div>
      </div>

      <div className='all-btns'>
      <div>
        <a href='https://training.zuri.team/'>
        <button>Twitter link</button>
        <h4 id='twitter'>@AEfoneli</h4>
        </a>
      </div>

      <div className='btn-div'>
      <a href='https://training.zuri.team/' id='btn-zuri'>

        <button>Zuri Team<br />
        <sub>Join the zuri team today</sub>
        </button>
        </a>
      </div>

      <div>
      <a href='http://books.zuri.team/' id='books'>
        <button>Zuri Books<br />
        <sub>Contains Books about coding and design</sub>
        </button>
        </a>
      </div>

      <div>
      <a href='https://books.zuri.team/' id='book_python'>
        <button>Python Books<br />
        <sub>Learn Python programming language</sub>
        </button>
        </a>
      </div>

      <div>
      <a href='https://background.zuri.team/' id='pitch'>
        <button>Background Check for Coders<br />
        <sub>Konw more about the background of coders</sub>
        </button>
        </a>
      </div>

      <div>
      <a href='https://books.zuri.team/design-rules' id='book_design'>
        <button>Design books<br />
        <sub>Free design book from Zuri</sub>
        </button>
        </a>
      </div>
      <div>
        <Link to='/contact'>
          <button id='contact'>Contact Me</button>
        </Link>
      </div>
      </div>
      <div className='social-media'>
    <div>
      <img src={slack} alt='slack' id='slack-git' />
      <h4 id='slack'>efoneli</h4>
    </div>
    <div>
      <img src={git} alt='git' id='slack-git' />
    </div>
  </div>
      </div>
    
    
    )
  };
  
  export default Home;