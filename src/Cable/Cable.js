import React from "react";
import styled from "styled-components";
import { cables } from "../Data/CableData";
import { Cable, CableGrid, CableLabel } from "./CableGrid";
import { formatPrice } from "../Data/CableData";

const MenuStyled = styled.div`
  // height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function CableItem() {
  return (
    <MenuStyled>
      <>
        <h1> Kies kabel </h1>
        <CableGrid>
          {cables.map((cable) => (
            <Cable onClick={() => console.log("klik op de kabel")}>
              <CableLabel>
                <div>{cable.typenummer}</div>
                <div>{cable.merk}</div>
                <div>{formatPrice(cable.inkoopprijs)}</div>
              </CableLabel>
            </Cable>
          ))}
        </CableGrid>
      </>
    </MenuStyled>
  );
}
