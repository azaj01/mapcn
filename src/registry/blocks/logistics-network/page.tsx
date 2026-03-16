"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { hubs, routes } from "./data";
import { FilterSidebar } from "./components/filter-sidebar";
import { NetworkMap } from "./components/network-map";

export function LogisticsNetworkBlock() {
  return (
    <SidebarProvider>
      <FilterSidebar hubs={hubs} routes={routes} />
      <SidebarInset>
        <NetworkMap hubs={hubs} routes={routes} />
      </SidebarInset>
    </SidebarProvider>
  );
}
