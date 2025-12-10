import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Hero Section
            hero: {
                title: "Download Instagram",
                subtitle: "photos and videos",
                byLink: "by link",
                description: "Download Video, Reels, Photo, IGTV, carousel from Instagram. Paste the profile or post link, choose the format, and get the content in one click.",
                placeholder: "Paste Instagram link here...",
                download: "Download",
                loading: "Loading...",
                newSearch: "New Search"
            },
            // Navigation
            nav: {
                posts: "Posts",
                stories: "Stories",
                highlights: "Highlights",
                reels: "Reels",
                followers: "Followers",
                following: "Following"
            },
            // Content Types
            content: {
                photos: "Photos",
                videos: "Videos",
                carousel: "Carousel",
                igtv: "IGTV",
                loadMore: "Load more..."
            },
            // Benefits
            benefits: {
                title: "Why Choose Our",
                subtitle: "Instagram Downloader",
                fast: {
                    title: "Lightning Fast",
                    description: "Download your favorite Instagram content in seconds with our optimized servers."
                },
                quality: {
                    title: "High Quality",
                    description: "Get original quality photos and videos without any compression or watermarks."
                },
                free: {
                    title: "Completely Free",
                    description: "No hidden fees, no registration required. Download unlimited content for free."
                },
                safe: {
                    title: "Safe & Secure",
                    description: "Your privacy is protected. We don't store your data or downloaded content."
                },
                easy: {
                    title: "Easy to Use",
                    description: "Simple 3-step process: paste link, choose format, download. No technical skills needed."
                },
                support: {
                    title: "All Formats",
                    description: "Support for photos, videos, stories, reels, IGTV, and carousel posts."
                }
            },
            // FAQ
            faq: {
                title: "Frequently Asked Questions",
                q1: "Is it free to download Instagram content?",
                a1: "Yes, our Instagram downloader is completely free to use. No registration or payment required.",
                q2: "What formats can I download?",
                a2: "You can download photos (JPG), videos (MP4), stories, reels, IGTV content, and carousel posts.",
                q3: "Is it safe to use this downloader?",
                a3: "Absolutely! We don't store your data or the downloaded content. Your privacy is our priority.",
                q4: "Do I need to install any software?",
                a4: "No installation required! Our downloader works directly in your web browser.",
                q5: "Can I download private account content?",
                a5: "No, you can only download content from public Instagram accounts and posts.",
                q6: "What's the video quality of downloaded content?",
                a6: "We provide the highest quality available from Instagram, maintaining original resolution and quality."
            },
            // Footer
            footer: {
                description: "The fastest and most reliable Instagram content downloader. Download photos, videos, stories, and more for free.",
                quickLinks: "Quick Links",
                legal: "Legal",
                termsOfService: "Terms of Service",
                privacyPolicy: "Privacy Policy",
                contact: "Contact",
                instagramVideoDownloader: "Instagram Video Downloader",
                carouselDownloader: "Carousel Downloader",
                instagramReelsDownloader: "Instagram Reels Downloader",
                storySaver: "Story Saver"
            }
        }
    },
    es: {
        translation: {
            hero: {
                title: "Descargar Instagram",
                subtitle: "fotos y videos",
                byLink: "por enlace",
                description: "Descarga Video, Reels, Fotos, IGTV, carrusel de Instagram. Pega el enlace del perfil o publicación, elige el formato y obtén el contenido en un clic.",
                placeholder: "Pega el enlace de Instagram aquí...",
                download: "Descargar",
                loading: "Cargando...",
                newSearch: "Nueva Búsqueda"
            },
            nav: {
                posts: "Publicaciones",
                stories: "Historias",
                highlights: "Destacadas",
                reels: "Reels",
                followers: "Seguidores",
                following: "Siguiendo"
            },
            content: {
                photos: "Fotos",
                videos: "Videos",
                carousel: "Carrusel",
                igtv: "IGTV",
                loadMore: "Cargar más..."
            },
            benefits: {
                title: "Por qué elegir nuestro",
                subtitle: "Descargador de Instagram",
                fast: {
                    title: "Súper Rápido",
                    description: "Descarga tu contenido favorito de Instagram en segundos con nuestros servidores optimizados."
                },
                quality: {
                    title: "Alta Calidad",
                    description: "Obtén fotos y videos en calidad original sin compresión ni marcas de agua."
                },
                free: {
                    title: "Completamente Gratis",
                    description: "Sin tarifas ocultas, sin registro requerido. Descarga contenido ilimitado gratis."
                },
                safe: {
                    title: "Seguro y Protegido",
                    description: "Tu privacidad está protegida. No almacenamos tus datos ni el contenido descargado."
                },
                easy: {
                    title: "Fácil de Usar",
                    description: "Proceso simple de 3 pasos: pega el enlace, elige formato, descarga. No se necesitan habilidades técnicas."
                },
                support: {
                    title: "Todos los Formatos",
                    description: "Soporte para fotos, videos, historias, reels, IGTV y publicaciones de carrusel."
                }
            },
            faq: {
                title: "Preguntas Frecuentes",
                q1: "¿Es gratis descargar contenido de Instagram?",
                a1: "Sí, nuestro descargador de Instagram es completamente gratis. No se requiere registro ni pago.",
                q2: "¿Qué formatos puedo descargar?",
                a2: "Puedes descargar fotos (JPG), videos (MP4), historias, reels, contenido IGTV y publicaciones de carrusel.",
                q3: "¿Es seguro usar este descargador?",
                a3: "¡Absolutamente! No almacenamos tus datos ni el contenido descargado. Tu privacidad es nuestra prioridad.",
                q4: "¿Necesito instalar algún software?",
                a4: "¡No se requiere instalación! Nuestro descargador funciona directamente en tu navegador web.",
                q5: "¿Puedo descargar contenido de cuentas privadas?",
                a5: "No, solo puedes descargar contenido de cuentas e Instagram públicas.",
                q6: "¿Cuál es la calidad de video del contenido descargado?",
                a6: "Proporcionamos la mayor calidad disponible de Instagram, manteniendo la resolución y calidad original."
            },
            footer: {
                description: "El descargador de contenido de Instagram más rápido y confiable. Descarga fotos, videos, historias y más gratis.",
                quickLinks: "Enlaces Rápidos",
                legal: "Legal",
                termsOfService: "Términos de Servicio",
                privacyPolicy: "Política de Privacidad",
                contact: "Contacto",
                instagramVideoDownloader: "Descargador de Videos de Instagram",
                carouselDownloader: "Descargador de Carrusel",
                instagramReelsDownloader: "Descargador de Reels de Instagram",
                storySaver: "Guardador de Historias"
            }
        }
    },
    fr: {
        translation: {
            hero: {
                title: "Télécharger Instagram",
                subtitle: "photos et vidéos",
                byLink: "par lien",
                description: "Téléchargez Vidéo, Reels, Photo, IGTV, carrousel depuis Instagram. Collez le lien du profil ou de la publication, choisissez le format et obtenez le contenu en un clic.",
                placeholder: "Collez le lien Instagram ici...",
                download: "Télécharger",
                loading: "Chargement...",
                newSearch: "Nouvelle Recherche"
            },
            nav: {
                posts: "Publications",
                stories: "Stories",
                highlights: "À la une",
                reels: "Reels",
                followers: "Abonnés",
                following: "Abonnements"
            },
            content: {
                photos: "Photos",
                videos: "Vidéos",
                carousel: "Carrousel",
                igtv: "IGTV",
                loadMore: "Charger plus..."
            },
            benefits: {
                title: "Pourquoi choisir notre",
                subtitle: "Téléchargeur Instagram",
                fast: {
                    title: "Ultra Rapide",
                    description: "Téléchargez votre contenu Instagram préféré en quelques secondes avec nos serveurs optimisés."
                },
                quality: {
                    title: "Haute Qualité",
                    description: "Obtenez des photos et vidéos en qualité originale sans compression ni filigrane."
                },
                free: {
                    title: "Entièrement Gratuit",
                    description: "Pas de frais cachés, pas d'inscription requise. Téléchargez du contenu illimité gratuitement."
                },
                safe: {
                    title: "Sûr et Sécurisé",
                    description: "Votre vie privée est protégée. Nous ne stockons ni vos données ni le contenu téléchargé."
                },
                easy: {
                    title: "Facile à Utiliser",
                    description: "Processus simple en 3 étapes : collez le lien, choisissez le format, téléchargez. Aucune compétence technique requise."
                },
                support: {
                    title: "Tous les Formats",
                    description: "Support pour photos, vidéos, stories, reels, IGTV et publications carrousel."
                }
            },
            faq: {
                title: "Questions Fréquemment Posées",
                q1: "Est-ce gratuit de télécharger du contenu Instagram ?",
                a1: "Oui, notre téléchargeur Instagram est entièrement gratuit. Aucune inscription ou paiement requis.",
                q2: "Quels formats puis-je télécharger ?",
                a2: "Vous pouvez télécharger des photos (JPG), vidéos (MP4), stories, reels, contenu IGTV et publications carrousel.",
                q3: "Est-ce sûr d'utiliser ce téléchargeur ?",
                a3: "Absolument ! Nous ne stockons ni vos données ni le contenu téléchargé. Votre vie privée est notre priorité.",
                q4: "Dois-je installer un logiciel ?",
                a4: "Aucune installation requise ! Notre téléchargeur fonctionne directement dans votre navigateur web.",
                q5: "Puis-je télécharger du contenu de comptes privés ?",
                a5: "Non, vous ne pouvez télécharger que du contenu de comptes et publications Instagram publics.",
                q6: "Quelle est la qualité vidéo du contenu téléchargé ?",
                a6: "Nous fournissons la plus haute qualité disponible d'Instagram, en maintenant la résolution et la qualité d'origine."
            },
            footer: {
                description: "Le téléchargeur de contenu Instagram le plus rapide et fiable. Téléchargez photos, vidéos, stories et plus gratuitement.",
                quickLinks: "Liens Rapides",
                legal: "Légal",
                termsOfService: "Conditions de Service",
                privacyPolicy: "Politique de Confidentialité",
                contact: "Contact",
                instagramVideoDownloader: "Téléchargeur de Vidéos Instagram",
                carouselDownloader: "Téléchargeur Carrousel",
                instagramReelsDownloader: "Téléchargeur de Reels Instagram",
                storySaver: "Sauvegarde de Stories"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;