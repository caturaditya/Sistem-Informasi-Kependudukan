const modal = document.getElementById("foto");
const buka = document.getElementById("design");
const close1 = document.querySelector(".exit");
const close2 = document.getElementById("close");

buka.addEventListener("click", () => {
    modal.style.display = "flex";
});

close1.addEventListener("click", () => {
    modal.style.display = "none";
});

close2.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if(event.target === modal ){
        modal.style.display = "none";
    }
});