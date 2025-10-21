import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { opacity, slideUp } from "./anim";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Amakuru",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="fixed z-99 flex h-screen w-screen items-center justify-center bg-white"
      exit="exit"
      initial="initial"
      variants={slideUp}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            animate="enter"
            className="absolute z-10 flex items-center text-5xl text-black lg:text-7xl 2xl:text-9xl"
            initial="initial"
            variants={opacity}
          >
            <span className="mr-2.5 block size-5 rounded-full bg-black" />
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <title>Wave</title>
            <motion.path
              className="fill-white"
              exit="exit"
              initial="initial"
              variants={curve}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
