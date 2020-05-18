import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";

// import cable
import { useOpenCable } from "./Hooks/useOpenCable";
import { CableDialog } from "./CableDialog/CableDialog";
import { Cables } from "./Products/Cables";

// import connector
import { useOpenConnector } from "./Hooks/useOpenConnector";
import { ConnectorDialog } from "./ConnectorDialog/ConnectorDialog";
import { Connectors } from "./Products/Connectors";

// import styles
import { GlobalStyle } from "./Styles/GlobalStyle";
import { useTitle } from "./Hooks/useTitle";
// import Dialogs

// import orders
import { Order } from "./Order/Order";
import { useOrders } from "./Hooks/useOrders";

// ***** functie App *****

function App() {
  const openCable = useOpenCable();
  const openConnector = useOpenConnector();
  const orders = useOrders();

  // useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <CableDialog {...openCable} {...orders} />
      <ConnectorDialog {...openConnector} {...orders} />
      <Navbar />
      <Order {...orders} {...openCable} {...openConnector} />
      <Banner />
      <Cables {...openCable} />
      <Connectors {...openConnector} />
    </>
  );
}

export default App;
