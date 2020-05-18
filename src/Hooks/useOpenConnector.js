import { useState } from "react";

export function useOpenConnector() {
  const [openConnector, setOpenConnector] = useState();

  return { openConnector, setOpenConnector };
}
