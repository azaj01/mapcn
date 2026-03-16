import React from "react";
import { RegistryBlockItem } from "@/lib/blocks";

export const blockComponents: Record<
  RegistryBlockItem["name"],
  React.LazyExoticComponent<React.ComponentType<object>>
> = {
  "analytics-map": React.lazy(() =>
    import("./analytics-map/page").then((mod) => ({
      default: mod.AnalyticsMapBlock,
    }))
  ),
  heatmap: React.lazy(() =>
    import("./heatmap/page").then((mod) => ({
      default: mod.HeatmapBlock,
    }))
  ),
  "delivery-tracker": React.lazy(() =>
    import("./delivery-tracker/page").then((mod) => ({
      default: mod.DeliveryBlock,
    }))
  ),
  "logistics-network": React.lazy(() =>
    import("./logistics-network/page").then((mod) => ({
      default: mod.LogisticsNetworkBlock,
    }))
  ),
};
