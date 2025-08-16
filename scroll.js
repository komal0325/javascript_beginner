
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


window.addEventListener('DOMContentLoaded', (e) => {

    const date = document.getElementById("date")
    date.innerHTML = new Date().getFullYear()


    const navtoggle = document.querySelector(".nav-toggle")
    const linkscontainer = document.querySelector(".links-cont")
    const links = document.querySelector(".links")

    function resetLinksHeight() {
        if (window.innerWidth > 768) {
            linkscontainer.style.height = "auto"
        } else {
            linkscontainer.style.height = 0
        }
    }


    function onResizeWindow() {
        window.addEventListener("resize", (e) => {
            resetLinksHeight()
        })
    }

    onResizeWindow()

    navtoggle.addEventListener("click", function () {
        // linkscontainer.classList.toggle("show-links")
        const linksheight = links.getBoundingClientRect().height
        const containerheight = linkscontainer.getBoundingClientRect().height
        // console.log({ bool: containerheight === 0 });
        if (containerheight === 0) {
            linkscontainer.style.height = `${linksheight}px`
        } else {
            linkscontainer.style.height = 0
        }
        // console.log(linkscontainer.getBoundingClientRect());
    })


    const navbar = document.querySelector(".nav")
    const toplink = document.querySelector(".top-link")
    const topslink = document.querySelector(".tops-link")

    window.addEventListener("scroll", function () {

        const scrollheight = window.pageYOffset
        const navheight = navbar.getBoundingClientRect().height
        // console.log(navheight)
        if (scrollheight > 0) {
            navbar.classList.add("fixed-nav")
        } else {
            navbar.classList.remove("fixed-nav")
        }

        if (scrollheight > 638) {
            toplink.classList.add("show-link")
        } else {
            toplink.classList.remove("show-link")
        }

        if (scrollheight > 0) {
            topslink.classList.add("show-link")
        } else {
            topslink.classList.remove("show-link")
        }
    })

    const scrolllinks = document.querySelectorAll(".scroll-link")
    scrolllinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const id = e.currentTarget.getAttribute("href").slice(1)
            const element = document.getElementById(id)
            const navheight = navbar.getBoundingClientRect().height
            const containerheight = linkscontainer.getBoundingClientRect().height
            const fixednav = navbar.classList.contains("fixed-nav")
            let position = element.offsetTop - navheight

            if (!fixednav) {
                position = position - navheight
            }

            if (navheight > 82) {
                position = position + containerheight
            }

            window.scrollTo({
                left: 0,
                top: position,
            })
            resetLinksHeight()
            // linkscontainer.style.height = 0
        })
    })

    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabContents = document.querySelectorAll('.tab-content');

    tabHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Remove active class from all headers and contents
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(c => c.classList.add('hidden'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked header and corresponding content
            header.classList.add('active');
            const tabId = header.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
            document.getElementById(tabId).classList.add('active');
            });
    });


    const giveaway = document.querySelector('.giveaway')
    const deadline = document.querySelector('.deadline')
    const items = document.querySelectorAll('.deadline-format h4')

    let tempDate = new Date()
    let tempYear = tempDate.getFullYear()
    let tempMonth = tempDate.getMonth()
    let tempDay = tempDate.getDate()

    const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 11, 30, 0)
    const year = futureDate.getFullYear()
    const hours = futureDate.getHours()
    const minutes = futureDate.getMinutes()

    let month = futureDate.getMonth()
    month = months[month]
    const weekday = weekdays[futureDate.getDay()]
    const xdate = futureDate.getDate()
    giveaway.textContent = `Giveaway Ends on ${weekday}, ${xdate} ${month} ${year}, ${hours}:${minutes}am `

    const futuretime = futureDate.getTime()
    function getRemaindingTime() {
        const today = new Date().getTime()
        const t = futuretime - today
        const oneDay = 24 * 60 * 60 * 1000
        const oneHour = 60 * 60 * 1000
        const oneMinute = 60 * 1000

        let days = t / oneDay
        days = Math.floor(days)
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        const values = [days, hours, minutes, seconds]
        function format(item) {
            if (item < 10) {
                return (item = `0${item}`)
            }
            return item
        }

        items.forEach(function (item, index) {
            item.innerHTML = format(values[index])
        })

        if (t < 0) {
            clearInterval(countdown)
            deadline.innerHTML = `<h4 class="expired text-xl pb-2">Sorry, This giveaway has Expired</h4>`
        }
    }
    let countdown = setInterval(getRemaindingTime, 1000)
    getRemaindingTime()


    // offer logo

    const openBtn = document.getElementById('openBtn');
    const backdrop = document.getElementById('backdrop');
    const closeBtn = document.getElementById('closeBtn');
    const modal = backdrop.querySelector('div[role="document"]');

    function openModal(){
      backdrop.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100');
      modal.classList.remove('translate-y-full');
      modal.classList.add('translate-y-0');
      document.body.classList.add('overflow-hidden');
      document.addEventListener('keydown', onKeyDown);
    }

    function closeModal(){
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100');
      modal.classList.add('translate-y-full');
      modal.classList.remove('translate-y-0');
      setTimeout(() => backdrop.classList.add('invisible'), 300);
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(e){
      if(e.key === 'Escape') closeModal();
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if(e.target === backdrop) closeModal(); });

    // grocery select items
    const alert = document.querySelector(".alert")
    const form = document.querySelector(".grocery-form")
    const grocery = document.querySelector("#grocery")
    const submitBtn = document.querySelector(".submit-btn")
    const container = document.querySelector(".grocery-container")
    const list = document.querySelector(".grocery-list")
    const clearBtn = document.querySelector(".clear-btn")

    // edit option
    let editElement
    let editFlag = false
    let editID = ""

    // submit forms
    form.addEventListener('submit', addItem)
    // clear list
    clearBtn.addEventListener('click', clearItems)
    // display items onload
    window.addEventListener('DOMContentLoaded', setupItems)


    // add items
    function addItem(e) {
        e.preventDefault()
        const value = grocery.value
        const id = new Date().getTime().toString()

        if (value !== "" && !editFlag) {
            const element = document.createElement("article")
            let attr = document.createAttribute("data-id")
            attr.value = id
            element.setAttributeNode(attr)
            element.classList.add("grocery-item")
            element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit text-lg"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash text-lg"></i>
                            </button>
                        </div>`

            const deleteBtn = element.querySelector(".delete-btn")
            deleteBtn.addEventListener("click", deleteItem)
            const editBtn = element.querySelector(".edit-btn")
            editBtn.addEventListener("click", editItem)

            list.appendChild(element)
            displayAlert("item added to the list", "success")
            container.classList.remove("invisible")
            addToLocalStorage(id, value)
            setBackToDefault()
        }
        else if (value !== "" && editFlag) {
            editElement.innerHTML = value
            displayAlert("value changed", "success")
            editLocalStorage(editID, value)
            setBackToDefault()
        }
        else {
            displayAlert("please enter value", "danger")
        }
    }
    // display alert
    function displayAlert(text, action) {
        alert.textContent = text
        alert.classList.add(`alert-${action}`)
        // remove alert
        setTimeout(() => {
            alert.textContent = ""
            alert.classList.remove(`alert-${action}`)
        }, 1500);
    }

    // clear items
    function clearItems() {
        const items = document.querySelectorAll(".grocery-item")
        if (items.length > 0) {
            items.forEach(function (item){
                list.removeChild(item)
            })
        }
        container.classList.add("invisible")
        displayAlert("empty list", "danger")
        setBackToDefault()
        localStorage.removeItem("list")
    }

    // delete items
    function deleteItem(e) {
        const element = e.currentTarget.parentElement.parentElement
        const id = element.dataset.id

        list.removeChild(element)

        if (list.children.length === 0) {
            container.classList.add("invisible")
        }
        displayAlert("item removed", "danger")

        setBackToDefault()

        removeFromLocalStorage(id)
    }


    // edit items
    function editItem(e) {
        const element = e.currentTarget.parentElement.parentElement

        editElement = e.currentTarget.parentElement.previousElementSibling

        grocery.value = editElement.innerHTML
        editFlag = true
        editID = element.dataset.id
        submitBtn.textContent = "edit"
    }
    function setBackToDefault() {
        grocery.value = ""
        editFlag = false
        editID = ""
        submitBtn.textContent = "submit"
    }

    // add local storage

    function addToLocalStorage(id, value) {
        const grocery = { id, value}
        let items = getLocalStorage()
        items.push(grocery)
        localStorage.setItem("list", JSON.stringify(items))
    }

    function getLocalStorage() {
        return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : []
    }

    function removeFromLocalStorage(id) {
        let items = getLocalStorage()

        items = items.filter(function (item){
            if (item.id !== id){
                return item
            }
        })
        localStorage.setItem("list", JSON.stringify(items))
    }

    function editLocalStorage(id, value) {
        // let items = localStorage()

        // items = items.map(function (item){
        //     if(item.id === id){
        //         item.value = value
        //     }
        //     return item
        // })
        // localStorage.setItem("list", JSON.stringify(items))
    }

    // setup LocalStorage.RemoveItem('List')

    function setupItems() {
        let items = getLocalStorage()

        if (items.length > 0) {
            items.forEach(function (item){
                createListItem(item.id, item.value)
            })
            container.classList.remove('invisible')
        }
    }

    function createListItem(id, value){
        const element = document.createElement("article")
        let attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                    <!-- edit btn -->
                    <button type="button" class="edit-btn">
                       <i class="fas fa-edit"></i>
                     </button>
                    <!-- delete btn -->
                    <button type="button" class="delete-btn">
                       <i class="fas fa-trash"></i>
                    </button>
                </div>
                 `;

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    list.appendChild(element)
    }
})