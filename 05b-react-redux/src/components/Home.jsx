
// 9. Import "useSelector", use it as mentioned below:
import { useSelector } from 'react-redux';
// 12. Import "useDispatch", use it as mentioned below:
import { useDispatch } from 'react-redux';

// 13. Import "SOAP_SELL and SOAP_BUY", use it as mentioned below:
// import { SOAP_SELL, SOAP_BUY } from "../../store/actions/shopActions";
import { SOAP_SELL, SOAP_BUY } from "../store/actions/shopActions";

const Home = () => {
  // 9.a. useSelector usage
  const soap = useSelector((state) => state.soap);

  // 12.a. useDispatch usage
  const dispatch = useDispatch();

  // 11. Create a "sellHandler" function and point it in the "Sell" button
  const sellHandler = () => {
    // 12.b. Use "dispatch" variable
    dispatch({ type: SOAP_SELL });
  };

  const buyHandler = () => {
    dispatch({ type: SOAP_BUY, payload: 10 });
  };
  
  return (
    <div>
      <h1>05b | React-Redux</h1>
      {/* 9.b. Use "soap" variable */}
      {soap}

      {/* 10. Create a <button> in a new <div> */}
      <div>
        <button onClick={sellHandler}>Sell</button> &nbsp;
        {/* 14. Create another button "Buy" and "buyHandler" function, point it in this button (as mentioned at S.No.11). */}
        <button onClick={buyHandler}>Buy</button>
      </div>

    </div>
  );
};

export default Home;
