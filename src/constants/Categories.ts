interface SubCategory {
  id: number;
  name: string;
}

interface CategoryMap {
  [key: number]: SubCategory[];
}

const sortCategory = (a: SubCategory, b: SubCategory) => {
  if (a.name === "Other") return 1;
  else if (b.name === "Other") return -1;
  else return a.name.localeCompare(b.name);
};
export const categories = [
  { id: 1, name: "Web Series" },
  { id: 2, name: "TV Series" },
  { id: 3, name: "Short Films" },
  { id: 4, name: "Feature Films" },
].sort(sortCategory);

export const subCategories: CategoryMap = {
  1: [
    // Web Series
    { id: 101, name: "Homestar Runner" },
  ].sort(sortCategory),
  2: [
    // TV Series
    { id: 201, name: "Brak Show, The" },
  ].sort(sortCategory),
  3: [
    // Short Films
    { id: 301, name: "Felix the Cat" },
    { id: 302, name: "Puff the Magic Dragon" },
    { id: 302, name: "Railway Dragon, The" },
  ].sort(sortCategory),
  4: [
    // Feature Films
    { id: 401, name: "Unico" },
  ].sort(sortCategory),
};
