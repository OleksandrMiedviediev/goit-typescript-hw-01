type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare <T extends AllType, P extends AllType> (top:Pick<T, keyof AllType>, bottom:Pick<P, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
