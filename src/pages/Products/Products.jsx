import { useContext, useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios';
import { CartContext } from '../../Context/Context';
import { RotatingLines } from 'react-loader-spinner';


const ProductPage = () => {
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data)
    setLoading(false);
    console.log(data)
  }
  const Globalstate = useContext(CartContext);
  const dispatch = Globalstate.dispatch;

  useEffect(() => {
   fetchData();
  }, [])


  return (
    <div className="container">
     <div className="row">
        {loading ? (
          <div className="spinner">
            <RotatingLines />
          </div>
        ) : (
          data.map((item) => {
            item.quantity = 1;
            return (
              <div key={item.id} className="col">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <a onClick={() => dispatch({ type: "ADD", payload: item })} className="btn btn-primary mt-auto">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductPage