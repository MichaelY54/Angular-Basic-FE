export class Ingredient{
  id?: number;
  name?: string;
  type?: string;
  description?: string;

  constructor(id:number, name:string, type:string, description:string){
    this.id = undefined;
    this.name = name;
    this.type = type;
    this.description = description;
  }
}

