const getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    } else if ( day === 'tuesday'){
      return 10;
    } else if ( day === 'wednesday'){
      return 10;
    }else if (day === 'thursday'){
      return 8;
    }else if (day === 'friday'){
      return 4;
    }else if (day === 'saturday'){
      return 4;
    }else {
      return 8;
    }
  };
  //console.log(getSleepHours('wednesday'));
  
  const getActualSleepHours = () => 8 + 6 + 1 + 7 + 2 + 5 + 9;
  // getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('Sunday');
  
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = idealHours => idealHours * 7;
   
  
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours(8));
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(8);
  
      if ( actualSleepHours === idealSleepHours ){
        console.log('You got the perfect amount of sleep.');
      } else if ( actualSleepHours > idealSleepHours ){
        console.log('You got ' + (actualSleepHours - idealSleepHours) +  ' hours more sleep than needed.');
      } else{
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep you should get some rest.');
      } 
  }; 
  
  calculateSleepDebt();
  