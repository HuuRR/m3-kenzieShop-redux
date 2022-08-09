import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductCart from "../ProductCart";
import "./styles.css";

function Cart() {
  const cart = useSelector(({ cart }) => cart);
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (!cart.length) {
    return (
      <div>
        <p>seu carrinho está vazio</p>
        <button onClick={() => handleNavigation("/")}>Acessar Loja</button>
      </div>
    );
  } else {
    return (
      <div className="container--cart--cart">
        <div className="intro--cart">
          <h3 className="intro--h3"> SUAS COMPRAS</h3>
        </div>
        <ul className="container--itens">
          {cart.map((product) => {
            return <ProductCart key={product.id} product={product} />;
          })}
        </ul>
        <div className="container--preco">
          <p>Total:</p>
          <p>
            R$
            {cart.reduce((acc, prod) => {
              return prod.price * prod.qtde + acc;
            }, 0)}
            ,00
          </p>
          <button className="finally">Finalizar Compra</button>
        </div>
      </div>
    );
  }
}

export default Cart;
