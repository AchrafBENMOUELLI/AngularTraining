export interface Eventy {
  //best practice to define model with interface not class cuz we dont need to create instance of model we already did it in the backend!!
  id: number;
  title: string;
  description: string;
  date:Date;
  location: string;
  price: number;
  organizedId: number;
  imageUrl: string;
  nbPlaces: number;
  nbrLike: number;
}
