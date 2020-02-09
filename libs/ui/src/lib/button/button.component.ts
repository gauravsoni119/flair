import { Component, OnInit, Input } from '@angular/core';
import { LoggerService } from '../../../../core/src/lib/logger.service';

@Component({
  selector: 'flair-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'primary' | 'secondary';

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
  }

}
