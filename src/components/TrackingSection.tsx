import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Package, MapPin, Clock, CheckCircle } from "lucide-react";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tracking Input */}
          <Card className="mb-12 shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-3">
                <Package className="text-primary" />
                Csomagkövetés
              </CardTitle>
              <p className="text-muted-foreground">
                Adja meg a küldemény azonosítóját a követéshez
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Pl: RR123456789HU"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button className="flex items-center gap-2">
                  <Search size={18} />
                  Keresés
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample Tracking Result */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Küldemény: RR123456789HU</span>
                <span className="text-lg font-normal text-green-600">Kézbesítve</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <TrackingStep 
                  icon={<CheckCircle className="text-green-600" />}
                  title="Kézbesítve"
                  description="A küldemény sikeresen kézbesítve lett a címzettnek"
                  time="2025.01.15 14:30"
                  location="Budapest, 1051"
                  isCompleted
                />
                <TrackingStep 
                  icon={<Package className="text-primary" />}
                  title="Kézbesítés alatt"
                  description="A küldemény a kézbesítő postáson van"
                  time="2025.01.15 08:00"
                  location="Budapest Központi Posta"
                  isCompleted
                />
                <TrackingStep 
                  icon={<MapPin className="text-primary" />}
                  title="Célposta érkezés"
                  description="A küldemény megérkezett a célpostára"
                  time="2025.01.14 16:45"
                  location="Budapest Központi Posta"
                  isCompleted
                />
                <TrackingStep 
                  icon={<Clock className="text-muted-foreground" />}
                  title="Feladva"
                  description="A küldemény feladásra került"
                  time="2025.01.13 10:15"
                  location="Debrecen Fő Posta"
                  isCompleted
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const TrackingStep = ({ 
  icon, 
  title, 
  description, 
  time, 
  location, 
  isCompleted 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  location: string;
  isCompleted: boolean;
}) => (
  <div className="flex items-start space-x-4">
    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
      isCompleted ? 'bg-primary/10' : 'bg-muted'
    }`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className={`font-semibold ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
        {title}
      </h4>
      <p className="text-muted-foreground text-sm mb-2">{description}</p>
      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {time}
        </span>
        <span className="flex items-center gap-1">
          <MapPin size={14} />
          {location}
        </span>
      </div>
    </div>
  </div>
);

export default TrackingSection;