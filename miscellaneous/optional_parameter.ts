// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  
  console.log(add(12,5,4))