import { Time } from "./";

describe("testing the lib", () => {
  test("seconds", () => {
    expect(new Time(1, "seconds").inMilliseconds).toBe(1000);
    expect(new Time(1000, "milliseconds").inSeconds).toBe(1);
  });
  test("minutes", () => {
    expect(new Time(1, "minutes").inMilliseconds).toBe(60000);
    expect(new Time(60000, "milliseconds").inMinutes).toBe(1);
  });
  test("hours", () => {
    expect(new Time(1, "hours").inMilliseconds).toBe(3600000);
    expect(new Time(3600000, "milliseconds").inHours).toBe(1);
  });
  test("days", () => {
    expect(new Time(1, "days").inMilliseconds).toBe(86400000);
  });
  test("weeks", () => {
    expect(new Time(1, "weeks").inMilliseconds).toBe(604800000);
  });
  test("months", () => {
    // average month length (365.25 days/year / 12), not a fixed 4 weeks
    expect(new Time(1, "months").inMilliseconds).toBe(2629800000);
    expect(new Time(1, "months").inDays).toBeCloseTo(30.4375, 5);
  });
  test("years", () => {
    // average year length (365.25 days), not 4*12=48 weeks (336 days)
    expect(new Time(1, "years").inMilliseconds).toBe(31557600000);
    expect(new Time(31557600000, "milliseconds").inYears).toBe(1);
    expect(new Time(1, "years").inDays).toBeCloseTo(365.25, 5);
  });
});
