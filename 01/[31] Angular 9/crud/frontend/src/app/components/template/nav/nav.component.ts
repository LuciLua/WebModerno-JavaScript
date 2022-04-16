import { Component, OnInit } from '@angular/core';

// Decorator, comeca com @...
@Component({
  // nome da tag, selector
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

// Classe passa a ser um componente depois que usa-se um decorator
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
