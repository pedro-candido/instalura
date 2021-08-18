import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './style';

export const Modal = ({ isOpen, onClose, children }) => {
  console.log(isOpen);
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        return !isSafeArea && onClose();
      }}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
