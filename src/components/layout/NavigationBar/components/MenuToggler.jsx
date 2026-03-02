/**
 * @typedef {Object} MenuTogglerProps
 * @prop {boolean} menuOpen
 * @prop {Function} onClick
 */

/**
 * @param {MenuTogglerProps} props
 */

function MenuToggler({ menuOpen = false, onClick = () => { } }) {
    return (
        <button
            type="button"
            className="text-3xl md:hidden"
            onClick={onClick}
            title={menuOpen ? "Close Nav Menu" : "Open Nav Menu"}
            aria-label={menuOpen ? "Close Nav Menu" : "Open Nav Menu"}
        >
            <div className="custom-bars w-9 h-7 p-px flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-1 rounded-sm block transition duration-200 origin-right ${menuOpen ? "-rotate-40 bg-white" : "bg-white/70"}`}></span>
                <span className={`w-full h-1 rounded-sm bg-white/70 block transition duration-200 ${menuOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}></span>
                <span className={`w-full h-1 rounded-sm block transition duration-200 origin-right ${menuOpen ? "rotate-40 bg-white" : "bg-white/70"}`}></span>
            </div>
            <span className="sr-only">{menuOpen ? "Close Nav Menu" : "Open Nav Menu"}</span>
        </button>
    )
}

export default MenuToggler;