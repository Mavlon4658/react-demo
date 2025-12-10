import { useState } from "react";
import { ArrowLeft, Download, Play, CheckCircle, Loader2, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import FAQ from "@/components/FAQ";

const InstagramReelsDownloader = () => {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [downloadResult, setDownloadResult] = useState(null);
    const { toast } = useToast();

    const handleDownload = async () => {
        if (!url.trim()) return;

        setIsLoading(true);
        try {
            // Check for error input
            if (url.toLowerCase().includes('error')) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                throw new Error('Reel not found or link is incorrect');
            }

            // Simulate download process
            await new Promise(resolve => setTimeout(resolve, 1800));

            const mockResult = {
                title: "5 Life Hacks You Need to Know! 🔥",
                thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
                duration: "0:30",
                quality: "1080p HD",
                size: "8.7 MB",
                hasAudio: true,
                creator: "@lifehacks_daily",
                views: "458.2K",
                likes: "12.3K",
                uploadDate: "1 day ago",
                description: "Mind-blowing life hacks that will change your daily routine forever! Try these at home 🏠✨",
                hashtags: "#lifehacks #viral #trending #diy #tips",
                downloadUrl: "#"
            };

            setDownloadResult(mockResult);
            toast({
                title: "Reel Ready!",
                description: "Your Instagram Reel with audio has been processed successfully.",
            });
        } catch (error) {
            toast({
                title: "Download Failed",
                description: error.message || "Reel not found or link is incorrect. Please check the URL and try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const features = [
        "Download Instagram Reels in HD quality",
        "No watermarks or logos added",
        "Audio included in downloads",
        "Fast processing and download",
        "Support for all Reels formats"
    ];

    const steps = [
        {
            step: 1,
            title: "Open Instagram Reel",
            description: "Find the Instagram Reel you want to download"
        },
        {
            step: 2,
            title: "Copy Reel URL",
            description: "Copy the link to the Reel from Instagram"
        },
        {
            step: 3,
            title: "Download Reel",
            description: "Paste the link and download the Reel with audio"
        }
    ];

    return (
        <div className="min-h-screen bg-background font-inter">
            {/* Header */}
            <div className="bg-gradient-soft border-b border-border/20">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <Button
                        variant="ghost"
                        onClick={() => window.history.back()}
                        className="mb-4 hover:bg-accent"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Home
                    </Button>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        Instagram
                        <span className="gradient-instagram bg-clip-text text-transparent ml-3">
              Reels Downloader
            </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Download Instagram Reels with audio in high quality. Quick and easy.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Download Form */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8 card-benefit">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-soft mb-4">
                                    <Play size={32} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Download Instagram Reels
                                </h2>
                                <p className="text-muted-foreground">
                                    Save your favorite Reels with original audio
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-2xl shadow-soft border border-border/50">
                                <Input
                                    type="url"
                                    placeholder="Paste Instagram Reel link here..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="flex-1 border-0 bg-transparent text-lg h-14 focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground/60"
                                />
                                <Button
                                    onClick={handleDownload}
                                    className="btn-instagram h-14 px-8 flex items-center gap-2"
                                    disabled={!url.trim() || isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <Download size={20} />
                                    )}
                                    {isLoading ? "Processing..." : "Download Reel"}
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Download Result */}
                {downloadResult && (
                    <div className="max-w-3xl mx-auto mb-16">
                        <Card className="p-6 card-benefit">
                            <div className="flex items-center gap-4 mb-4">
                                <CheckCircle size={24} className="text-green-500" />
                                <h3 className="text-xl font-bold text-foreground">Reel Ready for Download</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <div className="relative">
                                    <img
                                        src={downloadResult.thumbnail}
                                        alt="Reel thumbnail"
                                        className="w-36 h-48 object-cover rounded-lg bg-muted"
                                    />
                                    <Play size={28} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2" />
                                    {downloadResult.hasAudio && (
                                        <Volume2 size={16} className="absolute bottom-2 right-2 text-white bg-black/60 rounded p-1" />
                                    )}
                                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                        {downloadResult.duration}
                                    </div>
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <h4 className="font-semibold text-foreground text-lg mb-1">{downloadResult.title}</h4>
                                        <p className="text-sm text-muted-foreground">By {downloadResult.creator} • {downloadResult.uploadDate}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{downloadResult.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <span>👁 {downloadResult.views} views</span>
                                        <span>❤️ {downloadResult.likes} likes</span>
                                        <span>🎬 {downloadResult.quality}</span>
                                        <span>💾 {downloadResult.size}</span>
                                        {downloadResult.hasAudio && <span>🔊 With Audio</span>}
                                    </div>
                                    <p className="text-xs text-blue-500">{downloadResult.hashtags}</p>
                                </div>
                                <Button className="btn-instagram">
                                    <Download size={16} className="mr-2" />
                                    Download Reel
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Reels Download Features
                        </h2>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            How to Download Reels
                        </h2>
                        <div className="space-y-6">
                            {steps.map(({ step, title, description }) => (
                                <div key={step} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm">
                                        {step}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{title}</h3>
                                        <p className="text-muted-foreground text-sm">{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <Card className="p-8 card-benefit">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Instagram Reels FAQ
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Do downloaded Reels include audio?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes, all downloaded Reels include the original audio track, including music and voice-overs.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                What quality are downloaded Reels?
                            </h3>
                            <p className="text-muted-foreground">
                                Reels are downloaded in the highest quality available from Instagram, typically 1080p for most content.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Can I download Reels with trending audio?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes, you can download any publicly available Reel regardless of the audio used, as long as it&apos;s not from a private account.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <FAQ />
        </div>
    );
};

export default InstagramReelsDownloader;