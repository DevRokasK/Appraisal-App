import React from "react";
import "./styles/App.css";

import Box from "@mui/material/Box";

import { ThanksTag } from "./components/ThanksTag";
import { ThanksForm } from "./components/ThanksForm";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Box className="thanksTitle">
          <img
            src="/companyLogo.png"
            alt="Company Logo"
            style={{ height: "64px" }}
          />
        </Box>
        <Box className="thanksTitle">
          <h1>Pasakyk #AČIŪ už</h1>
          <ThanksTag />
        </Box>
        <ThanksForm />
      </Box>
    </div>
  );
}

export default App;
