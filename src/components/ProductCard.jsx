import { Link } from "react-router-dom";

function ProductCard({title, description, price, _id}) {

  return (
    <div>
      <Link to={`/products/${_id}`}>
        <h3>{title}</h3>
        <h3>Description: {description}</h3>
        <h3>Price: {price} €</h3>
      </Link>
    </div>
  );
}

export default ProductCard;
