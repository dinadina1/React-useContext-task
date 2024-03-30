import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import CartItem from './CartItem';
import BacktoHome from './BacktoHome';
import CartSummary from './CartSummary';

const Cart = () => {

  const { cartLists } = useContext(DataContext);

  return (
    <>
      <div className="container">
        <BacktoHome />
        <div className='row pt-3 pb-3'>
          <div className="col-lg-8 col-md-12 overflow-y-auto" style={{ height: "100vh" }}>
            <ul className="list-group list-group-numbered cart-list">
              {
                (cartLists.length) ?
                  cartLists.map((product) => <CartItem product={product} key={product.id} />)
                  :
                  <p className='text-center p-5'>Your Cart is Empty...</p>
              }
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <CartSummary />
          </div>

        </div>
      </div>
    </>
  )

}

export default Cart