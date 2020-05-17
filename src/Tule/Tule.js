import React from "react";
import styled from "styled-components";
import { tules } from "../Data/TuleGroepData";
import { Tule, TuleGrid, TuleLabel } from "./TuleGrid";
import { formatPrice } from "../Data/TuleGroepData";

const MenuStyled = styled.div`
  // height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function TuleItem() {
  return (
    <MenuStyled>
      <>
        <h1> Kies kabel </h1>
        <TuleGrid>
          {tules.map((tule) => (
            <Tule onClick={() => console.log("klik op de kabel")}>
              <TuleLabel>
                <div>{tule.typenummer}</div>
              </TuleLabel>
              <div>{tule.merk}</div>
              <div>{formatPrice(tule.assemblagekosten)}</div>
            </Tule>
          ))}
        </TuleGrid>
      </>
    </MenuStyled>
  );
}
