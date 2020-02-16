import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    console.log(`Core:: ${message}`);
  }

  error(message: string): void {
    console.error(`Core:: ${message}`);
  }

  warn(message: string): void {
    console.warn(`Core:: ${message}`);
  }

  info(message: string): void {
    console.log(`Core:: ${message}`);
  }
}
