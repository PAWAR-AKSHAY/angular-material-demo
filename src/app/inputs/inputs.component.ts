import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  value = 'example';
  selectedValue: string;
  selectedLanguage: string;

  options: string[] = ['Angular', 'React', 'Vue'];

  objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Material'},
    { name: 'React'},
    { name: 'Vue'}
  ];

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => 
      option.toLowerCase().includes(filterValue));
  }

 

  displayAuto(subject) {
    return subject ? subject.name : undefined;
  }
}
