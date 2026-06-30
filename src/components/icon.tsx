import {
  LayoutDashboard, ClipboardList, Ticket, Siren, Stethoscope, BedDouble,
  LayoutGrid, Scissors, FolderHeart, FlaskConical, ScanLine, Pill,
  UtensilsCrossed, Droplets, Recycle, Shirt, Ambulance, Receipt, ShieldCheck,
  BookOpen, Scale, Boxes, ShoppingCart, Wrench, Coffee, Users, CalendarClock,
  Banknote, BarChart3, Cable, Database, Settings, Search, Bell, Menu, X,
  ChevronRight, Plus, Activity, HeartPulse, Building2, CircleUserRound,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard, ClipboardList, Ticket, Siren, Stethoscope, BedDouble,
  LayoutGrid, Scissors, FolderHeart, FlaskConical, ScanLine, Pill,
  UtensilsCrossed, Droplets, Recycle, Shirt, Ambulance, Receipt, ShieldCheck,
  BookOpen, Scale, Boxes, ShoppingCart, Wrench, Coffee, Users, CalendarClock,
  Banknote, BarChart3, Cable, Database, Settings, Search, Bell, Menu, X,
  ChevronRight, Plus, Activity, HeartPulse, Building2, CircleUserRound,
};

export function Icon({ name, className, size = 18 }: { name: string; className?: string; size?: number }) {
  const C = ICONS[name] ?? Activity;
  return <C className={className} size={size} strokeWidth={1.9} />;
}
