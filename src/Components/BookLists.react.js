import React, {Component} from 'react';

import Remarkable from 'remarkable';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';


import {Link} from 'react-router-dom';

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

const styles = {
    chip: {
        margin: 4
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};

const style = {
    height: 20,
    width: 20,
    float: 'right',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#FF851B'
};

const md = new Remarkable();

const chgtime = (date1) => {
    let date = new Date(date1);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s;
}

const BookLists = ({
    author,
    date,
    bookname,
    text,
    Logoimg,
    tags = []
}) => <div className="list">
    <Card>
            <Paper className="anim" style={style} zDepth={5} circle={true} />
            <CardHeader
                className="animhover"
                title={author}
                subtitle={chgtime(date)}
                avatar={Logoimg}
                actAsExpander={true}
                showExpandableButton={true}/>
        <Link to={`/b/${date}`}>
        <CardTitle title={bookname} subtitle="Card subtitle"/>
        </Link>
        
        <CardText expandable={true}>
            <div
                dangerouslySetInnerHTML={{
                __html: md.render(text)
            }}></div>
        </CardText>
        <div style={styles.wrapper}>
            {tags.length > 0
                ? tags.map((item, index) => <Chip key={index} style={styles.chip}>{item}</Chip>)
                : <span></span>
}
        </div>
    </Card>
</div>

export default BookLists;