console.log("Hello JS!");

setTimeout(() => {
  document.getElementById("change-text").innerHTML = "I changed you!";
}, 3000);

let count = 0;
setInterval(() => {
  count++;
  document.getElementById("change-count").innerText = count;
}, 1000);

setInterval(() => {
  const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];
  const random = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
  document.getElementById("change-color").style.backgroundColor =
    CSS_COLOR_NAMES[random];
  document.getElementById("change-color").innerText = CSS_COLOR_NAMES[random];
}, 3000);

let clickCount = 1;
document.getElementById("change-click").addEventListener("click", () => {
  clickCount++;
  document.getElementById("change-click").innerText = clickCount;
});

let mouseHover = 0;
document.getElementById("change-hover").addEventListener("mouseover", () => {
  mouseHover++;
  document.getElementById("change-hover").innerHTML = mouseHover;
});

let LoveCondition = 0;
document.getElementById("change-he-loves-me").addEventListener("click", () => {
  LoveCondition++;
  if (LoveCondition % 2) {
    document.getElementById("change-he-loves-me").innerHTML = "He Loves Me";
  } else
    document.getElementById("change-he-loves-me").innerHTML = "He Loves Me Not";
});

document
  .getElementById("change-to-current-date")
  .addEventListener("click", () => {
    const today = new Date();
    document.getElementById("change-to-current-date").innerHTML = today;
  });

function displaySize() {
  const width = window.innerWidth;
  document.getElementById("change-to-current-width").innerHTML =
    "Width: " + width;
  const height = window.innerHeight;
  document.getElementById("change-to-current-height").innerHTML =
    "Height: " + height;
}

window.onresize = displaySize();

let listLength = 1;
document.getElementById("add-list-item").addEventListener("click", () => {
  listLength++;
  var para = document.createElement("li");
  var node = document.createTextNode(
    "This is a new li element number" + listLength
  );
  para.appendChild(node);
  var element = document.getElementById("add-list-item");
  element.appendChild(para);
});

document.getElementById("change-to-url").addEventListener("click", () => {
  const url = window.location;
  document.getElementById("change-to-url").innerHTML = url;
});

document.getElementById("change-coderscript").addEventListener("click", () => {
  var i = 0;
  var txt = "I know coding very hard! But it is very interested for me...";
  var speed = 100;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("change-coderscript").innerHTML =
        document.getElementById("change-coderscript").innerHTML + txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    typeWriter();
  }
});
