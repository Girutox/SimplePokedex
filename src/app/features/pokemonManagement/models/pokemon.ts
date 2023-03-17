export class Pokemon {
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
  hp: number;
  type: string;
  idAuthor: number;

  constructor(
    id: number,
    name: string,
    image: string,
    attack: number,
    defense: number,
    hp: number,
    type: string,
    idAuthor: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.type = type;
    this.idAuthor = idAuthor;
  }

  static create(): void {
    const x = null;
  }

  static update(): void {
    const x = null;
  }

  static delete(): void {
    const x = null;
  }
}
