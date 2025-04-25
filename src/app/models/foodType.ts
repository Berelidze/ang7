export class foodType{
  id!: Number;
  name!:string;
  products?: [
    {
      id: 0;
      name: number;
      price: number;
      nuts: boolean;
      image: string;
      vegeterian: boolean;
      spiciness: Number;
      categoryId: Number;
    }
  ] | undefined
}