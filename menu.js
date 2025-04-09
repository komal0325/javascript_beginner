const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./src/img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: 13.99,
    img: "./src/img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: 6.99,
    img: "./src/img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 20.99,
    img: "./src/img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: 22.99,
    img: "./src/img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: 18.99,
    img: "./src/img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 8.99,
    img: "./src/img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: 12.99,
    img: "./src/img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: 16.99,
    img: "./src/img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Bison Steak",
    category: "dinner",
    price: 22.99,
    img: "./src/img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


window.addEventListener("DOMContentLoaded", (e) => {
  // mobile menu
  btn = document.getElementById('menu-btn')
  nav = document.getElementById('menu')
  
  btn.addEventListener('click', function () {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
    })
    // sidebar menu
    const togglebtn = document.querySelector("#sidebar-toggle")
    const closebtn = document.querySelector("#close-btn")
    const sidebar = document.querySelector(".sidebar")
    const sidebarBg = document.querySelector("#sidebar-bg")
    
    function toogleSideBar() {
      sidebar.classList.toggle("show-sidebar")
      sidebarBg.classList.toggle("opacity-0")
      sidebarBg.classList.toggle("pointer-events-none")
    }
    
    togglebtn.addEventListener("click", function () {
      toogleSideBar()
    })
    
    closebtn.addEventListener("click", function () {
      toogleSideBar()
    })
    
    sidebarBg.addEventListener("click", function () {
      toogleSideBar()
    })
    
    const section = document.querySelector("#section-center")
    
    let displaymenu = menu.map(function (item){
      
      return `<article id="menu-item" class="grid gap-x-[1rem] gap-y-[2rem] max-w-96 border-2 border-[#d8ab68] p-3 rounded-2xl">
              <img src="${item.img}"  alt="${item.title}" id="photo" class="object-cover h-[240px] border-[0.25rem] border-[#d8ab68] rounded-3xl">
              <div id="item-info">
               <header class="flex justify-between border-b border-dotted border-[#d8ab68]">
                  <h4 class="mb-2">${item.title}</h4>
                  <h4 id="price" class="mb-2 text-[#ebac4d]">$${item.price}</h4>
                </header>
                <p id="item-text" class="py-2 font-medium" >
                 ${item.desc}
                </p>
                <button class="flex mx-auto my-auto justify-center text-yellow-500 font-bold w-24 h-7 border-2 rounded-xl border-yellow-500 hover:cursor-pointer hover:text-lg hover:w-[7rem] hover:bg-yellow-500 hover:border-transparent hover:rounded-xl hover:text-white transition-all ease-in-out duration-300">Order</button>
             </div>
           </article>`
    })
    displaymenu = displaymenu.join("")
    section.innerHTML = displaymenu

})