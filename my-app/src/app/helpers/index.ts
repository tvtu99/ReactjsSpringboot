export * from "./url";
export * from "./pagination";

export function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function lastIndexOf(obj: string, txt: string[]): number[] {
  for (let key in txt) {
    let pos = obj.lastIndexOf(txt[key]);
    if (pos > -1) {
      return [parseInt(key), pos];
    }
  }
  return [];
}

export function getCurrentLanguage(): string {
  let lang = localStorage.getItem("lang");
  return lang ? lang : "en";
}

export function isSelector(el: Element, selector: string): boolean {
  let tag, id, cls;
  let attr: any = {};
  let sel = selector;
  do {
    let result = lastIndexOf(sel, [".", "#", "["]);
    if (result.length) {
      switch (result[0]) {
        case 0:
          // class
          cls = sel.substring(result[1] + 1);
          break;
        case 1:
          // id
          id = sel.substring(result[1] + 1);
          break;
        case 2:
          // attribute
          let tmp = sel.substring(result[1] + 1, sel.length - 1);
          let tmp1 = tmp.split("=");
          attr[tmp1[0].trim()] = tmp1[1].trim();
          break;
      }
      sel = sel.substring(0, result[1]);
    } else {
      // tag
      tag = sel;
      sel = "";
    }
  } while (sel.length);
  let point = 0;
  if (cls) {
    if (el.classList.contains(cls)) {
      point++;
    }
  } else {
    point++;
  }
  if (id) {
    if (el.id === id) {
      point++;
    }
  } else {
    point++;
  }
  if (tag) {
    if (el.tagName === tag) {
      point++;
    }
  } else {
    point++;
  }
  let attrL = 0;
  if (attr) {
    for (let key in attr) {
      if (attr.hasOwnProperty(key)) {
        if (el.getAttribute(key) === attr[key]) {
          point++;
        }
        attrL++;
      }
    }
    if (point - attrL === 3) {
      return true;
    } else {
      return false;
    }
  } else {
    point++;
    if (point === 4) {
      return true;
    } else {
      return false;
    }
  }
}

// export function slideDown(el: Element, speed: number, func: any) {

// }

export function slideUp(el: Element, speed: number, func: any) {
  // el.s
}

export function siblings(
  el: Element,
  selector: string | null,
  getOne: boolean = false
): Element | HTMLCollection | undefined | Element[] {
  if (el.parentElement) {
    if (!selector && !getOne) {
      return el.parentElement?.children;
    } else if (!selector && getOne) {
      if (el.parentElement?.children.length) {
        return el.parentElement?.children[0];
      } else {
        return undefined;
      }
    } else if (selector && getOne) {
      for (let i = 0; i < el.parentElement?.children.length; i++) {
        if (isSelector(el.parentElement?.children[i], selector)) {
          return el.parentElement?.children[i];
        }
      }
    } else {
      let items = [];
      for (let i = 0; i < el.parentElement?.children.length; i++) {
        if (isSelector(el.parentElement?.children[i], selector!)) {
          items.push(el.parentElement?.children[i]);
        }
      }
      return items;
    }
  } else {
    return undefined;
  }
}

export function parents(el: Element, selector: string) {
  let parent;
  do {
    parent = el.parentElement;
    if (parent && isSelector(parent, selector)) {
      return parent;
    }
  } while (!parent);
  return null;
}
export function deepCopy<T>(obj: any) {
  var copy: any;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  } else if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  } else if (obj instanceof Object) {
    if (obj.constructor) {
      copy = new (obj.constructor as { new (): T })();
    } else {
      copy = {};
    }
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        if (obj[attr] instanceof Object) {
          if (obj[attr] === undefined) {
            continue;
          }
          if (obj[attr].constructor) {
            copy[attr] = deepCopy(obj[attr]);
          } else {
            copy[attr] = deepCopy(obj[attr]);
          }
        } else {
          copy[attr] = deepCopy(obj[attr]);
        }
      }
    }
    return copy as T;
  } else {
    return obj;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}
