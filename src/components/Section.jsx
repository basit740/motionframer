import React, {useRef} from 'react'
import { useInView } from 'framer-motion'

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
  <section ref={ref}>
      <span
          style={{
          transform: isInView ? "none" : "translateX(-900px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.87, 0.55, 0.25, 1) 0.5s"
          }}
      >
          {children}
      </span>
  </section>
  );
  }

export default Section