import ReactDom from 'react-dom';
import './Modal.scss';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, children, onClose, domNodeRef }) => {
  const modalPopUp = {
    hidden: {
      y: '100vh',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const bannerFade = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return ReactDom.createPortal(
    <AnimatePresence exitBeforeEnter={true}>
      {open && (
        <>
          <motion.div
            className="modal-overlay"
            variants={bannerFade}
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
