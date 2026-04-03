export interface AppType {
    id: number;
    name: string;
    icon: string;
    type?: 'folder' | 'other';
    component?: React.ComponentType<unknown>;
}