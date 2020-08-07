export interface HourRange {
  readableName: string;
  hours: boolean[];
}

const hourToString = (hour: number): string => {
  if (hour === 0) {
    return "12 am";
  } else if (hour < 12) {
    return hour + " am";
  } else if (hour === 12) {
    return "12 pm";
  } else {
    return hour - 12 + " pm";
  }
};

const createReadableName = (fromHour: number, toHour: number): string => {
  return `${hourToString(fromHour)} - ${hourToString(toHour)}`;
};

const createHourArray = (fromHour: number, toHour: number): boolean[] => {
  const hours = new Array<boolean>(24);

  if (fromHour <= toHour) {
    hours.fill(false);
    hours.fill(true, fromHour, toHour - 1);
  } else {
    hours.fill(true);
    hours.fill(false, toHour, fromHour - 1);
  }

  return hours;
};

const mergeHourArrays = (first: boolean[], second: boolean[]) => {
  const hours = new Array<boolean>(24);
  for (let i = 0; i < 24; i++) {
    hours[i] = first[i] || second[i];
  }
  return hours;
};

/**
 * Creates an hour range.
 * @param ranges List of ranges [start, end], where 0 <= start, end <= 24.
 */
export const createHourRange = (...ranges: [number, number][]): HourRange => {
  const readableName = ranges
    .map(range => {
      const [fromHour, toHour] = range;
      return createReadableName(fromHour, toHour);
    })
    .join(", ");

  const hours = ranges
    .map(range => {
      const [fromHour, toHour] = range;
      return createHourArray(fromHour, toHour);
    })
    .reduce((first, second) => mergeHourArrays(first, second));

  return {
    readableName,
    hours
  };
};

export const allDay = (): HourRange => {
  const hours = new Array<boolean>(24);
  hours.fill(true);

  return {
    readableName: "All day",
    hours
  };
};
