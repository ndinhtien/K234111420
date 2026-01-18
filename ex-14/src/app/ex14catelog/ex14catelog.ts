import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../catalogservice';

@Component({
  selector: 'app-ex14catelog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex14catelog.html',
  styleUrls: ['./ex14catelog.css']
})
export class Ex14catelog implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
