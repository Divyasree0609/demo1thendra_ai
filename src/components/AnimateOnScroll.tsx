import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (visible) return "translate3d(0,0,0)";
    if (direction === "up") return "translate3d(0,28px,0)";
    if (direction === "left") return "translate3d(-28px,0,0)";
    if (direction === "right") return "translate3d(28px,0,0)";
    return "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
