import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkDone from '../img/check-done.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkDone;
        }
        
        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete})} >
                <img onClick={onClick} src={url} alt="" width={28} height={28} />
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }), 
    onClick: PropTypes.func
};

export default TodoItem;