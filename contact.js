const header = document.getElementById("header")
let lastScrollY = 0
let ticking = false

function updateHeaderScroll() {
  if (window.scrollY > 50) {
    header?.classList.add("scrolled")
  } else {
    header?.classList.remove("scrolled")
  }
  ticking = false
}

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(updateHeaderScroll)
    ticking = true
  }
})

const form = document.getElementById("contactForm")
const successMessage = document.getElementById("successMessage")

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values for validation
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const subject = document.getElementById("subject").value.trim()
    const message = document.getElementById("message").value.trim()

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.warn("Please fill in all required fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.warn("Please enter a valid email address")
      return
    }

    // Show success message
    successMessage.classList.add("show")

    // Reset form
    form.reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show")
    }, 5000)

    // Smooth scroll to top of form
    document.getElementById("contactFormSection").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})

const inputs = document.querySelectorAll("input, textarea")
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    const parent = this.closest(".form-group")
    if (parent) {
      parent.style.transform = "translateY(-2px)"
    }
  })

  input.addEventListener("blur", function () {
    const parent = this.closest(".form-group")
    if (parent) {
      parent.style.transform = "translateY(0)"
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contactFormSection")
  const buttons = ["getQuoteBtn1", "getQuoteBtn2"]

  buttons.forEach((id) => {
    const btn = document.getElementById(id)
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault()
        contactSection?.scrollIntoView({ behavior: "smooth" })
      })
    }
  })
})

const emailInput = document.getElementById("email")
if (emailInput) {
  emailInput.addEventListener("blur", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (this.value && !emailRegex.test(this.value)) {
      this.style.borderColor = "var(--accent)"
    }
  })
}
