import { LogOut, Menu, X, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '@/lib/storage';

interface HeaderProps {
  showLogout?: boolean;
}

const Header = ({ showLogout = true }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Show back button when not on main dashboard
  const showBackButton = location.pathname !== '/dashboard' && location.pathname !== '/';

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              <span className="text-2xl">💙</span>
              <span className="font-display font-bold text-lg">
                <span className="text-primary">PRP</span> RECONQUISTA
              </span>
            </div>
          </div>

          {/* Desktop */}
          {showLogout && (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 btn-ghost"
            >
              <LogOut className="w-4 h-4" />
              <span>Salir</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          {showLogout && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && showLogout && (
          <div className="md:hidden py-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full py-3 px-2 hover:bg-muted rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Salir</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
