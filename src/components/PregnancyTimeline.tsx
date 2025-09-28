import { Check, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PregnancyTimeline = () => {
  const currentWeek = 28;
  const totalWeeks = 40;
  const progressPercentage = (currentWeek / totalWeeks) * 100;

  const milestones = [
    { week: 12, title: "First Trimester Complete", completed: true },
    { week: 20, title: "Anatomy Scan", completed: true },
    { week: 24, title: "Viability Milestone", completed: true },
    { week: 28, title: "Third Trimester Begins", completed: true, current: true },
    { week: 32, title: "Brain Development Peak", completed: false },
    { week: 36, title: "Full Term Approaching", completed: false },
    { week: 40, title: "Due Date", completed: false },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Pregnancy Journey
        </CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Week {currentWeek} of {totalWeeks}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gradient-hero p-4 rounded-lg">
            <h3 className="font-medium text-foreground mb-2">This Week</h3>
            <p className="text-sm text-muted-foreground">
              Your baby is about the size of an eggplant! Their eyes can open and close, 
              and they're developing their own sleep patterns.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Upcoming Milestones</h4>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  milestone.current 
                    ? "bg-primary-light border border-primary" 
                    : milestone.completed 
                    ? "bg-health-light" 
                    : "bg-muted/50"
                }`}
              >
                <div className="flex-shrink-0">
                  {milestone.completed ? (
                    <div className="w-6 h-6 bg-health rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      milestone.current ? "text-primary" : "text-foreground"
                    }`}>
                      {milestone.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Week {milestone.week}
                    </span>
                  </div>
                  {milestone.current && (
                    <p className="text-sm text-primary mt-1">Current milestone</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PregnancyTimeline;