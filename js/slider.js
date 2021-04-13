class Slider {
    #currentImg;
    #images;
    #idSlider;
    #time;
    #timer;
    #isStarted;

    constructor(idSlider) {
        this.#idSlider = idSlider;
        this.#currentImg = 0;
        this.#images = [];
        this.#time = 2000;
        this.#isStarted = false;
    }

    addImg(name) {
        this.#images.push(name);
    }

    next() {
        if (this.#currentImg < this.#images.length - 1) {
            this.#currentImg++;
        } else {
            this.#currentImg = 0;
        }
        document.getElementById(this.#idSlider).src = this.#images[this.#currentImg];
    }

    prev() {
        if (this.#currentImg > 0) {
            this.#currentImg--;
        } else {
            this.#currentImg = this.#images.length - 1;
        }
        document.getElementById(this.#idSlider).src = this.#images[this.#currentImg];
    }


    get time() {
        return this.#time;
    }

    set time(value) {
        this.#time = value;
    }

    start() {
        if (!this.#isStarted) {
            this.#timer = setInterval(() => this.next(), this.#time);
            this.#isStarted = true;
        }
    }

    stop() {
        this.#isStarted = false;
        clearInterval(this.#timer);
    }
}