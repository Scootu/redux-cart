import { uiSliceAction } from "./ui-slice";
import { cartActions } from "./cart-slice";
export const fetchDataCart = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(
        uiSliceAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      
      const responce = await fetch("https:google.com/api");
      if (!responce.ok) {
        throw new Error("Somthing was rong !, loading data failed");
      }
      const data = await responce.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceItems(cartData));
    } catch (err) {
      dispatch(
        uiSliceAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
export const sendCartRequeste = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const fetchData = async () => {
      const responce = await fetch("https://google.com/api", {
        method: "PUL",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!responce.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await fetchData();
      dispatch(
        uiSliceAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiSliceAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
