import React from 'react';

type IProps = {
    id?: string;
    value: string;
    onChange: Function;
};

const InputText = ({ id = 'default', value, onChange }: IProps) => (
    <div
        id={`input-text__${id}`}
        className="c-input-text__container"
    >
        <input
            id={id}
            type="text"
            className="c-input-text__entry"
            value={value || ''}
            placeholder="Enter name"
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

export default InputText;
