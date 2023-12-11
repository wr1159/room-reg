import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="bg-muted/30">
      <NavigationMenuList className="w-screen items-center justify-start gap-x-2 p-4 text-lg text-primary">
        <NavigationMenuLink
          href="/"
          className="mr-4 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          RoomReg
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/bid"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          Bid
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/queue"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          Queue
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/residents"
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          Residents
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
