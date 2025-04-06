// https://leetcode.com/problems/flood-fill/
// #dfs #arrays

async function script9() {
  // script here
  const res = floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  );
  console.log(res);

  console.log("done");
  process.exit(0);
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const original = image[sr][sc];
  if (original !== color) {
    fill(image, sr, sc, original, color);
  }

  return image;
}

function fill(
  image: number[][],
  sr: number,
  sc: number,
  originalColor: number,
  color: number
) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== originalColor
  ) {
    return;
  }

  image[sr][sc] = color;
  fill(image, sr - 1, sc, originalColor, color);
  fill(image, sr + 1, sc, originalColor, color);
  fill(image, sr, sc - 1, originalColor, color);
  fill(image, sr, sc + 1, originalColor, color);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script9().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
