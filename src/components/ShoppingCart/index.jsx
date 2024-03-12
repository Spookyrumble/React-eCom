import * as S from "./index.styles";
import useStore from "../../hooks/useStore";
import { IoTrashBinOutline } from "react-icons/io5";

const ShoppingCart = () => {
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeFromCart);

  return (
    <S.ShoppingCart>
      <h1>Shopping Cart</h1>
      <S.CartContainer>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((item) => (
          <S.CartItem key={item.id}>
            <div>
              <S.CartThumbnail src={item.image.url} alt={item.image.alt} />
            </div>
            <div>
              <h3>{item.title}</h3>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div>
              <p>Quantity: {item.quantity}</p>
            </div>
            <S.TrashCan>
              <IoTrashBinOutline
                size={20}
                onClick={() => removeItem(item.id)}
              />
            </S.TrashCan>
          </S.CartItem>
        ))}
        <button>Proceed to Checkout</button>
      </S.CartContainer>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
