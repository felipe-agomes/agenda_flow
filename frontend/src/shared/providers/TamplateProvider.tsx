import { useState } from "react";
import TamplateContext from "../contexts/TamplateContext";

export default function CalendarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState<string>("");

  return (
    <TamplateContext.Provider value={{ title, setTitle }}>
      {children}
    </TamplateContext.Provider>
  );
}
