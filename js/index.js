



// side menu
$('.openIcon').on('click' , ()=>{
  $('.open').css('left' , '0px')
})
$('.close').on('click' , ()=>{
  $('.open').css('left' , '-250px')
})
// side menu


// singer details
$('.singerBox h2').on('click' , (e)=>{
$(e.target).next().slideToggle()

$('.singerBox div').not($(e.target).next()).slideUp()
})
// singer details




// dashboard

let time = setInterval(() => {
  
let now = new Date().getTime();

let countDate = new Date('2024-07-26').getTime();

let countDown = countDate - now;

let days = Math.floor(countDown / (1000 * 60 * 60 * 24));

let hours = Math.floor((countDown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

let minutes = Math.floor((countDown % (1000 * 60 * 60) / (1000 * 60 )));

let seconds = Math.floor((countDown % (1000 * 60) / (1000)));

displayDashboard(days , hours , minutes , seconds);

}, 1000);


function displayDashboard(days , hours , minutes , seconds){
  let dateBox = `
  <div class="row text-center py-3 px-3">
      
   <div class="col-md-3">
            <div class="days durationBox">
                <p class="fs-2 text-white">${days} D</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="hours durationBox">
                <p class="fs-2 text-white">${hours} h</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="minutes durationBox ">
                <p class="fs-2 text-white">${minutes} m</p>
            </div>
        </div>
        <div class="col-md-3">
            <div class="seconds durationBox">
                <p class="fs-2 text-white">${seconds} s</p>
            </div>
        </div>
  
        </div>
  `

  document.getElementById('duration').innerHTML=dateBox;
}



// dashboard


