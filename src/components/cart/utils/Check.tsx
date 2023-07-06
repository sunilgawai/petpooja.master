import { FC } from 'react'

type CheckButtonProps = {
    id: string;
    name: string;
    value: string;
    checked: boolean;
    onChange?: (checked: boolean) => void
}

const Check: FC<CheckButtonProps> = () => {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                id="payment_status"
                name="payment_status"
                value="1" // 1 as true
                onChange={(e) => {
                }}
            />
            <span>It's Paid</span>
        </label>
    )
}

export default Check;