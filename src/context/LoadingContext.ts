import { createContext } from "react";

export default createContext({
  loading: true,
  setLoading: (l: boolean) => {},
});
