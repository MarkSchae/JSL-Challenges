const date = 2050;
const status = 'student';
let count = 0;

if (date == 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	console.log('April', 'Family Day')
	console.log('April', 'Freedom Day')
	count = count + 4;

	if (status == "student") {
		console.log('June', 'Youth Day');
		count = count + 1;
  	} // Not sure if this is the only holiday that should be logged or not. Can just add it to the top and break

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	console.log('December', 'Day of Reconciliation');
	count = count + 3;

	if (status == "parent") {
	  	console.log('December', 'Christmas Day');
		count = count + 1;
  	}

	console.log('December', 'Day of Goodwill');
	count = count + 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
