import { useContext } from "react";
import Header from "./Header";
import style from "../styles/Tamplate.module.css";
import TamplateContext from "../contexts/TamplateContext";

type TamplateProps = {
  children: React.ReactNode;
  headerTitle?: string;
};

function Tamplate({ children, headerTitle }: TamplateProps) {
  const { title } = useContext(TamplateContext);

  return (
    <main className={style.tamplate}>
      <Header title={headerTitle ? headerTitle : title} />
      {children}
    </main>
  );
}

export default Tamplate;
