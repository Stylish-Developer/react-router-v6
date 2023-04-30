import { useNavigate } from "react-router-dom";

// -- Home page component
const Home = () => {
  // -- programmatically navigate
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('order-summary');
  };

  return (
    <>
      <p>Home Page</p>
      <button onClick={handleNavigate}>place your order</button>
    </>
  );
};

export default Home;
