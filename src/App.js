import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { sendCartRequeste, fetchDataCart } from "./store/cart-action";
import Notification from "./components/UI/Notification";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isShowApp);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const changed = useSelector((state) => state.cart.changed);
  useEffect(() => {
    if (!changed) {
      dispatch(fetchDataCart());
      console.log('loading');
    }
  }, [changed,dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log('sendRequeste');
    dispatch(sendCartRequeste(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          massage={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
