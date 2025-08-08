
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
})