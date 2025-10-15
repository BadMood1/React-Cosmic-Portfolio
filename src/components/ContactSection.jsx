import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { Loader } from "lucide-react";
export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);

    const [person, setPerson] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setPerson({
            name: "",
            email: "",
            message: "",
        });

        setIsSubmitting(true);

        setTimeout(() => {
            setShowSubmitMessage(true);
            setIsSubmitting(false);
        }, 1700);
    };

    const handleInputChange = (e) => {
        setPerson((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center mb-12 text-lg max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to
                    discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex space-x-4">
                                <div className="p-3 rounded full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        href="mailto:andreiivanov.blag@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        andreiivanov.blag@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-3 rounded full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a
                                        href="tel:88005553535"
                                        className="hover:text-primary transition-colors"
                                    >
                                        8 800 555 35 35
                                    </a>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="p-3 rounded full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a className="hover:text-primary transition-colors">
                                        Russia, Novosibirsk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-3 text-sm font-medium">
                                    Your Name
                                </label>
                                <input
                                    value={person.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Andrew Ivanov"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-3 text-sm font-medium">
                                    Your Email
                                </label>
                                <input
                                    value={person.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="user@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-3 text-sm font-medium">
                                    Your Message
                                </label>
                                <textarea
                                    value={person.message}
                                    onChange={handleInputChange}
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full resize-none px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Submitting" : "Send Message"}
                                {isSubmitting ? (
                                    <Loader size={16} className="animate-spin" />
                                ) : (
                                    <Send size={16} />
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar
                open={showSubmitMessage}
                autoHideDuration={6000}
                onClose={() => setShowSubmitMessage(false)}
            >
                <Alert
                    onClose={() => setShowSubmitMessage(false)}
                    severity="success"
                    sx={{
                        width: "100%",
                        border: "1px solid",
                        borderColor: "hsl(var(--primary))",
                        background: "hsl(var(--background))",
                        color: "hsl(var(--foreground))",
                    }}
                >
                    Thanks for your attention! I'll contact your e-mail soon!
                </Alert>
            </Snackbar>
        </section>
    );
};
