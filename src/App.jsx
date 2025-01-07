import { useState } from "react";

const App = () => {
  const limit = 3;
  const [clicks, setClicks] = useState(0);
  const [positions, setPositions] = useState([]);

  const handleCircle = (e) => {
    setClicks((prev) => (prev + 1 > limit ? 0 : prev + 1));
    if (clicks < limit) {
      setPositions([...positions.slice(0, clicks), { x: e.pageX, y: e.pageY }]);
    } else {
      setPositions([]);
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black w-screen h-screen relative overflow-hidden cursor-pointer"
      onClick={handleCircle}
    >
      {positions.map((pos, index) => (
        <div
          key={index}
          className="bg-white w-12 h-12 rounded-full shadow-lg border-2 border-blue-500 animate-ping-once"
          style={{
            position: "absolute",
            left: pos.x - 24,
            top: pos.y - 24,
          }}
        ></div>
      ))}
      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        Click anywhere to create circles. 4th click resets!
      </p>
    </div>
  );
};

export default App;
