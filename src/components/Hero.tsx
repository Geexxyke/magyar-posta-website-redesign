import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, CreditCard, FileText, MapPin, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Megbízható
              <span className="block text-primary-glow">Postai Szolgáltatások</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Küldje el csomagjait biztonságosan, intézze pénzügyi ügyeit kényelmesen,
              és használja ki a Magyar Posta modern szolgáltatásait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-glow">
                Csomag Feladása
                <Package size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Csomag Követése
                <Search size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Services Card */}
          <Card className="bg-gradient-card backdrop-blur-md border-primary-foreground/20 animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Gyors Szolgáltatások</h3>
              <div className="space-y-4">
                <QuickServiceItem 
                  icon={<Package />} 
                  title="Csomagkövetés" 
                  description="Kövesse nyomon küldeményét valós időben"
                />
                <QuickServiceItem 
                  icon={<CreditCard />} 
                  title="Postai Utalvány" 
                  description="Gyors és biztonságos pénzküldés"
                />
                <QuickServiceItem 
                  icon={<FileText />} 
                  title="Közműszámlák" 
                  description="Fizesse be számláit kényelmesen"
                />
                <QuickServiceItem 
                  icon={<MapPin />} 
                  title="Postahivatal Kereső" 
                  description="Találja meg a legközelebbi postát"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const QuickServiceItem = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Hero;