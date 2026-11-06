import { useDispatch } from 'react-redux'
import { addToCart } from './CartSlice.jsx'

const products = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    category: 'The statement maker',
    price: 32,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Monstera plant with broad green leaves',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'The easy-going one',
    price: 24,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b0d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Tall green snake plant',
  },
  {
    id: 'pilea',
    name: 'Pilea Peperomioides',
    category: 'A little round of joy',
    price: 28,
    image: 'https://images.unsplash.com/photo-1597055181300-b9e21c7f997d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Pilea plant in a ceramic pot',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'A breath of calm',
    price: 30,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Peace lily with lush green leaves',
  },
]

function ProductList() {
  const dispatch = useDispatch()

  return (
    <section className="products-section" id="plants">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Meet your new roommates</p>
          <h2>Plants for every kind of home</h2>
        </div>
        <p>Picked for happy homes and thriving leaves.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.imageAlt} loading="lazy" />
            </div>
            <div className="product-details">
              <div>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
              </div>
              <div className="product-buy-row">
                <strong>${product.price.toFixed(2)}</strong>
                <button
                  type="button"
                  className="add-button"
                  onClick={() => dispatch(addToCart(product))}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to cart <span aria-hidden="true">+</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductList
