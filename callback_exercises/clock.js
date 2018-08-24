class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hrs = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    this.hrs = (this.hrs >= 10) ? `${this.hrs}` : `0${this.hrs}`;
    this.min = (this.min >= 10) ? `${this.min}` : `0${this.min}`;
    this.sec = (this.sec >= 10) ? `${this.sec}` : `0${this.sec}`;
    console.log(`${this.hrs}:${this.min}:${this.sec}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.hrs = parseInt(this.hrs);
    this.min = parseInt(this.min);
    this.sec = parseInt(this.sec);
    this.sec++;
    if (this.sec === 60) {
      this.sec = 0;
      this.min++;
      if (this.min === 60) {
        this.min = 0;
        this.hrs++;
        if (this.hrs === 24) {
          this.hrs = 0;
        }
      }
    }
    this.printTime();
  }
}

const clock = new Clock();
