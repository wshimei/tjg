export interface EProduct {
  id: number,
  name: string,
  category: {
    levelOne: string,
    levelTwo: string,
    levelThree: string
  },
  image_link: string
}
