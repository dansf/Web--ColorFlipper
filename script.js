var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");
var center = document.querySelector(".center");
// console.log(window.getComputedStyle(red).backgroundColor);
var getBGColor = function (selectedElement) {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
// var color = getBGColor(pink);
// pink.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });
var magicColorChanger = function (element, color) {
    return element.addEventListener("mouseenter", function () {
        center.style.background = color;
    });
};
magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
