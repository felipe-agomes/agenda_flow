type MonthInfo = {
  daysInMonth: number;
  currentMonthName: string;
};

function getCurrentMonthInfo(): MonthInfo {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  return {
    daysInMonth: new Date(year, month + 1, 0).getDate(),
    currentMonthName: now.toLocaleString("default", { month: "long" }),
  };
}

export { getCurrentMonthInfo };
