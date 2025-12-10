import { useState } from "react";
import { ArrowLeft, Download, Eye, CheckCircle, Clock, Loader2, Image, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import FAQ from "@/components/FAQ";

const StorySaver = () => {
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
                throw new Error('Stories not found or profile is private');
            }

            // Simulate download process
            await new Promise(resolve => setTimeout(resolve, 2200));

            const mockResult = {
                stories: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=350&fit=crop",
                        timestamp: "2h ago",
                        duration: null,
                        size: "1.2 MB"
                    },
                    {
                        id: 2,
                        type: "video",
                        thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=200&h=350&fit=crop",
                        timestamp: "4h ago",
                        duration: "15s",
                        size: "3.8 MB"
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=350&fit=crop",
                        timestamp: "6h ago",
                        duration: null,
                        size: "0.9 MB"
                    },
                    {
                        id: 4,
                        type: "video",
                        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=350&fit=crop",
                        timestamp: "8h ago",
                        duration: "12s",
                        size: "4.1 MB"
                    }
                ],
                username: "@adventure_stories",
                profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop&crop=face",
                totalItems: 4,
                totalSize: "10.0 MB"
            };

            setDownloadResult(mockResult);
            toast({
                title: "Stories Saved!",
                description: `Successfully saved ${mockResult.totalItems} stories from ${mockResult.username}.`,
            });
        } catch (error) {
            toast({
                title: "Save Failed",
                description: error.message || "Stories not found or profile is private. Please check the URL and try again.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const features = [
        "Download Instagram Stories anonymously",
        "Save Stories before they expire",
        "High quality image and video downloads",
        "No notification to the story owner",
        "Bulk download from profile stories"
    ];

    const steps = [
        {
            step: 1,
            title: "Find Instagram Story",
            description: "Navigate to the Instagram profile with the story you want to save"
        },
        {
            step: 2,
            title: "Copy Profile URL",
            description: "Copy the link to the Instagram profile or specific story"
        },
        {
            step: 3,
            title: "Save Story",
            description: "Paste the link and download the story content anonymously"
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
              Story Saver
            </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Save Instagram Stories anonymously before they disappear in 24 hours.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Important Notice */}
                <Card className="p-6 mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
                    <div className="flex items-start space-x-3">
                        <Clock size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-orange-800 mb-2">Stories Expire in 24 Hours</h3>
                            <p className="text-orange-700 text-sm">
                                Instagram Stories are only available for 24 hours. Save them quickly before they disappear forever!
                            </p>
                        </div>
                    </div>
                </Card>

                {/* Download Form */}
                <div className="max-w-3xl mx-auto mb-16">
                    <Card className="p-8 card-benefit">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-soft mb-4">
                                    <Eye size={32} className="text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground mb-2">
                                    Save Instagram Stories
                                </h2>
                                <p className="text-muted-foreground">
                                    Download Stories anonymously and discretely
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background rounded-2xl shadow-soft border border-border/50">
                                <Input
                                    type="url"
                                    placeholder="Paste Instagram profile or story link here..."
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
                                    {isLoading ? "Saving..." : "Save Story"}
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
                                <h3 className="text-xl font-bold text-foreground">Stories Ready for Download</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={downloadResult.profilePic}
                                        alt="Profile"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">{downloadResult.username}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {downloadResult.totalItems} stories • {downloadResult.totalSize} total
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {downloadResult.stories.map((story) => (
                                        <div key={story.id} className="relative group">
                                            <img
                                                src={story.thumbnail}
                                                alt={`Story ${story.id}`}
                                                className="w-full h-40 object-cover rounded-lg bg-muted transition-transform group-hover:scale-105"
                                            />
                                            <div className="absolute top-2 right-2">
                                                {story.type === "image" ? (
                                                    <Image size={14} className="text-white bg-black/70 rounded p-1" />
                                                ) : (
                                                    <Video size={14} className="text-white bg-black/70 rounded p-1" />
                                                )}
                                            </div>
                                            {story.type === "video" && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Play size={24} className="text-white bg-black/50 rounded-full p-1" />
                                                </div>
                                            )}
                                            {story.duration && (
                                                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                                    {story.duration}
                                                </div>
                                            )}
                                            <div className="mt-2 text-center">
                                                <p className="text-xs text-muted-foreground">{story.timestamp}</p>
                                                <p className="text-xs text-muted-foreground">{story.size}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center pt-4 border-t border-border">
                                    <Button className="btn-instagram">
                                        <Download size={16} className="mr-2" />
                                        Download All Stories
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
                            Story Saver Features
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
                            How to Save Stories
                        </h2>
                        <div className="space-y-6">
                            {steps.map(({ step, title, description }) => (
                                <div key={step} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
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
                        Story Saver FAQ
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Will the person know I saved their story?
                            </h3>
                            <p className="text-muted-foreground">
                                No, our story saver works anonymously. The story owner will not receive any notification that you viewed or saved their story.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                Can I save stories from private accounts?
                            </h3>
                            <p className="text-muted-foreground">
                                No, you can only save stories from public Instagram accounts. Private account stories require you to be following that account.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground mb-2">
                                How long do I have to save a story?
                            </h3>
                            <p className="text-muted-foreground">
                                Instagram Stories are only available for 24 hours after being posted. Make sure to save them before they expire and disappear.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            <FAQ />
        </div>
    );
};

export default StorySaver;