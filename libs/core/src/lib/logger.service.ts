import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.log(`Core:: ${message}`);
  }
  error(message: string) {
    console.error(`Core:: ${message}`);
  }
}
