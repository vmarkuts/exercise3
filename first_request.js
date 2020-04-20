const request = require('request');

const key = 'b7c3ddcfc1c2348bf7e979bbbb72e664';
const location = 'Kiev,ua';
const str = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID='+key;

console.log('Sunset in Kyiv is at')
request(str, (error, response, body) => {
	if (!error && response.statusCode == 200) {
		const parsedData = JSON.parse(body);
		const dateTime = new Date(parsedData.sys.sunset * 1000);
		console.log(dateTime.toGMTString());
	} else {
		console.log('SMTH WENT WRONG');
		console.log(error);
	}
});
