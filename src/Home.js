import './App.css';
import { Link, } from 'react-router-dom';

function Home() {
  return (
    <div className="home-main">
      <div className="img-main">
        <div className="image-container">
          <img src="/image/branding women.jpg" alt="Woman" className="women" />
          <Link to="/woman" className="btn">Woman</Link>
        </div>
        <div className="image-container">
          <img src="/image/branding model.jpg" alt="Man" className="man" />
          <Link to="/man" className="btn">Man</Link>
        </div>
      </div>
   </div>
  );
}

export default Home;
