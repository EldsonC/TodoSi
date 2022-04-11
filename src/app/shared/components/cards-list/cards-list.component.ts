import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() newTask!: string

  itens = ['BMW', 'Land rover', 'Jaguar', 'Porshe', 'Rolls royce']

  constructor() { }

  ngOnInit(): void {
    this.addTasks
  }

  addTasks() {
    if (this.newTask == null) {
      return
    } else {
      this.itens.push(this.newTask)
    }
  }

}
