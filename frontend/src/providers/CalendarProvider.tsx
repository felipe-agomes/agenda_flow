import { useState } from "react";
import CalendarContext from "../contexts/CalendarContext";

export default function CalendarProvider({children}: {children: React.ReactNode;
}) {
  const [title, setTitle] = useState<string>("");

  return (
    <CalendarContext.Provider value={{title, setTitle}}>
      {children}
    </CalendarContext.Provider>
  );
}