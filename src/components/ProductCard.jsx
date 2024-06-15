import { Link } from "react-router-dom";
import { Card } from "antd";

function ProductCard({ title, description, price, category, imageUrl, _id }) {
  return (
    <div>
      <Link to={`/products/${_id}`}>
        <Card
          size="small"
          title={title}
          cover={<img alt="example" src={imageUrl} style={{width: '300px', height: '300px'}}/>}
          style={{
            width: 300,
          }}
        >
          <p>description: {description}</p>
          <p>price: {price} €</p>
          <p>category: {category}</p>
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
