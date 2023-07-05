"use client";
import { AppProvider } from "context/appContext";
import { ThemeProvider } from "styled-components";

const light = {
  colors: {
    primary: "rgb(44, 177, 188)",
    // secondary: "rgb(44, 177, 188,0.8)",
    secondary: "#87eaf2",
    gray: "rgb(72,101,129)",
  },
  borderRadius: "5px",
  backgroundColor: "rgb(240, 244, 248)",
};

//dark theme
const dark = {
  colors: {
    primary: "darkblue",
  },
};
function App({ children }) {
  return (
    <ThemeProvider theme={light}>
      {/* <AppProvider> */}
      {children}
      {/* </AppProvider> */}
    </ThemeProvider>
  );
}

export default App;
