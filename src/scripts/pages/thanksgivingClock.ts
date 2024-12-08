// src/scripts/features/countdown/thanksgivingClock.ts

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number; 
  seconds: number;
  isComplete: boolean;
}

export class ThanksgivingCountdown {
  private targetDate: Date;
  private intervalId?: number;

  constructor() {
    this.targetDate = this.getNextThanksgiving();
  }

  private getNextThanksgiving(): Date {
    const now = new Date();
    const year = now.getFullYear();
    const november = 10; 
    const fourthThursday = 4;

    const calculateThanksgiving = (year: number): Date => {
      const firstOfNovember = new Date(year, november, 1);
      const dayOfWeek = firstOfNovember.getDay(); // 0 = Sunday, ..., 6 = Saturday
      const offset = (4 - dayOfWeek + 7) % 7; // Days until the first Thursday
      const firstThursday = 1 + offset;
      const thanksgivingDate = firstThursday + (fourthThursday - 1) * 7;
      return new Date(year, november, thanksgivingDate);
    };
  
    const thanksgivingThisYear = calculateThanksgiving(year);
    return now.getTime() > thanksgivingThisYear.getTime()
      ? calculateThanksgiving(year + 1)
      : thanksgivingThisYear;
  }

  public getTimeRemaining(): CountdownTime {
    const now = new Date().getTime();
    const timeDiff = this.targetDate.getTime() - now;
    
    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: true
      };
    }

    return {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      isComplete: false
    };
  }

  public startCountdown(callback: (time: CountdownTime) => void) {
    this.intervalId = setInterval(() => {
      const timeLeft = this.getTimeRemaining();
      callback(timeLeft);
      
      if (timeLeft.isComplete) {
        this.stopCountdown();
      }
    }, 1000);
  }

  public stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  public getTargetDate(): Date {
    return this.targetDate;
  }
}
