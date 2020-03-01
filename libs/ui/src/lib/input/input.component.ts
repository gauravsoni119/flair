import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flair-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() classes: string | undefined;
  @Input() disable: boolean;
  @Input() name: string | undefined;
  @Input() value: string;
  @Input() type = 'text';
  private _val: string;

  constructor() { }

  ngOnInit() {
  }

}
