import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Phone, Mail, User } from "lucide-react";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      patientEmail: "sarah.johnson@email.com",
      patientPhone: "+1 (555) 123-4567",
      appointment: "Routine Checkup",
      date: "2024-10-05",
      time: "10:00 AM",
      location: "Women's Health Center - Room 203",
      status: "confirmed",
      weeks: "32 weeks",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      patientName: "Emily Chen",
      patientEmail: "emily.chen@email.com",
      patientPhone: "+1 (555) 987-6543",
      appointment: "Ultrasound Scan",
      date: "2024-10-07",
      time: "2:30 PM",
      location: "Imaging Department - Suite 150",
      status: "pending",
      weeks: "20 weeks",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      patientName: "Maria Rodriguez",
      patientEmail: "maria.rodriguez@email.com",
      patientPhone: "+1 (555) 456-7890",
      appointment: "Blood Work",
      date: "2024-10-08",
      time: "9:15 AM",
      location: "Laboratory - Floor 1",
      status: "confirmed",
      weeks: "16 weeks",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      patientName: "Jessica Williams",
      patientEmail: "jessica.williams@email.com",
      patientPhone: "+1 (555) 321-0987",
      appointment: "Prenatal Consultation",
      date: "2024-10-10",
      time: "11:45 AM",
      location: "Consultation Room 5",
      status: "confirmed",
      weeks: "28 weeks",
      avatar: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-primary text-primary-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
              <p className="text-muted-foreground mt-2">Manage and view all patient appointments</p>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              Schedule New Appointment
            </Button>
          </div>

          <div className="grid gap-6">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="shadow-card hover:shadow-card-hover transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={appointment.avatar} alt={appointment.patientName} />
                        <AvatarFallback className="bg-primary-light text-primary">
                          <User className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {appointment.patientName}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{appointment.weeks}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{appointment.appointment}</p>
                          <p className="text-sm text-muted-foreground">{appointment.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-primary" />
                        <p className="text-sm text-foreground">{appointment.time}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <p className="text-sm text-foreground">{appointment.location}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <p className="text-sm text-foreground">{appointment.patientEmail}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <p className="text-sm text-foreground">{appointment.patientPhone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary-light">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;