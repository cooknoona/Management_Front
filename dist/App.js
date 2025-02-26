import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const App = () => {
    useEffect(() => {
        if (window.electron) {
            window.electron.on("message", (data) => {
                console.log("Message from Electron:", data);
            });
        }
    }, []);
    return (_jsx("div", { children: _jsx("h1", { children: "Hello, React + Electron!" }) }));
};
export default App;
