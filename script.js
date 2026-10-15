const WHATSAPP_NUMBER = "917358484515";
const defaultMessage = "Hello Sir, I’m interested in courses at Joey English Academia. Could you please share the course details, fees and timings?";
function whatsappUrl(course) {
  const message = course
    ? `Hello Sir, I’m interested in the ${course} course at Joey English Academia. Could you please share the course details, fees and timings?`
    : defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll(".wa").forEach(link => {
  link.href = whatsappUrl(link.dataset.course || "");
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();