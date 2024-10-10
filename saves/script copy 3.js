document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementsByClassName("container")[0];
    const yearBlock = document.getElementsByClassName("year__block")[0];
    const staticNumberSlide = document.getElementsByClassName("static-number")[0];
    const dynamicNumberSlide = document.getElementsByClassName("dynamic-number")[0];
    const sliderWrapper = document.getElementsByClassName("swiper-wrapper")[0];

    const buttons = [
        {
            id: 0,
            years: [1990, 1993],
            name: "Кино",
            slides: [
                {
                    year: 1990,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1991,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1992,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1993,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
        {
            id: 1,
            years: [1994, 1997],
            name: "Литература",
            slides: [
                {
                    year: 1994,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1995,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1996,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1997,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
        {
            id: 2,
            years: [1998, 2003],
            name: "Скульптура",
            slides: [
                {
                    year: 1998,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 1999,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2000,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2001,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2002,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2003,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
        {
            id: 3,
            years: [2004, 2010],
            name: "Архитектура",
            slides: [
                {
                    year: 2004,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2005,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2006,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2007,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2008,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2009,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2010,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
        {
            id: 4,
            years: [2011, 2017],
            name: "Живопись",
            slides: [
                {
                    year: 2011,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2012,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2013,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2014,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2015,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2016,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2017,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
        {
            id: 5,
            years: [2018, 2024],
            name: "Градостроительство",
            slides: [
                {
                    year: 2019,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2020,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2021,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2022,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2023,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
                {
                    year: 2024,
                    text: "lorem ipsum dolores lorem ipsum doloreslorem ipsum dolores"
                },
            ]
        },
    ];

    staticNumberSlide.innerText = `${buttons.length}`;
    let currentYears = buttons[0].years.slice();

    const createElement = (tag, classes = [], text = "") => {
        const el = document.createElement(tag);
        classes.forEach(cls => el.classList.add(cls));
        if (text) el.innerText = text;
        return el;
    };

    const yearFirst = createElement("div", ["year__text"], currentYears[0]);
    const yearSecond = createElement("div", ["year__text", "second"], currentYears[1]);
    yearBlock.appendChild(yearFirst);
    yearBlock.appendChild(yearSecond);

    const updateSlider = (slides) => {
        const currentSlides = document.querySelectorAll('.swiper-slide');
        currentSlides.forEach(slide => {
            slide.classList.remove('_show');
            setTimeout(() => slide.remove(), 500); 
        });
    
        setTimeout(() => {
            slides.forEach(slide => {
                const slideContainer = createElement("div", ["swiper-slide"]);
                const slideYear = createElement("h2", ["slide__title"], slide.year);
                const slideText = createElement("div", ["slide__content"], slide.text);
                sliderWrapper.appendChild(slideContainer);
                slideContainer.appendChild(slideYear);
                slideContainer.appendChild(slideText);
    
                
                setTimeout(() => slideContainer.classList.add('_show'), 10);
            });
    
            swiper.update();  
        }, 500); 
    };
    

    updateSlider(buttons[0].slides)


    const updateActiveButton = (btn) => {
        document.querySelectorAll("._active").forEach(element => {
            element.classList.remove("_active");
            element.nextElementSibling.classList.remove("_active-text");
        });
        btn.classList.add("_active");
        btn.nextElementSibling.classList.add("_active-text");
    };

    buttons.forEach(button => {
        const buttonContainer = createElement("div", ["button__container"]);
        const btn = createElement("button", ["dot__button"], button.id + 1);
        const buttonTitle = createElement("div", ["text__title"], button.name);

        btn.setAttribute("data-attr", button.id + 1);

        btn.onclick = () => {
            updateSlider(button.slides)
            dynamicNumberSlide.innerText = button.id + 1;
            updateActiveButton(btn);
            animateYears(currentYears, button.years);
        };

        container.appendChild(buttonContainer);
        buttonContainer.appendChild(btn);
        buttonContainer.appendChild(buttonTitle);
    });

    updateActiveButton(document.querySelector('button[data-attr="1"]'));

    const updateSlide = (increment) => {
        let newIndex = Number(dynamicNumberSlide.innerText) + increment;
        if (newIndex >= 1 && newIndex <= buttons.length) {
            document.querySelector(`button[data-attr="${newIndex}"]`).click();
        }
    };

    document.querySelector('.button-next').addEventListener('click', () => updateSlide(1));
    document.querySelector('.button-prev').addEventListener('click', () => updateSlide(-1));

    const animateYears = (currentYears, newYears) => {
        const duration = 500;
        const stepsCount = Math.max(
            Math.abs(newYears[0] - currentYears[0]),
            Math.abs(newYears[1] - currentYears[1])
        );
        const intervalTime = duration / stepsCount;

        animateYearChange(stepsCount, currentYears, newYears, intervalTime, (result) => {
            currentYears[0] = result[0];
            currentYears[1] = result[1];
        });
    };

    const animateYearChange = (stepsCount, currentYears, newYears, intervalTime, callback) => {
        let step = 0;
        const interval = setInterval(() => {
            if (step <= stepsCount) {
                const updYears = [
                    Math.round(currentYears[0] + (newYears[0] - currentYears[0]) * (step / stepsCount)),
                    Math.round(currentYears[1] + (newYears[1] - currentYears[1]) * (step / stepsCount))
                ];
                yearFirst.innerText = updYears[0];
                yearSecond.innerText = updYears[1];
                step++;
            } else {
                clearInterval(interval);
                callback(newYears);
            }
        }, intervalTime);
    };


    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 10,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        grabCursor: true,

        on: {
            init: function () {
                setTimeout(() => {
                    updateNavigation(this);
                    
                }, 600);
            },
            slideChange: function () {
                updateNavigation(this);
            }
        }
    });

    function updateNavigation(swiper) {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (swiper.isBeginning) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        if (swiper.isEnd) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }
});
