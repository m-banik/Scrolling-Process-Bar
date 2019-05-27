const div = document.querySelector("div");
const scroller = () => {
  const barWidth =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);
  div.style.width = barWidth * 100 + "%";
  if (div.style.width !== "0%") div.className = "active";
  else div.classList.remove("active");
};
window.addEventListener("scroll", scroller);
