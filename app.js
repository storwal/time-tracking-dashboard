const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

const workButton = document.getElementById("workButton");
  const workTime = document.querySelector(".work-time");
  const workDaily = document.getElementById("workDaily");
  const workWeekly = document.getElementById("workWeekly");
  const workMonthly = document.getElementById("workMonthly");
  const workH2 = document.querySelector(".work-h2");
  const workH3 = document.querySelector(".work-h3");

  const playButton = document.getElementById("playButton");
  const playTime = document.querySelector(".play-time");
  const playDaily = document.getElementById("playDaily");
  const playWeekly = document.getElementById("playWeekly");
  const playMonthly = document.getElementById("playMonthly");
  const playH2 = document.querySelector(".play-h2");
  const playH3 = document.querySelector(".play-h3");

  const studyButton = document.getElementById("studyButton");
  const studyTime = document.querySelector(".study-time");
  const studyDaily = document.getElementById("studyDaily");
  const studyWeekly = document.getElementById("studyWeekly");
  const studyMonthly = document.getElementById("studyMonthly");
  const studyH2 = document.querySelector(".study-h2");
  const studyH3 = document.querySelector(".study-h3");

  const exerciseButton = document.getElementById("exerciseButton");
  const exerciseTime = document.querySelector(".exercise-time");
  const exerciseDaily = document.getElementById("exerciseDaily");
  const exerciseWeekly = document.getElementById("exerciseWeekly");
  const exerciseMonthly = document.getElementById("exerciseMonthly");
  const exerciseH2 = document.querySelector(".exercise-h2");
  const exerciseH3 = document.querySelector(".exercise-h3");

  const socialButton = document.getElementById("socialButton");
  const socialTime = document.querySelector(".social-time");
  const socialDaily = document.getElementById("socialDaily");
  const socialWeekly = document.getElementById("socialWeekly");
  const socialMonthly = document.getElementById("socialMonthly");
  const socialH2 = document.querySelector(".social-h2");
  const socialH3 = document.querySelector(".social-h3");

  const selfButton = document.getElementById("selfButton");
  const selfTime = document.querySelector(".self-time");
  const selfDaily = document.getElementById("selfDaily");
  const selfWeekly = document.getElementById("selfWeekly");
  const selfMonthly = document.getElementById("selfMonthly");
  const selfH2 = document.querySelector(".self-h2");
  const selfH3 = document.querySelector(".self-h3");

  
