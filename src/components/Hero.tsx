import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Image, Video, Play, Eye, Tv, Grid3X3, Loader2, User, Users, Heart, Calendar, ImageIcon, VideoIcon, Grid } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useToast } from "@/hooks/use-toast";
import LanguageSelector from "./LanguageSelector";

const Hero = () => {
    const { t } = useTranslation();
    const { toast } = useToast();
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [accountData, setAccountData] = useState({
        username: "nikolaev_dimitrii",
        fullName: "Dimitrii Nikolaev",
        profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
        followers: "776",
        following: "342",
        posts: "245",
        isPrivate: false,
        bio: "Photographer | Travel enthusiast | Coffee lover",
        content: {
            posts: [
                { id: 1, type: "image", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Beautiful landscape", likes: 1234, date: "2024-01-15", description: "Amazing sunset over the mountains during my hiking trip" },
                { id: 2, type: "video", thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", caption: "Adventure video", likes: 856, date: "2024-01-12", description: "Epic adventure compilation from last weekend" },
                { id: 3, type: "gallery", thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop", caption: "Ocean view", likes: 2100, date: "2024-01-10", description: "Crystal clear waters and perfect weather" },
                { id: 4, type: "image", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", caption: "Forest path", likes: 743, date: "2024-01-08", description: "Peaceful morning walk through ancient woods" },
                { id: 5, type: "video", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Sunset timelapse", likes: 1567, date: "2024-01-05", description: "30-minute sunset condensed into 30 seconds" },
                { id: 6, type: "image", thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop", caption: "Mountain peak", likes: 945, date: "2024-01-03", description: "Reached the summit after 6 hours of climbing" }
            ],
            stories: [
                { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", title: "Today's adventure", type: "video", likes: 234, date: "2024-01-16", description: "Behind the scenes of today's shoot" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" },
            ],
            highlights: [
                { id: 1, thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop", title: "Travel", type: "gallery", likes: 1890, date: "2024-01-01", description: "Best moments from 2023 travels" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", title: "Photography", type: "gallery", likes: 1234, date: "2023-12-20", description: "Photography tips and tricks collection" }
            ],
            reels: [
                { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Quick editing tips", type: "video", likes: 3456, date: "2024-01-14", description: "5 editing tricks every photographer should know" },
                { id: 2, thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop", caption: "Behind the scenes", type: "video", likes: 2190, date: "2024-01-11", description: "How I set up this mountain shot" }
            ]
        }
    });
    const [activeTab, setActiveTab] = useState("stories");
    const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

    const handleDownload = () => {
        if (!url.trim()) return;

        setIsLoading(true);

        // Check for error input
        if (url.toLowerCase().includes('error')) {
            setTimeout(() => {
                setIsLoading(false);
                toast({
                    title: "Profile Not Found",
                    description: "Profile not found or link is incorrect. Please check the URL and try again.",
                    variant: "destructive"
                });
            }, 1500);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setAccountData({
                username: "nikolaev_dimitrii",
                fullName: "Dimitrii Nikolaev",
                profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
                followers: "776",
                following: "342",
                posts: "245",
                isPrivate: false,
                bio: "Photographer | Travel enthusiast | Coffee lover",
                content: {
                    posts: [
                        { id: 1, type: "image", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Beautiful landscape", likes: 1234, date: "2024-01-15", description: "Amazing sunset over the mountains during my hiking trip" },
                        { id: 2, type: "video", thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", caption: "Adventure video", likes: 856, date: "2024-01-12", description: "Epic adventure compilation from last weekend" },
                        { id: 3, type: "gallery", thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop", caption: "Ocean view", likes: 2100, date: "2024-01-10", description: "Crystal clear waters and perfect weather" },
                        { id: 4, type: "image", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", caption: "Forest path", likes: 743, date: "2024-01-08", description: "Peaceful morning walk through ancient woods" },
                        { id: 5, type: "video", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Sunset timelapse", likes: 1567, date: "2024-01-05", description: "30-minute sunset condensed into 30 seconds" },
                        { id: 6, type: "image", thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop", caption: "Mountain peak", likes: 945, date: "2024-01-03", description: "Reached the summit after 6 hours of climbing" }
                    ],
                    stories: [
                        { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", title: "Today's adventure", type: "video", likes: 234, date: "2024-01-16", description: "Behind the scenes of today's shoot" },
                        { id: 2, thumbnail: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=300&fit=crop", title: "Coffee time", type: "image", likes: 156, date: "2024-01-16", description: "Perfect morning brew setup" }
                    ],
                    highlights: [
                        { id: 1, thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop", title: "Travel", type: "gallery", likes: 1890, date: "2024-01-01", description: "Best moments from 2023 travels" },
                        { id: 2, thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", title: "Photography", type: "gallery", likes: 1234, date: "2023-12-20", description: "Photography tips and tricks collection" }
                    ],
                    reels: [
                        { id: 1, thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Quick editing tips", type: "video", likes: 3456, date: "2024-01-14", description: "5 editing tricks every photographer should know" },
                        { id: 2, thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop", caption: "Behind the scenes", type: "video", likes: 2190, date: "2024-01-11", description: "How I set up this mountain shot" }
                    ]
                }
            });
            setIsLoading(false);
        }, 2000);
    };

    const handleReset = () => {
        setAccountData(null);
        setUrl("");
        setActiveTab("posts");
        setSelectedItems(new Set());
    };

    const handleItemSelect = (itemId: string) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(itemId)) {
            newSelected.delete(itemId);
        } else {
            // Check if we already have 4 items selected
            if (newSelected.size >= 4) {
                toast({
                    title: "Selection Limit Reached",
                    description: "You can't download more than 4 items at a time. Please unselect some items first.",
                    variant: "destructive",
                });
                return;
            }
            newSelected.add(itemId);
        }
        setSelectedItems(newSelected);
    };

    const handleSelectAll = () => {
        if (!accountData) return;
        const currentContent = accountData.content[activeTab];
        const allIds = currentContent.map((item) => `${activeTab}-${item.id}`);
        // Limit to first 4 items
        const limitedIds = allIds.slice(0, 4);
        setSelectedItems(new Set(limitedIds));

        if (allIds.length > 4) {
            toast({
                title: "Selection Limited",
                description: `Only the first 4 items were selected. You can select a maximum of 4 items at a time.`,
                variant: "default",
            });
        }
    };

    const handleDownloadSelected = () => {
        console.log(`Downloading ${selectedItems.size} selected items`);
    };

    const handleDownloadAll = () => {
        console.log('Downloading all content from all tabs');
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'video':
                return <VideoIcon size={14} className="text-white" />;
            case 'gallery':
                return <Grid size={14} className="text-white" />;
            default:
                return <ImageIcon size={14} className="text-white" />;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const formatLikes = (likes: number) => {
        if (likes >= 1000) {
            return `${(likes / 1000).toFixed(1)}k`;
        }
        return likes.toString();
    };

    const contentTypes = [
        { icon: Image, label: t('content.photos'), gradient: "from-purple-500 to-pink-500" },
        { icon: Video, label: t('content.videos'), gradient: "from-pink-500 to-orange-500" },
        { icon: Play, label: t('nav.reels'), gradient: "from-orange-500 to-yellow-500" },
        { icon: Tv, label: t('content.igtv'), gradient: "from-blue-500 to-purple-500" },
        { icon: Grid3X3, label: t('content.carousel'), gradient: "from-green-500 to-blue-500" },
        { icon: Eye, label: t('nav.stories'), gradient: "from-red-500 to-pink-500" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            {/* Language Selector */}
            <div className="absolute top-4 right-4">
                <LanguageSelector />
            </div>

            <div className="max-w-4xl w-full text-center space-y-8">
                {/* Main Headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight font-inter">
                        {t('hero.title')}{" "}
                        <span className="gradient-instagram bg-clip-text text-white">
              {t('hero.subtitle')}
            </span>
                        {" "}{t('hero.byLink')}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter">
                        {t('hero.description')}
                    </p>
                </div>

                {/* Download Form */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 p-2 bg-card rounded-2xl shadow-soft border border-border/50">
                        <Input
                            type="url"
                            placeholder={t('hero.placeholder')}
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1 border-0 bg-transparent text-lg h-14 focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground/60 font-inter"
                            disabled={isLoading}
                        />
                        <Button
                            onClick={handleDownload}
                            className="btn-instagram h-14 px-8 flex items-center gap-2 font-inter"
                            disabled={!url.trim() || isLoading}
                        >
                            {isLoading ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <Download size={20} />
                            )}
                            {isLoading ? t('hero.loading') : t('hero.download')}
                        </Button>
                    </div>
                </div>

                {/* Content Type Icons */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mt-16">
                    {contentTypes.map(({ icon: Icon, label, gradient }, index) => (
                        <div
                            key={label}
                            className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-gradient-to-br hover:scale-105 transition-all duration-300 cursor-pointer shadow-soft hover:shadow-medium"
                            style={{
                                background: `linear-gradient(135deg, hsl(${280 + index * 20} 100% 95%), hsl(${300 + index * 20} 100% 98%))`,
                            }}
                        >
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-soft`}>
                                <Icon size={28} className="text-white" />
                            </div>
                            <span className="font-semibold text-foreground font-inter">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Account Details Section - Show below search */}
                {accountData && (
                    <div className="w-full max-w-6xl mx-auto space-y-6 mt-16">
                        {/* Account Info Header */}
                        <Card className="p-6 bg-card border border-border/50">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={accountData.profilePic}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <h2 className="text-2xl font-bold text-foreground">{accountData.username}</h2>
                                        <p className="text-muted-foreground">{accountData.fullName}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Button
                                        onClick={handleDownloadAll}
                                        className="btn-instagram"
                                    >
                                        Download All
                                    </Button>
                                    <Button
                                        onClick={handleReset}
                                        variant="outline"
                                    >
                                        {t('hero.newSearch')}
                                    </Button>
                                </div>
                            </div>

                            <div className="flex justify-center space-x-8 mb-4">
                                <div className="text-center">
                                    <div className="font-bold text-foreground">{accountData.posts}</div>
                                    <div className="text-sm text-muted-foreground">{t('nav.posts')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-foreground">{accountData.followers}</div>
                                    <div className="text-sm text-muted-foreground">{t('nav.followers')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-foreground">{accountData.following}</div>
                                    <div className="text-sm text-muted-foreground">{t('nav.following')}</div>
                                </div>
                            </div>

                            {accountData.bio && (
                                <p className="text-muted-foreground text-center">{accountData.bio}</p>
                            )}
                        </Card>

                        {/* Content Tabs */}
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-4 bg-card">
                                <TabsTrigger value="posts" className="font-inter">{t('nav.posts')}</TabsTrigger>
                                <TabsTrigger value="stories" className="font-inter">{t('nav.stories')}</TabsTrigger>
                                <TabsTrigger value="highlights" className="font-inter">{t('nav.highlights')}</TabsTrigger>
                                <TabsTrigger value="reels" className="font-inter">{t('nav.reels')}</TabsTrigger>
                            </TabsList>

                            <TabsContent value="posts" className="mt-6">
                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <Button onClick={handleSelectAll} variant="outline" size="sm">
                                        Select All
                                    </Button>
                                    {selectedItems.size > 0 && (
                                        <Button onClick={handleDownloadSelected} size="sm" className="btn-instagram">
                                            Download Selected ({selectedItems.size})
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {accountData.content.posts.map((item) => {
                                        const itemId = `posts-${item.id}`;
                                        return (
                                            <Card key={item.id} className="group overflow-hidden">
                                                <div className="relative aspect-square">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedItems.has(itemId)}
                                                        onChange={() => handleItemSelect(itemId)}
                                                        className="absolute top-2 left-2 z-10 w-4 h-4"
                                                    />
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.caption}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute top-2 right-2 bg-black/50 rounded px-1.5 py-0.5 flex items-center gap-1">
                                                        {getTypeIcon(item.type)}
                                                    </div>
                                                    {item.type === "video" && (
                                                        <Play className="absolute bottom-2 right-2 text-white" size={16} />
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Button size="sm" className="btn-instagram">
                                                            <Download size={16} />
                                                            Download
                                                        </Button>
                                                    </div>
                                                </div>
                                                <CardContent className="p-3">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Heart size={14} />
                                                            <span>{formatLikes(item.likes)}</span>
                                                            <Calendar size={14} />
                                                            <span>{formatDate(item.date)}</span>
                                                        </div>
                                                        <span className="text-xs bg-muted px-2 py-1 rounded capitalize">
                              {item.type}
                            </span>
                                                    </div>
                                                    <p className="text-sm text-foreground font-medium mb-1">{item.caption}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline" className="px-8">
                                        {t('content.loadMore')}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="stories" className="mt-6">
                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <Button onClick={handleSelectAll} variant="outline" size="sm">
                                        Select All
                                    </Button>
                                    {selectedItems.size > 0 && (
                                        <Button onClick={handleDownloadSelected} size="sm" className="btn-instagram">
                                            Download Selected ({selectedItems.size})
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {accountData.content.stories.map((story) => {
                                        const itemId = `stories-${story.id}`;
                                        return (
                                            <Card key={story.id} className="group overflow-hidden">
                                                <div className="relative aspect-square">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedItems.has(itemId)}
                                                        onChange={() => handleItemSelect(itemId)}
                                                        className="absolute top-2 left-2 z-10 w-4 h-4"
                                                    />
                                                    <img
                                                        src={story.thumbnail}
                                                        alt={story.title}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                    <div className="absolute top-2 right-2 bg-black/50 rounded px-1.5 py-0.5 flex items-center gap-1">
                                                        {getTypeIcon(story.type)}
                                                    </div>
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Button size="sm" className="btn-instagram">
                                                            <Download size={16} />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <CardContent className="p-2">
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                                                        <Heart size={12} />
                                                        <span>{formatLikes(story.likes)}</span>
                                                        <Calendar size={12} />
                                                        <span>{formatDate(story.date)}</span>
                                                    </div>
                                                    <p className="text-sm text-foreground font-medium mb-1">{story.title}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{story.description}</p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline" className="px-8">
                                        {t('content.loadMore')}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="highlights" className="mt-6">
                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <Button onClick={handleSelectAll} variant="outline" size="sm">
                                        Select All
                                    </Button>
                                    {selectedItems.size > 0 && (
                                        <Button onClick={handleDownloadSelected} size="sm" className="btn-instagram">
                                            Download Selected ({selectedItems.size})
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {accountData.content.highlights.map((highlight) => {
                                        const itemId = `highlights-${highlight.id}`;
                                        return (
                                            <Card key={highlight.id} className="group overflow-hidden">
                                                <div className="relative aspect-square">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedItems.has(itemId)}
                                                        onChange={() => handleItemSelect(itemId)}
                                                        className="absolute top-2 left-2 z-10 w-4 h-4"
                                                    />
                                                    <img
                                                        src={highlight.thumbnail}
                                                        alt={highlight.title}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                    <div className="absolute top-2 right-2 bg-black/50 rounded px-1.5 py-0.5 flex items-center gap-1">
                                                        {getTypeIcon(highlight.type)}
                                                    </div>
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Button size="sm" className="btn-instagram">
                                                            <Download size={16} />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <CardContent className="p-2">
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                                                        <Heart size={12} />
                                                        <span>{formatLikes(highlight.likes)}</span>
                                                        <Calendar size={12} />
                                                        <span>{formatDate(highlight.date)}</span>
                                                    </div>
                                                    <p className="text-sm text-foreground font-medium mb-1">{highlight.title}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{highlight.description}</p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline" className="px-8">
                                        {t('content.loadMore')}
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="reels" className="mt-6">
                                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <Button onClick={handleSelectAll} variant="outline" size="sm">
                                        Select All
                                    </Button>
                                    {selectedItems.size > 0 && (
                                        <Button onClick={handleDownloadSelected} size="sm" className="btn-instagram">
                                            Download Selected ({selectedItems.size})
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {accountData.content.reels.map((reel) => {
                                        const itemId = `reels-${reel.id}`;
                                        return (
                                            <Card key={reel.id} className="group overflow-hidden">
                                                <div className="relative aspect-square">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedItems.has(itemId)}
                                                        onChange={() => handleItemSelect(itemId)}
                                                        className="absolute top-2 left-2 z-10 w-4 h-4"
                                                    />
                                                    <img
                                                        src={reel.thumbnail}
                                                        alt={reel.caption}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute top-2 right-2 bg-black/50 rounded px-1.5 py-0.5 flex items-center gap-1">
                                                        {getTypeIcon(reel.type)}
                                                    </div>
                                                    <Play className="absolute bottom-2 right-2 text-white" size={16} />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <Button size="sm" className="btn-instagram">
                                                            <Download size={16} />
                                                            Download
                                                        </Button>
                                                    </div>
                                                </div>
                                                <CardContent className="p-3">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Heart size={14} />
                                                            <span>{formatLikes(reel.likes)}</span>
                                                            <Calendar size={14} />
                                                            <span>{formatDate(reel.date)}</span>
                                                        </div>
                                                        <span className="text-xs bg-muted px-2 py-1 rounded capitalize">
                              {reel.type}
                            </span>
                                                    </div>
                                                    <p className="text-sm text-foreground font-medium mb-1">{reel.caption}</p>
                                                    <p className="text-xs text-muted-foreground line-clamp-2">{reel.description}</p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center mt-8">
                                    <Button variant="outline" className="px-8">
                                        {t('content.loadMore')}
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;