import React, { Component } from 'react';
import './styles/commentsAvatar.css';
import { numberFromText } from '../../utils';

const colors = ["#00AA55", "#009FD4", "#B381B3", "#939393", "#E3BC00", "#D47500", "#DC2A2A"];

export default class CommentsAvatar extends Component {
    render() {                
        const { children } = this.props;
        return (
            <div className='comment-avatar' style={{backgroundColor: colors[numberFromText(children) % colors.length]}}>
                {children}
            </div>
        )
    }
}
