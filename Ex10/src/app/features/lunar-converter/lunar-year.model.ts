import { Solar } from 'lunar-javascript';

export interface LunarDetails {
  weekday: string;
  lunarDate: string;
  yearName: string;
  zodiac: string;
  lunarMonth: string;
}

export class LunarYear {
  constructor(private day: number, private month: number, private year: number) {}

  private translateWeekday(chinese: string): string {
    const map: { [key: string]: string } = {
      '一': 'Thứ Hai', '二': 'Thứ Ba', '三': 'Thứ Tư', '四': 'Thứ Năm',
      '五': 'Thứ Sáu', '六': 'Thứ Bảy', '日': 'Chủ Nhật'
    };
    return map[chinese] || chinese;
  }

  private translateZodiac(chinese: string): string {
    const map: { [key: string]: string } = {
      '鼠': 'Tý', '牛': 'Sửu', '虎': 'Dần', '兔': 'Mão',
      '龙': 'Thìn', '蛇': 'Tỵ', '马': 'Ngọ', '羊': 'Mùi',
      '猴': 'Thân', '鸡': 'Dậu', '狗': 'Tuất', '猪': 'Hợi'
    };
    return map[chinese] || chinese;
  }

  findLunarYearDetail(): LunarDetails {
    const solar = Solar.fromYmd(this.year, this.month, this.day);
    const lunar = solar.getLunar();
    return {
      weekday: this.translateWeekday(solar.getWeekInChinese()),
      lunarDate: `${lunar.getDay()}/${lunar.getMonth()}/${lunar.getYear()}`,
      yearName: lunar.getYearInGanZhi(),
      zodiac: this.translateZodiac(lunar.getYearShengXiao()),
      lunarMonth: `Tháng ${lunar.getMonth()}`,
    };
  }
}