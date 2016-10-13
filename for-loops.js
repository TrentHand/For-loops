// increment

for (var increment = 5; increment < 120; increment += 10) { 
	console.log(increment + "    inc"); 
	}

// decrement by division
	
	for (var decrement = 4096; decrement > 1; decrement /= 2) {
		console.log(decrement + "    dec");
	}

// iteration of presidents

var presidents = [

"George Washington",
"John Adams",
"Thomas Jefferson",
"James Madison",
"James Monroe",
"John Quincy Adams",
"Andrew Jackson",
"Martin Van Buren", 
"William Henry Harrison",
// John Tyler,
// James K Polk,
// Zachary Taylor,
// Millard Fillmore,
// Franklin Pierce,
// James Buchanan,
// Abraham Lincoln,
// Andrew Johnson,
// Ulysses S Grant,
// Rutherford B Hayes,
// James A Garfield,
// Chester A Arthur,
// Grover Cleveland,
// Benjamin Harrison,
// Grover Cleveland,
// William McKinley,
// Theodore Roosevelt,
// William Howard Taft,
// Woodrow Wilson,
// Warren G Harding,
// Calvin Coolidge,
// Herbert Hoover,
// Franklin Roosevelt,
// Harry S Truman,
// Dwight D Eisenhower,
// John F Kennedy,
// Lyndon B Johnson,
// Richard M Nixon,
// Gerald Ford,
// Jimmy Carter,
// Ronald Reagan,
// George Bush,
// Bill Clinton,
// George W Bush,
// Barack Obama


]

var presidentsList;

for (var i = 0; i<presidents.length; i++) {
	presidentsList = "President # " + presidents[i];
	console.log(presidentsList);
}

// can't get the number counter to work on the console


// iteration #2

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

  for (var i = 0; i < antSpecies.length; i++) {
  	var printout = antSpecies[i];
  	console.log(printout);
  }