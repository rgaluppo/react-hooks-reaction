import React, { useState } from 'react';
import { newMessage } from '../state/actions';

function PublishMessage(props) {
    const { dispatch } = props;

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    };

    const publicMessage = () => {
        dispatch(newMessage(text));
    };

    const handleKeyPress = event => {
        if(event.key === 'Enter') publicMessage();
    }

    return (
        <div>
            <h3>Got somenthing to say?</h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress} />
            {' '}
            <button onClick={publicMessage}>Publish it!</button>
        </div>
    );
}

export default PublishMessage;