import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1 "> Hi, I'm</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2 "> Andrew</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-3"> Ivanov</span>
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis, perferendis
                        consectetur similique voluptate delectus sit dolorum soluta dolores ab enim
                        accusantium vero quis suscipit officia cumque maxime dolorem excepturi quo doloribus
                        cupiditate fuga doloremque! Odio quam ex velit accusantium reprehenderit libero
                        explicabo quo a deserunt quos, itaque facere saepe?
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-5 pt-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delay-6">
                <div className=" flex flex-col items-center animate-bounce">
                    <span className="text-sm mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    );
};
