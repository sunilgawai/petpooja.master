import { FC } from 'react'
import { Link } from 'react-router-dom';

type ButtonProps = {
    to: string,
    text: string,
    handleClick?: () => void
}

const Button: FC<ButtonProps> = ({ to, text, handleClick }) => {
    return (
        <Link
            onClick={() => handleClick && handleClick()}
            className='btn gray-color mx-2'
            to={to}>
            {text}
        </Link>
    )
}

export default Button;