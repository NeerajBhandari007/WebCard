const curdate = document.getElementById("date");
const weathercon = document.getElementById("weathericon");
const temp = document.getElementById("temp");
const drop = document.querySelector(".dropdown");
const outer = document.querySelector(".outer");
const body = document.querySelector("body");

var wurl=`https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=490018c410bdf061f2502114e86afe8b`
var a=document.querySelectorAll('a')
a[0].onclick=()=>{
  var b=a[0].getAttribute('value');
  wurl=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=490018c410bdf061f2502114e86afe8b`
  console.log(b);
  real();
}
a[1].onclick=()=>{
  var b=a[1].getAttribute('value');
  wurl=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=490018c410bdf061f2502114e86afe8b`
  console.log(b);
  real();
}
a[2].onclick=()=>{
  var b=a[2].getAttribute('value');
  wurl=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=490018c410bdf061f2502114e86afe8b`
  console.log(b);
  real();
}
a[3].onclick=()=>{
  var b=a[3].getAttribute('value');
  wurl=`https://api.openweathermap.org/data/2.5/weather?q=${b}&appid=490018c410bdf061f2502114e86afe8b`
  console.log(b);
  real();
}



const getcurrdate = () => {
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  const date = new Date();
  return weekday[date.getDay()];
};
const getcurrtime = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  var monthr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var min = date.getMinutes();
  var hr = date.getHours();
  var b = "AM";
  if (hr >= 12) {
    b = "PM";
  }
  if (hr > 12) {
    hr = hr - 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return ` | ${monthr[month]} ${day} | ${hr}:${min} ${b}`;
};

curdate.innerHTML = getcurrdate() + getcurrtime();

const loc = document.querySelector(".locin");
const te = document.querySelector(".temp");
const mn = document.querySelector(".min_max");
const real = async () => {
  const url =wurl;
  const dataa = await fetch(url);
  let parsedata = await dataa.json();
  let arr = [parsedata];
  console.log(arr[0]);
  loc.innerHTML = `${arr[0].name},${arr[0].sys.country}`;
  te.innerHTML = `${(arr[0].main.temp - 273.15).toFixed(2)} &deg;C`;
  mn.innerHTML = `Min ${(arr[0].main.temp_min - 273.15).toFixed(
    2
  )}&deg;C | Max ${(arr[0].main.temp_max - 273.15).toFixed(2)}&deg;C`;

  const tempstatus = arr[0].weather.main;
  if (tempstatus == "Sunny") {
    weathercon.innerHTML = `<i class="fa-sharp fa-solid fa-sun" style="color: rgb(237, 237, 104)"></i>`;
  } else if (tempstatus == "Clouds") {
    weathercon.innerHTML = `<i class="fa-sharp fa-solid fa-cloud" style="color: rgb(129 137 147)"></i>`;
  } else if (tempstatus == "Rainy") {
    weathercon.innerHTML = `<i class="fa-sharp fa-solid fa-rain" style="color: rgb(94 124 162)"></i>`;
  } else {
    weathercon.innerHTML = `<i class="fa-sharp fa-solid fa-cloud" style="color: rgb(129 137 147)"></i>`;
  }
};
real();
setInterval(() => {
  curdate.innerHTML = getcurrdate() + getcurrtime();
}, 8000);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const card = document.querySelector(".light");
function dark(){
  outer.classList.toggle("dark");
  drop.classList.toggle("dark");
  body.classList.toggle("dark");
  card.classList.toggle("card");
}

