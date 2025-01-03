/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Button = ({ children, disabled, to, type, onClick }) => {
    const classname =
        'inline-block text-sm rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400 sm:px-6 sm:py-4'
    const base =
        'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400'

    const styles = {
        primary: base + ' px-4 py-3  md:px-6 md:py-4 ',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-xs',
        secondary:
            'inline-block text-sm px-4 py-2 md:px-5 md:py-2.5 text-xs  rounded-full border-2  border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-400 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 hover:text-stone-800 disabled:cursor-not-allowed disabled:bg-slate-400',
    }

    if (to) {
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        )
    }

    if (onClick) {
        return (
            <button onClick={onClick} disabled={disabled} className={styles[type]}>
                {children}
            </button>
        )
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
