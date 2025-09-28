import { Bell, Calendar, Heart, Menu, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PregCare</h1>
              <p className="text-sm text-muted-foreground">Health Monitoring</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/')}>
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/appointments')}>
              Appointments
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              Health Records
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              Resources
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emergency rounded-full text-xs"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <Calendar className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center space-x-2 bg-secondary px-3 py-2 rounded-full">
              <User className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm font-medium text-secondary-foreground">Sarah M.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;