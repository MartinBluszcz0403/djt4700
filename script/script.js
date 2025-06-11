function copyAddress() {
  const address = "0x470005727a680b19EfBaEb9fe070F844Bf8B0694";
  navigator.clipboard.writeText(address).then(() => {
    const tooltip = document.getElementById("tooltip-text");
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
    setTimeout(() => {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    }, 1500);
  });
}

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// CTA Button Handler
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      // Optionally replace with actual redirect logic
      window.location.href = 'https://app.uniswap.org/explore/tokens/ethereum/0x470005727a680b19EfBaEb9fe070F844Bf8B0694';
    });
}
