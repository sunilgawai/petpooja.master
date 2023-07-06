import { FC } from 'react'

type CheckButtonProps = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    handleCheck?: (checked: string) => void
}

const Check: FC<CheckButtonProps> = ({ id, name, value, checked, handleCheck }) => {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                id={id}
                name={name}
                value={value}
                onChange={() => {
                    handleCheck && handleCheck(value ? '1' : '0');
                }}
            />
            <span>It's Paid</span>
        </label>
    )
}

export default Check;