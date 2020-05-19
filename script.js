navigator.getBattery().then(function(battery){
     function updateAllBatteryInfo(){
         updateChargeInfo();
         updateLevelInfo();
         updateChargingInfo();
         updateDischarginInfo();
     }
     
     updateAllBatteryInfo();
    // // подключение к сети
     battery.addEventListener('chargingchange', function(){
        updateChargeInfo();
    });

    function updateChargeInfo(){// возвращает true eсли подключена  зарядка и false если нет
         console.log(battery.charging);
         if (battery.charging){
             document.querySelector('#status').innerHTML = "Заряжается";
             document.querySelector('#battery-level').classList.add('battery-animation'); 
        }
         else {
            document.querySelector('#status').innerHTML = "Разряжается";
            document.querySelector('#battery-level').classList.remove('battery-animation');
        }
    }

     //узнаю состояние заряда в %
    battery.addEventListener('levelchange', updateLevelInfo); 
    function updateLevelInfo(){
        //battery.level - статическое свойство

         console.log(battery.level);
         document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
         document.querySelector('#battery-level').style.width = battery.level * 100 + '%';

    }

    // автономное время до зарядки
    battery.addEventListener('chargingtimechange', updateChargingInfo);
    
    function updateChargingInfo(){
        //battery.chargingTime - статическое свойство
        document.querySelector('#charging-time').innerHTML = battery.chargingTime;
        console.log(battery.chargingTime);
    }

    battery.addEventListener('dischargingtimechange', updateChargingInfo);
    
    function updateDischarginInfo(){
        //battery.dischargingTime - статическое свойство
        document.querySelector('#discharging-time').innerHTML = battery.dischargingTime;
        
    }
  
    
});