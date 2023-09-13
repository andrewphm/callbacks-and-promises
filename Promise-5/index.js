function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((res, rej) => {
    if (timeOfDay === 'breakfast') {
      res('eggs');
    } else if (timeOfDay === 'lunch') {
      res('sandwich');
    } else if (timeOfDay === 'dinner') {
      res('steak');
    } else {
      rej("I don't eat between meal snacks!");
    }
  });
}

// whatToEat should return a promise.
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner'
// resolve the promise with your favorite food for that time.
// If the `timeOfDay` is anything else reject the promise with
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here:

whatToEat('lunch')
  .then((food) => {
    console.log(food);
  })
  .catch((err) => {
    console.log(err);
  });

// Handle this Promise:
whatToEat('elevens')
  .then((food) => {
    console.log(food);
  })
  .catch((err) => {
    console.log(err);
  });
