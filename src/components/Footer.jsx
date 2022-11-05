import logo from '../img/logo.jpg';
import zuri from '../img/zuri.jpg';
import hng from '../img/hng.jpg';




const Layout = () => {
  return (
    <div >
    <hr />

  <div className='footer lg:w-1/2 md:w-full sm:w-full'>
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
  )
};

export default Layout;