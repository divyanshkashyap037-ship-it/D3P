import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import usePhone from "@/components/lab/usePhone";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const wrapIndex = (index, length) => ((index % length) + length) % length;

const wrapDist = (d, n) => {
  let w = ((d % n) + n) % n;
  if (w > n / 2) w -= n;
  return w;
};

const EASE = [0.22, 1, 0.36, 1];

const TumbleCard = ({
  item,
  index,
  count,
  focus,
  loop,
  step,
  cardWidth,
  cardHeight,
  verticalOffset,
  rotation,
  inactiveScale,
  visibleRange,
  borderRadius,
  titleBlur,
  showTitles,
  isPhone,
}) => {
  const distance = loop ? wrapDist(index - focus, count) : index - focus;
  const abs = Math.abs(distance);
  const opacity = clamp((visibleRange - abs) / visibleRange, 0, 1) ** 1.15;
  const scale = 1 - (1 - inactiveScale) * Math.min(abs, 1);
  const y = (verticalOffset / 100) * cardHeight * distance;
  const rotateX = rotation * distance;
  const x = distance * step;
  const focused = abs < 0.001;
  const titleFilter = focused ? "blur(0px)" : `blur(${titleBlur}px)`;

  return (
    <div
      className="absolute left-[50%] top-0"
      style={{
        width: cardWidth,
        height: cardHeight,
        marginLeft: -cardWidth / 2,
        zIndex: Math.round(100 - abs),
        opacity,
        transform: `translateX(${x}px) translateY(${y}px) rotateX(${rotateX}deg) scale(${scale})`,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden border-2 border-black bg-paper transition-shadow duration-300",
          focused && "shadow-[0_16px_40px_rgba(0,0,0,0.22)]",
          item.image && "border-transparent"
        )}
        style={{ borderRadius }}
      >
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" draggable={false} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] p-[12px]">
            {showTitles && (
              <p
                className="text-center text-black"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: isPhone ? 20 : 26,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: "0.9em",
                  filter: titleFilter,
                }}
              >
                {item.title}
              </p>
            )}
            {item.subtitle && (
              <p
                className="text-center text-black"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#00000099",
                  filter: titleFilter,
                }}
              >
                {item.subtitle}
              </p>
            )}
          </div>
        )}
        {!item.image && (
          <span
            className="absolute left-[12px] top-[12px]"
            style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 900, lineHeight: "1em", letterSpacing: "0.1px", color: "rgb(11, 29, 255)" }}
          >
            ({String(index + 1).padStart(2, "0")})
          </span>
        )}
      </div>
    </div>
  );
};

