// countdown_to_thanksgiving.ts

const getNextThanksgiving = () => {
  const now = new Date();
  const year = now.getFullYear();
  const november = 10; // November is the 11th month, but getMonth() returns 0-indexed months
  const fourthThursday = 4; // Thanksgiving is the fourth Thursday

  // Start from November 1st
  const firstOfNovember = new Date(year, november, 1);

  // Get the day of the week of November 1st
  const dayOfWeek = firstOfNovember.getDay();

  // Calculate the date of the first Thursday in November
  const firstThursday = 1 + ((11 - dayOfWeek) % 7);

  // Calculate the date of the fourth Thursday in November
  const thanksgivingDate = firstOfNovember.getDate() + firstThursday + (fourthThursday - 1) * 7;

  const thanksgiving = new Date(year, november, thanksgivingDate);

  // If today's date is after this year's Thanksgiving, calculate for next year
  if (now.getTime() > thanksgiving.getTime()) {
    return new Date(year + 1, november, thanksgivingDate);
  }

  return thanksgiving;
};

const countdownToThanksgiving = () => {
  const targetDate = getNextThanksgiving();
  console.log(`Next Thanksgiving is on: ${targetDate.toDateString()}`);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate.getTime() - now;

    if (timeDifference <= 0) {
      console.log("Happy Thanksgiving!");
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    console.log(`Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  const intervalId = setInterval(updateCountdown, 1000);
};

countdownToThanksgiving();
