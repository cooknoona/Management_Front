import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.electron) {
      window.electron.on("message", (data: string) => {
        console.log("Message from Electron:", data);
      });
    }
  }, []);

  return (
    <div>
      <h1>Hello, React + Electron!</h1>
    </div>
  );
};

export default App;
