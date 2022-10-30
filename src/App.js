import './main.css';
import AnnetteBlack from './img/profileImg.jpg';
import Arrow from './img/_Avatar share button.jpg';
import logo from './img/logo.jpg';
import zuri from './img/zuri.jpg';
import hng from './img/hng.jpg';
import slack from './img/slack.jpg';
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

      <div>
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
