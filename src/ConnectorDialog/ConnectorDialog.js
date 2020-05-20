import React, { useState } from "react";
import styled from "styled-components";
import { ProductLabel } from "../Products/ProductGrid";
import { pizzaRed } from "../Styles/colors";
import { title } from "../Styles/title";
import { formatPrice } from "../Data/ConnectorData";
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../Hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { useInstallation } from "../Hooks/useInstallation";
import { useChoice } from "../Hooks/useChoice";
import { Choices } from "./Choices";
import Tules from "./Tules";

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
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    background-color: grey;
    pointer-events: none;
   `}
`;

const CursorPointer = `cursor: pointer`;

const RadioInput = styled.input`
  ${CursorPointer}
`;

const Label = styled.label`
  ${CursorPointer}
`;

const pricePerTopping = 0.5;
export function getPrice(order) {
  return (
    order.quantity *
    (order.inkoopprijs +
      order.toppings.filter((t) => t.checked).length * pricePerTopping)
  );
}

function hasToppings(connector) {
  return connector.section === "Pizza";
}

function ConnectorDialogContainer({
  openCable,
  setOpenCable,
  openConnector,
  setOpenConnector,
  setOrders,
  orders,
}) {
  const quantity = useQuantity(openConnector && openConnector.quantity);
  const toppings = useToppings(openConnector.toppings);
  const choiceRadio = useChoice(openConnector.choice);
  const installationRadio = useInstallation();
  // const tuleRadio = useChoice();
  const isEditing = openConnector.index > -1;
  const [tuleState, setTuleState] = useState();

  const tuleOrder = tuleState ? `${tuleState}` : null;

  function close() {
    setOpenConnector();
  }

  console.log({ tuleOrder });

  const order = {
    ...openConnector,
    quantity: null,
    toppings: toppings.toppings,
    choice: null,
    installation: installationRadio.value,
    tule: tuleOrder,
  };

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openConnector.index] = order;
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
        <DialogBanner img={openConnector.img}>
          <DialogBannerName>{openConnector.typenummer}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          {/* {openConnector.tulegroep} */}

          {openConnector.choices && (
            <Choices openConnector={openConnector} choiceRadio={choiceRadio} />
          )}
          <h3> Kies de afwerking:</h3>
          <RadioInput
            type="radio"
            id="geen"
            name="geen"
            value="geen"
            checked={installationRadio.value === "geen"}
            onChange={installationRadio.onChange}
          />
          <Label for="geen">geen afwerking</Label>
          <RadioInput
            type="radio"
            id="krimpkous"
            name="krimpkous"
            value="krimpkous"
            checked={installationRadio.value === "krimpkous"}
            onChange={installationRadio.onChange}
          />
          <Label for="krimpkous">zwarte krimpkous</Label>
          <RadioInput
            type="radio"
            id="tule"
            name="tule"
            value="tule"
            checked={installationRadio.value === "tule"}
            onChange={installationRadio.onChange}
          />
          <Label for="tule">tule</Label>

          {installationRadio.value === "tule" ? (
            <>
              <div>tule: {tuleState}</div>
              <Tules
                tulegroep={openConnector.tulegroep}
                onChange={(banaan) => setTuleState(banaan)}
                tuleOrder={tuleState}
              />
            </>
          ) : null}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openConnector.choices && !choiceRadio.value}
          >
            {isEditing ? "update order" : "add to order"}{" "}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function ConnectorDialog(props) {
  if (!props.openConnector) return null;
  return <ConnectorDialogContainer {...props} />;
}
