import {
  HourRange,
  createHourRange,
  allDay
} from "../shared/hour-range.interface";
import { MonthRange, createMonthRange } from "../shared/month-range.interface";

enum Area {
  river = "River",
  sea = "Sea",
  pond = "Pond",
  rivermouth = "River (Mouth)",
  clifftop = "River (Clifftop)",
  pier = "Pier"
}

export interface Fish {
  id: number;
  imageUrl: string;
  name: string;
  area: Area;
  appearingMonths: MonthRange;
  appearingHours: HourRange;
  isCaught: boolean;
}

export const allFish: Fish[] = [
  {
    id: 12,
    imageUrl:
      "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c3/NH-Icon-softshelledturtle.png",
    name: "Soft-shelled turtle",
    area: Area.river,
    appearingMonths: createMonthRange([8, 9]),
    appearingHours: createHourRange([16, 9]),
    isCaught: false
  },
  {
    id: 64,
    imageUrl:
      "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e5/NH-Icon-morayeel.png",
    name: "Moray eel",
    area: Area.sea,
    appearingMonths: createMonthRange([8, 10]),
    appearingHours: allDay(),
    isCaught: false
  },
  {
    id: 71,
    imageUrl:
      "https://vignette.wikia.nocookie.net/animalcrossing/images/d/db/NH-Icon-ray.png",
    name: "Ray",
    area: Area.sea,
    appearingMonths: createMonthRange([8, 11]),
    appearingHours: createHourRange([4, 21]),
    isCaught: false
  },
  {
    id: 72,
    imageUrl:
      "https://vignette.wikia.nocookie.net/animalcrossing/images/7/73/NH-Icon-sawshark.png",
    name: "Saw shark",
    area: Area.sea,
    appearingMonths: createMonthRange([6, 9]),
    appearingHours: createHourRange([16, 9]),
    isCaught: false
  }
];
