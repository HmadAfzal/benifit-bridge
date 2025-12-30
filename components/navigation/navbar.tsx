"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Wrapper from "../global/wrapper"
import { NAV_LINKS } from "@/constants/nav-links"
import MobileMenu from "./mobile-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Calculator } from "lucide-react"
import Image from "next/image"
import { services } from "@/constants/services"

const Navbar = () => {
  const pathname = usePathname()


  return (
    <header className="sticky top-0 w-full h-20 bg-background/80 backdrop-blur-sm z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={'/logo.jpeg'} height={70} width={70} alt="horizonn"/>

            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-16">
              {NAV_LINKS.map((link, index) => {
                if (link.name === "Services") {
                  return (
                    <li key={index}>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-sm font-medium">
                              Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                {services.map((item) => (
                                  <li key={item.title}>
                                    <NavigationMenuLink asChild >
                                      <Link
                                        href={`/services/${item.id}`}
                                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors 
                                          ${pathname === item.id ? "bg-accent text-accent-foreground underline" : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}`}
                                      >
                                        <div className="flex items-center gap-2">
                                          <item.icon className="h-4 w-4" />
                                          <div className="text-sm font-medium leading-none">{item.title}</div>
                                        </div>
                                        <p className="line-clamp-2 text-sm leading-snug ">
                                          {item.description}
                                        </p>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </li>
                  )
                }
                return (
                  <li key={index} className="text-sm font-medium">
                    <Link
                      href={link.href}
                      className={`relative transition-all ${pathname === link.href ? "underline font-semibold" : "hover:underline"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar