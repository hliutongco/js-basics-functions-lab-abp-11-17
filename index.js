
function distanceFromHqInBlocks(number) {
  let blocks;
  (number>42) ? blocks = number-42 : blocks = 42-number;
  return blocks;
}

function distanceFromHqInFeet(number) {
  const feet=distanceFromHqInBlocks(number);
  return feet*264;
}
