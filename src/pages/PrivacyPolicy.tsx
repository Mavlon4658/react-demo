import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background font-inter">
            <div className="max-w-4xl mx-auto px-4 py-16">
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
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Last updated: December 2024
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not collect, store, or share any personal information. The Instagram links you paste are processed temporarily to provide the download service and are not stored on our servers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Process Instagram links to extract downloadable content</li>
                                <li>Provide the requested download service</li>
                                <li>Improve our service functionality</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not store any downloaded content on our servers. All processing is done in real-time, and no data is retained after the download process is complete.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibent mb-4">4. Third-Party Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service may interact with Instagram&apos;s public API to retrieve content metadata. We do not share your information with any third parties beyond what is necessary to provide the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may use cookies to improve your browsing experience and analyze website traffic. These cookies do not contain personal information and can be disabled in your browser settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Since we don&apos;t store personal data, there is no personal information to access or delete</li>
                                <li>You can stop using our service at any time</li>
                                <li>You can disable cookies in your browser settings</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us through our contact page.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;