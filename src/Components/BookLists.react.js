import React, {Component} from 'react';

import Remarkable from 'remarkable';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

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

const md = new Remarkable();

const BookLists = ({
    author,
    date,
    bookname,
    text,
    Logoimg,
    tags = []
}) => <div className="list">
    <Card>
        <CardHeader
            title={author}
            subtitle={date}
            avatar={Logoimg}
            actAsExpander={true}
            showExpandableButton={true}/>
        <CardTitle title={bookname} subtitle="Card subtitle"/>
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