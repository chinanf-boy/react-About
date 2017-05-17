import React, {Component} from 'react';

import MUI from './MuiTheme/index';
import BookLists from './Components/BookLists.react.js';
import BookSearch from './Components/BookSearch.react.js';
import Bookfooter from './Components/Bookfooter.react.js';
import Bookwaiter from './Components/Bookwaiter.react.js';
import BookLiner from './Components/BookLiner.react.js';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


import axios from 'axios';

import logo from './logo.svg';
import './App.css';

require('es6-promise').polyfill();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItem: "",
      comments: []
    };
    this.onChangeItem = this
      .onChangeItem
      .bind(this);
    this.getComments = this
      .getComments
      .bind(this);
    this.rightSearch = this
      .rightSearch
      .bind(this);
  }
  onChangeItem(event) {
    this.setState({searchItem: event.target.value});
  }
  getComments() {

    this.serverRequest = axios
      .get('./api/comments.json')
      .then((response) => {
        if (this.unmounted) 
          return;
        
        if (response.status === 200) 
          this.setState({comments: response.data});
        }
      );

  }
  rightSearch(item) {
    const {
      author = "",
      bookname = ""
    } = item;

    const {searchItem} = this.state;
    const searchItems = searchItem
      .trim()
      .split(' ');

    let Ischoice = 0;

    if (searchItem) {

      searchItems.map((item, index) => {
        if (author.toLowerCase().indexOf(item.toLowerCase()) >= 0 || bookname.toLowerCase().indexOf(item.toLowerCase()) >= 0) {
          Ischoice++;
        } else {
          Ischoice = 0;
        }
      })
      return Ischoice === searchItems.length;
    }
    return true;

  }
  componentDidMount() {

    this.getComments();
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  render() {
    const {searchItem, comments} = this.state;
    const MUI1 = () =>( <MUI>
          <div className="bookall">
            <BookLiner></BookLiner>
            <BookSearch searchItem={searchItem} onChangeItem={this.onChangeItem}></BookSearch>
            {comments.length > 0
              ? comments.map(item => {
                if (this.rightSearch(item)) {
                  const {
                    id = 440,
                    author = "",
                    date = "",
                    text = "",
                    Logoimg = "./imgs/image001.png",
                    tags = [],
                    bookname = ""
                  } = item;
                  return <BookLists
                    key={id}
                    author={author}
                    date={id}
                    text={text}
                    Logoimg={Logoimg}
                    tags={tags}
                    bookname={bookname}>
                    
                    </BookLists>;
                }
              })
              : <Bookwaiter />
          }
            <Bookfooter>
            </Bookfooter>
          </div>
        </MUI>);
        const IndexApp = () =>(
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to BookLists</h2>
        </div>
        );
    return (
      <Router>
        <div className="App">
        <Route path="/" component={IndexApp} />
          <Route exact path="/about" component={MUI1} />
          <Route path="/about/b/:bookid" render={({ match }) =><h1>bookid: { match.params.bookid }</h1>}/>
         <Redirect from="/" to="/about"></Redirect>

        </div>
      </Router>
    );
  }
}

export default App;
