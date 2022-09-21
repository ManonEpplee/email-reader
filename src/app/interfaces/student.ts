import { Address } from './address';

export interface Student {
    id: number;
    name: string;
    email: string; 
    address?: Address;
}