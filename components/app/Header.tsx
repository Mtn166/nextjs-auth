import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="flex justify-between py-2 border-b">
      <div className="container mx-auto flex justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={""} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <UserButton />
      </div>
    </header>
  );
}
