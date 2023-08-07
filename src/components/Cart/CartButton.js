import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiSliceAction } from "../../store/ui-slice";
const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceAction.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
