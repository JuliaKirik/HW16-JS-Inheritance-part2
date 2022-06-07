class Clock {
    constructor(clockNode) {
        this.clockNode = clockNode;
        this.formatFull = true;
        clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
        });
    }

    render() {
        const date = new Date();
            let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
            let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        if (!this.formatFull) {
            this.clockNode.innerHTML = hours + ':' + minutes;
        } else {
            this.clockNode.innerHTML = hours + ':' + minutes + ':' + seconds;
        }
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class FullFormatClock extends Clock{
    constructor(clockNode) {
        super (clockNode);
    }

    render() {
        const date = new Date();
            let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
            let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        if (!this.formatFull) {
            this.clockNode.innerHTML = hours + '-' + minutes;
        } else {
            this.clockNode.innerHTML = hours + '-' + minutes + '-' + seconds;
        }
    }
}

class ShortFormatClock extends Clock{
    constructor(clockNode) {
        super (clockNode);
        this.formatFull = false;
    }

    render() {
        const date = new Date();
            let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
            let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        if (!this.formatFull) {
            this.clockNode.innerHTML = hours + ' ' + minutes;
        } else {
            this.clockNode.innerHTML = hours + ' ' + minutes + ' ' + seconds;
        }
    }
}

const clock1 = new Clock(document.querySelector('#clock1'));
clock1.start();

const fullFormatClock = new FullFormatClock(document.querySelector('#clock2'));
fullFormatClock.start();

const shortFormatClock = new ShortFormatClock(document.querySelector('#clock3'));
shortFormatClock.start();