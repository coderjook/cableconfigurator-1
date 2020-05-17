import React from "react";
import styled from "styled-components";
import { connectors } from "../Data/ConnectorData";
import { Connector, ConnectorGrid, ConnectorLabel } from "./ConnectorGrid";
import { formatPrice } from "../Data/ConnectorData";

const MenuStyled = styled.div`
  // height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function ConnectorItemA() {
  return (
    <MenuStyled>
      <>
        <h1> Kies connector kant A </h1>
        <ConnectorGrid>
          {connectors.map((connector) => (
            <Connector onClick={() => console.log("klik op de kabel")}>
              <ConnectorLabel>
                <div>{connector.typenummer}</div>
                <div>{connector.merk}</div>
                <div>{formatPrice(connector.inkoopprijs)}</div>
              </ConnectorLabel>
            </Connector>
          ))}
        </ConnectorGrid>
      </>
    </MenuStyled>
  );
}
