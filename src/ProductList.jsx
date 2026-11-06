import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const images = {
  monstera:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80",
  fern:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  palm:
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
  succulent:
    "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80",
  cactus:
    "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80",
  leaves:
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&q=80",
};

const categories = [
  {
    name: "Easy-Care Favorites",
    plants: [
      { id: "snake-plant", name: "Snake Plant", price: 18, image: images.leaves },
      { id: "zz-plant", name: "ZZ Plant", price: 24, image: images.monstera },
      { id: "pothos", name: "Golden Pothos", price: 16, image: images.fern },
      { id: "spider-plant", name: "Spider Plant", price: 15, image: images.palm },
      { id: "aloe-vera", name: "Aloe Vera", price: 14, image: images.succulent },
      { id: "jade-plant", name: "Jade Plant", price: 19, image: images.cactus },
    ],
  },
  {
    name: "Leafy Statement Plants",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 36, image: images.monstera },
      { id: "fiddle-leaf", name: "Fiddle Leaf Fig", price: 42, image: images.leaves },
      { id: "rubber-plant", name: "Rubber Plant", price: 32, image: images.palm },
      { id: "bird-of-paradise", name: "Bird of Paradise", price: 48, image: images.fern },
      { id: "peace-lily", name: "Peace Lily", price: 28, image: images.succulent },
      { id: "philodendron", name: "Heartleaf Philodendron", price: 23, image: images.cactus },
    ],
  },
  {
    name: "Sunny-Spot Collection",
    plants: [
      { id: "barrel-cactus", name: "Golden Barrel Cactus", price: 25, image: images.cactus },
      { id: "echeveria", name: "Echeveria", price: 13, image: images.succulent },
      { id: "string-of-pearls", name: "String of Pearls", price: 21, image: images.leaves },
      { id: "pony-tail", name: "Ponytail Palm", price: 34, image: images.palm },
      { id: "haworthia", name: "Haworthia", price: 17, image: images.fern },
      { id: "desert-rose", name: "Desert Rose", price: 30, image: images.monstera },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <main className="page-container">
      <div className="page-intro">
        <span className="eyebrow">Shop our collection</span>
        <h1>Find your next favorite plant</h1>
        <p>
          Explore easy-care greenery, striking foliage, and plants that love
          a sunny window.
        </p>
      </div>

      {categories.map((category) => (
        <section className="category" key={category.name}>
          <h2>{category.name}</h2>

          <div className="product-grid">
            {category.plants.map((plant) => {
              const isAdded = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />

                  <div className="product-details">
                    <h3>{plant.name}</h3>
                    <p className="price">${plant.price.toFixed(2)}</p>

                    <button
                      type="button"
                      className="add-button"
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? "Added to Cart ✓" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}