import { AlertTriangle, BookOpen, MessageSquare, Pill, Plus, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  const actions = [
    {
      title: "Emergency Contact",
      description: "24/7 medical helpline",
      icon: AlertTriangle,
      color: "bg-emergency hover:bg-emergency/90",
      urgent: true,
    },
    {
      title: "Log Symptoms",
      description: "Track your daily health",
      icon: Plus,
      color: "bg-gradient-primary hover:opacity-90",
    },
    {
      title: "Medication Reminder",
      description: "Set up pill reminders",
      icon: Pill,
      color: "bg-gradient-health hover:opacity-90",
    },
    {
      title: "Chat with Doctor",
      description: "Quick consultation",
      icon: MessageSquare,
      color: "bg-gradient-secondary hover:opacity-90",
    },
    {
      title: "Health Records",
      description: "View test results",
      icon: Stethoscope,
      color: "bg-accent hover:bg-accent/90",
    },
    {
      title: "Education Hub",
      description: "Pregnancy resources",
      icon: BookOpen,
      color: "bg-muted hover:bg-muted/90",
    },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className={`h-auto p-4 flex flex-col items-center space-y-2 transition-all duration-200 ${
                  action.urgent ? action.color : `hover:bg-muted/50`
                }`}
                style={!action.urgent ? { background: action.color } : {}}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  action.urgent ? "bg-white/20" : "bg-white/10"
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    action.urgent ? "text-white" : "text-white"
                  }`} />
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${
                    action.urgent ? "text-white" : "text-white"
                  }`}>
                    {action.title}
                  </div>
                  <div className={`text-xs ${
                    action.urgent ? "text-white/80" : "text-white/70"
                  }`}>
                    {action.description}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;