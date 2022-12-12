export class Estate {
  id?: string;
  owner?: string;
  address!: string;
  city!: string;
  zip!: string;
  bedrooms!: number;
  baths!: number;
  type!: string;
  price!: number;
  rented!: boolean;
  maintenance!: boolean;
}
