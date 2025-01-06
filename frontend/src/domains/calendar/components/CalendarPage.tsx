import "../styles/CalendarPage.css";
import Calendar from "./Calendar";
import { useContext } from "react";
import ModalTask from "../../task/components/ModalTask";
import CalendarContext from "../../../shared/contexts/CalendarContext";
import Panel from "../../task/components/Panel";

export default function CalendarPage() {
  const { setSelectedDay, closeModalTask } = useContext(CalendarContext);

  const handleKeyDow = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setSelectedDay(undefined);
      closeModalTask();
    }
  };

  return (
    <section id="content" tabIndex={0} onKeyDown={handleKeyDow}>
      <Calendar />
      <Panel />
      <ModalTask />
    </section>
  );
}
