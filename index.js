
function distanceFromHqInBlocks(number) {
  let blocks;
  (number>42) ? blocks = number-42 : blocks = 42-number;
  return blocks;
}

function distanceFromHqInFeet(number) {
  const feet=distanceFromHqInBlocks(number);
  return feet*264;
}

function distanceTravelledInFeet(starting,ending){
  let distance;
  (starting>ending) ? distance=starting-ending : distance=ending-starting;
  return distance*264;
}

function calculatesFarePrice(starting,ending) {
  switch(distanceTravelledInFeet(starting,ending)) {
    case distance<400:
    return 0;
    case fare>400 && fare<2000:
    return fare*2;
  }
}
