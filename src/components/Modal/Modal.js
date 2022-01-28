import ReactDom from 'react-dom';
import './Modal.scss';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Modal = ({ open, children, onClose, domNodeRef }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-window" ref={domNodeRef}>
          <IoIosCloseCircleOutline
            className="modal-close-icon"
            size="4rem"
            color="#fff"
            title="close modal"
            style={{ stroke: '#000', strokeWidth: '4', zIndex: '1' }}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
