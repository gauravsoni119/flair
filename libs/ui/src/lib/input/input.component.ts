import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flair-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() classes: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
