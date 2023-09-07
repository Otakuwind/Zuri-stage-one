
    function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getUTCDay()];
        document.getElementById("currentDayOfTheWeek").textContent = dayOfWeek;
    }

  
    function updateUTCTime() {
        const currentTime = new Date().toUTCString();
        document.getElementById("currentUTCTime").textContent = currentTime;
    }

    function setTrack() {
        const track = "Frontend";
        document.getElementById("myTrack").textContent = "Track: " + track;
    }

    
    updateDayOfWeek();
    updateUTCTime();
    setTrack();

