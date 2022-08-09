import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyExists = list.find((produto) => produto.id === product.id);

    if (alreadyExists) {
      list.map((product) => {
        if (product.id === alreadyExists.id) {
          return (product.qtde += 1);
        }
        return product;
      });
    } else {
      list.push({ ...product, qtde: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(list));
  };
};

export const removeFromCartThunk = (id) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();

    const list = cart.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(removeFromCart(list));
  };
};
