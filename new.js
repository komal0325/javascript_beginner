let count = 0
let countEl = null
let saveEl = null

window.addEventListener("DOMContentLoaded", (e) => {
    saveEl = document.getElementById('save-el')
    countEl = document.getElementById('count-el')
    colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow"]
    btn = document.getElementById("btn")
    color = document.querySelector(".color")
    btn.addEventListener("click", function () {
        randomNumber = getRandomNumber()
        console.log(randomNumber)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    })

    btn = document.getElementById('menu-btn')
    nav = document.getElementById('menu')

    btn.addEventListener('click', function () {
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
    })

    const togglebtn = document.querySelector("#sidebar-toggle")
    const closebtn = document.querySelector("#close-btn")
    const sidebar = document.querySelector(".sidebar")
    const sidebarBg = document.querySelector("#sidebar-bg")
  
    function toogleSiderBar() {
      sidebar.classList.toggle("show-sidebar")
      sidebarBg.classList.toggle("opacity-0")
      sidebarBg.classList.toggle("pointer-events-none")
    }
  
    togglebtn.addEventListener("click", function () {
      toogleSiderBar()
    })
  
    closebtn.addEventListener("click", function () {
      toogleSiderBar()
    })
  
    sidebarBg.addEventListener("click", function () {
      toogleSiderBar()
    })

    const overlay = document.querySelector("#modal-overlay")
    const modal = document.querySelector("#modal-btn")
    const close = document.querySelector("#close-modal")
    // const cont = document.querySelectorAll("#modal-cont")
    const good = document.querySelector("#closed")
    
    function togglemodal() {
      overlay.classList.toggle("open-modal")
    }
  
    // cont.forEach(function (m){
    //   // console.log(m)
    //   const closed = m.querySelector("#close-modal")
    //   // console.log(closed)
    //   closed.addEventListener("click", function (){
    //     togglemodal()
    //     console.log(m)
    //   })
    // })
    
    modal.addEventListener("click", function (){
      togglemodal()
      console.log("opened modal")
    })
  
    close.addEventListener("click", function (){
      togglemodal()
    })
  
    good.addEventListener("click", function (){
      togglemodal()
    })


  const cubes = document.querySelectorAll('.cube');

  cubes.forEach(cube => {
     cube.addEventListener('mousemove', (e) => {
        const rect = cube.getBoundingClientRect();
        const cubeCenterX = rect.left + rect.width / 2;
        const cubeCenterY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = (mouseX - cubeCenterX) / 10;
        const deltaY = (mouseY - cubeCenterY) / 10;

        const rotateX = -deltaY;
        const rotateY = deltaX;

          cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    cube.addEventListener('mouseleave', () => {
        cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  });

  const ques = document.querySelectorAll("#question")

  ques.forEach(function (question){
    const quesbtn = question.querySelector("#question-btn")
    // console.log(quesbtn)

    quesbtn.addEventListener("click", function() {
      ques.forEach(function (item) {
        if (item !== question){
          item.classList.remove("show-text")
        }
      })

      question.classList.toggle("show-text")
    })
  })

  const switchbtn = document.querySelector("#switch-btn") 
  const video = document.querySelector("#video-cont") 

  switchbtn.addEventListener("click", function (){
    if(!switchbtn.classList.contains("slide")){
      switchbtn.classList.add("slide")
      video.pause()
    }
    else{
      switchbtn.classList.remove("slide")
      video.play()
    }
  })

  const preloader = document.querySelector("#preloader")

  window.addEventListener("load", function (){
    preloader.classList.add("hide-preloader")
  })

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

function increment() {
    count += 1
    countEl.textContent = count
}
function decrement() {
    count -= 1
    countEl.textContent = count
}
function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    count = 0
    countEl.textContent = 0
}



