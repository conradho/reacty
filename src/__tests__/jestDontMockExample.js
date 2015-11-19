const hiConst = 'hiConst';
const hiObj = {'a': 'hi', 'b': 'hi'};

function hiFunction () {
  return 'hiFunction';
}

class hiClass {
  hiClassFunction () {
    return 'hiFunction within hiClass';
  }
}

function hiDefaultFunction () {
  return 'hiDefaultFunction';
}

export default hiDefaultFunction;
export { hiConst, hiObj, hiFunction, hiClass };
