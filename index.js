 function distanceFromHqInBlocks(pickup) {
     const numBlocks = pickup - 42;
     return Math.abs(numBlocks);//eturns the number of blocks given a value
  }// Code your solution in this file!

  function distanceFromHqInFeet(someValue) {
      const blocks = distanceFromHqInBlocks(someValue);
      return blocks * 264;
  
  }

function distanceTravelledInFeet(start, destination) {
    const feet = (start - destination) * 264;
    return Math.abs(feet)
    //returns the number of feet traveled
}
  
function calculatesFarePrice(start, destination) {
    let farePrice;
    let feet = (start - destination) * 264;
    feet = Math.abs(feet)
    
    switch (true) {
        case feet <= 400:
            farePrice = 0;
            break;
        case feet > 400 && feet <= 2000:
            farePrice = (feet - 400) * .02;
            break;
        case feet > 2000 && feet <= 2500:
            farePrice = 25;
            break;
        default:
            farePrice = "cannot travel that far"
    }
    return farePrice;
}           
    