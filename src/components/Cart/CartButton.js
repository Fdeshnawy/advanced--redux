import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQauantity = useSelector(state=>state.cart.totalQuanntity) ;

  const buttonCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={buttonCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQauantity}</span>
    </button>
  );
};

export default CartButton;
