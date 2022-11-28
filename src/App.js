import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [showWindowsize, setshowWindowsize] = useState(true);
  return (
    <div className="App">
      <button onClick={(e) => setshowWindowsize(!showWindowsize)}>
        toggle
      </button>

      {showWindowsize && <WindowSizeDisplayer />}
    </div>
  );
}

const WindowSizeDisplayer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resizeHamdler = () => {
    console.log("event is running....");
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHamdler);
    // return () => {
    // console.log("on mount");
    // window.removeEventListener("resize", resizeHamdler, true);
    // };
  }, []);
  return <div>{windowWidth}</div>;
};
