import React, { Component } from 'react';
import classNames from 'classnames';
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
                <img onClick={onClick} src={url} width={28} height={28} />
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;