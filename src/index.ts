type TimeUnits =
  | "milliseconds"
  | "seconds"
  | "minutes"
  | "hours"
  | "days"
  | "weeks"
  | "months"
  | "years";

const differences = {
  millisecondsInSecond: 1000,
  secondsInMinute: 60,
  minutesInHour: 60,
  hoursInDay: 24,
  daysInWeek: 7,
  weeksInMonth: 4,
  monthsInYear: 12,
};

/**
 * Converts an amount in the given unit to milliseconds.
 * @param amount The quantity to convert.
 * @param unit The unit `amount` is expressed in.
 * @returns The equivalent duration in milliseconds.
 */
function toMilliseconds(amount: number, unit: TimeUnits): number {
  switch (unit) {
    case "milliseconds":
      return amount;

    case "seconds":
      return amount * differences.millisecondsInSecond;

    case "minutes":
      return toMilliseconds(amount * differences.secondsInMinute, "seconds");

    case "hours":
      return toMilliseconds(amount * differences.minutesInHour, "minutes");

    case "days":
      return toMilliseconds(amount * differences.hoursInDay, "hours");

    case "weeks":
      return toMilliseconds(amount * differences.daysInWeek, "days");

    case "months":
      return toMilliseconds(amount * differences.weeksInMonth, "weeks");

    case "years":
      return toMilliseconds(amount * differences.monthsInYear, "months");

    default:
      throw new Error(`Unsupported time unit: ${String(unit)}`);
  }
}

/**
 * Represents a duration and converts it between time units.
 */
export class Time {
  private milliseconds: number;
  constructor(amount: number, unit: TimeUnits) {
    this.milliseconds = toMilliseconds(amount, unit);
  }

  public get inMilliseconds(): number {
    return this.milliseconds;
  }

  public get inSeconds(): number {
    return this.milliseconds / differences.millisecondsInSecond;
  }

  public get inMinutes(): number {
    return this.inSeconds / differences.secondsInMinute;
  }

  public get inHours(): number {
    return this.inMinutes / differences.minutesInHour;
  }

  public get inDays(): number {
    return this.inHours / differences.hoursInDay;
  }

  public get inWeeks(): number {
    return this.inDays / differences.daysInWeek;
  }

  public get inMonths(): number {
    return this.inWeeks / differences.weeksInMonth;
  }

  public get inYears(): number {
    return this.inMonths / differences.monthsInYear;
  }
}
