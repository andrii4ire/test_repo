import { useEffect, useState } from "react";
import Button from "../../components/Button";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [isClear, setClear] = useState(0);

  const obj = {
    3: "hello",
    5: "here",
  };

  useEffect(() => {
    if (obj[counter]) {
      setClear(true);
    } else {
      setClear(false);
    }
    console.log("counter now is ", counter);
  }, [counter, obj]);

  return (
    <div id="test">
      <Button />
      <div
        onClick={() => {
          console.log(counter);
          //    counter+= 1;
          setCounter(counter + 1);
        }}
      >
        Click me
      </div>
      {counter}
      {isClear ? <div>Clear</div> : null}
    </div>
  );
};

export default Home;
