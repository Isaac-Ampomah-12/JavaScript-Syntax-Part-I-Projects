let raceNumber = Math.floor(Math.random() * 1000);
const registedEarly = false;
const age = 18;

if( age> 18 && registedEarly ){
  raceNumber += 1000;
}

if(age > 18 && registedEarly){
  console.log(`${raceNumber} will race at 9:30 am`);
} else if( age > 18 && !registedEarly ){
  console.log(`${raceNumber} will race at 11:00 am`);
}else if(age < 18){
  console.log(`${raceNumber} will race at 12:30 pm`);
}else{
  console.log('see the registration desk');
}
