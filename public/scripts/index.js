const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hide:not(:last-child) .text", { y: "0%", duration: 1, stagger: 1.5 });
tl.fromTo(
  ".hide:last-child .text",
  { opacity: 0 },
  { opacity: 1, y: "0%", duration: 2, delay: 1 }
);
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.1");
tl.fromTo(
  ".navbar, .big-title",
  { opacity: 0 },
  { opacity: 1, duration: 1, stagger: 0.75 }
);
