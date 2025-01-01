import { useContext } from "react";
import CalendarDay from "../../entities/CalendarDay";
import { getCurrentMonthInfo } from "../../utils/calendarUtils";
import Day from "../Day";
import Panel from "../Panel";
import "./Calendar.css";
import CalendarContext from "../../contexts/CalendarContext";

export default function Calendar() {
  const { daysInMonth, currentMonthName } = getCurrentMonthInfo();
  const { setTitle } = useContext(CalendarContext);
  setTitle(currentMonthName);

  const calendar = Array.from(
    { length: daysInMonth },
    (_, i) => new CalendarDay(i + 1)
  );

  return (
    <section id="content">
      <div id="calendar">
        {calendar.map((calendarDay) => {
          return <Day key={calendarDay.day} calendarDay={calendarDay} />;
        })}
      </div>
      <Panel />
    </section>
  );
}
