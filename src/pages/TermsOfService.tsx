import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
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
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Last updated: December 2024
                    </p>
                </div>

                <div className="prose prose-lg max-w-none">
                    <div className="space-y-8 text-foreground">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using this Instagram Downloader service, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our service allows users to download publicly available Instagram content including photos, videos, Reels, IGTV, carousel posts, and Stories for personal use only.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>You may only download content that is publicly available</li>
                                <li>You must respect copyright and intellectual property rights</li>
                                <li>You are responsible for ensuring you have permission to download content</li>
                                <li>You may not use downloaded content for commercial purposes without proper authorization</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Uses</h2>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Downloading private or restricted content</li>
                                <li>Using the service for illegal activities</li>
                                <li>Redistributing downloaded content without permission</li>
                                <li>Attempting to circumvent Instagram&apos;s terms of service</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                This service is provided &quot;as is&quot; without any representations or warranties. We are not affiliated with Instagram and do not guarantee the availability or functionality of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us through our contact page.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;