export class Lease {
    id?: string;
    owner?: string;
    startDate?: Date;
    endDate?: Date;
    title!: string;
    address!: string;
    rent!: number;
    description!: string;
}