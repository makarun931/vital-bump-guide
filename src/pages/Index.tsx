import Header from "@/components/Header";
import HealthStats from "@/components/HealthStats";
import AppointmentCard from "@/components/AppointmentCard";
import PregnancyTimeline from "@/components/PregnancyTimeline";
import QuickActions from "@/components/QuickActions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pregnancy-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Your Pregnancy Journey, 
                  <span className="text-primary"> Supported Every Step</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Comprehensive health monitoring, expert guidance, and personalized care 
                  throughout your pregnancy journey. Track your health, stay connected with 
                  your healthcare team, and ensure the best care for you and your baby.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  View Health Dashboard
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary-light">
                  Schedule Appointment
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Pregnancy health care and monitoring"
                className="w-full h-auto rounded-2xl shadow-glow object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Health Statistics */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Health Overview</h2>
          <HealthStats />
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <AppointmentCard />
            <PregnancyTimeline />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <QuickActions />
            
            {/* Health Tips Card */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Today's Health Tips</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-health-light rounded-lg">
                    <h4 className="font-medium text-health-foreground text-sm">Nutrition</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Include 75g of protein daily for optimal baby development.
                    </p>
                  </div>
                  <div className="p-3 bg-primary-light rounded-lg">
                    <h4 className="font-medium text-primary text-sm">Exercise</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      30 minutes of gentle walking can improve circulation.
                    </p>
                  </div>
                  <div className="p-3 bg-secondary rounded-lg">
                    <h4 className="font-medium text-secondary-foreground text-sm">Wellness</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Practice deep breathing for 10 minutes to reduce stress.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
