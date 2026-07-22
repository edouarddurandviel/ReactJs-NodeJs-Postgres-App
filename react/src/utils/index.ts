export const formatFrDate = (date: Date) => {
  const newDate = new Date(date);
  return {
    date: newDate.toLocaleString("fr-FR", {
      dateStyle: "short",
      timeStyle: "medium",
    }),
    hour: `${newDate.getHours()}h${newDate.getMinutes()}`,
  };
};
