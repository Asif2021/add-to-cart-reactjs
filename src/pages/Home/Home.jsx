import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const Home = () => {

  return (
    <>
        <div className='container-fluid home'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/1.jpg" className="d-block w-100 vh-100" alt="img" />
          </div>
          <div className="carousel-item">
            <img src="/images/2.jpg" className="d-block w-100 vh-100" alt="img" />
          </div>
          <div className="carousel-item">
            <img src="/images/3.jpg" className="d-block w-100 vh-100" alt="img" />
          </div>
         </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className='footer_Div'>
    <Footer/>
    </div>
    </>

  )
}

export default Home