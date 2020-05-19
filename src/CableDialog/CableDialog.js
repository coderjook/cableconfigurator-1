import React from "react";
import styled from "styled-components";
import { ProductLabel } from "../Products/ProductGrid";
import { romalOranje } from "../Styles/colors";
import { title } from "../Styles/title";
import { formatPrice } from "../Data/FoodData";
import { LengthInput } from "./LengthInput";
import { useLength } from "../Hooks/useLength";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(ProductLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export const ConfirmButton = styled(title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${romalOranje};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
`;

export function getPrice(order) {
  return order.length * order.inkoopprijs;
}

function CableDialogContainer({
  openCable,
  setOpenCable,
  openFood,
  setOpenFood,
  setOrders,
  orders,
}) {
  const length = useLength(openCable && openCable.length);

  const isEditing = openCable.index > -1;

  function close() {
    setOpenCable();
  }

  const order = {
    ...openCable,
    quantity: null,
    length: length.value,
    toppings: null,
    choice: null,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openCable.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openCable.img}>
          <DialogBannerName> {openCable.typenummer} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <LengthInput length={length} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={isEditing ? editOrder : addToOrder}>
            {isEditing ? "wijzig kabel" : "selecteer de kabel"}{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function CableDialog(props) {
  if (!props.openCable) return null;
  return <CableDialogContainer {...props} />;
}
