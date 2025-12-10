import { Shield, Zap, Globe, Heart } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Benefits = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            icon: Shield,
            title: t('benefits.free.title'),
            description: t('benefits.free.description'),
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Globe,
            title: t('benefits.support.title'),
            description: t('benefits.support.description'),
            gradient: "from-pink-500 to-orange-500",
        },
        {
            icon: Zap,
            title: t('benefits.fast.title'),
            description: t('benefits.fast.description'),
            gradient: "from-orange-500 to-yellow-500",
        },
        {
            icon: Heart,
            title: t('benefits.easy.title'),
            description: t('benefits.easy.description'),
            gradient: "from-blue-500 to-purple-500",
        },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-soft">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-inter">
                        {t('benefits.title')}{" "}
                        <span className="gradient-instagram bg-clip-text text-white">
              {t('benefits.subtitle')}
            </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
                        The most reliable and fastest way to download Instagram content
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map(({ icon: Icon, title, description, gradient }, index) => (
                        <div
                            key={title}
                            className="card-benefit hover:scale-105 group"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-soft group-hover:shadow-medium transition-all duration-300`}>
                                    <Icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground font-inter">
                                    {title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed font-inter">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;