import React from "react";
import styled from "styled-components";
import { tules } from "../Data/TuleGroepData";
import { useChoice } from "../Hooks/useChoice";

function Tules({ tulegroep }) {
  const tuleRadio = useChoice();
  return (
    <div>
      {tules.map((tule) =>
        tule.tulegroep === `${tulegroep}` ? (
          <>
            <div>
              <input
                type="radio"
                id={tule.artikelnummer}
                name={tule.typenummer}
                value={tule.typenummer}
                checked={tuleRadio.value === `${tule.typenummer}`}
                onChange={tuleRadio.onChange}
              />
              <label for={tule.typenummer}>{tule.typenummer}</label>
            </div>
            {/* <div> {tule.typenummer} </div>
            <div> {tule.tulegroep} </div> */}
          </>
        ) : null
      )}
    </div>
  );
}

export default Tules;
