
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

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
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
            deadline.innerHTML = `<h4 class="expired">Sorry, This giveaway has Expired</h4>`
        }
    }
    let countdown = setInterval(getRemaindingTime, 1000)
    getRemaindingTime()

})