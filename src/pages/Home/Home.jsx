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
              <img src="/images/1.jpg" className="d-block w-100" alt="img" />
            </div>
            <div className="carousel-item">
              <img src="/images/2.jpg" className="d-block w-100" alt="img" />
            </div>
            <div className="carousel-item">
              <img src="/images/3.jpg" className="d-block w-100" alt="img" />
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
      <section className='m-5'>
        <div className="container">
          <h1 className='text-uppercase display-2 fw-bold m-5'>Team</h1>

          <div className="row">
            <div className="col-sm">
              <img className='home_image' src="/images/r.jpg" alt="image" />
              <h1 className='text-uppercase mt-5'>coo</h1>
              <p>This Man is inspiration to us all. His hard work and dedication are truly admirable. He has exceeded all expectations with your performance</p>
            </div>

            <div className="col-sm">
              <img className='home_image' src="/images/as.jpg" alt="image" />
              <h1 className='text-uppercase mt-5'>Programer</h1>
              <p>This man has a great ability to stay calm and composed. He has a great ability to take constructive criticism and has a great ability to stay positive and motivated. </p>
            </div>

            <div className="col-sm">
              <img className='home_image' src="/images/s.jpg" alt="image" />
              <h1 className='text-uppercase mt-5'>ceo</h1>
              <p>This man has unique talent, and it’s a pleasure to witness it in action. He is a true problem-solver. He has a great work ethic and always go above and beyond. </p>
            </div>

          </div>
        </div>
      </section>
      <div className='footer_Div'>
        <Footer />
      </div>
    </>

  )
}

export default Home