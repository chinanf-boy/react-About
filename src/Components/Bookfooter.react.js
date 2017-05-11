import React from 'react';
import Paper from 'material-ui/Paper';
import Bookwaiter from './Bookwaiter.react.js';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#FF851B'
};

const style2 = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#111111'
};

const style3 = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#FFDC00'
};

const Bookfooter = () => (
    <div>
        <Paper style={style2} zDepth={1} circle={true}>
            <Bookwaiter />
        </Paper>
        <Paper style={style} zDepth={5} circle={true}>
        <br/>
        猪
        <br/>
        鼻
        <br/>
        子
        </Paper>
        <Paper style={style3} zDepth={4} circle={true}>
            <Bookwaiter thickness="4"/>        </Paper>
        <Paper style={style3} zDepth={4} circle={true}>
            <Bookwaiter thickness="6"/></Paper>
            
        <Paper style={style} zDepth={5} circle={true}>
        <br/>
        猪
         <br/>
        鼻
        <br/>
        子
        </Paper>
        <Paper style={style2} zDepth={1} circle={true}>
            <Bookwaiter thickness="8"/>
        </Paper>

    </div>
);

export default Bookfooter;