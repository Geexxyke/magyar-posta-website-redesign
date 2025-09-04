import { Button } from "@/components/ui/button";
import { Search, Menu, Phone, User, Globe } from "lucide-react";
import magyarPostaLogo from "@/assets/magyar-posta-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +36 1 767 8282
            </span>
            <span>Magánszemélyek</span>
            <span>Üzleti partnerek</span>
            <span>Karriér</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              <User size={16} />
              Belépés
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              <Globe size={16} />
              HU
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={magyarPostaLogo} 
              alt="Magyar Posta" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-primary">Magyar Posta</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem title="KÜLDEMÉNY FELADÁSA" />
            <NavItem title="KÜLDEMÉNY ÉRKEZÉSE" />
            <NavItem title="BE- ÉS KIFIZETÉS" />
            <NavItem title="PÉNZÜGYI SZOLGÁLTATÁSOK" />
            <NavItem title="KÖZMŰÜGYINTÉZÉS" />
            <NavItem title="BÉLYEG" />
            <NavItem title="ÚJSÁG" />
            <NavItem title="EGYÉB" />
            <NavItem title="WEBSHOP" isSpecial />
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
              <Search size={18} className="text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Keresés..." 
                className="bg-transparent border-none outline-none text-sm w-48"
              />
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ title, isSpecial = false }: { title: string; isSpecial?: boolean }) => (
  <button 
    className={`text-sm font-medium transition-colors hover:text-primary relative group ${
      isSpecial ? 'text-destructive' : 'text-foreground'
    }`}
  >
    {title}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </button>
);

export default Header;