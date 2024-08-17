"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 6,
        text: "Years Works Experience",
    },
    {
        num: 666,
        text: "Projects Handled",
    },
    {
        num: 666,
        text: "Code Commits",
    },
    {
        num: 666,
        text: "Technologies Proficient in",
    },
];
const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80w] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center xl:justift-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    dutaion={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p
                                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-accent/80`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
