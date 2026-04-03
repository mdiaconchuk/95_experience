import { AppType } from "@/types/types";

export const Apps: AppType[] = [
  {
    id: 0,
    name: "About",
    icon: "info-32x32-8bpp",
  },
  {
    id: 1,
    name: "Resume",
    icon: "my-documents-folder-32x32",
    type: "folder"
  },
  {
    id: 2,
    name: "Images",
    icon: "folder-32x32",
    type: "folder"
  },
  {
    id: 3,
    name: "IE",
    icon: "internet-explorer-32x32",
  },
  {
    id: 4,
    name: "Run...",
    icon: "run-32x32",
  },
];

export const SpecialApps: AppType[] = [
  {
    id: 6,
    name: "Suspend",
    icon: "sleep-32x32",
  },
  {
    id: 7,
    name: "Shut Down",
    icon: "shutdown-32x32",
  },
];