//jeremy time button functions
{
daily.addEventListener("click", function(){
  daily.style.color = "white"
  weekly.style.color = "rgb(223, 234, 255)"
  monthly.style.color = "rgb(223, 234, 255)"

  //work daily changes
  {
  workH2.textContent = "5hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Yesterday - 7hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300";  

  workDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  workDaily.style.color = "black";
  workWeekly.style.color = "rgb(223, 234, 255)"
  workWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workMonthly.style.color = "rgb(223, 234, 255)"
  workMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
}
//play daily changes
{
  playH2.textContent = "1hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Yesterday - 2hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300"; 

  playDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  playDaily.style.color = "black";
  playWeekly.style.color = "rgb(223, 234, 255)"
  playWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playMonthly.style.color = "rgb(223, 234, 255)"
  playMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
}
//study daily changes
{
  studyDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  studyDaily.style.color = "black";
  studyWeekly.style.color = "rgb(223, 234, 255)"
  studyWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  studyMonthly.style.color = "rgb(223, 234, 255)"
  studyMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  studyH2.textContent = "0hrs";
  studyH2.style.fontSize = "50px";
  studyH2.style.color = "white";
  studyH2.style.fontWeight = "300"; 
  studyH3.textContent = "Yesterday - 1hrs"
  studyH3.style.fontSize = "14px";
  studyH3.style.color = "hsl(236, 100%, 87%)"
  studyH3.style.fontWeight = "300";   
}
//exercise daily changes
{
  exerciseDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  exerciseDaily.style.color = "black";
  exerciseWeekly.style.color = "rgb(223, 234, 255)"
  exerciseWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  exerciseMonthly.style.color = "rgb(223, 234, 255)"
  exerciseMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  exerciseH2.textContent = "1hrs";
  exerciseH2.style.fontSize = "50px";
  exerciseH2.style.color = "white";
  exerciseH2.style.fontWeight = "300"; 
  exerciseH3.textContent = "Yesterday - 1hrs"
  exerciseH3.style.fontSize = "14px";
  exerciseH3.style.color = "hsl(236, 100%, 87%)"
  exerciseH3.style.fontWeight = "300";   
}
//social daily changes
{
  socialDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  socialDaily.style.color = "black";
  socialWeekly.style.color = "rgb(223, 234, 255)"
  socialWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  socialMonthly.style.color = "rgb(223, 234, 255)"
  socialMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  socialH2.textContent = "1hrs";
  socialH2.style.fontSize = "50px";
  socialH2.style.color = "white";
  socialH2.style.fontWeight = "300"; 
  socialH3.textContent = "Yesterday - 3hrs"
  socialH3.style.fontSize = "14px";
  socialH3.style.color = "hsl(236, 100%, 87%)"
  socialH3.style.fontWeight = "300";   
}
//self care daily changes
{
  selfDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  selfDaily.style.color = "black";
  selfWeekly.style.color = "rgb(223, 234, 255)"
  selfWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  selfMonthly.style.color = "rgb(223, 234, 255)"
  selfMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  selfH2.textContent = "0hrs";
  selfH2.style.fontSize = "50px";
  selfH2.style.color = "white";
  selfH2.style.fontWeight = "300"; 
  selfH3.textContent = "Yesterday - 1hrs"
  selfH3.style.fontSize = "14px";
  selfH3.style.color = "hsl(236, 100%, 87%)"
  selfH3.style.fontWeight = "300";   
}
})

weekly.addEventListener("click", function(){
  weekly.style.color = "white"
  daily.style.color = "rgb(223, 234, 255)"
  monthly.style.color = "rgb(223, 234, 255)"

  //work weekly changes
  {
  workH2.textContent = "32hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Previous week - 36hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300"; 

  workDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  workDaily.style.color = "rgb(223, 234, 255)";
  workWeekly.style.color = "black"
  workWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  workMonthly.style.color = "rgb(223, 234, 255)"
  workMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
}
//play weekly changes
{
  playH2.textContent = "10hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Previous week - 8hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300"; 

  playDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  playDaily.style.color = "rgb(223, 234, 255)";
  playWeekly.style.color = "black"
  playWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  playMonthly.style.color = "rgb(223, 234, 255)"
  playMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
}
//study weekly changes
{
  studyDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  studyDaily.style.color = "rgb(223, 234, 255)";
  studyWeekly.style.color = "black"
  studyWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  studyMonthly.style.color = "rgb(223, 234, 255)"
  studyMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  studyH2.textContent = "4hrs";
  studyH2.style.fontSize = "50px";
  studyH2.style.color = "white";
  studyH2.style.fontWeight = "300"; 
  studyH3.textContent = "Previous week - 7hrs"
  studyH3.style.fontSize = "14px";
  studyH3.style.color = "hsl(236, 100%, 87%)"
  studyH3.style.fontWeight = "300";   
}
//exercise weekly changes
{
  exerciseDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  exerciseDaily.style.color = "rgb(223, 234, 255)";
  exerciseWeekly.style.color = "black"
  exerciseWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  exerciseMonthly.style.color = "rgb(223, 234, 255)"
  exerciseMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  exerciseH2.textContent = "4hrs";
  exerciseH2.style.fontSize = "50px";
  exerciseH2.style.color = "white";
  exerciseH2.style.fontWeight = "300"; 
  exerciseH3.textContent = "Previous week - 5hrs"
  exerciseH3.style.fontSize = "14px";
  exerciseH3.style.color = "hsl(236, 100%, 87%)"
  exerciseH3.style.fontWeight = "300";  
}
//social weekly changes
{
  socialDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  socialDaily.style.color = "rgb(223, 234, 255)";
  socialWeekly.style.color = "black"
  socialWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  socialMonthly.style.color = "rgb(223, 234, 255)"
  socialMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  socialH2.textContent = "5hrs";
  socialH2.style.fontSize = "50px";
  socialH2.style.color = "white";
  socialH2.style.fontWeight = "300"; 
  socialH3.textContent = "Previous week - 10hrs"
  socialH3.style.fontSize = "14px";
  socialH3.style.color = "hsl(236, 100%, 87%)"
  socialH3.style.fontWeight = "300";   
}
//self care weekly changes
{
  selfDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  selfDaily.style.color = "rgb(223, 234, 255)";
  selfWeekly.style.color = "black"
  selfWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  selfMonthly.style.color = "rgb(223, 234, 255)"
  selfMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  selfH2.textContent = "2hrs";
  selfH2.style.fontSize = "50px";
  selfH2.style.color = "white";
  selfH2.style.fontWeight = "300"; 
  selfH3.textContent = "Previous week - 2hrs"
  selfH3.style.fontSize = "14px";
  selfH3.style.color = "hsl(236, 100%, 87%)"
  selfH3.style.fontWeight = "300";   
}
})

monthly.addEventListener("click", function(){
  monthly.style.color = "white"
  daily.style.color = "rgb(223, 234, 255)"
  weekly.style.color = "rgb(223, 234, 255)"

  //work monthly changes
  {
  workH2.textContent = "103hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Previous month - 128hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300"; 

  workDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  workDaily.style.color = "rgb(223, 234, 255)";
  workWeekly.style.color = "rgb(223, 234, 255)"
  workWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workMonthly.style.color = "black"
  workMonthly.style.backgroundColor = "rgb(223, 234, 255)"
}
//play monthly changes
{
  playH2.textContent = "23hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Previous month - 29hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300";   

  playDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  playDaily.style.color = "rgb(223, 234, 255)";
  playWeekly.style.color = "rgb(223, 234, 255)"
  playWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playMonthly.style.color = "black"
  playMonthly.style.backgroundColor = "rgb(223, 234, 255)"
}
//study monthly changes
{
  studyDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  studyDaily.style.color = "rgb(223, 234, 255)";
  studyWeekly.style.color = "rgb(223, 234, 255)"
  studyWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  studyMonthly.style.color = "black"
  studyMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  studyH2.textContent = "13hrs";
  studyH2.style.fontSize = "50px";
  studyH2.style.color = "white";
  studyH2.style.fontWeight = "300"; 
  studyH3.textContent = "Previous month - 19hrs"
  studyH3.style.fontSize = "14px";
  studyH3.style.color = "hsl(236, 100%, 87%)"
  studyH3.style.fontWeight = "300";   
}
//exercise monthly changes
{
  exerciseDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  exerciseDaily.style.color = "rgb(223, 234, 255)";
  exerciseWeekly.style.color = "rgb(223, 234, 255)"
  exerciseWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  exerciseMonthly.style.color = "black"
  exerciseMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  exerciseH2.textContent = "11hrs";
  exerciseH2.style.fontSize = "50px";
  exerciseH2.style.color = "white";
  exerciseH2.style.fontWeight = "300"; 
  exerciseH3.textContent = "Previous month - 18hrs"
  exerciseH3.style.fontSize = "14px";
  exerciseH3.style.color = "hsl(236, 100%, 87%)"
  exerciseH3.style.fontWeight = "300";  
}
//social monthly changes
{
  socialDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  socialDaily.style.color = "rgb(223, 234, 255)";
  socialWeekly.style.color = "rgb(223, 234, 255)"
  socialWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  socialMonthly.style.color = "black"
  socialMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  socialH2.textContent = "21hrs";
  socialH2.style.fontSize = "50px";
  socialH2.style.color = "white";
  socialH2.style.fontWeight = "300"; 
  socialH3.textContent = "Previous month - 23hrs"
  socialH3.style.fontSize = "14px";
  socialH3.style.color = "hsl(236, 100%, 87%)"
  socialH3.style.fontWeight = "300";   
}
//self care monthly changes
{
  selfDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  selfDaily.style.color = "rgb(223, 234, 255)";
  selfWeekly.style.color = "rgb(223, 234, 255)"
  selfWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  selfMonthly.style.color = "black"
  selfMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  selfH2.textContent = "7hrs";
  selfH2.style.fontSize = "50px";
  selfH2.style.color = "white";
  selfH2.style.fontWeight = "300"; 
  selfH3.textContent = "Previous month - 11hrs"
  selfH3.style.fontSize = "14px";
  selfH3.style.color = "hsl(236, 100%, 87%)"
  selfH3.style.fontWeight = "300";   
}
})
}



