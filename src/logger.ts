/**
 * @MODULE - logger
 * @use - color logs and other logging and debugging utility
 */

class PrivateUtils {
  static log(
    obj: any,
    bracOnNewLine = true,
    reqComma = false,
    offset = ""
  ) {
    if (typeof obj != "object") {
      console.log(obj);
      return;
    }

    const entries = Object.entries(obj);
    const n = entries.length;

    bracOnNewLine && console.log(`${offset}{`);

    for (let i = 0; i < n; ++i) {
      const entry = entries[i];

      if (typeof entry[1] === "object") {
        console.log(`${offset}  ${entry[0]} : {`);
        PrivateUtils.log(entry[1], false, true && i != n - 1, offset + "  ");
      } else {
        console.log(`${offset}  ${entry[0]} : ${entry[1]}, `);
      }
    }
    console.log(`${offset}}${reqComma ? "," : ""}`);
  }
}

export default class Log {
    static log(obj : any) {
        PrivateUtils.log(obj); 
    }
}

Log.log(20);