import { createContext, Dispatch, SetStateAction } from "react";

type TamplateContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

const TamplateContext = createContext<TamplateContextType>({
  title: "",
  setTitle: () => {},
});

export default TamplateContext;
