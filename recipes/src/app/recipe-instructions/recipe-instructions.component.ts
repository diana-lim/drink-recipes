import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.scss']
})
export class RecipeInstructionsComponent implements OnInit {
  @Input()
  drink;

  constructor() { }

  ngOnInit(): void {
  }

}
