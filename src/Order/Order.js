import React from "react";
import styled from "styled-components";

import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../CableDialog/CableDialog";

import { formatPrice } from "../Data/CableData";
import { getPrice } from "../CableDialog/CableDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #F58020;
    }
  `
      : `
    pointer-events: none; 
  `}
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export function Order({ setOpenCable, orders, setOrders, setOpenConnector }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <>
      <OrderStyled>
        {orders.length === 0 ? (
          <OrderContent>geen assemblie geconfigureerd</OrderContent>
        ) : (
          <OrderContent>
            {" "}
            <OrderContainer>Jouw assemblie:</OrderContainer> {""}
            {orders.map((order, index) => (
              <OrderContainer editable>
                <OrderItem
                  onClick={() => {
                    setOpenCable({ ...order, index });
                  }}
                >
                  <div>{order.quantity}</div>
                  <div>{order.typenummer}</div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem(index);
                    }}
                  >
                    X
                  </div>
                  <div> {formatPrice(getPrice(order))}</div>
                </OrderItem>
                <DetailItem>
                  {order.toppings
                    .filter((t) => t.checked)
                    .map((topping) => topping.name)
                    .join(", ")}
                </DetailItem>
                {order.choice && <DetailItem>{order.choice}</DetailItem>}
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div />
                <div>Sub-total</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Tax</div>
                <div>{formatPrice(tax)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Total</div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
        <DialogFooter>
          <ConfirmButton>Vraag offerte aan</ConfirmButton>
        </DialogFooter>
      </OrderStyled>
    </>
  );
}
