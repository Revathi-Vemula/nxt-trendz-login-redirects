import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </>
  )
}

export default Cart
