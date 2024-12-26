import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  interval: any;
  @Output() onInterval = new EventEmitter<number>();
  count = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.onInterval.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
