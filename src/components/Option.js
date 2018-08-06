import React from 'react';

const Option = (props) => {
    return (
        <div>
            <li>
                {props.option}
                <button 
                    onClick={(e) => props.handleDeleteOption(props.option)}
                >
                    remove
                </button>
            </li>
        </div>
    );
};

export default Option;