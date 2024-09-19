import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useGlobal() {
  const state = useContext(GlobalContext);

  return state;
}
