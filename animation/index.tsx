import { gsap } from "gsap";

export const blogMouseEnter = (target: EventTarget) => {
  gsap.to(target, { y: "-10px", scale: "1.05" });
};
export const blogMouseLeave = (target: EventTarget) => {
  gsap.to(target, { y: "0px", scale: "1" });
};
