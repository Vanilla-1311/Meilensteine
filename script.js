document.getElementById("arrow1").addEventListener("click", function () {
  document.getElementById("milestone1").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("arrow2").addEventListener("click", function () {
  document.getElementById("milestone2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("arrow3").addEventListener("click", function () {
  document.getElementById("milestone3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("arrow4").addEventListener("click", function () {
  document.getElementById("milestone4").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineContainer = document.querySelector(".timeline-container");
  const timeline = document.querySelector(".timeline");

  timelineContainer.addEventListener("scroll", () => {
    const scrollLeft = timelineContainer.scrollLeft;
    timeline.style.transform = `translateX(-${scrollLeft}px)`;
  });
});
