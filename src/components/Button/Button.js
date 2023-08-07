import {BsArrowRightShort} from 'react-icons/bs';
import { motion } from 'framer-motion';
import './Button.css'

const Button = ({text,clickEvent}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1, }}
    whileTap={{ scale: 0.9 }}
    >
        <button 
        className='btn flex gap-2 items-center'
        onClick={clickEvent}
        >
            <span>{text}</span>
            <BsArrowRightShort className='  text-4xl '/>
            
        </button>
    </motion.div>
  )
}

export default Button;