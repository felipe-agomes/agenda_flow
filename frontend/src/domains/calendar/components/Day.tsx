import { useContext } from "react";
import CalendarDay from "../entities/CalendarDay";
import style from "../styles/Day.module.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";

type DayProps = {
  calendarDay: CalendarDay;
};

export default function Day({ calendarDay }: DayProps) {

  const { selectedDay, setSelectedDay } = useContext(CalendarContext);

  const handleDayClick = () => {
    if (selectedDay === calendarDay.day) {
      setSelectedDay(undefined);
    } else {
      setSelectedDay(calendarDay.day);
    }
  };

  return (
    <div
      className={`${style.day} ${selectedDay === calendarDay.day && style.selected}`}
      onClick={handleDayClick}
    >
      <div className={style.header}>
        <p>{calendarDay.day}</p>
      </div>
    </div>
  );
}
