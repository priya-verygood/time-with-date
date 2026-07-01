function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours%12;
    hours = hours? hours : 12;
    hours = hours < 10 ? "0"+ hours : hours;
    minutes = minutes < 10 ? "0"+ minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
    let day = now.getDate();
    let month = now.getMonth() + 1; // Months are 0-indexed in JS, so add 1
    const year = now.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('digital-date').textContent = dateString;
}
setInterval(updateTime,100);
updateTime();




    
