import { useContext } from "react";
import CalendarDay from "../entities/CalendarDay";
import "../styles/Day.css";
import CalendarContext from "../../../shared/contexts/CalendarContext";

type DayProps = {
  calendarDay: CalendarDay;
};

export default function Day({ calendarDay }: DayProps) {
  const random = Math.floor(Math.random() * 156) + 100; // TODO: remover essa randomizacao, manter somente durante o desenvolvimento

  const { selectedDay, setSelectedDay } = useContext(CalendarContext);

  const handleDayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const day = Number.parseInt(event.currentTarget.innerText);
    if (selectedDay === day) {
      setSelectedDay(undefined);
    } else {
      setSelectedDay(Number.parseInt(event.currentTarget.innerText));
    }
  };

  return (
    <div
      id="day"
      style={{ background: `rgb(${random},${random},${random})` }}
      onClick={handleDayClick}
    >
      <p>{calendarDay.day}</p>
    </div>
  );
}