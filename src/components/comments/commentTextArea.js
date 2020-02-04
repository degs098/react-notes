import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { Mention, MentionsInput } from 'react-mentions';
import './styles/commentsTextArea.css';

export class CommentTextArea extends Component {

    constructor(props){
        super(props);
        this.debouncedFn = null;
        this.state = {
            comment: ''
        }
    }

    onChange = (event) => {                
        if(!this.debouncedFn){
            this.debouncedFn = _.debounce(() => {
                let searchString = event.target.value;
                console.log(searchString);
            }, 300);
        }

        this.debouncedFn();
    }

    renderUserSuggestion = () => {

    }

    render() {                
        return (
            <div className="comment-textarea">                
                <MentionsInput className="comments-textarea" value={this.state.comment} onChange={event => this.setState({comment: event.target.value})}
                    allowSuggestionsAboveCursor={true}>
                    <Mention                        
                        trigger="@"
                        data={this.props.users}
                        appendSpaceOnAdd={true}
                        style={{backgroundColor: 'rgb(204, 220, 241)'}}                        
                    />
                </MentionsInput>
            </div>
        )
    }
}

const mapStateToProps = ({appReducer: { users }}) => ({
    users
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentTextArea)

