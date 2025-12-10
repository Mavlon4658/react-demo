import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-background font-inter">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <Button
                        variant="ghost"
                        onClick={() => window.history.back()}
                        className="mb-4 hover:bg-accent"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Contact Us
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Have a question or need help? We&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card className="p-6 card-benefit">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-soft">
                                    <Mail size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Email Us</h3>
                                    <p className="text-muted-foreground">support@instadownloader.com</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 card-benefit">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 shadow-soft">
                                    <MessageCircle size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Live Chat</h3>
                                    <p className="text-muted-foreground">Available 24/7</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 card-benefit">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-soft">
                                    <Clock size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Response Time</h3>
                                    <p className="text-muted-foreground">Within 24 hours</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 card-benefit">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about your question or issue..."
                                        required
                                        rows={6}
                                        className="resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="btn-instagram w-full h-12"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;