const button = document.getElementById("changeColorButton")
const body = document.body

const colors = [
  "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
  "#FFC8DD", "#FF9AA2", "#FFDAC1", "#E2F0CB", "#B5EAD7",
  "#C7CEEA", "#D5AAFF", "#A9DEF9", "#E4C1F9", "#F7E8A4",
  "#F4A9A8", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF"
];

button.addEventListener("click", () => {
  const ramdomColor = colors[Math.floor(Math.random() * colors.length)]

  body.style.backgroundColor = ramdomColor
})