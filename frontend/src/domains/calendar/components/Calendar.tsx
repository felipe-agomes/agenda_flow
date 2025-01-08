import Day from "./Day";
import "../styles/Calendar.css";
import CalendarMonth from "../entities/CalendarMonth";

type CalendarProp = {
  calendar: CalendarMonth;
};

export default function Calendar({ calendar }: CalendarProp) {
  return (
    <div id="calendar">
      {calendar.calendarDays.map((calendarDay) => {
        return <Day key={calendarDay.day} calendarDay={calendarDay} />;
      })}
    </div>
  );
}
