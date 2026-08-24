let time = 5 * 24 * 60 * 60;

setInterval(() => {
    let d = Math.floor(time / 86400);
    let h = Math.floor(time % 86400 / 3600);
    let m = Math.floor(time % 3600 / 60);
    let s = time % 60;

    document.getElementById("timer").textContent =
        `${d}d ${h}h ${m}m ${s}s`;

    time--;
}, 1000);