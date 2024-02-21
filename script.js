let counter = document.getElementById("count");
let save = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

let countt = 0;
incrementBtn.addEventListener('click', function () {
    countt++;
    counter.innerHTML = countt;
})
saveBtn.addEventListener('click', function () {
    let countStr = countt + ",";
    save.textContent += countStr;
    counter.textContent = 0;
    countt = 0;
    // save.appendChild(countt.innerHTML);
})