const findWaldo = function(names, found) {
  let index = 0;
  names.forEach((name) => {
    if (name === "Waldo") found(index);
    index++;
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);