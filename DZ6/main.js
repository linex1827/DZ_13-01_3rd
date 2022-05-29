const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");



const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                console.log(i);
                hideTabContent();
                showTabContent(i);
            }
        });
    }
});

let slideIndex = 0;

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".tabheader__item");
    let sliderSlide = document.querySelectorAll(".tabcontent");
    if (n > slides.length && n > sliderSlide.length) {
        slideIndex += 1;
    }
    if (n < 0) {
        slideIndex = slides.length && slideIndex == sliderSlide.length;
    }
    for (let slide of slides) {
        slide.classList.remove("tabheader__item_active");
    }
    slides[n].classList.add("tabheader__item_active");

    for (let slide of sliderSlide) {
        slide.style.display = "none";
    }
    sliderSlide[slideIndex].style.display = "block";

}

let timer = setInterval(function() {
    slideIndex++; {
        if (slideIndex >= 4) {
            slideIndex = 0
        }
    }
    showSlides(slideIndex);
}, 3000);



const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
    if (event.target == modal) {
        closeModal();
        console.log(event.target);
    }
});

closeModalBtn.addEventListener("click", closeModal);


window.addEventListener("scroll", () => {


    if (window.pageYOffset > 3500) {
        openModal()
    }

})

// form //

const forms = document.querySelectorAll('form')
const message = {
    loading: 'Идет загрузка...',
    success: 'Спасибо, скоро свяжемся !',
    fail: 'Что-то пошло не так'
}

forms.forEach(item => {
    postData(item)
})

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const messageBlock = document.createElement('div')
        messageBlock.textContent = message.loading
        form.append(messageBlock)

        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, i) => {
            object[i] = item
        })


        fetch("server.php", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(object),
            })
            .then((response) => response.text())
            .then(() => {
                messageBlock.textContent = message.success
            })
            .catch(() => {
                messageBlock.textContent = message.fail
            })
            .finally(() => {
                setInterval(() => {
                    messageBlock.remove()
                }, 2000)
            });




    })
}