const BASE = "https://assets.guestsnapper.com/wedding-gallery-media/lemonnier";

export const img = (name) => `${BASE}/${encodeURIComponent(name)}`;

export const images = {
  logo: img("lemonnier logo.png"),
  heroTeam: img("lemonnier hero team.png"),
  landscaperAction: img("landscaper action shot.jpg"),
  lawnNewLandscape: img("lawn new landscape.jpg"),
  lemonnier2: img("lemonnier 2.png"),
  artificialGrass: img("lemonnier artificial grass.jpg"),
  grass: img("lemonnier grass.jpg"),
  grass2: img("lemonnier grass 2.jpg"),
  pavingBricks: img("lemonnier paving bricks.jpg"),
  perthLandscaping: img("perth landscaping.jpg"),
  poolLandscaping: img("pool landscaping.jpg"),
  review1: img("desktop google review.png"),
  review2: img("desktop google review1.png"),
  review3: img("desktop google review2.png"),
  review4: img("desktop google review3.png"),
  reviewMobile: img("mobile google review2.png"),
};
