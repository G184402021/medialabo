/*
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
*/
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

let mapUrlId = [
  360630,
  524901,
  993800,
  1816670,
  1850147,
  1880252,
  2147714,
  2643743,
  2968815,
  3451189,
  5128581,
  5368361
];

let mapUrl = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709963363!2d31.223444918065375!3d30.059483810345593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z44Ko44K444OX44OIIOOCq-OCpOODreecjCDjgqvjgqTjg60!5e0!3m2!1sja!2sjp!4v1657169314224!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.762938646!2d36.82514470047586!3d55.58074814729012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z44Ot44K344KiIOODouOCueOCr-ODrw!5e0!3m2!1sja!2sjp!4v1657169227072!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75250861594!2d27.969984583453474!3d-26.171504554265105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2z5Y2X44Ki44OV44Oq44KrIOODqOODj-ODjeOCueODluODq-OCsA!5e0!3m2!1sja!2sjp!4v1657169502156!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391568.2686478355!2d116.11727884839308!3d39.9385466057622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2z5Lit6I-v5Lq65rCR5YWx5ZKM5Zu9IOWMl-S6rOW4giDljJfkuqw!5e0!3m2!1sja!2sjp!4v1657169003252!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876731.9932761883!2d139.5230519405454!3d35.8853183568965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5p2x5Lqs6YO95p2x5Lqs!5e0!3m2!1sja!2sjp!4v1657169546452!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255278.15107203575!2d103.6839596414555!3d1.3437419351686986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1767b42b8ec9%3A0x400f7acaedaa420!2z44K344Oz44Ks44Od44O844Or!5e0!3m2!1sja!2sjp!4v1657169690362!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.2712265614!2d150.65179194824893!3d-33.84792704409162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2z44Kq44O844K544OI44Op44Oq44KiIOODi-ODpeODvOOCteOCpuOCueOCpuOCp-ODvOODq-OCuiDjgrfjg4njg4vjg7w!5e0!3m2!1sja!2sjp!4v1657169729026!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.6931274849!2d-0.3817725682267404!3d51.52830799428938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z44Kk44Ku44Oq44K5IOODreODs-ODieODsw!5e0!3m2!1sja!2sjp!4v1657169783308!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136342.1322199833!2d0.3820861357955719!3d48.58403420880387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z44OV44Op44Oz44K5IOODkeODqg!5e0!3m2!1sja!2sjp!4v1657169835058!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470398.2154921685!2d-43.72616880386343!3d-22.913885060996215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2z44OW44Op44K444OrIOODquOCquODh-OCuOODo-ODjeOCpOODreW3niDjg6rjgqrjg7vjg4fjg7vjgrjjg6Pjg43jgqTjg60g44Oq44Kq44OH44K444Oj44ON44Kk44Ot!5e0!3m2!1sja!2sjp!4v1657169874063!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3058678848!2d-74.25986068433586!3d40.69714943092583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOODi-ODpeODvOODqOODvOOCr-W3niDjg4vjg6Xjg7zjg6jjg7zjgq8!5e0!3m2!1sja!2sjp!4v1657169925348!5m2!1sja!2sjp",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2739983834!2d-118.69191522904836!3d34.020161318428556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z44Ki44Oh44Oq44Kr5ZCI6KGG5Zu9IOOCq-ODquODleOCqeODq-ODi-OCouW3niDjg63jgrXjg7Pjgrzjg6vjgrk!5e0!3m2!1sja!2sjp!4v1657169956986!5m2!1sja!2sjp"
];

let weatherMoji = [
  '晴',
  '曇',
  '雨',
  '雪',
  '雲',
  '霧'
];

let weatherI = [
  'https://1.bp.blogspot.com/-AxuNsAvZ2ok/VJF-8n1wSXI/AAAAAAAApxA/eDGFHGN0Ll8/s800/sky_line01_sun.png',
  'https://3.bp.blogspot.com/-ZpdoT0bJHb8/VJF-8iGYjSI/AAAAAAAApxE/NQBlmRXos9w/s800/sky_line03_cloud.png',
  'https://2.bp.blogspot.com/-LwXCQzWfu1E/VJF--kJTClI/AAAAAAAApxU/ETc38diXKP4/s800/sky_line06_rain.png',
  'https://1.bp.blogspot.com/-th4FJ61uktg/VJF-_RykxPI/AAAAAAAApxg/dWB9tqNLKqw/s800/sky_line08_snow.png',
  'https://3.bp.blogspot.com/-ZpdoT0bJHb8/VJF-8iGYjSI/AAAAAAAApxE/NQBlmRXos9w/s800/sky_line03_cloud.png',
  'https://3.bp.blogspot.com/-ZpdoT0bJHb8/VJF-8iGYjSI/AAAAAAAApxE/NQBlmRXos9w/s800/sky_line03_cloud.png'
];

