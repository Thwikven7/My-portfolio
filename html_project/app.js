const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".control");
const mainContent = document.querySelector(".main-content");

function PageTransitions() {
    // Button Click Active Class
    sectBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Section Switching
            const id = this.dataset.id;
            if (id) {
                sections.forEach((section) => section.classList.remove("active"));
                document.getElementById(id).classList.add("active");
            }
        });
    });
    //TOGGLE THEME
    const themeBtn= document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();
