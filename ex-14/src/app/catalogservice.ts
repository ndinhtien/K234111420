import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas = [
    {
      Cateid: 'cate1',
      CateName: 'Nước ngọt',
      Products: [
        {
          ProductId: 'p1',
          ProductName: 'Coca Cola',
          Price: 100,
          Image: '../images/coca.jpg',
        },
        {
          ProductId: 'p2',
          ProductName: 'Pepsi',
          Price: 300,
          Image: '../images/pepsi.jpg',
        },
        {
          ProductId: 'p3',
          ProductName: 'Sting Dâu',
          Price: 200,
          Image: '../images/sting.jpg',
        },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        {
          ProductId: 'p4',
          ProductName: 'Heineken',
          Price: 500,
          Image: '../images/heliken.jpg',
        },
        {
          ProductId: 'p5',
          ProductName: 'Bia 333',
          Price: 400,
          Image: '../images/333.jpg',
        },
        {
          ProductId: 'p6',
          ProductName: 'Bia Sài Gòn',
          Price: 600,
          Image: '../images/saigon.jpg',
        },
      ],
    },
  ];

  constructor() {}

  getCategories() {
    return this.datas;
  }
}
