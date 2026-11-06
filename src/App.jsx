import { useSelector } from 'react-redux'
import AboutUs from './AboutUs.jsx'
import CartItem from './CartItem.jsx'
import ProductList from './ProductList.jsx'
import './App.css'

function App() {
  const cartItems = useSelector((state) => state.cart.items)
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div className="storefront">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true">✿</span>
          <span>Paradise Nursery</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#plants">Plants</a>
          <a href="#about">Our story</a>
          <a className="cart-link" href="#cart">
            Cart <span className="cart-count">{itemCount}</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">A little more green, every day</p>
            <h1>Make room for <em>nature.</em></h1>
            <p className="hero-description">
              Thoughtfully grown houseplants to bring a breath of fresh air
              into your home.
            </p>
            <a className="button button-dark" href="#plants">Explore plants</a>
          </div>
          <div className="hero-art" role="img" aria-label="Sunlit green plants">
            <span className="hero-sun" />
            <span className="hero-leaf hero-leaf-one" />
            <span className="hero-leaf hero-leaf-two" />
            <span className="hero-leaf hero-leaf-three" />
            <span className="hero-pot" />
          </div>
        </section>

        <ProductList />

        <section className="cart-section" id="cart">
          <div className="section-heading cart-heading">
            <div>
              <p className="eyebrow">Your growing collection</p>
              <h2>Your cart</h2>
            </div>
            <p>{itemCount} {itemCount === 1 ? 'plant' : 'plants'}</p>
          </div>
          {cartItems.length > 0 ? (
            <>
              <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
              </div>
              <div className="cart-summary">
                <span>Subtotal</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>
              <button className="button button-dark checkout-button" type="button">
                Continue to checkout
              </button>
            </>
          ) : (
            <p className="empty-cart">
              Your cart is waiting for its first plant. <a href="#plants">Find your favorite</a>
            </p>
          )}
        </section>

        <AboutUs />
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">✿</span>
          <span>Paradise Nursery</span>
        </a>
        <p>Grown with care. Sent with love.</p>
      </footer>
    </div>
  )
}

export default App
