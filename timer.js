let end = localStorage.getItem("timerEnd");

if (!end) {
    end = Date.now() + 5 * 24 * 60 * 60 * 1000;
    localStorage.setItem("timerEnd", end);
}

setInterval(() => {
    let time = Math.max(0, end - Date.now());

    let d = Math.floor(time / 86400000);
    let h = Math.floor(time / 3600000) % 24;
    let m = Math.floor(time / 60000) % 60;
    let s = Math.floor(time / 1000) % 60;

    document.getElementById("timer").textContent =
        `${d}d ${h}h ${m}m ${s}s`;
}, 1000);