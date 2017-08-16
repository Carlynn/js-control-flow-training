console.log("sing.js loaded");

  let numberOfBottles = prompt("How many times would you like to hear the song?")

for (let i=numberOfBottles; i > 2; i--) {
  console.log( i + " bottles of beer on the wall, " + i +
              " bottles of beer! Take one down and pass it around, " + (i-1) + " bottles of beer on the wall!");
};

if (numberOfBottles == 2) {
  console.log(`2 bottles of beer on the wall, 2 bottles of beer! Take one down and pass it around, 1 bottle of beer on the wall!
  1 bottles of beer on the wall, 1 bottles of beer! Take one down and pass it around, No more bottles of beer on the wall!`);
            };

if (numberOfBottles == 1) {
              console.log("1 bottles of beer on the wall, 1 bottles of beer! Take one down" +
              "and pass it around, No more bottles of beer on the wall!");
                        };

if ( numberOfBottles == 0 ) {
  console.log('No more bottles');
};


//
// for (let i=1; i > 0; i--) {
//   console.log( i + " bottle of beer on the wall, " +
//             i + " bottle of beer! Take one down and pass it around, No more bottles of beer on the wall!");
// };
