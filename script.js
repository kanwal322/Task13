const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");
    const isOpen = answer.classList.contains("open");

    
    questions.forEach((q) => {
      q.classList.remove("active");
      q.setAttribute("aria-expanded", "false");
      q.querySelector(".icon").textContent = "➕";
      q.nextElementSibling.classList.remove("open");
    });

    
    if (!isOpen) {
      btn.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
      icon.textContent = "➖";
      answer.classList.add("open");
    }
  });

  
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      btn.click();
    }
  });
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    questions.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
      btn.querySelector(".icon").textContent = "➕";
      btn.nextElementSibling.classList.remove("open");
    });
  }
});
