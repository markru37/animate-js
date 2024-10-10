document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementsByClassName("container")[0];
    const yearBlock = document.getElementsByClassName("year__block")[0];
    const staticNumberSlide = document.getElementsByClassName("static-number")[0];
    const dynamicNumberSlide = document.getElementsByClassName("dynamic-number")[0];

    const buttons = [
        { id: 0, years: [1990, 1993], name: "Кино" },
        { id: 1, years: [1994, 1997], name: "Литература" },
        { id: 2, years: [1998, 2003], name: "Скульптура" },
        { id: 3, years: [2004, 2010], name: "Архитектура" },
        { id: 4, years: [2011, 2017], name: "Живопись" },
        { id: 5, years: [2018, 2024], name: "Градостроительство" },
    ];
    staticNumberSlide.innerText = `${buttons.length}`
    let currentYears = [buttons[0].years[0], buttons[0].years[1]];
    const yearFirst = document.createElement("div");
    const yearSecond = document.createElement("div");

    yearFirst.classList.add("year__text");
    yearSecond.classList.add("year__text", "second");

    yearFirst.innerText = currentYears[0];
    yearSecond.innerText = currentYears[1];

    yearBlock.appendChild(yearFirst);
    yearBlock.appendChild(yearSecond);

    buttons.forEach((button) => {
        const buttonContainer = document.createElement("div")
        const btn = document.createElement("button");
        const buttonTitle = document.createElement("div")

        buttonContainer.classList.add("button__container")
        btn.classList.add("dot__button");
        buttonTitle.classList.add("text__title")

        btn.setAttribute("data-attr", button.id + 1);

        btn.innerText = button.id + 1;
        buttonTitle.innerText = button.name;

        btn.onclick = () => {
            const newYears = button.years;
            dynamicNumberSlide.innerText = button.id + 1;
            const buttonHasActive = document.querySelectorAll("._active")
            buttonHasActive.forEach(element => {
                const siblingElement = element.nextElementSibling;
                element.classList.remove("_active")
                siblingElement.classList.remove("_active-text")
            });
            const siblingCurrentEl = btn.nextElementSibling;
            btn.classList.add("_active")
            siblingCurrentEl.classList.add("_active-text")

            animateYears(currentYears, newYears);
        };

        container.appendChild(buttonContainer)
        buttonContainer.appendChild(btn);
        buttonContainer.appendChild(buttonTitle)
    });

    const firstButton = document.querySelector('button[data-attr="1"]');
    const siblingElement = firstButton.nextElementSibling;
    siblingElement.classList.add("_active-text")
    firstButton.classList.add("_active")

    document.querySelector('.button-next').addEventListener('click', function () {
        if (dynamicNumberSlide.innerText < staticNumberSlide.innerText) {
            dynamicNumberSlide.innerText = Number(dynamicNumberSlide.innerText) + 1
            const targetButton = document.querySelector(`button[data-attr="${dynamicNumberSlide.innerText}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    });

    document.querySelector('.button-prev').addEventListener('click', function () {
        if (dynamicNumberSlide.innerText > 1) {
            dynamicNumberSlide.innerText = dynamicNumberSlide.innerText - 1
            const targetButton = document.querySelector(`button[data-attr="${dynamicNumberSlide.innerText}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    });


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
                    currentYears[0] + Math.round((newYears[0] - currentYears[0]) * (step / stepsCount)),
                    currentYears[1] + Math.round((newYears[1] - currentYears[1]) * (step / stepsCount))
                ];
                yearFirst.innerText = updYears[0];
                yearSecond.innerText = updYears[1];
                step++;
            } else {
                clearInterval(interval);
                yearFirst.innerText = newYears[0];
                yearSecond.innerText = newYears[1];

                if (callback) {
                    callback(newYears);
                }
            }
        }, intervalTime);
    };
}); 
