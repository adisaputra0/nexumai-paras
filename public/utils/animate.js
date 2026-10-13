export default class AnimateOnScroll {
  constructor(options = {}) {
    this.isMobile = window.innerWidth < 768;
    this.threshold = options.threshold ?? 0.1;
    this.duration = options.duration ?? 500;

    this.observer = null;
    this.elements = [];

    this.init();
  }

  init() {
    this.cleanup();
    this.prepareWordAnimations();
    this.prepareElements();
    this.createObserver();
    this.observeElements();
    this.observeAnchors();
  }

  cleanup() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  prepareWordAnimations() {
    this.wordAnimation("[data-animate='word-fade']", "fade");
    this.wordAnimation("[data-animate='word-fade-reverse']", "fade", "reverse");
    this.wordAnimation("[data-animate='word-up']", "fade-up");
    this.wordAnimation("[data-animate='word-down']", "fade-down");
    this.wordAnimation("[data-animate='word-up-reverse']", "fade-up", "reverse");
    this.wordAnimation("[data-animate='word-down-reverse']", "fade-down", "reverse");
  }

  wordAnimation(selector, desktopAnimation, order = "normal") {
    document.querySelectorAll(selector).forEach(el => {
      // RESET saat refresh
      el.removeAttribute("data-word-animated");

      if (el.dataset.wordAnimated) return;
      el.dataset.wordAnimated = "true";

      const text = el.textContent.trim();
      el.innerHTML = "";

      const words = text.split(" ");
      const total = words.length;

      words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.classList.add("inline-flex");

        span.style.marginRight = "0.25em";

        span.dataset.animate = this.isMobile ? "fade" : desktopAnimation;

        const delayIndex =
          order === "reverse" ? total - 1 - i : i;

        span.dataset.animateDelay = delayIndex * 100;

        el.appendChild(span);
      });
    });
  }

  prepareElements() {
    this.elements = document.querySelectorAll("[data-animate]");

    this.elements.forEach(el => {
      el.style.opacity = "0";

      const computed = getComputedStyle(el).transform;
      el.dataset.initialTransform =
        computed === "none" ? "none" : computed;

      switch (el.dataset.animate) {
        case "fade-up":
          el.style.transform = "translateY(12px)";
          break;
        case "fade-down":
          el.style.transform = "translateY(-12px)";
          break;
        case "fade-left":
          el.style.transform = "translateX(12px)";
          break;
        case "fade-right":
          el.style.transform = "translateX(-12px)";
          break;
        case "zoom-in":
          el.style.transform = "scale(0.95)";
          break;
        case "zoom-out":
          el.style.transform = "scale(1.05)";
          break;
      }
    });
  }

  createObserver() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const targetId = entry.target.id;
          const anchoredElements = targetId
            ? document.querySelectorAll(
                `[data-animate-anchor="#${targetId}"]`
              )
            : [];

          if (entry.target.hasAttribute("data-animate")) {
            this.animate(entry.target);
          }

          anchoredElements.forEach(el => this.animate(el));

          this.observer.unobserve(entry.target);
        });
      },
      { threshold: this.threshold }
    );
  }

  animate(el) {
    const delay = Number(el.dataset.animateDelay) || 0;

    el.style.transition = `
      opacity ${this.duration}ms ease,
      transform ${this.duration}ms ease
    `;
    el.style.transitionDelay = `${delay}ms`;

    el.style.opacity = "1";
    el.style.transform = "none";
  }

  observeElements() {
    this.elements.forEach(el => this.observer.observe(el));
  }

  observeAnchors() {
    const anchors = new Set();

    document.querySelectorAll("[data-animate-anchor]").forEach(el => {
      const anchorEl = document.querySelector(el.dataset.animateAnchor);
      if (anchorEl && !anchors.has(anchorEl)) {
        anchors.add(anchorEl);
        this.observer.observe(anchorEl);
      }
    });
  }

  refresh() {
    this.init();
  }
}
