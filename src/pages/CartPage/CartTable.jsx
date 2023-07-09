import React from 'react'

const CartTable = ({image, title, qty, price, remove}) => {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Images</th>
      <th scope="col">Title</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
      <th scope="col">IncDec</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{image}</th>
      <td>{title}</td>
      <td>{qty}</td>
      <td>{price}</td>
      <td>{remove}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default CartTable