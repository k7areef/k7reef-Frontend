import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { faArrowRight, faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const fields = [
    {
        id: "name",
        name: "name",
        type: "text",
        autoComplete: "on",
        placeholder: "Enter your name",
        label: "Full Name",
        fieldType: "input"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "on",
        placeholder: "Enter your email",
        label: "Email",
        fieldType: "input"
    },
    {
        id: "message",
        name: "message",
        placeholder: "Enter your message",
        label: "Message",
        fieldType: "textarea"
    }
]
const initialValues = {
    name: "",
    email: "",
    message: "",
}
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
})
const contactInfo = [
    {
        href: "https://wa.link/f6j6vs",
        icon: faWhatsapp,
        label: "+201122124968"
    },
    {
        href: "mailto:kh3reef@gmail.com",
        icon: faEnvelope,
        label: "kh3reef@gmail.com"
    },
    {
        href: "https://github.com/kh3reef",
        icon: faGithub,
        label: "Github.kh3reef"
    }
];

function Contact() {
    return (
        <Element>
            <section className="contact-section py-5 md:py-10" id="contact">
                <div className="container">
                    <SectionHeader
                        title="Contact"
                        description="Have a project in mind or just want to say hi? Feel free to reach out and I'll get back to you shortly."
                    />
                    <div className="content-grid grid lg:grid-cols-3 gap-5">
                        <div className="contact-form lg:col-span-2">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="fields-wrapper mb-3 space-y-3">
                                            {
                                                fields.map(({ fieldType, ...field }, index) => {
                                                    const sharedClassName = "w-full p-3 bg-grey rounded-md placeholder:text-white/50 transition duration-200 ease-out border border-transparent focus:border-primary";
                                                    return (
                                                        <div
                                                            className="field-wrapper"
                                                            key={index}
                                                            // AOS:
                                                            data-aos="fade-up"
                                                            data-aos-delay={index * 50}
                                                        >
                                                            <div className="formik-field" key={index}>
                                                                {
                                                                    fieldType === "input" ? (
                                                                        <input
                                                                            {...field}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            className={`${sharedClassName}`}
                                                                        />
                                                                    ) : (
                                                                        <textarea
                                                                            {...field}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            className={`${sharedClassName} resize-none h-40`}
                                                                        />
                                                                    )
                                                                }
                                                                <ErrorMessage name={field.name} component={'div'} className="mt-2 text-red-500 font-medium" />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            title="Send Your Message"
                                            aria-label="Send Your Message"
                                            className="bg-primary p-4 rounded-md w-full font-medium"
                                            // AOS:
                                            data-aos="fade"
                                            data-aos-delay="300"
                                        >
                                            <FontAwesomeIcon icon={faSpinner} className={`animate-spin transition-all duration-300 ease-out grid ${isSubmitting ? "grid-cols-[1fr] grid-rows-[1fr] me-2 opacity-100" : "grid-cols-[0fr] grid-rows-[0fr] opacity-0"}`} />
                                            <span>Send Your Message</span>
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className="contact-info space-y-3 max-lg:-order-1">
                            {
                                contactInfo.map((contact, index) => (<div
                                    className="link-wrapper"
                                    key={index}
                                    // AOS:
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <a
                                        href={contact.href}
                                        target="_blank"
                                        key={index}
                                        className="contact-link flex items-center gap-2 text-lg font-medium p-5 rounded-lg bg-grey transition-colors duration-300 ease-out sm:hover:bg-primary group"
                                    >
                                        <FontAwesomeIcon icon={contact.icon} />
                                        <span>{contact.label}</span>
                                        <FontAwesomeIcon icon={faArrowRight} className="ms-auto transition duration-300 ease-out sm:group-hover:translate-x-2" />
                                    </a>
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Contact;