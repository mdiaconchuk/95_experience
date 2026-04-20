export interface AppType {
    id: number;
    name: string;
    icon: string;
    type?: 'folder' | 'other';
}

export interface AppContextType extends AppType {
    isMinimized: boolean;
}