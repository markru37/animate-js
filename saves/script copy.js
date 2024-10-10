document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementsByClassName("container")[0];
    const swiperYearBlock = document.getElementsByClassName("swiper-wrapper")[0];

    const buttons = [
        { id: 1, years: [1990, 1993] },
        { id: 2, years: [1994, 1997] },
        { id: 3, years: [1998, 2003] },
        { id: 4, years: [2004, 2010] },
        { id: 5, years: [2011, 2017] },
        { id: 6, years: [2018, 2024] },
    ];

    const yearSlides = [];

    buttons.forEach((button, index) => {
        const btn = document.createElement("button");
        btn.classList.add("button");
        btn.innerText = `Кнопка ${button.years}`;

        const yearSlide = document.createElement("div");
        yearSlide.classList.add("swiper-slide");
        yearSlide.innerText = `${button.years.join(" - ")}`;
        swiperYearBlock.appendChild(yearSlide);

        yearSlides[index] = yearSlide;

        btn.onclick = () => {
            animateYears(index, yearSlides[index]);
        };

        container.appendChild(btn);
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    let currentYears;

    const animateYears = (targetIndex, targetSlide) => {
        const currentIndex = swiper.activeIndex % buttons.length;
        const currentSlide = yearSlides[currentIndex];
        if (!currentYears) {
            currentYears = buttons[currentIndex].years;
        }
        const targetYears = buttons[targetIndex].years;

        let step = 0;
        const duration = 1000;
        const stepsCount = Math.max(
            Math.abs(targetYears[0] - currentYears[0]),
            Math.abs(targetYears[1] - currentYears[1])
        ) + 1;

        const intervalTime = duration / stepsCount;
        console.log("currentYears", currentYears);

        animateYearChange(swiper, step, stepsCount, currentYears, targetYears, intervalTime, currentSlide, targetSlide, (result) => {
            currentYears = result
        });
    };
});

function animateYearChange(swiper, step, stepsCount, currentYears, targetYears, intervalTime, currentSlide, targetSlide, callback) {
    let newYears;

    const interval = setInterval(() => {
        if (step <= stepsCount) {
            newYears = [
                currentYears[0] + Math.round((targetYears[0] - currentYears[0]) * (step / stepsCount)),
                currentYears[1] + Math.round((targetYears[1] - currentYears[1]) * (step / stepsCount))
            ];


            currentSlide.innerText = `${newYears.join(" - ")}`;

            step++;
        } else {
            clearInterval(interval);

            targetSlide.innerText = `${targetYears.join(" - ")}`;


            if (callback) {
                callback(newYears);
            }
        }
    }, intervalTime);
}


