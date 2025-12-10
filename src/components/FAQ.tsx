import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();

    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1'),
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2'),
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4'),
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3'),
        },
        {
            question: t('faq.q5'),
            answer: t('faq.a5'),
        },
        {
            question: t('faq.q6'),
            answer: t('faq.a6'),
        },
    ];

    return (
        <footer className="py-20 px-4 bg-card border-t border-border/20">
            <div className="max-w-4xl mx-auto">
                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-inter">
                        {t('faq.title')}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-background rounded-xl border border-border/50 px-6"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline font-inter">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pt-2 pb-4 font-inter">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>


                {/* Footer Links */}
                <div className="border-t border-border/20 pt-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-2xl">
                            <div>
                                <h3 className="font-semibold text-foreground mb-4 font-inter">{t('footer.quickLinks')}</h3>
                                <ul className="space-y-2">
                                    <li><a href="/instagram-video-downloader" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.instagramVideoDownloader')}</a></li>
                                    <li><a href="/carousel-downloader" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.carouselDownloader')}</a></li>
                                    <li><a href="/instagram-reels-downloader" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.instagramReelsDownloader')}</a></li>
                                    <li><a href="/story-saver" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.storySaver')}</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-4 font-inter">{t('footer.legal')}</h3>
                                <ul className="space-y-2">
                                    <li><a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.termsOfService')}</a></li>
                                    <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.privacyPolicy')}</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-4 font-inter">Support</h3>
                                <ul className="space-y-2">
                                    <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors font-inter">{t('footer.contact')}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center border-t border-border/20 pt-6">
                        <p className="text-muted-foreground font-inter">
                            © 2024 Instagram Downloader. Made with ❤️ for content creators.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 font-inter">
                            This tool is not affiliated with Instagram. Please respect content creators' rights.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FAQ;