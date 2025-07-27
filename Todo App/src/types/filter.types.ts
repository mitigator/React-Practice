export type Filtertype = 'all' | 'completed' | 'pending';
export type Themetype = 'light' | 'dark';

export interface FilterOption{
    key: Filtertype;
    label:string;
    icon:React.ComponentType<{size?: number}>;
}
