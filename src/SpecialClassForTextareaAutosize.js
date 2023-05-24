import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

class SpecialClassForTextareaAutosize extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TextareaAutosize
                    style={{ width: "100%", border: "none", outline: "none", resize: "none", backgroundColor: "transparent", overflow: "hidden", fontStyle: "italic", fontSize: "1em", fontFamily: "Arial" }}
                    id="untypedAnswer"
                    name="untypedAnswer"
                    value={this.props.taValue}
                    onChange={(event) => this.props.handleChange(event)}
                    placeholder="Type the untyped answer."
                />
            </div>
        )
    }
}

export default SpecialClassForTextareaAutosize;