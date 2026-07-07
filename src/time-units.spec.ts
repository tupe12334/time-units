import { Time } from ".";

describe("testing the lib", () => {
  test("seconds", () => {
    expect(new Time(1, "seconds").inMilliseconds).toBe(1000);
    expect(new Time(1000, "milliseconds").inSeconds).toBe(1);
  });
  test("minutes", () => {
    expect(new Time(1, "minutes").inMilliseconds).toBe(60_000);
    expect(new Time(60_000, "milliseconds").inMinutes).toBe(1);
  });
  test("hours", () => {
    expect(new Time(1, "hours").inMilliseconds).toBe(3_600_000);
    expect(new Time(3_600_000, "milliseconds").inHours).toBe(1);
  });
  test("days", () => {
    expect(new Time(1, "days").inMilliseconds).toBe(86_400_000);
  });
  test("weeks", () => {
    expect(new Time(1, "weeks").inMilliseconds).toBe(604_800_000);
  });
  test("months", () => {
    expect(new Time(1, "months").inMilliseconds).toBe(2_419_200_000);
  });
  test("years", () => {
    expect(new Time(1, "years").inMilliseconds).toBe(29_030_400_000);
    expect(new Time(29_030_400_000, "milliseconds").inYears).toBe(1);
  });
});
