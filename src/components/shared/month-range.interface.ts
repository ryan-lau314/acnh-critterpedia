export interface MonthRange {
  readableName: string;
  months: boolean[];
}

const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const monthToString = (month: number): string => {
  return MONTHS[month];
};

const createReadableName = (fromMonth: number, toMonth: number): string => {
  return `${monthToString(fromMonth)} - ${monthToString(toMonth)}`;
};

const createMonthArray = (fromMonth: number, toMonth: number): boolean[] => {
  const months = new Array<boolean>(12);
  if (fromMonth <= toMonth) {
    months.fill(false);
    months.fill(true, fromMonth - 1, toMonth - 1);
  } else {
    months.fill(true);
    months.fill(false, toMonth, fromMonth - 2);
  }
  return months;
};

const mergeMonthArrays = (first: boolean[], second: boolean[]) => {
  const months = new Array<boolean>(12);
  for (let i = 0; i < 12; i++) {
    months[i] = first[i] || second[i];
  }
  return months;
};

/**
 * Creates a month range.
 * @param ranges List of ranges [start, end], where 1 <= start, end <= 12.
 */
export const createMonthRange = (...ranges: [number, number][]): MonthRange => {
  const readableName = ranges
    .map(range => {
      const [fromMonth, toMonth] = range;
      return createReadableName(fromMonth, toMonth);
    })
    .join(", ");

  const months = ranges
    .map(range => {
      const [fromMonth, toMonth] = range;
      return createMonthArray(fromMonth, toMonth);
    })
    .reduce((first, second) => mergeMonthArrays(first, second));

  return {
    readableName,
    months
  };
};

export const allYear = (): MonthRange => {
  const months = new Array<boolean>(12);
  months.fill(true);

  return {
    readableName: "All year",
    months
  };
};
