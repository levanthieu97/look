import { motion } from 'framer-motion'
import { Container } from './styled'
import { useState } from 'react'

const blackBox = {
  initial: {
    height: '100%',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
}

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const InitialTransition = () => {
  useState(() => {
    if (typeof window !== "undefined") {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }
  }, [])
  
  return (
    <Container
      as={motion.div}
      $alignItem='center'
      $justifyContent='center'
      initial='initial'
      animate='animate'
      variants={blackBox}
      onAnimationStart={() => {
        document.body.classList.add("overflow-hidden")}}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full fill-current"
          />
        </pattern>
        <text
          className="text-xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Look
        </text>
      </motion.svg>
    </Container>
  )
}

export default InitialTransition