//work box
{ 
  


workButton.addEventListener("click", function(){ 
if (workTime.classList.contains("visible")){
  workTime.classList.remove("visible")
  workTime.style.display = "none";
} else {
  workTime.classList.add("visible") 
  workTime.style.display = "block"; 
}
})

workDaily.addEventListener("click", function(){
  workDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  workDaily.style.color = "black";
  workWeekly.style.color = "rgb(223, 234, 255)"
  workWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workMonthly.style.color = "rgb(223, 234, 255)"
  workMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workH2.textContent = "5hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Yesterday - 7hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300"; 
});

workWeekly.addEventListener("click", function(){
  workDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  workDaily.style.color = "rgb(223, 234, 255)";
  workWeekly.style.color = "black"
  workWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  workMonthly.style.color = "rgb(223, 234, 255)"
  workMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workH2.textContent = "32hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Previous week - 36hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300"; 
});

workMonthly.addEventListener("click", function(){
  workDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  workDaily.style.color = "rgb(223, 234, 255)";
  workWeekly.style.color = "rgb(223, 234, 255)"
  workWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  workMonthly.style.color = "black"
  workMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  workH2.textContent = "103hrs";
  workH2.style.fontSize = "50px";
  workH2.style.color = "white";
  workH2.style.fontWeight = "300"; 
  workH3.textContent = "Previous month - 128hrs"
  workH3.style.fontSize = "14px";
  workH3.style.color = "hsl(236, 100%, 87%)"
  workH3.style.fontWeight = "300"; 
});
}


