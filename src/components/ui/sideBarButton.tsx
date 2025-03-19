"use client";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface PropsSideBarButton {
  children: React.ReactNode;
  href: string;
}

export function SideBarButton(props: PropsSideBarButton) {
  const pathname = usePathname();
  return (
    <div>
      <Button
        variant={pathname === `${props.href}` ? "secondary" : "ghost"}
        className="gap-2 justify-start w-full"
        asChild
      >
        <Link href={props.href}>{props.children}</Link>
      </Button>
    </div>
  );
}
