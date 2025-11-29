import { PropsWithChildren } from "react";
import '../../css/public-layout.css';
import { SharedData } from "@/types";
import { usePage } from "@inertiajs/react";
import { UserMenuContent } from "@/components/user-menu-content";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useInitials } from "@/hooks/use-initials";

export default function PublicLayout({ children }: PropsWithChildren) {
    const getInitials = useInitials();
    const { auth } = usePage<SharedData>().props;
    console.log(auth)
    return (
      <>
        <header className="topbar">
          <div className="logo">Incunet<span>Spaces</span></div>
          <nav className="nav-links">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</a>
            <a href="/voluntariados" className={location.pathname === '/voluntariados' ? 'active' : ''}>Voluntariados</a>
            <a href="/organizaciones" className={location.pathname === '/organizaciones' ? 'active' : ''}>Organizaciones</a>
            <a href="/quienes" className={location.pathname === '/quienes' ? 'active' : ''}>Quiénes Somos</a>
            <a href="/api" className={location.pathname === '/api' ? 'active' : ''}>APIs</a>
          </nav>
          {auth.user ? (
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button
                      variant="ghost"
                      className="size-10 rounded-full p-1"
                  >
                      <Avatar className="size-8 overflow-hidden rounded-full">
                          <AvatarImage
                              src={auth.user.avatar}
                              alt={auth.user.name}
                          />
                          <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                              {getInitials(auth.user.name)}
                          </AvatarFallback>
                      </Avatar>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border pb-2" align="end">
                  <UserMenuContent user={auth.user} />
              </DropdownMenuContent>
          </DropdownMenu>
          ):
          (
            <div className="auth-links flex gap-3">
              <a href="/login" className="btn p-2! px-4! login-btn">Iniciar Sesión</a>
              <a href="/register" className="btn p-2! px-4! register-btn">Registrarse</a>
            </div>
          )
          }
          <div className="nav-actions">
            <button id="theme-toggle" className="hamburger">Modo cielo</button>
            <button id="menu-toggle" className="hamburger">☰</button>
          </div>
        </header>
        <nav id="mobile-menu" className="mobile-menu">
          <a href="/" className="active">Inicio</a>
          <a href="/voluntariados" className="">Voluntariados</a>
          <a href="/organizaciones" className="">Organizaciones</a>
          <a href="/quienes" className="">Quiénes Somos</a>
          <a href="/api" className="">APIs</a>
        </nav>
        <main className="container">{children}</main>
        <footer className="footer"><p>© 2025 IncunetSpaces</p></footer>
      </>
    );
}