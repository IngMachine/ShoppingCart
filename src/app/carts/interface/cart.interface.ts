import { Product } from '../../products/interface/product';
export interface Cart {
    id: string;
    products: Product[],
    quantity: number;
    state: boolean;
}