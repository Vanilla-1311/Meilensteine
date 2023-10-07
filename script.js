document.addEventListener("DOMContentLoaded", function () {
  const timelineContainer = document.querySelector(".timeline-container");
  const timeline = document.querySelector(".timeline");

  timelineContainer.addEventListener("scroll", () => {
    const scrollLeft = timelineContainer.scrollLeft;
    timeline.style.transform = `translateX(-${scrollLeft}px)`;
  });
});
