import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { name, desc, price, img } = product;

  return (
    <li className="cart--prod--home">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <span>R$ {price},00</span>
      <button onClick={() => dispatch(addToCartThunk(product))}>
        Adicionar
      </button>
    </li>
  );
};

export default Product;
