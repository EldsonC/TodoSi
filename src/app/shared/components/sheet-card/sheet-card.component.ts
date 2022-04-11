import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { CardsListComponent } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.component.html',
  styleUrls: ['./sheet-card.component.scss']
})
export class SheetCardComponent implements OnInit {
  @ViewChild(CardsListComponent, { static: false })
  filho!: CardsListComponent
  currentTask!: string

  constructor() { }

  ngOnInit(): void {
    
  }

  addNewTask(taskValue: string) {
    this.currentTask = taskValue
    this.filho.addTasks()
  }

}
