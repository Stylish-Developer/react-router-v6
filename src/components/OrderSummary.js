// -- order summary component
import { useNavigate } from "react-router-dom";

// -- order-summary component
const OrderSummary = () => {
  // -- useNavigate()
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate(-1);
  };
  return (
    <>
      <h3>Your Order Confirmed!</h3>
      <button onClick={handleBackNavigate}>go back</button>
    </>
  );
};

export default OrderSummary;
