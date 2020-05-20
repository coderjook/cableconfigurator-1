import React from "react";
import styled from "styled-components";
import { tules } from "../Data/TuleGroepData";
// import { useChoice } from "../Hooks/useChoice";

function Tules(props) {
  // const tuleRadio = useChoice();
  return (
    <div>
      <h3>kies de kleur van de tule:</h3>
      {tules.map((tule) =>
        tule.tulegroep === `${props.tulegroep}` ? (
          <>
            <div>
              <input
                type="radio"
                id={tule.artikelnummer}
                name={tule.typenummer}
                value={tule.typenummer}
                checked={props.tuleOrder === tule.typenummer}
                onChange={(e) => props.onChange(e.target.value)}
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
