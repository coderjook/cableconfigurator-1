import React from "react";
import styled from "styled-components";
import { connectors } from "../Data/ConnectorData";
import { Product, ProductGrid, ProductLabel } from "./ProductGrid";
import { formatPrice } from "../Data/ConnectorData";

const ProductStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function Connectors({ setOpenConnector }) {
  return (
    <ProductStyled>
      {Object.entries(connectors).map(([sectionName, connectors]) => (
        <>
          <h1> {sectionName} </h1>
          <ProductGrid>
            {connectors.map((connector) => (
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
            ))}
          </ProductGrid>
        </>
      ))}
    </ProductStyled>
  );
}
