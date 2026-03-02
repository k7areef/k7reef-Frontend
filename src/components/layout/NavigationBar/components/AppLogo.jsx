import { Link } from "react-router-dom";

/**
 * @typedef {Object} AppLogo
 * @prop {Function} onClick
 */

/**
 * @param {AppLogo} props
 */

function AppLogo({ onClick = () => { } }) {
    return (
        <Link
            to={'/'}
            title="MSCODER"
            aria-label="MSCODER"
            onClick={onClick}
            className="font-bold text-3xl text-primary"
        >
            K7REEF
        </Link>
    )
}

export default AppLogo;