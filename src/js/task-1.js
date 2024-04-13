const categoriesEL = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEL.length}`);

categoriesEL.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Categories: ${categoryName}`);
  const categoryNumber = category.querySelectorAll("li").length;
  console.log(`Elements: ${categoryNumber}`);
});
