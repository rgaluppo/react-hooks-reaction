import React, { useState } from 'react';
import { useAppContext } from './hooks'
import { newMessage } from '../state/actions';

function PublishMessage(props) {
    const { state: { username }, pubsub: { publish } } = useAppContext();

    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    };

    const publicMessage = () => {
        publish(newMessage({ text, username }));
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