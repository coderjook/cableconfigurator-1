import React from "react";
import styled from "styled-components";
import { connectors } from "../Data/ConnectorData";
import { Product, ProductGrid, ProductLabel } from "./ProductGrid";
import { formatPrice } from "../Data/ConnectorData";

const ProductStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

export function Connectors({ setOpenConnector, orders }) {
  console.log("orders:connector ", orders);
  return (
    <ProductStyled>
      {/* {Object.entries(connectors).map(([sectionName, connectors]) => (
        <>
          <h3> {sectionName} </h3> */}
      order kabel {orders.artikelnummer}
      <ProductGrid>
        {connectors.map((connector) => (
          <>
            <Product
              img={connector.img}
              onClick={() => {
                setOpenConnector(connector);
              }}
            >
              <ProductLabel>
                <div>{connector.typenummer}</div>
                <div>{formatPrice(connector.inkoopprijs)}</div>
              </ProductLabel>
            </Product>
          </>
        ))}
      </ProductGrid>
      {/* </> */}
      // ))}
    </ProductStyled>
  );
}
