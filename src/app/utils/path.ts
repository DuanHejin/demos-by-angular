export default function (args) {
  // console.log(args);
  if (Array.from(args).length === 1) {
    return args;
  }

  let result = '';
  Array.from(args).reduce((preVal: any, curVal: any, index) => {
    if (index > 0) {
      // TODO need to handle './' or '../' etc relative path
      result += `/${curVal}`;
    } else {
      result = curVal;
    }
  }, result);

  return result;
}
