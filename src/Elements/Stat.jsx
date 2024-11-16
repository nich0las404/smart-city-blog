import {useState, useEffect, useRef} from 'react';
import { useInView } from 'framer-motion';

const Stat = ({title, val1, val2}) => {
  const [displayVal1, setDisplayVal1] = useState(0); 
  const [displayVal2, setDisplayVal2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null); 
  const inView = useInView(ref, { triggerOnce: false });


  // count up function 
  const startCountUp = (start, end, duration, settingState, delay = 0) => {
    const startTime = performance.now();

    const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime - delay;
    if (elapsedTime < 0) {
      requestAnimationFrame(animate); // Wait for the delay
      return;
    }
    const progress = Math.min(elapsedTime / duration, 1); // Progress percentage (0 to 1)
    const currentNumber = start + progress * (end - start); // Calculate current number

    settingState(parseFloat(currentNumber.toFixed(1))); // Update the state with the current number

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
    };
    requestAnimationFrame(animate);
  };
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      startCountUp(0, val1, 1500, setDisplayVal1); // 1000ms for animation
      startCountUp(0, val2, 1000, setDisplayVal2, 1600);
    }
  }, [inView, val1, val2]);
  return (
    <tr ref={ref}>
        <td className='font-faculty-glyphic tracking-wide max-phone-sm:text-sm text-xl'>{title}</td>
        <td className='font-oswald max-phone-sm:text-sm text-xl tracking-wide text-red-700'>{displayVal1}%</td>
        <td className='font-oswald max-phone-sm:text-sm text-xl tracking-wide text-green-600'>{displayVal2}%</td>
    </tr>
  )
}

export default Stat