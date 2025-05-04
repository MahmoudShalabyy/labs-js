
class engine {
    source;
    static #count = 0;

    constructor(source) {
        if (new.target.name === "engine") {
            throw new Error("this class can't be instantiated");
        }
        this.source = source;
        engine.#count++;
    }

    static getcount() {
        return engine.#count;
    }
}

class car extends engine {
    top;
    left;
    interval;

    constructor(top, left, source) {
        super(source);
        this.top = top;
        this.left = left;
        this.source.style.position = "absolute";
        this.source.style.top = this.top + "px";
        this.source.style.left = this.left + "px";
    }

    set topsetter(value) {
        this.top = value;
        this.source.style.top = this.top + "px";
    }

    set leftsetter(value) {
        this.left = value;
        this.source.style.left = this.left + "px";
    }

    moveleft() {
        this.left -= 10;
        if (this.left <= 0) this.left = 0;
        this.source.style.left = this.left + "px";
    }

    moveright() {
        this.left += 10;
        const max = window.innerWidth - this.source.offsetWidth;
        if (this.left >= max) this.left = max;
        this.source.style.left = this.left + "px";
    }

    changestyle(styleobj) {
        for (let key in styleobj) {
            this.source.style[key] = styleobj[key];
        }
    }

    movecar(direction) {
        clearInterval(this.interval); 
        this.interval = setInterval(() => {
            if (direction === "left") {
                if (this.left <= 0) {
                    clearInterval(this.interval);
                } else {
                    this.moveleft();
                }
            } else if (direction === "right") {
                const max = window.innerWidth - this.source.offsetWidth;
                if (this.left >= max) {
                    clearInterval(this.interval);
                } else {
                    this.moveright();
                }
            } else {
                console.log("invalid direction");
                clearInterval(this.interval);
            }
        }, 50);
    }
}

const car_element = document.getElementById("car");
const mycar = new car(100, 100, car_element);

document.getElementById("left").addEventListener("click", () => {
    mycar.movecar("left");
});

document.getElementById("right").addEventListener("click", () => {
    mycar.movecar("right");
});

document.getElementById("red").addEventListener("click", () => {
    mycar.changestyle({ backgroundColor: "red" });
});

document.getElementById("green").addEventListener("click", () => {
    mycar.changestyle({ backgroundColor: "green" });
});

document.getElementById("blue").addEventListener("click", () => {
    mycar.changestyle({ backgroundColor: "blue" });
});