//play box
{


playButton.addEventListener("click", function(){ 
  if (playTime.classList.contains("visible")){
    playTime.classList.remove("visible")
    playTime.style.display = "none";
  } else {
    playTime.classList.add("visible") 
    playTime.style.display = "block"; 
  }
  })

playDaily.addEventListener("click", function(){
  playDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
  playDaily.style.color = "black";
  playWeekly.style.color = "rgb(223, 234, 255)"
  playWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playMonthly.style.color = "rgb(223, 234, 255)"
  playMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playH2.textContent = "1hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Yesterday - 2hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300"; 
});

playWeekly.addEventListener("click", function(){
  playDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  playDaily.style.color = "rgb(223, 234, 255)";
  playWeekly.style.color = "black"
  playWeekly.style.backgroundColor = "rgb(223, 234, 255)"
  playMonthly.style.color = "rgb(223, 234, 255)"
  playMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playH2.textContent = "10hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Previous week - 8hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300"; 
});

playMonthly.addEventListener("click", function(){
  playDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
  playDaily.style.color = "rgb(223, 234, 255)";
  playWeekly.style.color = "rgb(223, 234, 255)"
  playWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
  playMonthly.style.color = "black"
  playMonthly.style.backgroundColor = "rgb(223, 234, 255)"
  playH2.textContent = "23hrs";
  playH2.style.fontSize = "50px";
  playH2.style.color = "white";
  playH2.style.fontWeight = "300"; 
  playH3.textContent = "Previous month - 29hrs"
  playH3.style.fontSize = "14px";
  playH3.style.color = "hsl(236, 100%, 87%)"
  playH3.style.fontWeight = "300"; 
});
}


//study box
{


  studyButton.addEventListener("click", function(){ 
    if (studyTime.classList.contains("visible")){
      studyTime.classList.remove("visible")
      studyTime.style.display = "none";
    } else {
      studyTime.classList.add("visible") 
      studyTime.style.display = "block"; 
    }
    })
  
  studyDaily.addEventListener("click", function(){
    studyDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
    studyDaily.style.color = "black";
    studyWeekly.style.color = "rgb(223, 234, 255)"
    studyWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    studyMonthly.style.color = "rgb(223, 234, 255)"
    studyMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    studyH2.textContent = "0hrs";
    studyH2.style.fontSize = "50px";
    studyH2.style.color = "white";
    studyH2.style.fontWeight = "300"; 
    studyH3.textContent = "Yesterday - 1hrs"
    studyH3.style.fontSize = "14px";
    studyH3.style.color = "hsl(236, 100%, 87%)"
    studyH3.style.fontWeight = "300"; 
  });
  
  studyWeekly.addEventListener("click", function(){
    studyDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    studyDaily.style.color = "rgb(223, 234, 255)";
    studyWeekly.style.color = "black"
    studyWeekly.style.backgroundColor = "rgb(223, 234, 255)"
    studyMonthly.style.color = "rgb(223, 234, 255)"
    studyMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    studyH2.textContent = "4hrs";
    studyH2.style.fontSize = "50px";
    studyH2.style.color = "white";
    studyH2.style.fontWeight = "300"; 
    studyH3.textContent = "Previous week - 7hrs"
    studyH3.style.fontSize = "14px";
    studyH3.style.color = "hsl(236, 100%, 87%)"
    studyH3.style.fontWeight = "300"; 
  });
  
  studyMonthly.addEventListener("click", function(){
    studyDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    studyDaily.style.color = "rgb(223, 234, 255)";
    studyWeekly.style.color = "rgb(223, 234, 255)"
    studyWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    studyMonthly.style.color = "black"
    studyMonthly.style.backgroundColor = "rgb(223, 234, 255)"
    studyH2.textContent = "13hrs";
    studyH2.style.fontSize = "50px";
    studyH2.style.color = "white";
    studyH2.style.fontWeight = "300"; 
    studyH3.textContent = "Previous month - 19hrs"
    studyH3.style.fontSize = "14px";
    studyH3.style.color = "hsl(236, 100%, 87%)"
    studyH3.style.fontWeight = "300"; 
  });
}


