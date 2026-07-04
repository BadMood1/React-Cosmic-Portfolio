import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm "> &copy; {new Date().getFullYear()} BadMood. All rights reserved.</p>
            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 transition-colors hover:bg-primary/20 text-primary"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};
