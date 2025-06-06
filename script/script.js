document.addEventListener('DOMContentLoaded', () => {
  // CTA Button Handler
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      // Optionally replace with actual redirect logic
      window.location.href = 'https://app.uniswap.org/explore/tokens/ethereum/0x470005727a680b19EfBaEb9fe070F844Bf8B0694';
    });
  }

  // Stat Counter Animation
  const counters = document.querySelectorAll('.stats');
  let hasAnimated = false;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let current = 0;

    const step = () => {
      const increment = target / 150;
      current = Math.min(current + increment, target);

      const formatted = counter.innerText.includes('$')
        ? `$${Math.floor(current).toLocaleString()}`
        : `${Math.floor(current).toLocaleString()}`;

      counter.innerText = formatted;

      if (current < target) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        counters.forEach(animateCounter);
        hasAnimated = true;
      }
    });
  }, { threshold: 0.5 });

  const growthMetricsSection = document.getElementById('growth-metrics');
  if (growthMetricsSection) observer.observe(growthMetricsSection);
});

function copyAddress(button) {
  const address = document.getElementById('wallet-address').innerText;

  navigator.clipboard.writeText(address).then(() => {
    button.classList.add('show-tooltip');
    setTimeout(() => {
      button.classList.remove('show-tooltip');
    }, 1500);
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
  });
}