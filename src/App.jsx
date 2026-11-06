import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function getPage() {
  const hash = window.location.hash;

  if (hash === "#/plants") return "plants";
  if (hash === "#/cart") return "cart";
  return "home";
}

function Header({ page }) {
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="site-header">
      <a className="brand" href="#/">
        🌿 Paradise Nursery
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#/" aria-current={page === "home" ? "page" : undefined}>
          Home
        </a>
        <a
          href="#/plants"
          aria-current={page === "plants" ? "page" : undefined}
        >
          Plants
        </a>
        <a
          className="cart-link"
          href="#/cart"
          aria-current={page === "cart" ? "page" : undefined}
        >
          🛒 Cart <span className="cart-badge">{totalQuantity}</span>
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const updatePage = () => {
      setPage(getPage());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  if (page === "home") {
    return (
      <main className="landing-page">
        <div className="hero-content">
          <span className="eyebrow">Grow something wonderful</span>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful houseplants for every room, every style, and
            every level of plant-care experience.
          </p>
          <a className="button" href="#/plants">
            Get Started →
          </a>
        </div>

        <AboutUs />
      </main>
    );
  }

  return (
    <>
      <Header page={page} />
      {page === "plants" ? <ProductList /> : <CartItem />}
    </>
  );
}