const food = new Promise((resolve, reject) => {
  resolve('Sushi!');
})


// resolve food here:
food.then((food) => {
  console.log(food);
});


// **Challenge 1** Resolve your promise with the name of your favorite food.
// Do this by calling the `resolve` with an argument.

// **Challenge 2** Resolve the promise `food` with the `.then()` syntax
// and print your favorite food to the console.
