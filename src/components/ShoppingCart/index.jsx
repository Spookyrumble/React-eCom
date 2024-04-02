import * as S from "./index.styles";
import useStore from "../../hooks/useStore";
import { GrSubtractCircle } from "react-icons/gr";
import DialogSuccess from "../dialogs/Success";
import { useState } from "react";
import { ReturnButton } from "../Global/index.styles";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GrAddCircle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [isDialogHidden, setDialogHidden] = useState(true);

  const toggleDialog = (shouldShow) => {
    setDialogHidden(!shouldShow);
  };

  const cart = useStore((state) => state.cart);
  const removeItem = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);

  const handleCheckout = () => {
    clearCart();
    toggleDialog(true);
  };

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

  const navigate = useNavigate();

  return (
    <>
      <DialogSuccess
        hidden={isDialogHidden}
        show={toggleDialog}
        message="Thank you for your order!"
      />
      <S.ShoppingCart>
        <h1>Shopping Cart</h1>
        <S.CartContainer>
          {cart.length === 0 && <p>Your cart is empty</p>}
          {cart.map((item) => (
            <S.CartItem key={item.id}>
              <S.CartThumbnail src={item.image.url} alt={item.image.alt} />
              <div>
                <h3>{item.title}</h3>
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
              </div>
              <S.QuantityContainer>
                <S.TrashCan>
                  <GrSubtractCircle
                    size={24}
                    onClick={() => removeItem(item.id)}
                  />
                </S.TrashCan>
                <p>{item.quantity} </p>
                <S.AddBtn>
                  <GrAddCircle
                    size={24}
                    onClick={() => increaseQuantity(item.id)}
                  />
                </S.AddBtn>
              </S.QuantityContainer>
            </S.CartItem>
          ))}
          <S.Discount hidden={cart.length === 0}>
            Total Discount: $ {totalDiscount.toFixed(2)}
          </S.Discount>
          <S.SubTotal hidden={cart.length === 0}>
            Subtotal: $ {subtotal.toFixed(2)}
          </S.SubTotal>
          <button onClick={handleCheckout} hidden={cart.length === 0}>
            {cart.length === 0 ? "No items in cart" : "Proceed to Checkout"}
          </button>
          <S.ClearCart onClick={clearCart} hidden={cart.length === 0}>
            {" "}
            Clear Cart
          </S.ClearCart>
        </S.CartContainer>
        <ReturnButton>
          <IoArrowBackCircleOutline size={56} onClick={() => navigate(`/`)} />
        </ReturnButton>
      </S.ShoppingCart>
    </>
  );
};

export default ShoppingCart;
