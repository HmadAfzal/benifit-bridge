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
import { Building2, Calculator, ChevronRight, HandGrab, HandHeart, Home, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { services } from "@/constants/services"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"

const Navbar = () => {
  const pathname = usePathname()


  const mortgageServices = services.filter((s) => s.type === "mortgage")
  const protectionServices = services.filter((s) => s.type === "cover-protection")
  return (
    <header className="sticky top-0 w-full h-16 py-4 bg-background z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={'/brand.jpeg'} height={100} width={100} alt="horizonn" />

            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-16">
              {NAV_LINKS.map((link, index) => {
                if (link.name === "Benefit Bridge") {
                  return (
                    <li key={index}>
                      <NavigationMenu >
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-sm font-medium">
                              {link.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="p-0">
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">

                                <li>
                                  <NavigationMenuLink asChild >
                                    <Link
                                      href={`/partnerships`}
                                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <HandHeart className="h-4 w-4" />
                                        <div className="text-sm font-medium leading-none">Partnerships</div>
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug ">
                                        A Partnership Focused on Your Property Journey
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>

                                <li>
                                  <NavigationMenuLink asChild >
                                    <Link
                                      href={`/about`}
                                      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <Building2 className="h-4 w-4" />
                                        <div className="text-sm font-medium leading-none">About Us</div>
                                      </div>
                                      <p className="line-clamp-2 text-sm leading-snug ">
                                        We care about our clients, colleagues, and community
                                      </p>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>

                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </li>
                  )
                }
             if (link.name === "Services") {
                  return (
                    <li key={index}>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm font-medium text-primary hover:underline transition-colors outline-none">
                          Services
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          {/* Mortgages Sub-Dropdown */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="flex items-center gap-2">
                              <Home className="h-4 w-4 text-primary" />
                              <span>Mortgages</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-64">
                              {mortgageServices.map((item) => (
                                <DropdownMenuItem key={item.id} asChild>
                                  <Link
                                    href={`/services/${item.id}`}
                                    className="flex flex-col items-start gap-1 cursor-pointer"
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span className="font-medium">{item.title}</span>
                                      <ChevronRight className="h-3 w-3 opacity-50" />
                                    </div>
                                    <span className="text-xs text-muted-foreground line-clamp-1">
                                      {item.description}
                                    </span>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>

                          {/* Cover & Protection Sub-Dropdown */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="flex items-center gap-2">
                              <ShieldCheck className="h-4 w-4 text-primary" />
                              <span>Cover & Protection</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-64">
                              {protectionServices.map((item) => (
                                <DropdownMenuItem key={item.id} asChild>
                                  <Link
                                    href={`/services/${item.id}`}
                                    className="flex flex-col items-start gap-1 cursor-pointer"
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span className="font-medium">{item.title}</span>
                                      <ChevronRight className="h-3 w-3 opacity-50" />
                                    </div>
                                    <span className="text-xs text-muted-foreground line-clamp-1">
                                      {item.description}
                                    </span>
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuContent>
                      </DropdownMenu>
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