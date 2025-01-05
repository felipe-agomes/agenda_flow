import { useContext } from "react";
import Header from "../Header";
import "./Tamplate.css";
import CalendarContext from "../../contexts/TamplateContext";

type TamplateProps = {
  children: React.ReactNode;
  headerTitle?: string;
};

function Tamplate({ children, headerTitle }: TamplateProps) {
  const { title } = useContext(CalendarContext);

  return (
    <main id="tamplate">
      <Header title={headerTitle ? headerTitle : title} />
      {children}
    </main>
  );
}

export default Tamplate;
