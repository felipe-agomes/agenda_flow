import { useState } from "react";
import CalendarContext from "../contexts/CalendarContext";

export default function CalendarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);
  const [isModalTaskOpen, setIsModalTaskOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(9361); // TODO: Esta fixo, mas precisa fazer um esquema de login

  const openModalTask = () => setIsModalTaskOpen(true);
  const closeModalTask = () => setIsModalTaskOpen(false);

  return (
    <CalendarContext.Provider
      value={{
        selectedDay,
        setSelectedDay,
        isModalTaskOpen,
        closeModalTask,
        openModalTask,
        userId,
        setUserId
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
