function test() {
  a = 1;

  console.log(a);

  console.log(b);

  console.log(c());

  var a;

  var b = 2;

  function c() {
    return 3;
  }
}

test();
