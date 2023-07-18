import { useContext } from 'react'
import { CartContext } from '../../Context/Context';
import './Cart.css'

const Cart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  

  const total = state.reduce((total, item) => {
    return (total + item.price * item.quantity)
  },0)
  
  return (
    <>
        <div className='cart'>
     {state.length === 0 ? <div className='empty_cart bg-dark text-white'><h1>Your Cart is empty</h1></div> : state.map((item, index) => {
      return <div className='cartData' key={index}>
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <p>{item.quantity}</p>
        <p>{item.quantity*item.price}</p>
        <div className="quantity">
          
          <button className='btn btn-outline-dark fw-bolder' onClick={()=>{
            if(item.quantity > 1){
              dispatch({type:"DECREASE", payload:item})
            } else {
              dispatch({type:"REMOVE", payload:item}) 
            }
          }}>-</button>

          <p>{item.quantity}</p>

          <button  className='btn btn-outline-dark fw-bolder' onClick={() => dispatch({type:"INCREASE", payload:item})}>+</button>
        </div>
        <h2 onClick={()=>dispatch({type:"REMOVE", payload:item})}><i class="fa fa-trash " aria-hidden="true"></i></h2>
      </div>
     })}
     {
       state.length > 0 && <div className='total'> <h2>{total}</h2> </div>
      }
    </div>
      </>
  )
}

export default Cart