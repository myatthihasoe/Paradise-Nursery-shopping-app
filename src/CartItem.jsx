import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from './CartSlice.jsx'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.imageAlt} />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)} each</p>
        <button
          type="button"
          className="remove-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
        <button
          type="button"
          aria-label={`Decrease ${item.name} quantity`}
          disabled={item.quantity <= 1}
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
          }
        >
          −
        </button>
        <span>{item.quantity}</span>
        <button
          type="button"
          aria-label={`Increase ${item.name} quantity`}
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
          }
        >
          +
        </button>
      </div>
      <strong className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </strong>
    </article>
  )
}

export default CartItem
