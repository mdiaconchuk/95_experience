import { AppType } from "@/types/types";
import About from "@/components/AppWindow/About";

export const Apps: AppType[] = [
  {
    id: 0,
    name: "About",
    icon: "info-32x32-8bpp",
    taskbarIcon: "info-16x16-8bpp",
    component: About,
  },
  {
    id: 1,
    name: "Resume",
    icon: "my-documents-folder-32x32",
    taskbarIcon: "my-documents-folder-16x16",
    type: "folder",
    component: About,
  },
  {
    id: 2,
    name: "Images",
    icon: "folder-32x32",
    taskbarIcon: "folder-16x16",
    type: "folder",
    component: About,
  },
  {
    id: 3,
    name: "IE",
    icon: "internet-explorer-32x32",
    taskbarIcon: "internet-explorer-16x16",
    component: About,
  },
  {
    id: 4,
    name: "Run...",
    icon: "run-32x32",
    taskbarIcon: "run-16x16",
    component: About,
  },
];

export const SpecialApps: AppType[] = [
  {
    id: 6,
    name: "Suspend",
    icon: "sleep-32x32",
    taskbarIcon: null,
    component: About,
  },
  {
    id: 7,
    name: "Shut Down",
    icon: "shutdown-32x32",
    taskbarIcon: null,
    component: About,
  },
];