//exercie box
{


  exerciseButton.addEventListener("click", function(){ 
    if (exerciseTime.classList.contains("visible")){
      exerciseTime.classList.remove("visible")
      exerciseTime.style.display = "none";
    } else {
      exerciseTime.classList.add("visible") 
      exerciseTime.style.display = "block"; 
    }
    })
  
    exerciseDaily.addEventListener("click", function(){
    exerciseDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
    exerciseDaily.style.color = "black";
    exerciseWeekly.style.color = "rgb(223, 234, 255)"
    exerciseWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    exerciseMonthly.style.color = "rgb(223, 234, 255)"
    exerciseMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    exerciseH2.textContent = "1hrs";
    exerciseH2.style.fontSize = "50px";
    exerciseH2.style.color = "white";
    exerciseH2.style.fontWeight = "300"; 
    exerciseH3.textContent = "Yesterday - 1hrs"
    exerciseH3.style.fontSize = "14px";
    exerciseH3.style.color = "hsl(236, 100%, 87%)"
    exerciseH3.style.fontWeight = "300"; 
  });
  
  exerciseWeekly.addEventListener("click", function(){
    exerciseDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    exerciseDaily.style.color = "rgb(223, 234, 255)";
    exerciseWeekly.style.color = "black"
    exerciseWeekly.style.backgroundColor = "rgb(223, 234, 255)"
    exerciseMonthly.style.color = "rgb(223, 234, 255)"
    exerciseMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    exerciseH2.textContent = "4hrs";
    exerciseH2.style.fontSize = "50px";
    exerciseH2.style.color = "white";
    exerciseH2.style.fontWeight = "300"; 
    exerciseH3.textContent = "Previous week - 5hrs"
    exerciseH3.style.fontSize = "14px";
    exerciseH3.style.color = "hsl(236, 100%, 87%)"
    exerciseH3.style.fontWeight = "300"; 
  });
  
  exerciseMonthly.addEventListener("click", function(){
    exerciseDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    exerciseDaily.style.color = "rgb(223, 234, 255)";
    exerciseWeekly.style.color = "rgb(223, 234, 255)"
    exerciseWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    exerciseMonthly.style.color = "black"
    exerciseMonthly.style.backgroundColor = "rgb(223, 234, 255)"
    exerciseH2.textContent = "11hrs";
    exerciseH2.style.fontSize = "50px";
    exerciseH2.style.color = "white";
    exerciseH2.style.fontWeight = "300"; 
    exerciseH3.textContent = "Previous month - 18hrs"
    exerciseH3.style.fontSize = "14px";
    exerciseH3.style.color = "hsl(236, 100%, 87%)"
    exerciseH3.style.fontWeight = "300"; 
  });
}


