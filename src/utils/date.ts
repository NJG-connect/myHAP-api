const getInfoForThreeNextDay = (dateChoice: Date) => {
  const threeDate = {
    startDate: new Date(
      dateChoice.getFullYear(),
      dateChoice.getMonth(),
      dateChoice.getDate(),
      0,
      0,
      0
    ),
    endDate: new Date(
      dateChoice.getFullYear(),
      dateChoice.getMonth(),
      dateChoice.getDate(),
      23,
      59,
      59
    ),
  };

  return new Array(3).fill(threeDate).map((el, index) => ({
    startDate: addDays(el.startDate, index),
    endDate: addDays(el.endDate, index),
  }));
};

function addDays(dateTime: Date, count_days = 0) {
  return new Date(new Date(dateTime).setDate(dateTime.getDate() + count_days));
}

function formatDate(
  date: Date | string | undefined | null,
  separator = "-"
): string {
  if (!date) {
    return "";
  }
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();

  return (
    d.getFullYear() +
    separator +
    (month.toString().length === 1 ? `0${month}` : month) +
    separator +
    (day.toString().length === 1 ? `0${day}` : day)
  );
}

export { addDays, getInfoForThreeNextDay, formatDate };
