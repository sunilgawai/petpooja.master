import { FC } from 'react'

type RadioButtonProps = {
    id: string;
    name: string;
    value: string;
    text: string;
    onChange?: Function;
}

const Radio: FC<RadioButtonProps> = ({ id, name, value, text, onChange }) => {
    return (
        <label className="radio">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={
                    onChange && onChange()
                }
            />
            <span>{text}</span>
        </label>
    )
}

export default Radio;