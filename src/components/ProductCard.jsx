import { Link } from "react-router-dom";

function ProductCard({title}) {
  return (
    <div className="ProductCard">
      <Link to={`/product/${_id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default ProductCard;
