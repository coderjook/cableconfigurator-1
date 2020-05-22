import React, { useState } from "react";

export function useAssemblie() {
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
    artnrCable,
    lengthCable,
    artnrConnA,
    installConnA,
    artnrConnB,
    installConnB,
    artnrHaspel,
    transKrimp,
    lengthKrimp,
    transKrimpkous,
    createAssemblieCable,
    updateAssemblieConnA,
    updateAssemblieConnB,
    updateAssemblieHaspel,
    updateAssemblieAfwerking
  );
}

export default useAssemblie;
