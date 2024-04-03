import { FaShoppingCart } from "react-icons/fa";
import * as S from "./index.styles";
import useStore from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const cartItems = useStore((state) => state.cart);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(`/shopping-cart`);
  };

  return (
    <S.CartContainer onClick={handleCartClick}>
      <FaShoppingCart size={30} />
      {totalQuantity > 0 && <S.CartCount>{totalQuantity}</S.CartCount>}
    </S.CartContainer>
  );
};

export default CartIcon;
