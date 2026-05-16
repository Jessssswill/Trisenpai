document.addEventListener("DOMContentLoaded", () => {
  const landingSection = document.getElementById("landing-section");
  const animationSection = document.getElementById("animation-section");
  const startBtn = document.getElementById("start-btn");
  const skipBtn = document.getElementById("skip-btn");
  const typingSound = document.getElementById("typing-sound");
  const preAnimationStars = document.getElementById("pre-animation-stars");

  // buat delay
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // pake typed.js buat efek ngetik
  const typeText = (elementId, text) => {
    const element = document.querySelector(elementId);
    element.innerHTML = "";
    element.classList.remove("hidden");
    element.classList.add("visible");

    if (typingSound && typingSound.readyState >= 2) {
      typingSound.currentTime = 0;
      typingSound.play().catch((e) => {});
    }

    return new Promise((resolve) => {
      new Typed(elementId, {
        strings: [text],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: "_",
        onComplete: (self) => {
          self.cursor.remove();
          typingSound?.pause();
          resolve();
        },
      });
    });
  };

  const showElement = (elementId) => {
    const element = document.querySelector(elementId);
    if (!element) return;
    element.classList.remove("hidden");
    setTimeout(() => element.classList.add("visible"), 50);
  };

  const hideElement = (elementId) => {
    const element = document.querySelector(elementId);
    if (!element) return;
    element.classList.remove("visible");
    setTimeout(() => element.classList.add("hidden"), 500);
  };

  async function playIntroSequence() {
    // tampilkan bintang dulu sebelum text muncul
    if (preAnimationStars) {
      preAnimationStars.classList.remove("hidden");
      await wait(3000);
      preAnimationStars.classList.add("hidden");
    }
    await wait(500);

    await typeText("#text1", "Dahulu kala...");
    await wait(1000);
    await typeText("#text2", "...sebuah kerajaan berdiri megah di atas pilar Logika dan Sihir.");
    await wait(1000);
    await typeText("#text3", 'Kekuatan mereka berasal dari Rune kuno yang terukir dalam barisan "Source Code".');
    await wait(1000);
    hideElement("#text1");
    hideElement("#text2");
    hideElement("#text3");
    await wait(1000);

    await typeText("#text1", "Namun seiring waktu, kekuatan Rune itu mulai memudar.");
    await wait(1000);
    await typeText("#text2", "Struktur kode para leluhur terlupakan, dan kerajaan jatuh dalam keheningan.");
    await wait(1000);
    hideElement("#text1");
    hideElement("#text2");
    await wait(1000);

    await typeText("#text1", "Sebuah ramalan kuno berbicara tentang seorang terpilih...");
    await wait(1000);
    await typeText("#text2", `...seorang 'Rune Master' baru yang mampu membaca kembali 'Source Code' kuno.`);
    await wait(1000);
    hideElement("#text1");
    hideElement("#text2");
    await wait(1000);

    await typeText("#text1", "Seseorang yang memiliki logika untuk membangun...");
    await wait(1000);
    await typeText("#text2", "...dan kreativitas untuk menciptakan.");
    await wait(1000);
    await typeText("#text3", "Seseorang... sepertimu.");
    await wait(1000);
    hideElement("#text1");
    hideElement("#text2");
    hideElement("#text3");
    await wait(1000);

    await typeText("#text4", "Gerbang Kode telah terbuka, Arsitek.");
    await wait(1000);
    await typeText("#text5", "Takdirmu menanti.");
    await wait(1500);

    window.location.href = "isi.html";
  }

  startBtn.addEventListener("click", async () => {
    landingSection.style.display = "none";
    animationSection.classList.remove("hidden");
    if (skipBtn) skipBtn.classList.remove("hidden");

    try {
      if (typingSound) {
        await typingSound.play();
        typingSound.pause();
      }
    } catch (error) {
      console.error("audio error:", error);
    }

    playIntroSequence();
  });
});
