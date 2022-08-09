import { useDispatch } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import "./styles.css";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, img, qtde } = product;

  return (
    <li className="container--prod--cart">
      <img src={img} alt={name} />
      <div className="name--qtde">
        <h3>{name}</h3>
        <span>{qtde} und</span>
      </div>
      <span className="cart--price">R$ {price * qtde},00</span>
      <button onClick={() => dispatch(removeFromCartThunk(id))}>🗑️</button>
    </li>
  );
};

export default ProductCart;
