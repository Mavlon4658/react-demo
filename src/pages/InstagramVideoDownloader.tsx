import { useState } from "react";
import { ArrowLeft, Download, Video, Play, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import FAQ from "@/components/FAQ";

const InstagramVideoDownloader = () => {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [downloadResult, setDownloadResult] = useState({
        title: "Epic Sunset Timelapse - Bali Indonesia",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        duration: "2:45",
        quality: "1080p HD",
        size: "15.2 MB",
        views: "125.4K",
        creator: "@travel_adventures",
        uploadDate: "2 days ago",
        description: "Breathtaking sunset captured during golden hour at Tanah Lot Temple. Shot with Sony A7III.",
        downloadUrl: "#"
    });
    const { toast } = useToast();

    const handleDownload = async () => {
        if (!url.trim()) return;

        setIsLoading(true);
        try {
            // Check for error input
            if (url.toLowerCase().includes('error')) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                throw new Error('Video not found or link is incorrect');
            }

            // Simulate download process
            await new Promise(resolve => setTimeout(resolve, 2000));

            const mockResult = {
                title: "Epic Sunset Timelapse - Bali Indonesia",
                thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                duration: "2:45",
                quality: "1080p HD",
                size: "15.2 MB",
                views: "125.4K",
                creator: "@travel_adventures",
                uploadDate: "2 days ago",
                description: "Breathtaking sunset captured during golden hour at Tanah Lot Temple. Shot with Sony A7III.",
                downloadUrl: "#"
            };

            setDownloadResult(mockResult);
            toast({
                title: "Video Ready!",
                description: "Your Instagram video has been processed successfully.",
            });
        } catch (error) {
            toast({
                title: "Download Failed",
                description: error.message || "Video not found or link is incorrect. Please check the URL and try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const features = [
        "Download Instagram videos in HD quality",
        "Support for all video formats",
        "Fast and secure processing",
        "No watermarks or logos",
        "Compatible with all devices"
    ];

    const steps = [
        {
            step: 1,
            title: "Copy Video URL",
            description: "Go to Instagram and copy the video post URL"
        },
        {
            step: 2,
            title: "Paste Link",
            description: "Paste the Instagram video link in the input field"
        },
        {
            step: 3,
            title: "Download",
            description: "Click download and save the video to your device"
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
              Video Downloader
            </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Download Instagram videos in high quality. Fast, free, and easy to use.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Download Form */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8 card-benefit">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-soft mb-4">
                                    <Video size={32} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Download Instagram Videos
                                </h2>
                                <p className="text-muted-foreground">
                                    Paste your Instagram video link below
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-2xl shadow-soft border border-border/50">
                                <Input
                                    type="url"
                                    placeholder="Paste Instagram video link here..."
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
                                    {isLoading ? "Processing..." : "Download Video"}
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
                                <h3 className="text-xl font-bold text-foreground">Video Ready for Download</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <div className="relative">
                                    <img
                                        src={downloadResult.thumbnail}
                                        alt="Video thumbnail"
                                        className="w-40 h-28 object-cover rounded-lg bg-muted"
                                    />
                                    <Play size={24} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-1" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h4 className="font-semibold text-foreground text-lg">{downloadResult.title}</h4>
                                    <p className="text-sm text-muted-foreground">By {downloadResult.creator} • {downloadResult.uploadDate}</p>
                                    <p className="text-sm text-muted-foreground">{downloadResult.description}</p>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <span>👁 {downloadResult.views} views</span>
                                        <span>⏱ {downloadResult.duration}</span>
                                        <span>🎬 {downloadResult.quality}</span>
                                        <span>💾 {downloadResult.size}</span>
                                    </div>
                                </div>
                                <Button className="btn-instagram">
                                    <Download size={16} className="mr-2" />
                                    Download Now
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Why Use Our Video Downloader?
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
                            How It Works
                        </h2>
                        <div className="space-y-6">
                            {steps.map(({ step, title, description }) => (
                                <div key={step} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
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
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                What video quality can I download?
                            </h3>
                            <p className="text-muted-foreground">
                                You can download Instagram videos in the highest quality available, typically up to 1080p HD.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Is there a limit on video length?
                            </h3>
                            <p className="text-muted-foreground">
                                No, you can download Instagram videos of any length, from short clips to full IGTV videos.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Do downloaded videos have watermarks?
                            </h3>
                            <p className="text-muted-foreground">
                                No, all downloaded videos are clean without any watermarks or logos added by our service.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <FAQ />
        </div>
    );
};

export default InstagramVideoDownloader;