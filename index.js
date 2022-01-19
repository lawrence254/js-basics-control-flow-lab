function scuberGreetingForFeet(input) {
  // Write your code here!
  if (input <= 400) {
    return 'This one is on me!';
  } else if (input > 2500) {
    return 'No can do.'
  }
  else if (input > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'

}

function switchOnCharmFromTip(charm) {
  // Write your code here!
  switch (charm) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;

    default:
      return 'Bye.'
      break;
  }
}