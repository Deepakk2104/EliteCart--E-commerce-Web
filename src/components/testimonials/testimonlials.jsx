import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1
                        className=" text-center text-3xl font-bold text-black"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Testimonial
                    </h1>
                    <h2
                        className=" text-center text-2xl font-semibold mb-10"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        What our{" "}
                        <span className=" text-pink-500">customers</span> are
                        saying
                    </h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://i.postimg.cc/TY0G1csy/young-man.png"
                                />
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="leading-relaxed"
                                >
                                    "As a small business owner, I was looking
                                    for a seamless way to launch my online
                                    store. Elitecart exceeded my expectations!
                                    The user-friendly interface made setup a
                                    breeze, and the customizable features
                                    allowed me to create a unique shopping
                                    experience for my customers"
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{
                                        color: mode === "dark" ? "#ff4162" : "",
                                    }}
                                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    Andrew Schulz{" "}
                                </h2>
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="text-gray-500"
                                >
                                    Entrepreneur
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                                />
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="leading-relaxed"
                                >
                                    Using Elitecart has transformed the way I
                                    run my online business. The platform is
                                    incredibly intuitive, making it easy to set
                                    up and manage my store without any technical
                                    expertise.{" "}
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{
                                        color: mode === "dark" ? "#ff4162" : "",
                                    }}
                                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    Emily Wills
                                </h2>
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="text-gray-500"
                                >
                                    UI Develeoper
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://webknudocs.vercel.app/logo/react.png"
                                />
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="leading-relaxed"
                                >
                                    I am truly impressed by the user experience
                                    that Elitecart offers. From the moment I
                                    logged in, everything felt intuitive and
                                    well-designed. The navigation is seamless,
                                    making it easy to find everything I need to
                                    manage my store.{" "}
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2
                                    style={{
                                        color: mode === "dark" ? "#ff4162" : "",
                                    }}
                                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                                >
                                    React Js
                                </h2>
                                <p
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                    className="text-gray-500"
                                >
                                    CTO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
