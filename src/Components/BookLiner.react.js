import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
    position: "absolute",
    top: "0px"
};

export default class BookLiner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 0
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(33), 100);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else if (60 < completed && completed < 99) {
            this.setState({completed});
            const chg = +Math
                .random()
                .toFixed() * 18;
            const ist = +Math
                .random()
                .toFixed();
            switch (ist) {
                case 0:
                    {
                        this.timer = setTimeout(() => this.progress(completed - chg), 300);
                        break;
                    }
                case 1:
                {
                    this.timer = setTimeout(() => this.progress(completed + chg), 300);
                    break;
                }
            }
        } else {
            this.setState({completed});
            const diff = 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 100);
        }

    }

    render() {
        return (
            <div>
                <LinearProgress style={styles} mode="determinate" value={this.state.completed}/>
            </div>
        );
    }
}