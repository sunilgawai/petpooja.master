import { FC } from 'react'

type RadioButtonProps = {
    id: string;
    name: string;
    value: string;
    text: string;
    handleSelect?: (payment_method: string) => void
}

const Radio: FC<RadioButtonProps> = ({ id, name, value, text, handleSelect }) => {
    return (
        <label className="radio">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                onChange={() => handleSelect && handleSelect(value)}
            />
            <span>{text}</span>
        </label>
    )
}

export default Radio;