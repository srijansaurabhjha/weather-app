const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
 const datahide=document.querySelector('.low_layer');


const getInfo = async (e) => {
  e.preventDefault();
  let city = cityName.value;
  if (city === "") {
    city_name.innerText = `plz write the city name`;
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe721af563c97de72221f0f818d7921c`;
      const response = await fetch(url); //wait until data is received
      const data = await response.json();
      const arr = [data];
      city_name.innerText = `${arr[0].name},${arr[0].sys.country}`;
      temp.innerText = arr[0].main.temp;
      //   temp_status.innerText=arr[0].weather[0].main;

      const tempMood = arr[0].weather[0].main;

      if (tempMood === "Clear") {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:#F9D923'></i>";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#DAEAF1'></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#47B5FF'></i>";
      }else {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:#F9D923'></i>";
      }

        datahide.classList.remove('data_hide');
    } catch {
      city_name.innerText = `plz write the city name once again`;
      datahide.classList.add('data_hide');
    }
  }
};

submitBtn.addEventListener("click", getInfo);

//api key -> fe721af563c97de72221f0f818d7921c

// api call-> https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}



const day=document.getElementById("day");
const date=document.getElementById("date");

const currday=()=>{
  let week =new Array(7);
  week[0]="Monday";
  week[1]="Tuesday";
  week[2]="Wednesday";
  week[3]="Thursday";
  week[4]="Friday";
  week[5]="Saturday";
  week[6]="Sunday";

  let currDate=new Date();
  let d=week[currDate.getDay()];
  return d;
}

day.innerText=currday();

let today=new Date();
date.innerText=today.toLocaleDateString();


//Task left
//Adding date
//Making site responsive
//Adding it to github