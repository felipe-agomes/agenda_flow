import { useState } from "react";
import CalendarContext from "../contexts/CalendarContext";
import Task from "../../domains/task/entities/Task";
import { TaskForm } from "../../domains/task/types/TaskForm";

export default function CalendarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);
  const [taskForm, setTaskForm] = useState<TaskForm>({ isOpen: false });
  const [userId, setUserId] = useState<number>(9361); // TODO: Esta fixo, mas precisa fazer um esquema de login

  const openTaskForm = (task?: Task) => {
    if (task) {
      setTaskForm({ isOpen: true, task });
    } else {
      setTaskForm({ isOpen: true });
    }
  };
  const closeTaskForm = () => setTaskForm({ isOpen: false });

  return (
    <CalendarContext.Provider
      value={{
        selectedDay,
        setSelectedDay,
        taskForm,
        closeTaskForm,
        openTaskForm,
        userId,
        setUserId
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
