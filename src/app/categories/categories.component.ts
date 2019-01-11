import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[]=[
    {name:"Clothings"},
    {name:"Accessories"},
    {name:"Beauty"},
    {name:"Home Appliance"},
    {name:"Mobile"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
