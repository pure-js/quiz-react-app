var a = 1;

function test() {
  a = 10;

  return;

  function a() {}
}

test();

console.log(a);
