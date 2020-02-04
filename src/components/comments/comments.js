import React, { Component } from 'react'
import { Comment, Header, Form, Button } from 'semantic-ui-react'
import moment from 'moment';
import CommentsAvatar from './commentsAvatar';
import CommentTextArea from './commentTextArea';

export default class Comments extends Component {

    constructor(props){
        super(props);
        this.state = {
            commentBeingReplied: null
        }
    }

    showOrHideReplyForm = (id) => {
        if(id === this.state.commentBeingReplied){
            this.setState({
                commentBeingReplied: null
            });
        }else{
            this.setState({
                commentBeingReplied: id
            });
        }          
    } 

    renderComments = (comments) => {                
        return comments.map(({id, initials, author, content, replies, createdTimestamp}) => 
            <Comment key={id}>                   
                <Comment.Content>
                    <CommentsAvatar>{initials}</CommentsAvatar>                                                         
                    <div style={{display: 'inline-block'}}>
                        <Comment.Author as='a'>{author}</Comment.Author>
                        <Comment.Metadata>
                            <div>{moment.unix(createdTimestamp).fromNow()}</div>
                        </Comment.Metadata>
                        <Comment.Text>{content}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action onClick={() => this.showOrHideReplyForm(id)}>Responder</Comment.Action>
                        </Comment.Actions>
                        <Form reply style={{display: id === this.state.commentBeingReplied ? 'block' : 'none'}}>
                            <CommentTextArea/>
                            <div>
                                <Button content='Enviar' labelPosition='left' icon='edit' primary/>
                            </div>
                        </Form>
                    </div>
                </Comment.Content>
                {replies.length && 
                    <Comment.Group>
                        {this.renderComments(replies)}
                    </Comment.Group>
                }                
            </Comment>
        );      
    }

    render() {         
        const { comments } = this.props;
        return (
            <div>
                <Header as='h3' dividing>
                    Comentarios
                </Header>
                <Comment.Group threaded>
                    {this.renderComments(comments)}
                </Comment.Group>
                <Form reply>
                    <CommentTextArea/>
                    <div>
                        <Button content='Agregar nota' labelPosition='left' icon='edit' primary style={{float: 'right'}}/>
                    </div>
                </Form>
            </div>
        )
    }
}
