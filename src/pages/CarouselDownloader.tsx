import { useState } from "react";
import { ArrowLeft, Download, Grid3X3, CheckCircle, Loader2, Image, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import FAQ from "@/components/FAQ";

const CarouselDownloader = () => {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [downloadResult, setDownloadResult] = useState({
        items: [
            { id: 1, type: "image", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop", size: "2.1 MB", caption: "Mountain sunrise view" },
            { id: 2, type: "image", thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=200&h=200&fit=crop", size: "1.8 MB", caption: "Crystal clear lake" },
            { id: 3, type: "video", thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop", size: "5.2 MB", caption: "Ocean waves timelapse" },
            { id: 4, type: "image", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop", size: "2.3 MB", caption: "Forest hiking trail" },
            { id: 5, type: "image", thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=200&fit=crop", size: "1.9 MB", caption: "Adventure summit" }
        ],
        totalSize: "13.3 MB",
        zipName: "travel_adventure_carousel.zip",
        creator: "@nature_explorer",
        postDate: "3 hours ago",
        likes: "2,847"
    });
    const { toast } = useToast();

    const handleDownload = async () => {
        if (!url.trim()) return;

        setIsLoading(true);
        try {
            // Check for error input
            if (url.toLowerCase().includes('error')) {
                await new Promise(resolve => setTimeout(resolve, 1500));
                throw new Error('Carousel post not found or link is incorrect');
            }

            // Simulate download process
            await new Promise(resolve => setTimeout(resolve, 2500));

            const mockResult = {
                items: [
                    { id: 1, type: "image", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop", size: "2.1 MB", caption: "Mountain sunrise view" },
                    { id: 2, type: "image", thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=200&h=200&fit=crop", size: "1.8 MB", caption: "Crystal clear lake" },
                    { id: 3, type: "video", thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop", size: "5.2 MB", caption: "Ocean waves timelapse" },
                    { id: 4, type: "image", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop", size: "2.3 MB", caption: "Forest hiking trail" },
                    { id: 5, type: "image", thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&h=200&fit=crop", size: "1.9 MB", caption: "Adventure summit" }
                ],
                totalSize: "13.3 MB",
                zipName: "travel_adventure_carousel.zip",
                creator: "@nature_explorer",
                postDate: "3 hours ago",
                likes: "2,847"
            };

            setDownloadResult(mockResult);
            toast({
                title: "Carousel Ready!",
                description: `Successfully processed ${mockResult.items.length} items from the carousel.`,
            });
        } catch (error) {
            toast({
                title: "Download Failed",
                description: error.message || "Carousel post not found or link is incorrect. Please check the URL and try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const features = [
        "Download all images from Instagram carousels",
        "Bulk download in ZIP format",
        "Original quality preservation",
        "Support for mixed content (images + videos)",
        "Fast batch processing"
    ];

    const steps = [
        {
            step: 1,
            title: "Find Carousel Post",
            description: "Navigate to the Instagram carousel post you want to download"
        },
        {
            step: 2,
            title: "Copy Post URL",
            description: "Copy the link to the carousel post from Instagram"
        },
        {
            step: 3,
            title: "Download All",
            description: "Paste the link and download all carousel items at once"
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
              Carousel Downloader
            </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Download all images and videos from Instagram carousel posts in one click.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Download Form */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8 card-benefit">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 shadow-soft mb-4">
                                    <Grid3X3 size={32} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Download Instagram Carousels
                                </h2>
                                <p className="text-muted-foreground">
                                    asdlfkjasdf Get all images and videos from carousel posts
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-2xl shadow-soft border border-border/50">
                                <Input
                                    type="url"
                                    placeholder="Paste Instagram carousel post link here..."
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
                                    {isLoading ? "Processing..." : "Download All"}
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
                                <h3 className="text-xl font-bold text-foreground">Carousel Items Ready</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="mb-4">
                                    <p className="text-sm text-muted-foreground">By {downloadResult.creator} • {downloadResult.postDate} • ❤️ {downloadResult.likes} likes</p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                    {downloadResult.items.map((item) => (
                                        <div key={item.id} className="relative group">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.caption}
                                                className="w-full h-24 object-cover rounded-lg bg-muted transition-transform group-hover:scale-105"
                                            />
                                            <div className="absolute top-2 right-2">
                                                {item.type === "image" ? (
                                                    <Image size={14} className="text-white bg-black/70 rounded p-1" />
                                                ) : (
                                                    <Video size={14} className="text-white bg-black/70 rounded p-1" />
                                                )}
                                            </div>
                                            {item.type === "video" && (
                                                <Play size={20} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-1" />
                                            )}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
                                            <div className="mt-1">
                                                <p className="text-xs text-muted-foreground text-center truncate">{item.caption}</p>
                                                <p className="text-xs text-muted-foreground text-center">{item.size}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Total: {downloadResult.totalSize} • {downloadResult.items.length} items</p>
                                        <p className="text-xs text-muted-foreground">{downloadResult.zipName}</p>
                                    </div>
                                    <Button className="btn-instagram">
                                        <Download size={16} className="mr-2" />
                                        Download ZIP
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Carousel Download Features
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
                            How to Download Carousels
                        </h2>
                        <div className="space-y-6">
                            {steps.map(({ step, title, description }) => (
                                <div key={step} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
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
                        Carousel Download FAQ
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                How many items can a carousel have?
                            </h3>
                            <p className="text-muted-foreground">
                                Instagram carousels can have up to 10 images or videos. Our tool will download all of them.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                What format will the download be in?
                            </h3>
                            <p className="text-muted-foreground">
                                Individual files will be downloaded in their original format, and optionally bundled in a ZIP file for convenience.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Can I download mixed content carousels?
                            </h3>
                            <p className="text-muted-foreground">
                                Yes, carousels containing both images and videos are fully supported. Each item will be downloaded in its original format.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <FAQ />
        </div>
    );
};

export default CarouselDownloader;