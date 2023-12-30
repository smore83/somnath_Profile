import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimationCursor = () => {
  return (
    <AnimatedCursor
    innerSize={12} // Adjust the inner cursor size
    outerSize={28} // Adjust the outer cursor size
    color='143,0,255' 
    outerAlpha={0.3} 
    innerScale={0.7} 
    outerScale={5} 
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
    ]}
/>
  )
}

export default AnimationCursor