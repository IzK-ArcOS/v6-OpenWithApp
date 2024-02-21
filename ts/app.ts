import { ComponentIcon } from "$ts/images/general";
import { App } from "$types/app";
import AppSvelte from "../App.svelte";
import { Runtime } from "./runtime";

export const OpenWith: App = {
  metadata: {
    name: "Open With",
    description: "Allows you to choose with what to open a file",
    author: "The ArcOS Team",
    version: "3.0.0",
    icon: ComponentIcon,
    appGroup: "internal",
    hidden: true,
  },
  runtime: Runtime,
  content: AppSvelte,
  id: "OpenWith",
  size: { w: 450, h: NaN },
  minSize: { w: 450, h: 500 },
  maxSize: { w: 450, h: 540 },
  pos: { x: 200, y: 100 },
  state: {
    minimized: false,
    maximized: false,
    headless: false,
    fullscreen: false,
    resizable: false,
  },
  controls: {
    minimize: false,
    maximize: false,
    close: true,
  },
  isOverlay: true,
  glass: false,
};
