import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import Comments from './components/comments/comments';
import 'semantic-ui-css/semantic.min.css';
import { getComments } from './components/comments/actions';
import 'moment/locale/es';
import { getUsers } from './actions';

export class App extends Component {

  componentDidMount(){
    const { dispatchGetComments, dispatchGetUsers } = this.props;    
    dispatchGetComments();
    dispatchGetUsers();
  }

  render() {         
    const { comments, users } = this.props;    
    return (
      <div className="App">        
        <Comments comments={comments} users={users}></Comments>        
      </div>
    )
  }
}

const mapStateToProps = ({ commentsReducer: { comments } }) => ({
  comments  
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({    
    dispatchGetComments: getComments,
    dispatchGetUsers: getUsers    
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
