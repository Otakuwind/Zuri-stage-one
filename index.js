
    function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getUTCDay()];
        document.getElementById("currentDayOfTheWeek").textContent = dayOfWeek;
    }

  
    function updateUTCTime() {
         const currentTime = new Date().toUTCString();
            const currentTimeUTC = currentTime.replace("GMT", "UTC"); 
            document.getElementById("currentUTCTime").textContent = currentTimeUTC;
       
    }

    function setTrack() {
        const track = "Frontend";
        document.getElementById("myTrack").textContent = "Track: " + track;
    }

    
        setInterval(updateUTCTime, 1000);

    updateDayOfWeek();
    updateUTCTime();
    setTrack();