//social box
{


  socialButton.addEventListener("click", function(){ 
    if (socialTime.classList.contains("visible")){
      socialTime.classList.remove("visible")
      socialTime.style.display = "none";
    } else {
      socialTime.classList.add("visible") 
      socialTime.style.display = "block"; 
    }
    })
  
    socialDaily.addEventListener("click", function(){
    socialDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
    socialDaily.style.color = "black";
    socialWeekly.style.color = "rgb(223, 234, 255)"
    socialWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    socialMonthly.style.color = "rgb(223, 234, 255)"
    socialMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    socialH2.textContent = "1hrs";
    socialH2.style.fontSize = "50px";
    socialH2.style.color = "white";
    socialH2.style.fontWeight = "300"; 
    socialH3.textContent = "Yesterday - 3hrs"
    socialH3.style.fontSize = "14px";
    socialH3.style.color = "hsl(236, 100%, 87%)"
    socialH3.style.fontWeight = "300"; 
  });
  
  socialWeekly.addEventListener("click", function(){
    socialDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    socialDaily.style.color = "rgb(223, 234, 255)";
    socialWeekly.style.color = "black"
    socialWeekly.style.backgroundColor = "rgb(223, 234, 255)"
    socialMonthly.style.color = "rgb(223, 234, 255)"
    socialMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    socialH2.textContent = "5hrs";
    socialH2.style.fontSize = "50px";
    socialH2.style.color = "white";
    socialH2.style.fontWeight = "300"; 
    socialH3.textContent = "Previous week - 10hrs"
    socialH3.style.fontSize = "14px";
    socialH3.style.color = "hsl(236, 100%, 87%)"
    socialH3.style.fontWeight = "300"; 
  });
  
  socialMonthly.addEventListener("click", function(){
    socialDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    socialDaily.style.color = "rgb(223, 234, 255)";
    socialWeekly.style.color = "rgb(223, 234, 255)"
    socialWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    socialMonthly.style.color = "black"
    socialMonthly.style.backgroundColor = "rgb(223, 234, 255)"
    socialH2.textContent = "21hrs";
    socialH2.style.fontSize = "50px";
    socialH2.style.color = "white";
    socialH2.style.fontWeight = "300"; 
    socialH3.textContent = "Previous month - 23hrs"
    socialH3.style.fontSize = "14px";
    socialH3.style.color = "hsl(236, 100%, 87%)"
    socialH3.style.fontWeight = "300"; 
  });
}


//self care box
{


  selfButton.addEventListener("click", function(){ 
    if (selfTime.classList.contains("visible")){
      selfTime.classList.remove("visible")
      selfTime.style.display = "none";
    } else {
      selfTime.classList.add("visible") 
      selfTime.style.display = "block"; 
    }
    })
  
    selfDaily.addEventListener("click", function(){
    selfDaily.style.backgroundColor = "rgb(223, 234, 255, 1)";
    selfDaily.style.color = "black";
    selfWeekly.style.color = "rgb(223, 234, 255)"
    selfWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    selfMonthly.style.color = "rgb(223, 234, 255)"
    selfMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    selfH2.textContent = "0hrs";
    selfH2.style.fontSize = "50px";
    selfH2.style.color = "white";
    selfH2.style.fontWeight = "300"; 
    selfH3.textContent = "Yesterday - 1hrs"
    selfH3.style.fontSize = "14px";
    selfH3.style.color = "hsl(236, 100%, 87%)"
    selfH3.style.fontWeight = "300"; 
  });
  
  selfWeekly.addEventListener("click", function(){
    selfDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    selfDaily.style.color = "rgb(223, 234, 255)";
    selfWeekly.style.color = "black"
    selfWeekly.style.backgroundColor = "rgb(223, 234, 255)"
    selfMonthly.style.color = "rgb(223, 234, 255)"
    selfMonthly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    selfH2.textContent = "2hrs";
    selfH2.style.fontSize = "50px";
    selfH2.style.color = "white";
    selfH2.style.fontWeight = "300"; 
    selfH3.textContent = "Previous week - 2hrs"
    selfH3.style.fontSize = "14px";
    selfH3.style.color = "hsl(236, 100%, 87%)"
    selfH3.style.fontWeight = "300"; 
  });
  
  selfMonthly.addEventListener("click", function(){
    selfDaily.style.backgroundColor = "rgba(255, 0, 0, 0)";
    selfDaily.style.color = "rgb(223, 234, 255)";
    selfWeekly.style.color = "rgb(223, 234, 255)"
    selfWeekly.style.backgroundColor = "rgba(255, 0, 0, 0)"
    selfMonthly.style.color = "black"
    selfMonthly.style.backgroundColor = "rgb(223, 234, 255)"
    selfH2.textContent = "7hrs";
    selfH2.style.fontSize = "50px";
    selfH2.style.color = "white";
    selfH2.style.fontWeight = "300"; 
    selfH3.textContent = "Previous month - 11hrs"
    selfH3.style.fontSize = "14px";
    selfH3.style.color = "hsl(236, 100%, 87%)"
    selfH3.style.fontWeight = "300"; 
  });
}