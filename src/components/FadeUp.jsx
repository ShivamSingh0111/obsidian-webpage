import { motion, useReducedMotion } from 'framer-motion'

const MOTION_COMPONENTS = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  li: motion.li,
  nav: motion.nav,
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  className,
  style,
  as = 'div',
  once = true,
}) {
  const Component = MOTION_COMPONENTS[as] || motion.div
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    )
  }

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