let flagUrl = [
  'https://4.bp.blogspot.com/-t3VS4edwqm0/U2s6bGt9G_I/AAAAAAAAgF4/LHhZkPETLgc/s800/Egypt.png',
  'https://1.bp.blogspot.com/-4sFgu-DEXCA/U2tIfMudQgI/AAAAAAAAgcU/5djnQvGUjmk/s800/Russia.png',
  'https://2.bp.blogspot.com/-Ex55uN1wPgA/U2s6mSqc7oI/AAAAAAAAgJ8/Mj0lhQrjdhA/s800/South-Africa.png',
  'https://2.bp.blogspot.com/-DTdXmcwA83Y/U2tHcYE6LdI/AAAAAAAAgMw/d5FGVyWWM_U/s800/China.png',
  'https://2.bp.blogspot.com/-HcYwPkNFxJY/U2tHgvzDD6I/AAAAAAAAgOc/AVd1W_9E1xo/s800/Japan.png',
  'https://2.bp.blogspot.com/-MbBCMYloDFA/U2tHoW9HZ5I/AAAAAAAAgQw/VJiFmGkTuko/s800/Singapore.png',
  'https://1.bp.blogspot.com/-XdwTIbtRVcM/U2tIXlOKG4I/AAAAAAAAgZw/qle7yN_5Scs/s800/Australia.png',
  'https://4.bp.blogspot.com/-cmir50xmDKc/U2tIoZdlayI/AAAAAAAAgfY/2HJDsGA9fsE/s800/United-Kingdom.png',
  'https://4.bp.blogspot.com/-G-oVDy6V_9U/U2tIHjbzTwI/AAAAAAAAgUk/NKx_-CLe2Rw/s800/France.png',
  'https://1.bp.blogspot.com/-Tej1BcRRzXA/U2tJ03Dw4pI/AAAAAAAAggs/JA_urjo5_nc/s800/Brazil.png',
  'https://4.bp.blogspot.com/-LzZwHtzb0Ec/U2tInZJR-yI/AAAAAAAAgfU/h3d6BYuqUEs/s800/United-States-of-America.png',
  'https://4.bp.blogspot.com/-LzZwHtzb0Ec/U2tInZJR-yI/AAAAAAAAgfU/h3d6BYuqUEs/s800/United-States-of-America.png'
]

let dataId;
let cityName;

document.querySelector('button#Cairo').addEventListener('click', printC);
document.querySelector('button#Moscow').addEventListener('click', printM);
document.querySelector('button#Johannesburg').addEventListener('click', printJ);
document.querySelector('button#Beijing').addEventListener('click', printB);
document.querySelector('button#Tokyo').addEventListener('click', printT);
document.querySelector('button#Singapore').addEventListener('click', printSi);
document.querySelector('button#Sydney').addEventListener('click', printSy);
document.querySelector('button#London').addEventListener('click', printLon);
document.querySelector('button#Paris').addEventListener('click', printP);
document.querySelector('button#RiodeJaneiro').addEventListener('click', printR);
document.querySelector('button#NewYork').addEventListener('click', printN);
document.querySelector('button#LosAngeles').addEventListener('click', printLos);

function printC() {
  dataId = Math.floor(document.querySelector('button#Cairo').value);
  cityName = 'カイロ';
  sendRequest();
}
function printM() {
  dataId = Math.floor(document.querySelector('button#Moscow').value);
  cityName = 'モスクワ';
  sendRequest();
}
function printJ() {
  dataId = Math.floor(document.querySelector('button#Johannesburg').value);
  cityName = 'ヨハネスブルグ';
  sendRequest();
}
function printB() {
  dataId = Math.floor(document.querySelector('button#Beijing').value);
  cityName = '北京';
  sendRequest();
}
function printT() {
  dataId = Math.floor(document.querySelector('button#Tokyo').value);
  cityName = '東京';
  sendRequest();
}
function printSi() {
  dataId = Math.floor(document.querySelector('button#Singapore').value);
  cityName = 'シンガポール';
  sendRequest();
}
function printSy() {
  dataId = Math.floor(document.querySelector('button#Sydney').value);
  cityName = 'シドニー';
  sendRequest();
}
function printLon() {
  dataId = Math.floor(document.querySelector('button#London').value);
  cityName = 'ロンドン';
  sendRequest();
}
function printP() {
  dataId = Math.floor(document.querySelector('button#Paris').value);
  cityName = 'パリ';
  sendRequest();
}
function printR() {
  dataId = Math.floor(document.querySelector('button#RiodeJaneiro').value);
  cityName = 'リオデジャネイロ';
  sendRequest();
}
function printN() {
  dataId = Math.floor(document.querySelector('button#NewYork').value);
  cityName = 'ニューヨーク';
  sendRequest();
}
function printLos() {
  dataId = Math.floor(document.querySelector('button#LosAngeles').value);
  cityName = 'ロサンゼルス';
  sendRequest();
}

function print(resp) {

  // サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  console.log(data);

  let printData = [
    cityName, 
    data.weather[0].description, 
    data.main.temp_max, 
    data.main.temp_min, 
    data.main.humidity, 
    data.wind.speed
  ];
  
  let count = 0;
  let urlM;
  let urlI;
  let urlF;

  for(let i=0; i<itemBefore.length; i++) {
    console.log(itemBefore[i] + '：' + printData[i] + itemAfter[i]);
  }
  
  for(let i=0; i<itemBefore.length; i++) {
    let th = document.querySelector('th#el' + i);
    console.log(th);
    th.textContent = printData[i] + itemAfter[i];
  }

  for(let o of mapUrlId) {
    if(dataId === o) {
      urlM = mapUrl[count];
      urlF = flagUrl[count];
      break;
    }
    count = count + 1;
  }

  for(let i = 0; i<weatherMoji.length; i++) {
    if(-1 < data.weather[0].description.indexOf(weatherMoji[i])) {
      urlI = weatherI[i];
    }
  }
  document.querySelector('iframe').setAttribute('src', urlM);
  document.querySelector('img#weahter').setAttribute('src', urlI);
  document.querySelector('img#flag').setAttribute('src', urlF);
}

// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + dataId + '.json';

	// 通信開始
	axios.get(url)
		.then(print)
		.catch(showError)
		.then(finish);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}