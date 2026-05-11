import React from "react";

export interface AppType {
    id: number;
    name: string;
    icon: string;
    taskbarIcon: string | null;
    type?: 'folder' | 'other';
    component?: React.ComponentType
    // --- App Manager ---
    isOpen?: boolean;
    isMinimized?: boolean;
    isMaximized?: boolean;
    zIndex?: number;
}