import React from "react";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { CableItem } from "./Cable/Cable";
import { ConnectorItemA } from "./Connector/ConnectorA";
import { ConnectorItemB } from "./Connector/ConnectorB";
import { TuleItem } from "./Tule/Tule";
import { Menu } from "./Menu/Menu";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrders } from "./Hooks/useOrders";
import { useTitle } from "./Hooks/useTitle";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders });
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} {...openFood} />
      <Banner />
      <CableItem />
      <ConnectorItemA />
      <ConnectorItemB />
      <TuleItem />
      {/* <Menu {...openFood} /> */}
    </>
  );
}

export default App;
