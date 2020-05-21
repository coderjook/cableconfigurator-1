import React, { useState } from "react";

function Assemblie() {
  const defaultArtnr = 999999;
  const [artnrCable, setArtnrCable] = useState(defaultArtnr);
  const [lengthCable, setLengthCable] = useState(1);
  const [artnrConnA, setArtnrConnA] = useState(defaultArtnr);
  const [artnrConnB, setArtnrConnB] = useState(defaultArtnr);
  const [installConnA, setInstallConnA] = useState(defaultArtnr);
  const [installConnB, setInstallConnB] = useState(defaultArtnr);
  const [artnrHaspel, setArtnrHaspel] = useState(defaultArtnr);
  const [transKrimp, setTransKrimp] = useState("geen afwerking");
  const [lengthKrimp, setLengthKrimp] = useState(2);

  const transKrimpkous = 10593;

  const assemblie = {
    assemblieID: 1234,
    artnr_kabel: artnrCable,
    lengte_kabel: lengthCable,
    artnr_connector_a: artnrConnA,
    artnr_afwerking_a: installConnA,
    artnr_connector_b: artnrConnB,
    artnr_afwerking_b: installConnB,
    artnr_haspel: artnrHaspel,
    trans_krimp: transKrimp,
    lengte_trans_krimp: lengthKrimp,
    artnr_trans_krimp: transKrimpkous,
  };

  const createAssemblieCable = () => {
    setArtnrCable(38975);
    setLengthCable(897374);
  };

  const updateAssemblieConnA = () => {
    setArtnrConnA(456347);
    setInstallConnA(56856795689);
  };

  const updateAssemblieConnB = () => {
    setArtnrConnB(456347);
    setInstallConnB(56856795689);
  };

  const updateAssemblieHaspel = () => {
    setArtnrHaspel(93475);
  };

  const updateAssemblieAfwerking = () => {
    setTransKrimp("beide kanten");
    setLengthKrimp(937462);
  };

  return (
    <>
      <div>Assemblie</div>
      <div>assemblieID: {assemblie.assemblieID} </div>
      <div>artnr_kabel :{assemblie.artnr_kabel}</div>
      <div>lengte_kabel : {assemblie.lengte_kabel} </div>
      <div>artnr_connector_a: {assemblie.artnr_connector_a} </div>
      <div>artnr_afwerking_a: {assemblie.artnr_afwerking_a} </div>
      <div>artnr_connector_b: {assemblie.artnr_connector_b} </div>
      <div>artnr_afwerking_b: {assemblie.artnr_afwerking_b} </div>
      <div>artnr_haspel: {assemblie.artnr_haspel} </div>
      <div>trans_krimp: {assemblie.trans_krimp} </div>
      <div>lengte_trans_krimp: {assemblie.lengte_trans_krimp} </div>
      <div>artnr_trans_krimp: {assemblie.artnr_trans_krimp} </div>
      <button onClick={createAssemblieCable}>createAssemblieCable</button>
      <button onClick={updateAssemblieConnA}>updateAssemblieConnA</button>
      <button onClick={updateAssemblieConnB}>updateAssemblieConnB</button>
      <button onClick={updateAssemblieHaspel}>updateAssemblieHaspel</button>
      <button onClick={updateAssemblieAfwerking}>
        updateAssemblieAfwerking
      </button>
    </>
  );
}

export default Assemblie;
