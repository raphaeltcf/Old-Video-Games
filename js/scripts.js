const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function localTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode) {
        toggleDarkMode();
    }
}

localTheme();

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})

class MobileNavbar {
    constructor(mobileMenu, navList , navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind();
    }
    
    handleClick() {
        this.navList.classList.toggle(this.activeClass)
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();