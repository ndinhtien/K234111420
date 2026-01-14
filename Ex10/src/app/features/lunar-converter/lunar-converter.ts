import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LunarDetails, LunarYear } from './lunar-year.model';

@Component({
  selector: 'app-lunar-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lunar-converter.html',
  styleUrl: './lunar-converter.scss',
})
export class LunarConverter {
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = Array.from({ length: 12 }, (_, i) => i + 1);
  years = Array.from({ length: 201 }, (_, i) => 1900 + i); // 1900-2100

  selectedDay = 15;
  selectedMonth = 5;
  selectedYear = 1986;

  result?: LunarDetails;

  convert(): void {
    const lunar = new LunarYear(this.selectedDay, this.selectedMonth, this.selectedYear);
    this.result = lunar.findLunarYearDetail();
  }
}
