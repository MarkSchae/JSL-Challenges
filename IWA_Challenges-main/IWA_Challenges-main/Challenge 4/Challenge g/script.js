const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;
// Moved this code from the bottom and declared the variables 
const customers = '1';
const location = 'RSA';
let currency = null;
let shipping = null;

if (location == 'RSA') {
	shipping = 400;
	currency = 'R';
} else if (location == 'NAM') {
	shipping = 600
	currency = '$';
} else {
	shipping = 800
	currency = '$'
}



let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED; 

let cost = shoes + batteries + pens + shirts + toys;
//currency = $

if (customers === '1' && (cost >= 1000) && currency == 'R') {
	shipping = 0;
	if (location == 'NAM' && currency == '$' && cost >= 60) {
		shipping = 0;
			//if (location = RSA) {
			//	shipping = 0 || calcShipping
			//}
	} else {
		shipping = 800;
	}
};


if (shipping == 0 && customers !== '1') { console.log(FREE_WARNING) };

location == 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency, (cost + shipping));


