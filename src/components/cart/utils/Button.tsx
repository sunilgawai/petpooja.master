import { FC } from 'react'
import { Link } from 'react-router-dom';

type ButtonProps = {
    to: string,
    text: string,
}

const Button: FC<ButtonProps> = ({ to, text }) => {
    return (
        <Link
            className='btn gray-color mx-2'
            to={to}>
            {text}
        </Link>
    )
}

export default Button;