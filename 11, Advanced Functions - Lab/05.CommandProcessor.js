function solution(append, removeStart, removeEnd, print) {
  let str = "";

  return {
    append: (input) => (str += input),
    removeStart: (num) => (str = str.substring(num)),
    removeEnd: (num) => (str = str.substring(0, str.length - num)),
    print: () => console.log(str),
  };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
