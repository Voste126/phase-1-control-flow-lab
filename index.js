function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be $10.';
  } else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }

}

function ternaryCheckCity(city){
  // Write your code here!
 return city === 'NYC'? "Ok, sounds good.": "No go."
}

function switchOnCharmFromTip(message){
  // Write your code here!
  let tip;

  switch (message) {
    case 'generous':
      tip = "Thank you so much.";
      break;
    case 'not as generous':
      tip = "Thank you.";
    break;
    default:
      return "Bye.";
  }

  return tip;
}
//console.log(switchOnCharmFromTip('generous'));