export function getDaysInMonth(month: number, year: number): Date[] {
    const date = new Date(year, month, 1);
    const days: Date[] = [];

    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return days;
}

export function getRows(month: Date[]): Date[][]{
    const rows: Date[][] = [];
    const rowSize = 7;
  
    for (let index = 0; index < month.length; index += rowSize) {
      rows.push(month.slice(index, index + rowSize));
    }
  
    return rows;
  }