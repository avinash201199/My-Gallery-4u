document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contactFormSection");

  // Scroll when "Get Quote" buttons are clicked
  const buttons = ["getQuoteBtn1", "getQuoteBtn2"];
  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
});
