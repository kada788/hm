<template>
    <div class="container">
        <nav class="nav">
            <div class="weather-date">{{weather.date}}</div>
            <div class="changeCity">切换城市</div>
        </nav>

        <main>
         <div class="weather-city">{{weather.city}}</div>
         <div class="weather-temp">{{weather.temp }}</div>
         <div class="weather-C"><em>{{weather.c}}</em>C</div>
         <div class="detail">
         <span>风力:{{weather.wind}}</span>
         <span>风向:{{weather.direction}}</span>
         <span>空气湿度:{{weather.hum}}</span>
         </div>
         
        </main>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader';
const weather = ref({
    date: new Date().toLocaleDateString(),
    city: '北京',
    temp: 24,
    c: '20',
    wind: '3级',
    direction: '东南风',
    hum: '50%'

})

const init_map = () => {
  AMapLoader.load({
    key: '5b0756265d33f9c1d9926a51fc1bfdcc',
    version: "2.0",
    plugins: ['AMap.CitySearch']
  }).then(AMap => {
    AMap.plugin('AMap.CitySearch', function() {
      let citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          console.log(result.city)
        }
      })
    })
  })
}
// init_map();
// 当组件挂载完成后执行
onMounted(() => {
  init_map();
  setInterval(() => {
    weather.date = new Date().toLocaleString();
  }, 1000)
})
</script>

<style  scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;
}
.nav {
    overflow: auto;
    padding: 10px ;
}
.weather-date {
    float: left;
   
}
.changeCity {
    float: right;
   
    
}
main {
    text-align: center;
}

</style>