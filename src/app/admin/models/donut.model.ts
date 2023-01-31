export interface Donut {
    id: string;
    name: string;
    icon: string;
    price: number;
    promo?: boolean;
    released?: 'None' | 'New' | 'Limited Edition';
    description: string;
}
