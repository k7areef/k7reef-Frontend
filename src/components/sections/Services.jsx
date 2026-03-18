import ServiceCard from "@components/services/ServiceCard";
import SectionHeader from "./common/SectionHeader";
import { Element } from 'react-scroll';
import { useQuery } from "@tanstack/react-query";
import ServiceCardSkeleton from "@components/services/ServiceCardSkeleton";
import { GET_SERVICES } from "@utils/apis";

function Services() {

    const { data: services, isLoading } = useQuery({
        queryKey: [`services`],
        queryFn: () => GET_SERVICES().then(res => res.data),
        enabled: true,
        refetchOnWindowFocus: false
    })

    return (
        <Element name="services">
            <section className="services-section py-5 md:py-10" id="services">
                <div className="container">
                    <SectionHeader
                        title="Services"
                        description="Transforming ideas into high-performance digital solutions tailored to your business needs."
                    />
                    <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            isLoading ? (
                                Array.from({ length: 9 }).map((_, index) => (<ServiceCardSkeleton key={index} />))
                            ) : (!services || services?.data?.length === 0) ? (
                                <p>No services found!</p>
                            )
                                : (
                                    services?.map((service, index) => (<div
                                        className="card-wrapper"
                                        key={service.id || index}
                                        // AOS:
                                        data-aos="fade-up"
                                        data-aos-delay={index * 50}
                                    >
                                        <ServiceCard service={service} key={service.id || index} className="h-full" />
                                    </div>))
                                )
                        }
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Services;