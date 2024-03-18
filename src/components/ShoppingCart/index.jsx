import * as S from "./index.styles";
import useStore from "../../hooks/useStore";
import { IoTrashBinOutline } from "react-icons/io5";

const ShoppingCart = () => {
  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeFromCart);

  const subtotal = cart.reduce(
    (acc, item) => acc + (item.discountedPrice || item.price) * item.quantity,
    0
  );
  const totalDiscount = cart.reduce((acc, item) => {
    const originalTotal = item.price * item.quantity;
    const discountedTotal = item.discountedPrice
      ? item.discountedPrice * item.quantity
      : originalTotal;
    return acc + (originalTotal - discountedTotal);
  }, 0);

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (!discountedPrice) return "";
    const percentage =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    if (percentage > 0) {
      return ` (${percentage.toFixed(0)}% off)`;
    }
    return "";
  };

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
              {item.discountedPrice ? (
                <p>
                  $ {item.discountedPrice}
                  {calculateDiscountPercentage(
                    item.price,
                    item.discountedPrice
                  )}
                </p>
              ) : (
                <p>$ {item.price}</p>
              )}
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
        <S.Discount>Total Discount: $ {totalDiscount.toFixed(2)}</S.Discount>
        <S.SubTotal>Subtotal: $ {subtotal.toFixed(2)}</S.SubTotal>
        <button>Proceed to Checkout</button>
      </S.CartContainer>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
