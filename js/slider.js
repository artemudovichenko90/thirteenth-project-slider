class Slider {
    #currentIndex;
    #images;
    #idSlider;
    #time;
    #timer;
    #isStarted;

    constructor(idSlider) {
        this.#idSlider = idSlider;
        this.#currentIndex = 0;
        this.#images = [];
        this.#time = 2000;
        this.#isStarted = false;
    }

    addImg(name) {
        this.#images.push(name);
    }

    next() {
        this.#currentIndex = (this.#currentIndex + 1) % images.length;
        this.render();
    }

    prev() {
        this.#currentIndex = (this.#currentIndex - 1 + this.#images.length) % images.length;
        this.render();
    }

    render() {
        const currentImg = document.getElementById(this.#idSlider)
        currentImg.src = this.#images[this.#currentIndex];
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