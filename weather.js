let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
/*
console.log('都市名：' + data.name);
console.log('最高気温：' + data.main.temp_max);
console.log('最低気温：' + data.main.temp_min);
*/
// 拡張課題３－４

let itemBefore = [
  '都市名',
  '天気',
  '最高気温',
  '最低気温',
  '湿度',
  '風速'
];
let itemAfter = [
  '',
  '',
  '°C',
  '°C',
  '%',
  'm/s'
];

let printData = [
  data.name, 
  data.weather[0].description, 
  data.main.temp_max, 
  data.main.temp_min, 
  data.main.humidity, 
  data.wind.speed
];

for(let i=0; i<itemBefore.length; i++) {
  console.log(itemBefore[i] + '：' + printData[i] + itemAfter[i]);
}

let trH = document.querySelector('tr#head');
let trD = document.createElement('tr');
trH.insertAdjacentElement('afterend', trD);
for(let i=0; i<itemBefore.length; i++) {
  let th = document.createElement('th');
  th.textContent = printData[i] + itemAfter[i];
  trD.insertAdjacentElement('beforeend', th);
}



