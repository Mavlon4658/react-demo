import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';

const languagesByContinent = {
    'North America': [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr-ca', name: 'Français (Canada)', flag: '🇨🇦' },
    ],
    'Europe': [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'pl', name: 'Polski', flag: '🇵🇱' },
        { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    ],
    'Asia': [
        { code: 'zh', name: '中文 (简体)', flag: '🇨🇳' },
        { code: 'zh-tw', name: '中文 (繁體)', flag: '🇹🇼' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
        { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
        { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    ],
    'South America': [
        { code: 'pt-br', name: 'Português (Brasil)', flag: '🇧🇷' },
        { code: 'es-ar', name: 'Español (Argentina)', flag: '🇦🇷' },
    ],
    'Middle East & Africa': [
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    ]
};

const allLanguages = Object.values(languagesByContinent).flat();

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = allLanguages.find(lang => lang.code === i18n.language) || allLanguages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <Globe size={16} />
                    <span className="hidden sm:inline">{currentLanguage.name}</span>
                    <span className="sm:hidden">{currentLanguage.flag}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-h-96 overflow-y-auto">
                {Object.entries(languagesByContinent).map(([continent, languages]) => (
                    <div key={continent}>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                            {continent}
                        </div>
                        {languages.map((language) => (
                            <DropdownMenuItem
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                className="gap-2 cursor-pointer"
                            >
                                <span>{language.flag}</span>
                                <span>{language.name}</span>
                            </DropdownMenuItem>
                        ))}
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;