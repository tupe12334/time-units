export class Time {
  private milliseconds: number;
  constructor(amount: number, unit: TimeUnits) {
    switch (unit) {
      case "milliseconds":
        this.milliseconds = amount;
        break;
      case "seconds":
        this.milliseconds = new Time(
          amount * differences.millisecondsInSecond,
          "milliseconds"
        ).milliseconds;
        break;
      case "minutes":
        this.milliseconds = new Time(
          amount * differences.secondsInMinute,
          "seconds"
        ).milliseconds;
        break;
      case "hours":
        this.milliseconds = new Time(
          amount * differences.minutesInHour,
          "minutes"
        ).milliseconds;
        break;
      case "days":
        this.milliseconds = new Time(
          amount * differences.hoursInDay,
          "hours"
        ).milliseconds;
        break;
      case "weeks":
        this.milliseconds = new Time(
          amount * differences.daysInWeek,
          "days"
        ).milliseconds;
        break;
      case "months":
        this.milliseconds = new Time(
          amount * differences.weeksInMonth,
          "weeks"
        ).milliseconds;
        break;
      case "years":
        this.milliseconds = new Time(
          amount * differences.monthsInYear,
          "months"
        ).milliseconds;
        break;
    }
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
