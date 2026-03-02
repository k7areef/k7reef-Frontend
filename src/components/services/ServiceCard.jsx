/**
 * @typedef {Object} ServiceCardProps
 * @prop {Object} service
 * @prop {string} [className]
 */

/**
 * @param {ServiceCardProps} props
 */

function ServiceCard({ service = {}, className }) {
    return (
        <div
            aria-label={service.name}
            className={`service-card bg-grey rounded-lg p-5 transition-colors duration-300 ease-out border-2 border-transparent sm:hover:border-primary${className ? " " + className : ""}`}
        >
            <div className="header flex items-center gap-3 mb-3">
                {/* <div className="service-icon-wrapper w-16 h-16">
                    <img
                        src=""
                        loading="lazy"
                        alt={service.title}
                        aria-label={service.title}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <h3
                    title={service.name}
                    aria-label={service.name}
                    className="service-name font-semibold text-lg sm:text-xl
                ">{service.name}</h3>
            </div>
            <p
                title={service.description}
                aria-label={service.description}
                className="text-grey-muted font-medium"
            >{service.description}</p>
        </div>
    )
}

export default ServiceCard;