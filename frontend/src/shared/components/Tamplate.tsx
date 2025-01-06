import { useContext } from "react";
import Header from "./Header";
import "../styles/Tamplate.css";
import TamplateContext from "../contexts/TamplateContext";

type TamplateProps = {
  children: React.ReactNode;
  headerTitle?: string;
};

function Tamplate({ children, headerTitle }: TamplateProps) {
  const { title } = useContext(TamplateContext);

  return (
    <main id="tamplate">
      <Header title={headerTitle ? headerTitle : title} />
      {children}
    </main>
  );
}

export default Tamplate;
