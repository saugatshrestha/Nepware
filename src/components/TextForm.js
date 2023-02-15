import Container from 'react-bootstrap/Container';
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleSlice = (event) => {
        let sliceText = text.slice(2);
        setText(sliceText);
    }
    return (
        <>
            <Container>
                <div className='form-group'>
                    <label>{props.heading}</label>
                    <textarea type='text' className='form-control' rows='7' onChange={handleOnChange} value={text}/>
                    <button onClick={handleUpClick}>Convert to Uppercase</button>
                    <button onClick={handleSlice}>Slice</button>
                </div>
                <div className='form-group'>
                    <h2>Words: {text.split(" ").length} Words</h2>
                    <p>Character: {text.length}</p>
                </div>
            </Container>
        </>
    )
}
