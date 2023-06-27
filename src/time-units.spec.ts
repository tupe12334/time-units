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
    expect(new Time(1, "months").inMilliseconds).toBe(2419200000);
  });
  test("years", () => {
    expect(new Time(1, "years").inMilliseconds).toBe(29030400000);
    expect(new Time(29030400000, "milliseconds").inYears).toBe(1);
  });
});
