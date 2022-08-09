import { useSelector } from "react-redux";
import Product from "../Product";
import "./styles.css";

const ProductsList = () => {
  const { products } = useSelector((products) => products);
  return (
    <ul className="container--products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductsList;
