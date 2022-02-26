import './Modal.scss';
import ReactDom from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { modalPopUp, basicFade } from '../helper/motionHelper';

const Modal = ({ open, children, onClose, domNodeRef }) => {
  return ReactDom.createPortal(
    <AnimatePresence exitBeforeEnter={true}>
      {open && (
        <>
          <motion.div
            className="modal-overlay"
            variants={basicFade}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="modal-window"
              ref={domNodeRef}
              variants={modalPopUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <IoIosCloseCircleOutline
                className="modal-close-icon"
                size="4rem"
                color="#fff"
                title="close modal"
                style={{ stroke: '#000', strokeWidth: '4', zIndex: '1' }}
                onClick={onClose}
              />
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('portal')
  );
};

export default Modal;
