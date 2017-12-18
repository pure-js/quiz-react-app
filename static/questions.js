const questions = [
  {
    "name": "10",
    "value": "console.log(4 - \"5\" + 0xf - \"1e1\");\n"
  },
  {
    "name": "11",
    "value": "function F() {}\n\nconsole.log(F.prototyope);\n"
  },
  {
    "name": "12",
    "value": "function F() {}\n\n// true or false?\nconsole.log(F instanceof Function);\n"
  },
  {
    "name": "13",
    "value": "var a = [1, 2, 3];\nvar b = [1, 2, 3];\n\nconsole.log(a == b);\n"
  },
  {
    "name": "4",
    "value": "var y = 1;\n\nif (function f(){}) {\n  y += typeof f;\n}\n\nconsole.log(y);\n"
  },
  {
    "name": "6",
    "value": "console.log( +\"something\" );\n"
  },
  {
    "name": "7",
    "value": "var a = new Array(1,2),\n    b = new Array(3);\n\nconsole.log(a[0] + b[0]);\n"
  },
  {
    "name": "8",
    "value": "var a = (1,5 - 1) * 2;\n\nconsole.log(a);\n"
  },
  {
    "name": "9",
    "value": "for (var key in {1:1, 0:0}) {\n  console.log(key);\n}\n"
  }
];
export default questions;
