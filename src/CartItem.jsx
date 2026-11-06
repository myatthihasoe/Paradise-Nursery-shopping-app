import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="page-container">
      <div className="page-intro">
        <span className="eyebrow">Your collection</span>
        <h1>Shopping Cart</h1>
        <p>Review your plants and adjust quantities before checkout.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>There is always room for one more plant.</p>
          <a className="button" href="#/plants">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>

                  <div className="cart-actions">
                    <button
                      type="button"
                      className="quantity-button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>

                    <strong aria-label={`${item.quantity} ${item.name}`}>
                      {item.quantity}
                    </strong>

                    <button
                      type="button"
                      className="quantity-button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      className="delete-button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <p className="line-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Total plants</span>
              <strong>{totalQuantity}</strong>
            </div>

            <div className="summary-line summary-total">
              <span>Total cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className="button"
              onClick={() => window.alert("Coming Soon!")}
            >
              Checkout
            </button>

            <a className="button button-outline" href="#/plants">
              Continue Shopping
            </a>
          </aside>
        </div>
      )}
    </main>
  );
}