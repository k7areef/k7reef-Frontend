/**
 * @typedef {Object} SectionHeaderProps
 * @prop {string} title
 * @prop {string} description
 * @prop {React.ReactNode} [children]
 */

/**
 * @param {SectionHeaderProps} props
 */

function SectionHeader({ title, description, children }) {
    return (
        <div className="section-header mb-5 md:mb-10 flex md:items-center gap-5 md:gap-10 max-md:flex-col">
            <div className="text-wrapper w-full">
                <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2">{title}</h2>
                <p className="text-[#7b7b7b] font-medium">{description}</p>
            </div>
            {children && <div className="children-wrapper text-nowrap">{children}</div>}
        </div>
    )
}

export default SectionHeader;