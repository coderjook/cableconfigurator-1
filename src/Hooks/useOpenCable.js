import { useState } from "react";

export function useOpenCable() {
  const [openCable, setOpenCable] = useState();

  return { openCable, setOpenCable };
}
