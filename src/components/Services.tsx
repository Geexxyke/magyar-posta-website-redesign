import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Download, 
  CreditCard, 
  Building, 
  Zap, 
  Newspaper,
  ShoppingCart,
  Clock
} from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fedezze fel a Magyar Posta teljes szolgáltatási kínálatát
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Package />}
            title="Küldemény Feladása"
            description="Levelek, csomagok és egyéb küldemények feladása"
            color="from-green-500 to-green-600"
            delay="0"
          />
          <ServiceCard
            icon={<Download />}
            title="Küldemény Érkezése"
            description="Csomagkövetés és átvételi információk"
            color="from-blue-500 to-blue-600"
            delay="100"
          />
          <ServiceCard
            icon={<CreditCard />}
            title="Be- és Kifizetések"
            description="Utalványok, számlák és egyéb pénzügyi műveletek"
            color="from-purple-500 to-purple-600"
            delay="200"
          />
          <ServiceCard
            icon={<Building />}
            title="Pénzügyi Szolgáltatások"
            description="Biztosítások, befektetések és egyéb pénzügyi termékek"
            color="from-orange-500 to-orange-600"
            delay="300"
          />
          <ServiceCard
            icon={<Zap />}
            title="Közműügyintézés"
            description="Villany-, gáz- és vízszámlák befizetése"
            color="from-yellow-500 to-yellow-600"
            delay="400"
          />
          <ServiceCard
            icon={<Newspaper />}
            title="Bélyegek"
            description="Gyűjtői és normál bélyegek nagy választékban"
            color="from-red-500 to-red-600"
            delay="500"
          />
          <ServiceCard
            icon={<Newspaper />}
            title="Újságok"
            description="Sajtótermékek előfizetése és árusítása"
            color="from-indigo-500 to-indigo-600"
            delay="600"
          />
          <ServiceCard
            icon={<ShoppingCart />}
            title="Webshop"
            description="Online vásárlás a Magyar Posta termékeiből"
            color="from-pink-500 to-pink-600"
            delay="700"
          />
        </div>

        {/* Popular Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Népszerű Szolgáltatások</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <PopularServiceCard
              title="Expressz Csomag"
              description="24 órán belüli kézbesítés országosan"
              price="990 Ft-tól"
              features={["Követhető", "Biztosított", "Gyors"]}
            />
            <PopularServiceCard
              title="Postai Utalvány"
              description="Biztonságos pénzküldés magyarországon belül"
              price="295 Ft-tól"
              features={["Azonnali", "Biztonságos", "Egyszerű"]}
            />
            <PopularServiceCard
              title="MPL Futárszolgálat"
              description="Háztól-házig szolgáltatás csomagokhoz"
              price="1.490 Ft-tól"
              features={["Házhoz szállítás", "Időpontos", "Megbízható"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, color, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: string;
}) => (
  <Card 
    className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <CardHeader className="text-center">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-center">{description}</p>
    </CardContent>
  </Card>
);

const PopularServiceCard = ({ title, description, price, features }: {
  title: string;
  description: string;
  price: string;
  features: string[];
}) => (
  <Card className="relative overflow-hidden group hover:shadow-card transition-all duration-300">
    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 rounded-bl-lg">
      <Clock size={16} className="inline mr-1" />
      Népszerű
    </div>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
      <div className="text-3xl font-bold text-primary">{price}</div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full" variant="outline">
        Részletek
      </Button>
    </CardContent>
  </Card>
);

export default Services;