const ScrollTumble = ({
  items,
  scrollTarget,
  cardWidth,
  cardHeight,
  step,
  rotation,
  verticalOffset,
  inactiveScale,
  visibleRange,
  borderRadius,
  titleBlur,
  showTitles,
  loop,
  isPhone,
}) => {
  const count = items.length;
  const frameRef = useRef(null);
  const target = scrollTarget ?? frameRef;
  const [focus, setFocus] = useState(0);

  useEffect(() => {
    const measure = () => {
      const node = target.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const runway = rect.height - viewport;
      if (runway <= 0) return;
      const progress = clamp(-rect.top / runway, 0, 1);
      setFocus(progress * (loop ? count : Math.max(count - 1, 0)));
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [target, loop, count]);

  if (count === 0) return null;

  return (
    <div className="relative flex w-full flex-col items-center">
      <div ref={frameRef} className="relative w-full outline-none" style={{ height: cardHeight * 1.62, perspective: 1600 }}>
        {items.map((item, i) => (
          <TumbleCard
            key={item.id ?? item.title ?? i}
            item={item}
            index={i}
            count={count}
            focus={focus}
            loop={loop}
            step={step}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            verticalOffset={verticalOffset}
            rotation={rotation}
            inactiveScale={inactiveScale}
            visibleRange={visibleRange}
            borderRadius={borderRadius}
            titleBlur={titleBlur}
            showTitles={showTitles}
            isPhone={isPhone}
          />
        ))}
      </div>
    </div>
  );
};

const InteractiveTumble = ({
  items,
  initialIndex,
  cardWidth,
  cardHeight,
  step,
  rotation,
  verticalOffset,
  inactiveScale,
  visibleRange,
  borderRadius,
  titleBlur,
  speed,
  showTitles,
  showControls,
  showCounter,
  loop,
  autoplay,
  autoplayDelay,
  enableDrag,
  enableKeyboard,
  isPhone,
  onIndexChange,
}) => {
  const count = items.length;
  const [index, setIndex] = useState(Math.min(initialIndex, Math.max(count - 1, 0)));
  const frameRef = useRef(null);

  const goTo = (target) => {
    if (loop) setIndex(wrapIndex(target, count));
    else setIndex(clamp(target, 0, count - 1));
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (!autoplay || count < 2) return undefined;
    const id = setInterval(() => {
      setIndex((current) => (loop ? wrapIndex(current + 1, count) : clamp(current + 1, 0, count - 1)));
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, loop, count]);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  const onDragEnd = (_, info) => {
    if (!enableDrag) return;
    const delta = info.offset.x;
    if (Math.abs(delta) > cardWidth * 0.2) {
      if (delta > 0) prev();
      else next();
    }
  };

  const onKeyDown = (event) => {
    if (!enableKeyboard) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  if (count === 0) return null;

  return (
    <div className="relative flex w-full flex-col items-center gap-[24px]">
      <motion.div
        ref={frameRef}
        drag={enableDrag ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        dragMomentum={false}
        dragSnapToOrigin
        onDragEnd={onDragEnd}
        tabIndex={enableKeyboard ? 0 : -1}
        onKeyDown={onKeyDown}
        className="relative w-full outline-none"
        style={{ height: cardHeight * 1.62, perspective: 1600, touchAction: "pan-y" }}
      >
        {items.map((item, i) => {
          const d = loop
            ? (() => {
                let raw = i - index;
                raw = ((raw % count) + count) % count;
                if (raw > count / 2) raw -= count;
                if (raw === count / 2 && count % 2 === 0 && i > index) raw -= count;
                return raw;
              })()
            : i - index;

          const distance = Math.abs(d);
          const opacity = clamp((visibleRange - distance) / visibleRange, 0, 1) ** 1.15;
          const scale = 1 - (1 - inactiveScale) * Math.min(distance, 1);
          const y = (verticalOffset / 100) * cardHeight * d;
          const rotateX = rotation * d;
          const focused = d === 0;

          return (
            <motion.div
              key={item.id ?? item.title ?? i}
              className="absolute left-[50%] top-0"
              style={{
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                zIndex: Math.round(100 - distance),
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              animate={{ x: d * step, opacity, scale, y, rotateX }}
              transition={{ duration: 0.7 * speed, ease: EASE }}
            >
              <div
                className={cn(
                  "relative h-full w-full overflow-hidden border-2 border-black bg-paper transition-shadow duration-300",
                  focused && "shadow-[0_16px_40px_rgba(0,0,0,0.22)]",
                  item.image && "border-transparent"
                )}
                style={{ borderRadius }}
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" draggable={false} />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] p-[12px]">
                    {showTitles && (
                      <p
                        className="text-center text-black"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: isPhone ? 20 : 26,
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          lineHeight: "0.9em",
                          filter: focused ? "blur(0px)" : `blur(${titleBlur}px)`,
                          transition: "filter 0.4s ease",
                        }}
                      >
                        {item.title}
                      </p>
                    )}
                    {item.subtitle && (
                      <p
                        className="text-center text-black"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          fontWeight: 400,
                          color: "#00000099",
                          filter: focused ? "blur(0px)" : `blur(${titleBlur}px)`,
                          transition: "filter 0.4s ease",
                        }}
                      >
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                )}
                {!item.image && (
                  <span
                    className="absolute left-[12px] top-[12px]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 900, lineHeight: "1em", letterSpacing: "0.1px", color: "rgb(11, 29, 255)" }}
                  >
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {(showControls || showCounter) && (
        <div className="relative flex flex-row items-center gap-[16px]">
          {showControls && (
            <button
              type="button"
              aria-label="Previous card"
              onClick={prev}
              disabled={!loop && index === 0}
              className="flex size-[40px] cursor-pointer items-center justify-center rounded-[40px] border-2 border-black bg-paper text-black transition-colors duration-200 hover:bg-black hover:text-paper disabled:cursor-default disabled:opacity-40 disabled:hover:bg-paper disabled:hover:text-black"
            >
              <ChevronLeft style={{ width: 20, height: 20 }} />
            </button>
          )}
          {showCounter && (
            <span
              style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, letterSpacing: "0.1px", color: "#000" }}
            >
              {String(index + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
            </span>
          )}
          {showControls && (
            <button
              type="button"
              aria-label="Next card"
              onClick={next}
              disabled={!loop && index === count - 1}
              className="flex size-[40px] cursor-pointer items-center justify-center rounded-[40px] border-2 border-black bg-paper text-black transition-colors duration-200 hover:bg-black hover:text-paper disabled:cursor-default disabled:opacity-40 disabled:hover:bg-paper disabled:hover:text-black"
            >
              <ChevronRight style={{ width: 20, height: 20 }} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const TumbleCarousel = (props) => {
  const {
    items,
    initialIndex = 3,
    scrollTarget,
    cardWidth = 200,
    aspectRatio = "1 / 1",
    frameHeight,
    rotation = 30,
    verticalOffset = 50,
    inactiveScale = 0.6,
    visibleRange = 2.4,
    borderRadius = 16,
    titleBlur = 2,
    speed = 1,
    showTitles = true,
    showControls = true,
    showCounter = true,
    loop = false,
    autoplay = false,
    autoplayDelay = 3000,
    enableDrag = true,
    enableKeyboard = true,
    scrollDriven = false,
    className,
    onIndexChange,
  } = props;

  const isPhone = usePhone();
  const [widthPart, heightPart] = aspectRatio.split("/").map((part) => parseFloat(part));
  const cardHeight = frameHeight ?? cardWidth / (widthPart / heightPart);
  const gap = isPhone ? 14 : 18;
  const step = cardWidth + gap;

  if (scrollDriven) {
    return (
      <ScrollTumble
        items={items}
        scrollTarget={scrollTarget}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        step={step}
        rotation={rotation}
        verticalOffset={verticalOffset}
        inactiveScale={inactiveScale}
        visibleRange={visibleRange}
        borderRadius={borderRadius}
        titleBlur={titleBlur}
        showTitles={showTitles}
        loop={loop}
        isPhone={isPhone}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative flex w-full flex-col items-center gap-[24px]", className)}>
      <InteractiveTumble
        items={items}
        initialIndex={initialIndex}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        step={step}
        rotation={rotation}
        verticalOffset={verticalOffset}
        inactiveScale={inactiveScale}
        visibleRange={visibleRange}
        borderRadius={borderRadius}
        titleBlur={titleBlur}
        speed={speed}
        showTitles={showTitles}
        showControls={showControls}
        showCounter={showCounter}
        loop={loop}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        enableDrag={enableDrag}
        enableKeyboard={enableKeyboard}
        isPhone={isPhone}
        onIndexChange={onIndexChange}
      />
    </div>
  );
};

export default TumbleCarousel;