import React from 'react';


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




const BookSearch = ({ onChangeItem, searchItem }) => <div className="search">
    <TextField hintText={ searchItem } floatingLabelText="查询作者/书名 :(p k) " onChange={ onChangeItem }/>
    <span>--</span>
    <RaisedButton label="Search" primary={true} />
</div>

export default BookSearch;