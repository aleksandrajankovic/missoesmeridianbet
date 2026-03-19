document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("heroSection");
  const cta = document.getElementById("stickyCta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cta.classList.remove("hidden");
        } else {
          cta.classList.add("hidden");
        }
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(hero);
});

/* ACCORDION */
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = Array.from(document.querySelectorAll(".faq-button"));
  const faqContents = Array.from(document.querySelectorAll(".faq-content"));
  const VISIBLE_COUNT = 4; // koliko pitanja vidiš po defaultu

  // accordion click
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.classList.toggle("hidden");

      // okretanje strelice
      const arrow = btn.querySelector("img");
      if (arrow) arrow.classList.toggle("rotate-90");
    });
  });

  // sakrij sve posle 4.
  for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
    faqButtons[i].classList.add("hidden");
    faqContents[i].classList.add("hidden");
  }

  // SHOW MORE / SHOW LESS
  const showMoreBtn = document.getElementById("faqShowMore");
  if (showMoreBtn) {
    let expanded = false;

    showMoreBtn.addEventListener("click", () => {
      expanded = !expanded;

      for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
        faqButtons[i].classList.toggle("hidden");
        // content se prikazuje tek kada klikneš na pitanje,
        // ali ovde ga bar učiniš dostupnim
        faqContents[i].classList.add("hidden");
      }

      showMoreBtn.textContent = expanded
        ? "Mostrar menos" // ili "Prikaži manje"
        : "Mostrar mais"; // ili "Prikaži više"
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  function initImageSlider({ wrapperId, swiperSelector, items }) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;

    wrapper.innerHTML = "";

    items.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = `
        swiper-slide
        flex items-center justify-center
        rounded-lg overflow-hidden
        w-[200px] md:w-[220px] lg:w-[240px]
        h-[140px] md:h-[160px] lg:h-[170px]
      `;

      // Ako ima link -> pravi <a>, ako nema -> običan div
      const holder = item.href
        ? document.createElement("a")
        : document.createElement("div");

      if (item.href) {
        holder.href = item.href;
        holder.target = "_blank";
        holder.rel = "noopener noreferrer";
      }

      holder.className = "flex items-center justify-center w-full h-full";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      img.className =
        "block w-auto max-h-[120px] md:max-h-[140px] lg:max-h-[160px] object-contain transition-transform duration-300 hover:scale-105";

      holder.appendChild(img);
      slide.appendChild(holder);
      wrapper.appendChild(slide);
    });

    new Swiper(swiperSelector, {
      loop: true,
      spaceBetween: 10,
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      speed: 500,
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        840: { slidesPerView: 3 },
        1366: { slidesPerView: "auto" },
      },
    });
  }

  // 1) GORNJI LINKOVANI SLIDER
  initImageSlider({
    wrapperId: "featuredGrid",
    swiperSelector: ".featured-swiper",
    items: [
      {
        src: "./assets/images/coins/verify1.png",
        alt: "Verify",
        href: "https://meridianbet.bet.br/ca/missoes",
      },
      {
        src: "./assets/images/coins/Indique2.png",
        alt: "Indique",
        href: "https://meridianbet.bet.br/ca/missoes",
      },
      {
        src: "./assets/images/coins/deposito3.png",
        alt: "Deposito",
          href: "https://meridianbet.bet.br/ca/missoes",
      },
      {
        src: "./assets/images/coins/pgsoft4.png",
        alt: "PG Soft",
          href: "https://meridianbet.bet.br/ca/missoes",
      },
      {
        src: "./assets/images/coins/pragmatic5.png",
        alt: "Pragmatic",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
       {
        src: "./assets/images/coins/aviator6.png",
        alt: "Aviator",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
       {
        src: "./assets/images/coins/gamesglobal7.png",
        alt: "Games Global",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
       {
        src: "./assets/images/coins/playtech8.png",
        alt: "Playtech",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
       {
        src: "./assets/images/coins/wazdam9.png",
        alt: "Wazdam",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
       {
        src: "./assets/images/coins/amusnet10.png",
        alt: "Amusnet",
         href: "https://meridianbet.bet.br/ca/missoes",
      },
    ],
  });

  // 2) DONJI WINNERS SLIDER
  initImageSlider({
    wrapperId: "winnersGrid",
    swiperSelector: ".winners-swiper",
    items: [
      { src: "./assets/images/vip-slide.png", alt: "Dobitnik 1" },
      { src: "./assets/images/PS5.png", alt: "Dobitnik 2" },
      { src: "./assets/images/airpods.png", alt: "Dobitnik 3" },
      { src: "./assets/images/macbook.png", alt: "Dobitnik 4" },
      { src: "./assets/images/bolsa.png", alt: "Dobitnik 5" },
      { src: "./assets/images/samsung.png", alt: "Dobitnik 6" },
      { src: "./assets/images/iphone17.png", alt: "Dobitnik 7" },
      { src: "./assets/images/r50.png", alt: "Dobitnik 8" },
      { src: "./assets/images/r100.png", alt: "Dobitnik 9" },
      { src: "./assets/images/20RODADS.png", alt: "Dobitnik 10" },
      { src: "./assets/images/50RODADAS.png", alt: "Dobitnik 11" },
    ],
  });
});

/*FOOTER SLIDER*/

function autoSlide(sliderContainer) {
  const wrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides  = sliderContainer.querySelectorAll(".slider-slide");

  // Ako nema ili je samo jedan slajd, ne pokreći auto klizanje
  if (!wrapper || slides.length < 2) {
    // centriraj statični jedan logo
    sliderContainer.classList.add("is-static");
    return;
  }

  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;

  function moveSlides() {
    currentPosition -= 1;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth) {
      currentPosition = 0;
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(() => (wrapper.style.transition = ""));
    }
  }

  setInterval(moveSlides, 30);
}

// pokreni za sve, ali funkcija će sama isključiti gde treba
document.querySelectorAll(".slider-container").forEach(autoSlide);

 (function () {
    const ua = navigator.userAgent.toLowerCase();

    const isIOS = /iphone|ipad|ipod/.test(ua); // svi iOS browseri
    const isMacSafari =
      /macintosh/.test(ua) &&
      /safari/.test(ua) &&
      !/chrome|chromium|edg/.test(ua);

    if (isIOS || isMacSafari) {
      document.documentElement.classList.add("no-hero-bg");
    }
  })();