export interface EProduct {
  categoryId: number;
  categoryName: string;
  subCategories: Array<SubCategories>;
}

export interface SubCategories {
  subCatId: number;
  subCatName: string;
  items: Array <Items>;
}

export interface Items {
  itemId: number;
  itemName: string;
}
