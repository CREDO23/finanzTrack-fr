'use client';

import { motion } from 'framer-motion';
export default function Home() {
  return (
    <main className="flex border bg_cover flex-col p-6 h-full gap-6 w-full">
      <span className=" font-bold text-xl text-primary">Finanz Track</span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.95,
          ease: [0.165, 0.84, 0.44, 1],
        }}
        className=" font-semibold md:font-bold text-5xl md:text-9xl"
      >
        Track every <br /> <span className=" text-primary">dollard</span>
        <br />
        effortlessly
        <span className="font-inter text-primary">.</span>
      </motion.h1>
    </main>
  );
}
