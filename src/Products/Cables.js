import React from "react";
import styled from "styled-components";
import { cables } from "../Data/CableData";
import { Product, ProductGrid, ProductLabel } from "./ProductGrid";
import { formatPrice } from "../Data/CableData";

const ProductStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export function Cables({ setOpenCable }) {
  return (
    <ProductStyled>
      {Object.entries(cables).map(([sectionName, cables]) => (
        <>
          <h1> {sectionName} </h1>
          <ProductGrid>
            {cables.map((cable) => (
              <Product
                img={cable.img}
                onClick={() => {
                  setOpenCable(cable);
                }}
              >
                <ProductLabel>
                  <div>{cable.typenummer}</div>
                  <div>{formatPrice(cable.inkoopprijs)}</div>
                </ProductLabel>
              </Product>
            ))}
          </ProductGrid>
        </>
      ))}
    </ProductStyled>
  );
}
