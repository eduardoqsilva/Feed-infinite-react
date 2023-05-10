export function randomDate(): string {
  function generateRandomDate(start_date: Date, end_date: Date): Date {
    return new Date(start_date.getTime() + Math.random() * (end_date.getTime() - start_date.getTime()));
  }

  const currentDate = new Date();
  const sixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());

  const randomDate = generateRandomDate(sixMonthsAgo, currentDate);

  return randomDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" }) + " • " + randomDate.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
