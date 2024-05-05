export function getRandomFromArray<T>(list: Array<T>) {
  return list[Math.floor(Math.random() * list.length)];
}
