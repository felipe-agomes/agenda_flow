/* eslint-disable react-hooks/exhaustive-deps */
import CalendarDay from "../../entities/CalendarDay";
import Day from "../Day";
import "./Calendar.css";

type CalendarProp = {
  calendar: CalendarDay[];
};

export default function Calendar({ calendar }: CalendarProp) {
  return (
    <div id="calendar">
      {calendar.map((calendarDay) => {
        return <Day key={calendarDay.day} calendarDay={calendarDay} />;
      })}
    </div>
  );
}
