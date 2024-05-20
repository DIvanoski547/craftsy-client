import { Link } from "react-router-dom";

function ProductCard({title, description, price, _id}) {

  return (
    <div>
      <Link to={`/product/${_id}`}>
        <h3>{title}</h3>
        <h3>{description}</h3>
        <h3>{price} €</h3>
      </Link>
    </div>
  );
}

export default ProductCard;
