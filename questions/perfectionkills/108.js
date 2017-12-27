var x = 1;
if (function f(){}) {
  x += typeof f;
}
x;
