import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePerson(personName: string) {
    console.log("Event handling!, Person name is " + personName);
  }
}
