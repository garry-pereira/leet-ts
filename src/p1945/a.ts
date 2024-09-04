export default function solve(s: string, k: number): number {
  const dict = "_abcdefghijklmnopqrstuvwxyz";
  let decyphered: string = "";

  for (const c of s) {
    decyphered = decyphered + dict.indexOf(c).toString();
  }

  for (let i = 0; i < k; i++) {
    let summer: number = 0;

    for (const c of decyphered) {
      summer += parseInt(c);
    }

    decyphered = summer.toString();
  }

  return parseInt(decyphered, 10);
}

