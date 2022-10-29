import './main.css';
import AnnetteBlack from './img/profileImg.jpg';
import Arrow from './img/_Avatar share button.jpg';
import logo from './img/logo.jpg';
import zuri from './img/zuri.jpg';
import hng from './img/hng.jpg';
import slack from './img/slack.png';
import git from './img/git.jpg';
import dot from './img/dot.jpg';


function App() {
  return (
    <div className="App">
        <div  id='icon'>
        <img src={Arrow} alt='arrow' id='img-1' />
        <img src={dot} alt='dot' id='img-2' />
        </div>
      <div className='first-div'>
        <div id='profile_img'>
        <img src={AnnetteBlack} alt='profile pic'/>
        <p>Annette Black</p>
      </div>
      </div>

      <div className='all-btns'>
      <div>
        <a href='https://training.zuri.team/'>
        <button>Twitter link</button>
        <h4 id='twitter'>@AEfoneli</h4>
        </a>
      </div>

      <div>
      <a href='https://training.zuri.team/'>

        <button>Zuri Team</button>
        </a>
      </div>

      <div>
      <a href='http://books.zuri.team/'>
        <button>Zuri Books</button>
        </a>
      </div>

      <div>
      <a href='https://books.zuri.team/'>
        <button>Python Books</button>
        </a>
      </div>

      <div>
      <a href='https://background.zuri.team/'>
        <button>Background Check for Coders</button>
        </a>
      </div>

      <div>
      <a href='https://books.zuri.team/design-rules'>
        <button>Design books</button>
        </a>
      </div>
      </div>
      <div className='social-media'>
        <div>
          <i data-feather='slack'></i>
          <i data-feather='twitter'></i>
          <img src={slack} alt='slack' id='slack-git' />
          <h4 id='slack'>efoneli</h4>
        </div>
        <div>
          <img src={git} alt='git' id='slack-git' />
        </div>
      </div>
      <div className='footer'>
        <div>
          <img src={zuri} alt='Zuri' />
        </div>
        <div>
          <img src={hng} alt='Hng' />
        </div>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  );
}

export default App;
