const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const initConsoleLogs = () => {
  console.clear();
  console.log.apply(console, [
    "%c Designed and Developed by Majd %c %c🚀 %c\n",
    "color: #fff; background: #8000ff; padding:5px 0;",
    "color: #fff; background: #242424; padding:5px 0 5px 5px;",
    "background: #242424; padding:5px 0",
    "background: #242424; padding:5px 5px 5px 0",
  ]);
  console.log.apply(console, [
    "%c Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers.\n",
    "color: #fff; background: #8000ff; padding:5px 0;",
  ]);
};

const initImageHoverEffect = () => {
  Array.from(document.querySelectorAll(".project-card__left")).forEach(
    (el: any) => {
      const imgs: HTMLImageElement[] = Array.from(el.querySelectorAll("img"));
      console.log(imgs);

      if (imgs.length === 0) return;

      new hoverEffect({
        parent: el,
        intensity: 0.2,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: imgs[0].getAttribute("src"),
        image2: imgs[1]
          ? imgs[1].getAttribute("src")
          : imgs[0].getAttribute("src"),
        displacementImage: el.dataset.displacement,
      });
    }
  );
};

const initLocomotiveScroll = (lscroll: { update: () => void }) => {
  window.addEventListener("load", () => {
    let image = document.querySelector("img");
    const isLoaded = image!.complete && image!.naturalHeight !== 0;
    lscroll.update();
  });
};

const getAnimationStyle = (isInView: boolean) => {
  return {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
};

export {
  locomotiveScroll,
  initConsoleLogs,
  initImageHoverEffect,
  initLocomotiveScroll,
  getAnimationStyle,
};
