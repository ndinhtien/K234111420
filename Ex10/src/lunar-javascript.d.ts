declare module 'lunar-javascript' {
  export class Solar {
    static fromYmd(year: number, month: number, day: number): Solar;
    getLunar(): Lunar;
    getWeekInChinese(): string;
  }

  export class Lunar {
    getDay(): number;
    getMonth(): number;
    getYear(): number;
    getYearInGanZhi(): string;
    getYearShengXiao(): string;
    getDayInGanZhi(): string;
  }
}