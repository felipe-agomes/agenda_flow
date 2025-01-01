import CalendarDay from "../../entities/CalendarDay";
import "./Day.css";

type DayProps = {
  calendarDay: CalendarDay;
};

export default function Day({ calendarDay }: DayProps) {
  const random = Math.floor(Math.random() * 156) + 100; // TODO: remover essa randomizacao, manter somente durante o desenvolvimento

  return (
    <div id="day" style={{ background: `rgb(${random},${random},${random})` }}>
      <p>{calendarDay.day}</p>
    </div>
  );
}
