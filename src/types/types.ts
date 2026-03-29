export interface AppType {
    id: number;
    name: string;
    icon: string;
    component?: React.ComponentType<unknown>;
}