import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
            <div className="toolbar">
                <span></span>
                <button onClick={this.props.onClose} className='btn_close'>Close</button>
            </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  title: PropTypes.node,
  children: PropTypes.node
};

export default Modal;

