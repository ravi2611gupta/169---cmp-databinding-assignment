import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onStartInterval(count: number) {
    // console.log('Start interval', count);
    if (count % 2) {
      this.oddNumbers.push(count);
    } else {
      this.evenNumbers.push(count);
    }
  }
}
