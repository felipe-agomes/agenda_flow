import { useContext } from "react";
import CalendarDay from "../entities/CalendarDay";
import style from "../styles/Day.module.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";

type DayProps = {
  calendarDay: CalendarDay;
};

export default function Day({ calendarDay }: DayProps) {
  const random = Math.floor(Math.random() * 156) + 100; // TODO: remover essa randomizacao, manter somente durante o desenvolvimento

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
      className={style.day}
      style={{ background: `rgb(${random},${random},${random})` }}
      onClick={handleDayClick}
    >
      <p>{calendarDay.day}</p>
    </div>
  );
}
