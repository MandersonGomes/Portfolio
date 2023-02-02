class Navbar {
    constructor(mobile, navList, navLinks) {
        this.mobile = document.querySelector(mobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ? (link.style.animation = "") :
            (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    clickEvent() {
        this.mobile.addEventListener('click', this.handleClick);
    }

    init() {
        if(this.mobile){
            this.clickEvent();
        }
        return this;
    }
}

const navbar = new Navbar(
    ".mobile",
    ".nav-list",
    ".nav-list li",
);
navbar.init();