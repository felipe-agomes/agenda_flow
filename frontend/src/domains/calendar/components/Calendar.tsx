import Day from "./Day";
import style from "../styles/Calendar.module.css";
import CalendarMonth from "../entities/CalendarMonth";

type CalendarProp = {
  calendar: CalendarMonth;
};

export default function Calendar({ calendar }: CalendarProp) {
  return (
    <div className={style.calendar}>
      {calendar.calendarDays.map((calendarDay) => {
        return <Day key={calendarDay.day} calendarDay={calendarDay} />;
      })}
    </div>
  );
}
