import { useContext } from "react";
import Header from "./Header";
import "../styles/Tamplate.css";
import CalendarContext from "../contexts/CalendarContext";

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
