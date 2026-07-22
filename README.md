# @stockspro/time-units

Small TypeScript utility for converting durations between time units.

## Install

```bash
npm install @stockspro/time-units
```

## Usage

```ts
import { Time } from "@stockspro/time-units";

const duration = new Time(90, "minutes");

duration.inSeconds; // 5400
duration.inHours; // 1.5
duration.inMilliseconds; // 5400000
```

## API

### `new Time(amount: number, unit: TimeUnits)`

Creates a duration of `amount` expressed in `unit`.

`TimeUnits` is one of:
`"milliseconds"`, `"seconds"`, `"minutes"`, `"hours"`, `"days"`, `"weeks"`, `"months"`, `"years"`.

### Instance getters

Each getter returns the duration converted to that unit:

- `inMilliseconds`
- `inSeconds`
- `inMinutes`
- `inHours`
- `inDays`
- `inWeeks`
- `inMonths`
- `inYears`

## Development

```bash
npm run build   # compile TypeScript to dist/
npm test        # run the jest test suite
npm run lint    # run eslint
```

## See also

- [moadim](https://moadim.io/) — loop engineering: build, schedule & run agent loops.
