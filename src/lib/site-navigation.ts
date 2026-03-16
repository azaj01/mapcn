import {
  BookOpen,
  Braces,
  Code,
  Home,
  Layers,
  LayoutGrid,
  LucideIcon,
  Map,
  MapPin,
  MessageSquare,
  Route,
  Settings,
  Wrench,
} from "lucide-react";

export interface MainNavItem {
  href: string;
  label: string;
}

export interface SiteNavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  new?: boolean;
}

export interface SiteNavigationGroup {
  title: string;
  items: SiteNavigationItem[];
}

export const docsNavigation: SiteNavigationGroup[] = [
  {
    title: "Basics",
    items: [
      { title: "Getting Started", href: "/docs", icon: BookOpen },
      { title: "Installation", href: "/docs/installation", icon: Code },
      { title: "API Reference", href: "/docs/api-reference", icon: Braces },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Map", href: "/docs/basic-map", icon: Map },
      { title: "Controls", href: "/docs/controls", icon: Settings },
      { title: "Markers", href: "/docs/markers", icon: MapPin },
      { title: "Popups", href: "/docs/popups", icon: MessageSquare },
      { title: "Routes", href: "/docs/routes", icon: Route },
      { title: "Clusters", href: "/docs/clusters", icon: Layers },
      { title: "Advanced", href: "/docs/advanced-usage", icon: Wrench },
    ],
  },
];

const navItems: SiteNavigationItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Docs", href: "/docs", icon: BookOpen },
  { title: "Components", href: "/docs/basic-map", icon: Map },
  { title: "Blocks", href: "/blocks", icon: LayoutGrid },
];

export const siteNavigation: SiteNavigationGroup[] = [
  {
    title: "Pages",
    items: navItems,
  },
  ...docsNavigation,
];
