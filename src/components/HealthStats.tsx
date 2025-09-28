import { Activity, Baby, Heart, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HealthStats = () => {
  const stats = [
    {
      title: "Baby's Growth",
      value: "28 weeks",
      subtitle: "Size of an eggplant",
      icon: Baby,
      progress: 70,
      color: "bg-gradient-health",
    },
    {
      title: "Weight Tracking",
      value: "+18 lbs",
      subtitle: "Healthy range",
      icon: Scale,
      progress: 60,
      color: "bg-gradient-primary",
    },
    {
      title: "Heart Rate",
      value: "72 bpm",
      subtitle: "Normal",
      icon: Heart,
      progress: 85,
      color: "bg-gradient-secondary",
    },
    {
      title: "Activity Level",
      value: "6,542 steps",
      subtitle: "Goal: 8,000",
      icon: Activity,
      progress: 82,
      color: "bg-gradient-health",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                </div>
                <Progress value={stat.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HealthStats;