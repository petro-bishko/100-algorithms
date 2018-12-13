function addBorder(picture: string[]): string[] {
  const lengthOfWall = picture[0].length + 2;

  let wall = '';
  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat('*');
  }

  for (let k in picture) {
    picture[k] = `*${picture[k]}*`;
  }

  picture.unshift(wall);
  picture.push(wall);

  return picture;
}

console.log(addBorder(["abc", "ded"]));
