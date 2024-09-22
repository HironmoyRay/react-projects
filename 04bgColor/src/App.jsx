import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div
        className="h-screen color flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-gray-200 rounded-full p-4 fixed bottom-12 flex items-center justify-center gap-4">
          <div className="bg-white px-4 py-2 rounded-full">
            <button
              onClick={() => setColor("red")}
              className="outline-none rounded-full text-white px-4 py-2"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
          </div>
          <div className="bg-white px-4 py-2 rounded-full">
            <button
              onClick={() => setColor("green")}
              className="outline-none rounded-full text-white px-4 py-2"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
          <div className="bg-white px-4 py-2 rounded-full">
            <button
              onClick={() => setColor("blue")}
              className="outline-none rounded-full text-white px-4 py-2"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
          <div className="bg-white px-4 py-2 rounded-full">
            <button
              onClick={() => setColor("gray")}
              className="outline-none rounded-full text-white px-4 py-2"
              style={{ backgroundColor: "gray" }}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
