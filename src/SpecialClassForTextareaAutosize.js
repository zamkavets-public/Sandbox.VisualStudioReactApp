import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

class SpecialClassForTextareaAutosize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText:"123"
        }
    }

    render() {
        return (
            <div>
                <TextareaAutosize
                    style={{ width: "100%", border: "none", outline: "none", resize: "none", backgroundColor: "transparent", overflow: "hidden", fontStyle: "italic", fontSize: "1em", fontFamily: "Arial" }}
                    id="untypedAnswer"
                    name="untypedAnswer"
                    value={this.state.questionText}
                    onChange={(event) => this.setState({ questionText: event.target.value })}
                    placeholder="Type the untyped answer."
                />
            </div>
        )
    }
}

export default SpecialClassForTextareaAutosize;