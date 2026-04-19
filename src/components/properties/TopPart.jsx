import React from "react";
import Container from "../commonComponents/Container";
import contactPageShape from "../../assets/images/contactPage/contactPageShape.png";

const TopPart = () => {
    return (
        <section className="bg-gray-100 font-nunito relative h-[200px] sm:h-[150px] lg:h-[200px]">
            <Container>
                <div className="flex items-center justify-start h-full relative">
                    {/* About us heading */}
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold top-14 left-0 absolute transform translate-y-1/2"
                        style={{ color: "#0A2C3D" }}
                    >
                        Properties
                    </h1>

                    {/* Decorative image*/}
                    <img
                        src={contactPageShape}
                        alt="Decorative shape"
                        className="absolute left-5 -top-40 md:left-140 md:-top-10 lg:left-123 lg:-top-70 md:w-50 md:h-30 lg:w-120 lg:h-100 z-0"
                    />
                </div>
            </Container>
        </section>
    );
};

export default TopPart;