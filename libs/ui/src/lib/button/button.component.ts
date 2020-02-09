import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flair-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'primary' | 'secondary';

  constructor() { }

  ngOnInit() {
  }

}
