import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const AppointmentCard = () => {
  const navigate = useNavigate();
  
  const appointments = [
    {
      id: 1,
      title: "Routine Checkup",
      doctor: "Dr. Emily Rodriguez",
      date: "Oct 15, 2024",
      time: "10:30 AM",
      location: "Women's Health Center",
      type: "In-person",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Ultrasound Scan",
      doctor: "Dr. Michael Chen",
      date: "Oct 22, 2024",
      time: "2:00 PM",
      location: "Imaging Department",
      type: "In-person",
      status: "pending",
    },
    {
      id: 3,
      title: "Nutrition Consultation",
      doctor: "Dr. Sarah Williams",
      date: "Oct 25, 2024",
      time: "11:00 AM",
      location: "Telehealth",
      type: "Virtual",
      status: "confirmed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-health text-health-foreground";
      case "pending":
        return "bg-secondary-accent text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            Upcoming Appointments
          </CardTitle>
          <Button variant="outline" size="sm" onClick={() => navigate('/appointments')}>
            Schedule New
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-medium text-foreground">{appointment.title}</h4>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                  <User className="w-3 h-3" />
                  <span>{appointment.doctor}</span>
                </div>
              </div>
              <Badge className={getStatusColor(appointment.status)} variant="secondary">
                {appointment.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{appointment.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{appointment.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{appointment.location}</span>
              </div>
            </div>
            
            <div className="flex justify-end mt-3 space-x-2">
              <Button variant="ghost" size="sm">
                Reschedule
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/appointments')}>
                View Details
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;