window.addEventListener('DOMContentLoaded', () => {
  fadeInLogoOnScroll();
});

const fadeInLogoOnScroll = () => {
  if (!window.IntersectionObserver) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.length === 0) {
        return;
      }
      const entry = entries[0];
      document.body.classList.toggle(
        'splash-logo-scrolled',
        !entry.isIntersecting
      );
    },
    // IMPORTANT: Keep this margin synced with --header-height in header.css
    {rootMargin: '-86px 0% 0% 0%'}
  );

  const splashLogo = document.body.querySelector('.landing-1-splash-logo')!;
  observer.observe(splashLogo);
};
