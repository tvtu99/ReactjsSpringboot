export {};

declare global {
  interface Obj {
    key: string;
    value: any;
  }
  interface Object {
    toArray(): Array<Obj>;
  }
}

// eslint-disable-next-line no-extend-native
Object.prototype.toArray = function () {
  var keys = Object.keys(this);
  var values = Object.values(this);
  var arr = new Array<any>();
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].endsWith("Obj")) {
      let findStr = keys[i].substr(0, keys[i].length - 3);
      let findStr1 = findStr + "Id";
      let foundInd = arr.findIndex(
        (u) => u.key === findStr || u.key === findStr1
      );
      if (foundInd > -1) {
        arr.splice(foundInd, 1);
      }
    }
    let a: any = this;
    if (
      (!keys[i].endsWith("Id") && a[keys[i] + "Obj"] === undefined) ||
      (keys[i].endsWith("Id") &&
      [keys[i].substr(0, keys[i].length - 2) + "Obj"] === undefined)
    ) {
      var obj = {
        key: keys[i],
        value: values[i],
      };
      arr.push(obj);
    }
  }
  return arr;
};
