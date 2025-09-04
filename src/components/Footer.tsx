import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";
import magyarPostaLogo from "@/assets/magyar-posta-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={magyarPostaLogo} 
                alt="Magyar Posta" 
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Magyar Posta</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Magyarország legnagyobb postai szolgáltatója. Megbízható, 
              gyors és biztonságos szolgáltatások több mint 150 éve.
            </p>
            <div className="flex space-x-4">
              <SocialButton icon={<Facebook size={20} />} />
              <SocialButton icon={<Twitter size={20} />} />
              <SocialButton icon={<Instagram size={20} />} />
              <SocialButton icon={<Youtube size={20} />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Szolgáltatások</h4>
            <ul className="space-y-3">
              <FooterLink text="Küldemény feladása" />
              <FooterLink text="Csomagkövetés" />
              <FooterLink text="Pénzügyi szolgáltatások" />
              <FooterLink text="Bélyegek" />
              <FooterLink text="Közműügyintézés" />
              <FooterLink text="MPL Futár" />
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ügyfélszolgálat</h4>
            <ul className="space-y-3">
              <FooterLink text="Kapcsolat" />
              <FooterLink text="GYIK" />
              <FooterLink text="Reklamáció" />
              <FooterLink text="Postahivatal kereső" />
              <FooterLink text="Árak és szolgáltatások" />
              <FooterLink text="Szabályzatok" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Elérhetőség</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-glow" />
                <span>+36 1 767 8282</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-glow" />
                <span>info@posta.hu</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-glow mt-1" />
                <div>
                  <p>Magyar Posta Zrt.</p>
                  <p>1138 Budapest, Dunavirág u. 2-6.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm">
            <FooterLink text="Adatvédelem" />
            <FooterLink text="Süti szabályzat" />
            <FooterLink text="Felhasználási feltételek" />
            <FooterLink text="Impresszum" />
          </div>
          <p className="text-sm text-primary-foreground/70">
            © 2025 Magyar Posta Zrt. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => (
  <Button 
    variant="ghost" 
    size="icon" 
    className="text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-glow transition-colors"
  >
    {icon}
  </Button>
);

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <button className="text-primary-foreground/80 hover:text-primary-glow transition-colors text-left">
      {text}
    </button>
  </li>
);

export default Footer;