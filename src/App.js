import React, {Component} from 'react';

import MUI from './MuiTheme/index'
import BookLists from './Components/BookLists.react.js'
import BookSearch from './Components/BookSearch.react.js'
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

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

    axios
      .get('./api/comments.json')
      .then((response) => {
        this.setState({comments: response.data});

      });

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

    this.getComments()
  }
  render() {
    const {searchItem, comments} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to BookLists</h2>
        </div>
        <MUI>
          <div>
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
                    date={date}
                    text={text}
                    Logoimg={Logoimg}
                    tags={tags}
                    bookname={bookname}></BookLists>;
                }
              })
              : <span>
                没有 书 简介</span>
}
          </div>
        </MUI>
      </div>
    );
  }
}

export default App;
