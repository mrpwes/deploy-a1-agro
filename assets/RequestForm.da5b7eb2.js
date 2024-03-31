import { j as computed, aG as Plugin, aH as defaultLang, k as createComponent, r as ref, h as watch, p as h, T as Transition, I as hSlot, t as getCurrentInstance, ax as isObject, i as nextTick, Q as QBtn, Z as provide, D as onDeactivated, E as onActivated, m as onMounted, ac as vmIsDestroyed, C as stopAndPrevent, z as formKey, _ as _export_sfc, o as openBlock, c as createElementBlock, d as createVNode, a as createBaseVNode, w as withCtx, aI as withModifiers, a6 as toDisplayString, n as normalizeClass, g as createCommentVNode, V as withDirectives, a3 as Fragment, aJ as Notify } from "./index.cc9bdf73.js";
import { Q as QCardSection } from "./QCardSection.3ccee344.js";
import { Q as QSelect } from "./QSelect.054a7805.js";
import { Q as QInput } from "./QInput.723cff93.js";
import { u as useDarkProps, b as useDark, a as addFocusFn } from "./focus-manager.71507900.js";
import { a as useFormProps, i as useFormAttrs, h as useFormInject } from "./use-key-composition.f687006c.js";
import { L as pad, Q as QDialog } from "./position-engine.816f361e.js";
import { Q as QCard, a as QCardActions, C as ClosePopup } from "./ClosePopup.5ef9f279.js";
import { u as useLoanStore } from "./loan.253a6661.js";
import { u as useRequestsEmployeeStore } from "./requestsEmployee.d25d95e5.js";
function useCache() {
  const cache = /* @__PURE__ */ new Map();
  return {
    getCache: function(key, obj) {
      return cache[key] === void 0 ? cache[key] = obj : cache[key];
    },
    getCacheWithFn: function(key, fn) {
      return cache[key] === void 0 ? cache[key] = fn() : cache[key];
    }
  };
}
const breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === "[object Date]") {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }
  return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6)
    return 31;
  if (jm <= 11)
    return 30;
  if (isLeapJalaaliYear(jy))
    return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function jalCal(jy, withoutLeap) {
  const bl = breaks.length, gy = jy + 621;
  let leapJ = -14, jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (!withoutLeap) {
    if (jump - n < 6) {
      n = n - jump + div(jump + 4, 33) * 33;
    }
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
  }
  return {
    leap,
    gy,
    march
  };
}
function j2d(jy, jm, jd) {
  const r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
function d2j(jdn) {
  const gy = d2g(jdn).gy;
  let jy = gy - 621, jd, jm, k;
  const r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march);
  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy,
        jm,
        jd
      };
    } else {
      k -= 186;
    }
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) {
      k += 1;
    }
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy,
    jm,
    jd
  };
}
function g2d(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308, gd = div(mod(i, 153), 5) + 1, gm = mod(div(i, 153), 12) + 1, gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy,
    gm,
    gd
  };
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
const calendars = ["gregorian", "persian"];
const useDatetimeProps = {
  modelValue: {
    required: true
  },
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (v) => calendars.includes(v),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
};
const useDatetimeEmits = ["update:modelValue"];
function getDayHash(date) {
  return date.year + "/" + pad(date.month) + "/" + pad(date.day);
}
function useDatetime(props, $q) {
  const editable = computed(() => {
    return props.disable !== true && props.readonly !== true;
  });
  const tabindex = computed(() => {
    return editable.value === true ? 0 : -1;
  });
  const headerClass = computed(() => {
    const cls = [];
    props.color !== void 0 && cls.push(`bg-${props.color}`);
    props.textColor !== void 0 && cls.push(`text-${props.textColor}`);
    return cls.join(" ");
  });
  function getLocale() {
    return props.locale !== void 0 ? { ...$q.lang.date, ...props.locale } : $q.lang.date;
  }
  function getCurrentDate(dateOnly) {
    const d = new Date();
    const timeFill = dateOnly === true ? null : 0;
    if (props.calendar === "persian") {
      const jDate = toJalaali(d);
      return {
        year: jDate.jy,
        month: jDate.jm,
        day: jDate.jd
      };
    }
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: timeFill,
      minute: timeFill,
      second: timeFill,
      millisecond: timeFill
    };
  }
  return {
    editable,
    tabindex,
    headerClass,
    getLocale,
    getCurrentDate
  };
}
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : defaultLang.date;
}
function formatTimezone(offset, delimeter = "") {
  const sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Plugin.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDate();
    date.hour = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date.month = parseInt(match[map.M], 10);
      if (date.month < 1 || date.month > 12) {
        return date;
      }
    } else if (map.MMM !== void 0) {
      date.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date.day = parseInt(match[map.D], 10);
      if (date.year === null || date.month === null || date.day < 1) {
        return date;
      }
      const maxDay = calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
      if (date.day > maxDay) {
        return date;
      }
    }
    if (map.H !== void 0) {
      date.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date.hour += 12;
      }
      date.hour = date.hour % 24;
    }
    if (map.m !== void 0) {
      date.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date.dateHash = pad(date.year, 6) + "/" + pad(date.month) + "/" + pad(date.day);
  date.timeHash = pad(date.hour) + ":" + pad(date.minute) + ":" + pad(date.second) + tzString;
  return date;
}
function getWeekOfYear(date) {
  const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function startOfDate(date, unit, utc) {
  const t = new Date(date), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date, subtract, unit = "days") {
  const t = new Date(date), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date) {
  return getDateDiff(date, startOfDate(date, "year"), "days") + 1;
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
const formatter = {
  YY(date, dateLocale, forcedYear) {
    const y = this.YYYY(date, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  YYYY(date, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date.getFullYear();
  },
  M(date) {
    return date.getMonth() + 1;
  },
  MM(date) {
    return pad(date.getMonth() + 1);
  },
  MMM(date, dateLocale) {
    return dateLocale.monthsShort[date.getMonth()];
  },
  MMMM(date, dateLocale) {
    return dateLocale.months[date.getMonth()];
  },
  Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  Qo(date) {
    return getOrdinal(this.Q(date));
  },
  D(date) {
    return date.getDate();
  },
  Do(date) {
    return getOrdinal(date.getDate());
  },
  DD(date) {
    return pad(date.getDate());
  },
  DDD(date) {
    return getDayOfYear(date);
  },
  DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  d(date) {
    return date.getDay();
  },
  dd(date, dateLocale) {
    return this.dddd(date, dateLocale).slice(0, 2);
  },
  ddd(date, dateLocale) {
    return dateLocale.daysShort[date.getDay()];
  },
  dddd(date, dateLocale) {
    return dateLocale.days[date.getDay()];
  },
  E(date) {
    return date.getDay() || 7;
  },
  w(date) {
    return getWeekOfYear(date);
  },
  ww(date) {
    return pad(getWeekOfYear(date));
  },
  H(date) {
    return date.getHours();
  },
  HH(date) {
    return pad(date.getHours());
  },
  h(date) {
    const hours = date.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  hh(date) {
    return pad(this.h(date));
  },
  m(date) {
    return date.getMinutes();
  },
  mm(date) {
    return pad(date.getMinutes());
  },
  s(date) {
    return date.getSeconds();
  },
  ss(date) {
    return pad(date.getSeconds());
  },
  S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10));
  },
  SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  A(date) {
    return this.H(date) < 12 ? "AM" : "PM";
  },
  a(date) {
    return this.H(date) < 12 ? "am" : "pm";
  },
  aa(date) {
    return this.H(date) < 12 ? "a.m." : "p.m.";
  },
  Z(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  ZZ(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  X(date) {
    return Math.floor(date.getTime() / 1e3);
  },
  x(date) {
    return date.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) {
    return;
  }
  const date = new Date(val);
  if (isNaN(date)) {
    return;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Plugin.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
const yearsInterval = 20;
const views = ["Calendar", "Years", "Months"];
const viewIsValid = (v) => views.includes(v);
const yearMonthValidator = (v) => /^-?[\d]+\/[0-1]\d$/.test(v);
const lineStr = " \u2014 ";
function getMonthHash(date) {
  return date.year + "/" + pad(date.month);
}
var QDate = createComponent({
  name: "QDate",
  props: {
    ...useDatetimeProps,
    ...useFormProps,
    ...useDarkProps,
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    navigationMaxYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: viewIsValid
    }
  },
  emits: [
    ...useDatetimeEmits,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { getCache } = useCache();
    const { tabindex, headerClass, getLocale, getCurrentDate } = useDatetime(props, $q);
    let lastEmitValue;
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    const blurTargetRef = ref(null);
    const innerMask = ref(getMask());
    const innerLocale = ref(getLocale());
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale());
    const today = computed(() => getCurrentDate());
    const viewModel = ref(getViewModel(innerMask.value, innerLocale.value));
    const view = ref(props.defaultView);
    const direction = $q.lang.rtl === true ? "right" : "left";
    const monthDirection = ref(direction.value);
    const yearDirection = ref(direction.value);
    const year = viewModel.value.year;
    const startYear = ref(year - year % yearsInterval - (year < 0 ? yearsInterval : 0));
    const editRange = ref(null);
    const classes = computed(() => {
      const type = props.landscape === true ? "landscape" : "portrait";
      return `q-date q-date--${type} q-date--${type}-${props.minimal === true ? "minimal" : "standard"}` + (isDark.value === true ? " q-date--dark q-dark" : "") + (props.bordered === true ? " q-date--bordered" : "") + (props.square === true ? " q-date--square no-border-radius" : "") + (props.flat === true ? " q-date--flat no-shadow" : "") + (props.disable === true ? " disabled" : props.readonly === true ? " q-date--readonly" : "");
    });
    const computedColor = computed(() => {
      return props.color || "primary";
    });
    const computedTextColor = computed(() => {
      return props.textColor || "white";
    });
    const isImmediate = computed(
      () => props.emitImmediately === true && props.multiple !== true && props.range !== true
    );
    const normalizedModel = computed(() => Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue !== null && props.modelValue !== void 0 ? [props.modelValue] : []);
    const daysModel = computed(
      () => normalizedModel.value.filter((date) => typeof date === "string").map((date) => decodeString(date, innerMask.value, innerLocale.value)).filter(
        (date) => date.dateHash !== null && date.day !== null && date.month !== null && date.year !== null
      )
    );
    const rangeModel = computed(() => {
      const fn = (date) => decodeString(date, innerMask.value, innerLocale.value);
      return normalizedModel.value.filter((date) => isObject(date) === true && date.from !== void 0 && date.to !== void 0).map((range) => ({ from: fn(range.from), to: fn(range.to) })).filter((range) => range.from.dateHash !== null && range.to.dateHash !== null && range.from.dateHash < range.to.dateHash);
    });
    const getNativeDateFn = computed(() => props.calendar !== "persian" ? (model) => new Date(model.year, model.month - 1, model.day) : (model) => {
      const gDate = toGregorian(model.year, model.month, model.day);
      return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    });
    const encodeObjectFn = computed(() => props.calendar === "persian" ? getDayHash : (date, mask2, locale2) => formatDate(
      new Date(
        date.year,
        date.month - 1,
        date.day,
        date.hour,
        date.minute,
        date.second,
        date.millisecond
      ),
      mask2 === void 0 ? innerMask.value : mask2,
      locale2 === void 0 ? innerLocale.value : locale2,
      date.year,
      date.timezoneOffset
    ));
    const daysInModel = computed(
      () => daysModel.value.length + rangeModel.value.reduce(
        (acc, range) => acc + 1 + getDateDiff(
          getNativeDateFn.value(range.to),
          getNativeDateFn.value(range.from)
        ),
        0
      )
    );
    const headerTitle = computed(() => {
      if (props.title !== void 0 && props.title !== null && props.title.length !== 0) {
        return props.title;
      }
      if (editRange.value !== null) {
        const model2 = editRange.value.init;
        const date2 = getNativeDateFn.value(model2);
        return innerLocale.value.daysShort[date2.getDay()] + ", " + innerLocale.value.monthsShort[model2.month - 1] + " " + model2.day + lineStr + "?";
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        return `${daysInModel.value} ${innerLocale.value.pluralDay}`;
      }
      const model = daysModel.value[0];
      const date = getNativeDateFn.value(model);
      if (isNaN(date.valueOf()) === true) {
        return lineStr;
      }
      if (innerLocale.value.headerTitle !== void 0) {
        return innerLocale.value.headerTitle(date, model);
      }
      return innerLocale.value.daysShort[date.getDay()] + ", " + innerLocale.value.monthsShort[model.month - 1] + " " + model.day;
    });
    const minSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.from)).sort((a, b) => a.year - b.year || a.month - b.month);
      return model[0];
    });
    const maxSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.to)).sort((a, b) => b.year - a.year || b.month - a.month);
      return model[0];
    });
    const headerSubtitle = computed(() => {
      if (props.subtitle !== void 0 && props.subtitle !== null && props.subtitle.length !== 0) {
        return props.subtitle;
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        const from = minSelectedModel.value;
        const to = maxSelectedModel.value;
        const month = innerLocale.value.monthsShort;
        return month[from.month - 1] + (from.year !== to.year ? " " + from.year + lineStr + month[to.month - 1] + " " : from.month !== to.month ? lineStr + month[to.month - 1] : "") + " " + to.year;
      }
      return daysModel.value[0].year;
    });
    const dateArrow = computed(() => {
      const val = [$q.iconSet.datetime.arrowLeft, $q.iconSet.datetime.arrowRight];
      return $q.lang.rtl === true ? val.reverse() : val;
    });
    const computedFirstDayOfWeek = computed(() => props.firstDayOfWeek !== void 0 ? Number(props.firstDayOfWeek) : innerLocale.value.firstDayOfWeek);
    const daysOfWeek = computed(() => {
      const days2 = innerLocale.value.daysShort, first = computedFirstDayOfWeek.value;
      return first > 0 ? days2.slice(first, 7).concat(days2.slice(0, first)) : days2;
    });
    const daysInMonth = computed(() => {
      const date = viewModel.value;
      return props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
    });
    const evtColor = computed(() => typeof props.eventColor === "function" ? props.eventColor : () => props.eventColor);
    const minNav = computed(() => {
      if (props.navigationMinYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMinYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const maxNav = computed(() => {
      if (props.navigationMaxYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMaxYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const navBoundaries = computed(() => {
      const data = {
        month: { prev: true, next: true },
        year: { prev: true, next: true }
      };
      if (minNav.value !== null && minNav.value.year >= viewModel.value.year) {
        data.year.prev = false;
        if (minNav.value.year === viewModel.value.year && minNav.value.month >= viewModel.value.month) {
          data.month.prev = false;
        }
      }
      if (maxNav.value !== null && maxNav.value.year <= viewModel.value.year) {
        data.year.next = false;
        if (maxNav.value.year === viewModel.value.year && maxNav.value.month <= viewModel.value.month) {
          data.month.next = false;
        }
      }
      return data;
    });
    const daysMap = computed(() => {
      const map = {};
      daysModel.value.forEach((entry) => {
        const hash = getMonthHash(entry);
        if (map[hash] === void 0) {
          map[hash] = [];
        }
        map[hash].push(entry.day);
      });
      return map;
    });
    const rangeMap = computed(() => {
      const map = {};
      rangeModel.value.forEach((entry) => {
        const hashFrom = getMonthHash(entry.from);
        const hashTo = getMonthHash(entry.to);
        if (map[hashFrom] === void 0) {
          map[hashFrom] = [];
        }
        map[hashFrom].push({
          from: entry.from.day,
          to: hashFrom === hashTo ? entry.to.day : void 0,
          range: entry
        });
        if (hashFrom < hashTo) {
          let hash;
          const { year: year2, month } = entry.from;
          const cur = month < 12 ? { year: year2, month: month + 1 } : { year: year2 + 1, month: 1 };
          while ((hash = getMonthHash(cur)) <= hashTo) {
            if (map[hash] === void 0) {
              map[hash] = [];
            }
            map[hash].push({
              from: void 0,
              to: hash === hashTo ? entry.to.day : void 0,
              range: entry
            });
            cur.month++;
            if (cur.month > 12) {
              cur.year++;
              cur.month = 1;
            }
          }
        }
      });
      return map;
    });
    const rangeView = computed(() => {
      if (editRange.value === null) {
        return;
      }
      const { init, initHash, final, finalHash } = editRange.value;
      const [from, to] = initHash <= finalHash ? [init, final] : [final, init];
      const fromHash = getMonthHash(from);
      const toHash = getMonthHash(to);
      if (fromHash !== viewMonthHash.value && toHash !== viewMonthHash.value) {
        return;
      }
      const view2 = {};
      if (fromHash === viewMonthHash.value) {
        view2.from = from.day;
        view2.includeFrom = true;
      } else {
        view2.from = 1;
      }
      if (toHash === viewMonthHash.value) {
        view2.to = to.day;
        view2.includeTo = true;
      } else {
        view2.to = daysInMonth.value;
      }
      return view2;
    });
    const viewMonthHash = computed(() => getMonthHash(viewModel.value));
    const selectionDaysMap = computed(() => {
      const map = {};
      if (props.options === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = true;
        }
        return map;
      }
      const fn = typeof props.options === "function" ? props.options : (date) => props.options.includes(date);
      for (let i = 1; i <= daysInMonth.value; i++) {
        const dayHash = viewMonthHash.value + "/" + pad(i);
        map[i] = fn(dayHash);
      }
      return map;
    });
    const eventDaysMap = computed(() => {
      const map = {};
      if (props.events === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = false;
        }
      } else {
        const fn = typeof props.events === "function" ? props.events : (date) => props.events.includes(date);
        for (let i = 1; i <= daysInMonth.value; i++) {
          const dayHash = viewMonthHash.value + "/" + pad(i);
          map[i] = fn(dayHash) === true && evtColor.value(dayHash);
        }
      }
      return map;
    });
    const viewDays = computed(() => {
      let date, endDay;
      const { year: year2, month } = viewModel.value;
      if (props.calendar !== "persian") {
        date = new Date(year2, month - 1, 1);
        endDay = new Date(year2, month - 1, 0).getDate();
      } else {
        const gDate = toGregorian(year2, month, 1);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        let prevJM = month - 1;
        let prevJY = year2;
        if (prevJM === 0) {
          prevJM = 12;
          prevJY--;
        }
        endDay = jalaaliMonthLength(prevJY, prevJM);
      }
      return {
        days: date.getDay() - computedFirstDayOfWeek.value - 1,
        endDay
      };
    });
    const days = computed(() => {
      const res = [];
      const { days: days2, endDay } = viewDays.value;
      const len = days2 < 0 ? days2 + 7 : days2;
      if (len < 6) {
        for (let i = endDay - len; i <= endDay; i++) {
          res.push({ i, fill: true });
        }
      }
      const index = res.length;
      for (let i = 1; i <= daysInMonth.value; i++) {
        const day = { i, event: eventDaysMap.value[i], classes: [] };
        if (selectionDaysMap.value[i] === true) {
          day.in = true;
          day.flat = true;
        }
        res.push(day);
      }
      if (daysMap.value[viewMonthHash.value] !== void 0) {
        daysMap.value[viewMonthHash.value].forEach((day) => {
          const i = index + day - 1;
          Object.assign(res[i], {
            selected: true,
            unelevated: true,
            flat: false,
            color: computedColor.value,
            textColor: computedTextColor.value
          });
        });
      }
      if (rangeMap.value[viewMonthHash.value] !== void 0) {
        rangeMap.value[viewMonthHash.value].forEach((entry) => {
          if (entry.from !== void 0) {
            const from = index + entry.from - 1;
            const to = index + (entry.to || daysInMonth.value) - 1;
            for (let day = from; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[from], {
              rangeFrom: true,
              flat: false
            });
            entry.to !== void 0 && Object.assign(res[to], {
              rangeTo: true,
              flat: false
            });
          } else if (entry.to !== void 0) {
            const to = index + entry.to - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[to], {
              flat: false,
              rangeTo: true
            });
          } else {
            const to = index + daysInMonth.value - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
          }
        });
      }
      if (rangeView.value !== void 0) {
        const from = index + rangeView.value.from - 1;
        const to = index + rangeView.value.to - 1;
        for (let day = from; day <= to; day++) {
          res[day].color = computedColor.value;
          res[day].editRange = true;
        }
        if (rangeView.value.includeFrom === true) {
          res[from].editRangeFrom = true;
        }
        if (rangeView.value.includeTo === true) {
          res[to].editRangeTo = true;
        }
      }
      if (viewModel.value.year === today.value.year && viewModel.value.month === today.value.month) {
        res[index + today.value.day - 1].today = true;
      }
      const left = res.length % 7;
      if (left > 0) {
        const afterDays = 7 - left;
        for (let i = 1; i <= afterDays; i++) {
          res.push({ i, fill: true });
        }
      }
      res.forEach((day) => {
        let cls = "q-date__calendar-item ";
        if (day.fill === true) {
          cls += "q-date__calendar-item--fill";
        } else {
          cls += `q-date__calendar-item--${day.in === true ? "in" : "out"}`;
          if (day.range !== void 0) {
            cls += ` q-date__range${day.rangeTo === true ? "-to" : day.rangeFrom === true ? "-from" : ""}`;
          }
          if (day.editRange === true) {
            cls += ` q-date__edit-range${day.editRangeFrom === true ? "-from" : ""}${day.editRangeTo === true ? "-to" : ""}`;
          }
          if (day.range !== void 0 || day.editRange === true) {
            cls += ` text-${day.color}`;
          }
        }
        day.classes = cls;
      });
      return res;
    });
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    watch(() => props.modelValue, (v) => {
      if (lastEmitValue === v) {
        lastEmitValue = 0;
      } else {
        const model = getViewModel(innerMask.value, innerLocale.value);
        updateViewModel(model.year, model.month, model);
      }
    });
    watch(view, () => {
      if (blurTargetRef.value !== null && proxy.$el.contains(document.activeElement) === true) {
        blurTargetRef.value.focus();
      }
    });
    watch(() => viewModel.value.year + "|" + viewModel.value.month, () => {
      emit("navigation", { year: viewModel.value.year, month: viewModel.value.month });
    });
    watch(mask, (val) => {
      updateValue(val, innerLocale.value, "mask");
      innerMask.value = val;
    });
    watch(locale, (val) => {
      updateValue(innerMask.value, val, "locale");
      innerLocale.value = val;
    });
    function setToday() {
      const { year: year2, month, day } = today.value;
      const date = {
        ...viewModel.value,
        year: year2,
        month,
        day
      };
      const monthMap = daysMap.value[getMonthHash(date)];
      if (monthMap === void 0 || monthMap.includes(date.day) === false) {
        addToModel(date);
      }
      setCalendarTo(date.year, date.month);
    }
    function setView(viewMode) {
      if (viewIsValid(viewMode) === true) {
        view.value = viewMode;
      }
    }
    function offsetCalendar(type, descending) {
      if (["month", "year"].includes(type)) {
        const fn = type === "month" ? goToMonth : goToYear;
        fn(descending === true ? -1 : 1);
      }
    }
    function setCalendarTo(year2, month) {
      view.value = "Calendar";
      updateViewModel(year2, month);
    }
    function setEditingRange(from, to) {
      if (props.range === false || !from) {
        editRange.value = null;
        return;
      }
      const init = Object.assign({ ...viewModel.value }, from);
      const final = to !== void 0 ? Object.assign({ ...viewModel.value }, to) : init;
      editRange.value = {
        init,
        initHash: getDayHash(init),
        final,
        finalHash: getDayHash(final)
      };
      setCalendarTo(init.year, init.month);
    }
    function getMask() {
      return props.calendar === "persian" ? "YYYY/MM/DD" : props.mask;
    }
    function decodeString(date, mask2, locale2) {
      return __splitDate(
        date,
        mask2,
        locale2,
        props.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function getViewModel(mask2, locale2) {
      const model = Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue ? [props.modelValue] : [];
      if (model.length === 0) {
        return getDefaultViewModel();
      }
      const target = model[model.length - 1];
      const decoded = decodeString(
        target.from !== void 0 ? target.from : target,
        mask2,
        locale2
      );
      return decoded.dateHash === null ? getDefaultViewModel() : decoded;
    }
    function getDefaultViewModel() {
      let year2, month;
      if (props.defaultYearMonth !== void 0) {
        const d = props.defaultYearMonth.split("/");
        year2 = parseInt(d[0], 10);
        month = parseInt(d[1], 10);
      } else {
        const d = today.value !== void 0 ? today.value : getCurrentDate();
        year2 = d.year;
        month = d.month;
      }
      return {
        year: year2,
        month,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: year2 + "/" + pad(month) + "/01"
      };
    }
    function goToMonth(offset) {
      let year2 = viewModel.value.year;
      let month = Number(viewModel.value.month) + offset;
      if (month === 13) {
        month = 1;
        year2++;
      } else if (month === 0) {
        month = 12;
        year2--;
      }
      updateViewModel(year2, month);
      isImmediate.value === true && emitImmediately("month");
    }
    function goToYear(offset) {
      const year2 = Number(viewModel.value.year) + offset;
      updateViewModel(year2, viewModel.value.month);
      isImmediate.value === true && emitImmediately("year");
    }
    function setYear(year2) {
      updateViewModel(year2, viewModel.value.month);
      view.value = props.defaultView === "Years" ? "Months" : "Calendar";
      isImmediate.value === true && emitImmediately("year");
    }
    function setMonth(month) {
      updateViewModel(viewModel.value.year, month);
      view.value = "Calendar";
      isImmediate.value === true && emitImmediately("month");
    }
    function toggleDate(date, monthHash) {
      const month = daysMap.value[monthHash];
      const fn = month !== void 0 && month.includes(date.day) === true ? removeFromModel : addToModel;
      fn(date);
    }
    function getShortDate(date) {
      return { year: date.year, month: date.month, day: date.day };
    }
    function updateViewModel(year2, month, time) {
      if (minNav.value !== null && year2 <= minNav.value.year) {
        if (month < minNav.value.month || year2 < minNav.value.year) {
          month = minNav.value.month;
        }
        year2 = minNav.value.year;
      }
      if (maxNav.value !== null && year2 >= maxNav.value.year) {
        if (month > maxNav.value.month || year2 > maxNav.value.year) {
          month = maxNav.value.month;
        }
        year2 = maxNav.value.year;
      }
      if (time !== void 0) {
        const { hour, minute, second, millisecond, timezoneOffset, timeHash } = time;
        Object.assign(viewModel.value, { hour, minute, second, millisecond, timezoneOffset, timeHash });
      }
      const newHash = year2 + "/" + pad(month) + "/01";
      if (newHash !== viewModel.value.dateHash) {
        monthDirection.value = viewModel.value.dateHash < newHash === ($q.lang.rtl !== true) ? "left" : "right";
        if (year2 !== viewModel.value.year) {
          yearDirection.value = monthDirection.value;
        }
        nextTick(() => {
          startYear.value = year2 - year2 % yearsInterval - (year2 < 0 ? yearsInterval : 0);
          Object.assign(viewModel.value, {
            year: year2,
            month,
            day: 1,
            dateHash: newHash
          });
        });
      }
    }
    function emitValue(val, action, date) {
      const value = val !== null && val.length === 1 && props.multiple === false ? val[0] : val;
      lastEmitValue = value;
      const { reason, details } = getEmitParams(action, date);
      emit("update:modelValue", value, reason, details);
    }
    function emitImmediately(reason) {
      const date = daysModel.value[0] !== void 0 && daysModel.value[0].dateHash !== null ? { ...daysModel.value[0] } : { ...viewModel.value };
      nextTick(() => {
        date.year = viewModel.value.year;
        date.month = viewModel.value.month;
        const maxDay = props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
        date.day = Math.min(Math.max(1, date.day), maxDay);
        const value = encodeEntry(date);
        lastEmitValue = value;
        const { details } = getEmitParams("", date);
        emit("update:modelValue", value, reason, details);
      });
    }
    function getEmitParams(action, date) {
      return date.from !== void 0 ? {
        reason: `${action}-range`,
        details: {
          ...getShortDate(date.target),
          from: getShortDate(date.from),
          to: getShortDate(date.to)
        }
      } : {
        reason: `${action}-day`,
        details: getShortDate(date)
      };
    }
    function encodeEntry(date, mask2, locale2) {
      return date.from !== void 0 ? { from: encodeObjectFn.value(date.from, mask2, locale2), to: encodeObjectFn.value(date.to, mask2, locale2) } : encodeObjectFn.value(date, mask2, locale2);
    }
    function addToModel(date) {
      let value;
      if (props.multiple === true) {
        if (date.from !== void 0) {
          const fromHash = getDayHash(date.from);
          const toHash = getDayHash(date.to);
          const days2 = daysModel.value.filter((day) => day.dateHash < fromHash || day.dateHash > toHash);
          const ranges = rangeModel.value.filter(({ from, to }) => to.dateHash < fromHash || from.dateHash > toHash);
          value = days2.concat(ranges).concat(date).map((entry) => encodeEntry(entry));
        } else {
          const model = normalizedModel.value.slice();
          model.push(encodeEntry(date));
          value = model;
        }
      } else {
        value = encodeEntry(date);
      }
      emitValue(value, "add", date);
    }
    function removeFromModel(date) {
      if (props.noUnset === true) {
        return;
      }
      let model = null;
      if (props.multiple === true && Array.isArray(props.modelValue) === true) {
        const val = encodeEntry(date);
        if (date.from !== void 0) {
          model = props.modelValue.filter(
            (date2) => date2.from !== void 0 ? date2.from !== val.from && date2.to !== val.to : true
          );
        } else {
          model = props.modelValue.filter((date2) => date2 !== val);
        }
        if (model.length === 0) {
          model = null;
        }
      }
      emitValue(model, "remove", date);
    }
    function updateValue(mask2, locale2, reason) {
      const model = daysModel.value.concat(rangeModel.value).map((entry) => encodeEntry(entry, mask2, locale2)).filter((entry) => {
        return entry.from !== void 0 ? entry.from.dateHash !== null && entry.to.dateHash !== null : entry.dateHash !== null;
      });
      emit("update:modelValue", (props.multiple === true ? model : model[0]) || null, reason);
    }
    function getHeader() {
      if (props.minimal === true) {
        return;
      }
      return h("div", {
        class: "q-date__header " + headerClass.value
      }, [
        h("div", {
          class: "relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, () => h("div", {
            key: "h-yr-" + headerSubtitle.value,
            class: "q-date__header-subtitle q-date__header-link " + (view.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            ...getCache("vY", {
              onClick() {
                view.value = "Years";
              },
              onKeyup(e) {
                e.keyCode === 13 && (view.value = "Years");
              }
            })
          }, [headerSubtitle.value]))
        ]),
        h("div", {
          class: "q-date__header-title relative-position flex no-wrap"
        }, [
          h("div", {
            class: "relative-position col"
          }, [
            h(Transition, {
              name: "q-transition--fade"
            }, () => h("div", {
              key: "h-sub" + headerTitle.value,
              class: "q-date__header-title-label q-date__header-link " + (view.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              ...getCache("vC", {
                onClick() {
                  view.value = "Calendar";
                },
                onKeyup(e) {
                  e.keyCode === 13 && (view.value = "Calendar");
                }
              })
            }, [headerTitle.value]))
          ]),
          props.todayBtn === true ? h(QBtn, {
            class: "q-date__header-today self-start",
            icon: $q.iconSet.datetime.today,
            flat: true,
            size: "sm",
            round: true,
            tabindex: tabindex.value,
            onClick: setToday
          }) : null
        ])
      ]);
    }
    function getNavigation({ label, type, key, dir, goTo, boundaries, cls }) {
      return [
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[0],
            tabindex: tabindex.value,
            disable: boundaries.prev === false,
            ...getCache("go-#" + type, { onClick() {
              goTo(-1);
            } })
          })
        ]),
        h("div", {
          class: "relative-position overflow-hidden flex flex-center" + cls
        }, [
          h(Transition, {
            name: "q-transition--jump-" + dir
          }, () => h("div", { key }, [
            h(QBtn, {
              flat: true,
              dense: true,
              noCaps: true,
              label,
              tabindex: tabindex.value,
              ...getCache("view#" + type, { onClick: () => {
                view.value = type;
              } })
            })
          ]))
        ]),
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[1],
            tabindex: tabindex.value,
            disable: boundaries.next === false,
            ...getCache("go+#" + type, { onClick() {
              goTo(1);
            } })
          })
        ])
      ];
    }
    const renderViews = {
      Calendar: () => [
        h("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          h("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, getNavigation({
            label: innerLocale.value.months[viewModel.value.month - 1],
            type: "Months",
            key: viewModel.value.month,
            dir: monthDirection.value,
            goTo: goToMonth,
            boundaries: navBoundaries.value.month,
            cls: " col"
          }).concat(getNavigation({
            label: viewModel.value.year,
            type: "Years",
            key: viewModel.value.year,
            dir: yearDirection.value,
            goTo: goToYear,
            boundaries: navBoundaries.value.year,
            cls: ""
          }))),
          h("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, daysOfWeek.value.map((day) => h("div", { class: "q-date__calendar-item" }, [h("div", day)]))),
          h("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            h(Transition, {
              name: "q-transition--slide-" + monthDirection.value
            }, () => h("div", {
              key: viewMonthHash.value,
              class: "q-date__calendar-days fit"
            }, days.value.map((day) => h("div", { class: day.classes }, [
              day.in === true ? h(
                QBtn,
                {
                  class: day.today === true ? "q-date__today" : "",
                  dense: true,
                  flat: day.flat,
                  unelevated: day.unelevated,
                  color: day.color,
                  textColor: day.textColor,
                  label: day.i,
                  tabindex: tabindex.value,
                  ...getCache("day#" + day.i, {
                    onClick: () => {
                      onDayClick(day.i);
                    },
                    onMouseover: () => {
                      onDayMouseover(day.i);
                    }
                  })
                },
                day.event !== false ? () => h("div", { class: "q-date__event bg-" + day.event }) : null
              ) : h("div", "" + day.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const currentYear = viewModel.value.year === today.value.year;
        const isDisabled = (month) => {
          return minNav.value !== null && viewModel.value.year === minNav.value.year && minNav.value.month > month || maxNav.value !== null && viewModel.value.year === maxNav.value.year && maxNav.value.month < month;
        };
        const content = innerLocale.value.monthsShort.map((month, i) => {
          const active = viewModel.value.month === i + 1;
          return h("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            h(QBtn, {
              class: currentYear === true && today.value.month === i + 1 ? "q-date__today" : null,
              flat: active !== true,
              label: month,
              unelevated: active,
              color: active === true ? computedColor.value : null,
              textColor: active === true ? computedTextColor.value : null,
              tabindex: tabindex.value,
              disable: isDisabled(i + 1),
              ...getCache("month#" + i, { onClick: () => {
                setMonth(i + 1);
              } })
            })
          ]);
        });
        props.yearsInMonthView === true && content.unshift(
          h("div", { class: "row no-wrap full-width" }, [
            getNavigation({
              label: viewModel.value.year,
              type: "Years",
              key: viewModel.value.year,
              dir: yearDirection.value,
              goTo: goToYear,
              boundaries: navBoundaries.value.year,
              cls: " col"
            })
          ])
        );
        return h("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, content);
      },
      Years() {
        const start = startYear.value, stop = start + yearsInterval, years = [];
        const isDisabled = (year2) => {
          return minNav.value !== null && minNav.value.year > year2 || maxNav.value !== null && maxNav.value.year < year2;
        };
        for (let i = start; i <= stop; i++) {
          const active = viewModel.value.year === i;
          years.push(
            h("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              h(QBtn, {
                key: "yr" + i,
                class: today.value.year === i ? "q-date__today" : null,
                flat: !active,
                label: i,
                dense: true,
                unelevated: active,
                color: active === true ? computedColor.value : null,
                textColor: active === true ? computedTextColor.value : null,
                tabindex: tabindex.value,
                disable: isDisabled(i),
                ...getCache("yr#" + i, { onClick: () => {
                  setYear(i);
                } })
              })
            ])
          );
        }
        return h("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[0],
              tabindex: tabindex.value,
              disable: isDisabled(start),
              ...getCache("y-", { onClick: () => {
                startYear.value -= yearsInterval;
              } })
            })
          ]),
          h("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, years),
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[1],
              tabindex: tabindex.value,
              disable: isDisabled(stop),
              ...getCache("y+", { onClick: () => {
                startYear.value += yearsInterval;
              } })
            })
          ])
        ]);
      }
    };
    function onDayClick(dayIndex) {
      const day = { ...viewModel.value, day: dayIndex };
      if (props.range === false) {
        toggleDate(day, viewMonthHash.value);
        return;
      }
      if (editRange.value === null) {
        const dayProps = days.value.find((day2) => day2.fill !== true && day2.i === dayIndex);
        if (props.noUnset !== true && dayProps.range !== void 0) {
          removeFromModel({ target: day, from: dayProps.range.from, to: dayProps.range.to });
          return;
        }
        if (dayProps.selected === true) {
          removeFromModel(day);
          return;
        }
        const initHash = getDayHash(day);
        editRange.value = {
          init: day,
          initHash,
          final: day,
          finalHash: initHash
        };
        emit("rangeStart", getShortDate(day));
      } else {
        const initHash = editRange.value.initHash, finalHash = getDayHash(day), payload = initHash <= finalHash ? { from: editRange.value.init, to: day } : { from: day, to: editRange.value.init };
        editRange.value = null;
        addToModel(initHash === finalHash ? day : { target: day, ...payload });
        emit("rangeEnd", {
          from: getShortDate(payload.from),
          to: getShortDate(payload.to)
        });
      }
    }
    function onDayMouseover(dayIndex) {
      if (editRange.value !== null) {
        const final = { ...viewModel.value, day: dayIndex };
        Object.assign(editRange.value, {
          final,
          finalHash: getDayHash(final)
        });
      }
    }
    Object.assign(proxy, {
      setToday,
      setView,
      offsetCalendar,
      setCalendarTo,
      setEditingRange
    });
    return () => {
      const content = [
        h("div", {
          class: "q-date__content col relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, renderViews[view.value])
        ])
      ];
      const def = hSlot(slots.default);
      def !== void 0 && content.push(
        h("div", { class: "q-date__actions" }, def)
      );
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(content, "push");
      }
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, [
        getHeader(),
        h("div", {
          ref: blurTargetRef,
          class: "q-date__main col column",
          tabindex: -1
        }, content)
      ]);
    };
  }
});
var QForm = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit("validation" + (res === true ? "Success" : "Error"), ref2);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null) {
          return;
        }
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex > -1);
        target !== null && target !== void 0 && target.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index > -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
var RequestForm_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "text-h6" };
const _hoisted_2 = { class: "tw-flex tw-mb-3 tw-w" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-content-center tw-mr-3" }, "Type:", -1);
const _hoisted_4 = { key: 0 };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", null, "Description:", -1);
const _hoisted_6 = { class: "tw-pb-3 tw-px-2" };
const _hoisted_7 = { class: "tw-flex" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-content-center tw-mr-3" }, "Price:", -1);
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { class: "tw-flex tw-mb-3 tw-w" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-content-center tw-mr-3" }, "Document Type:", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", null, "Description:", -1);
const _hoisted_13 = { class: "tw-pb-3 tw-px-2" };
const _hoisted_14 = {
  key: 2,
  class: "tw-w-full"
};
const _hoisted_15 = { class: "tw-flex tw-justify-center" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", null, "Description:", -1);
const _hoisted_17 = { class: "tw-pb-3 tw-px-2" };
const _sfc_main = {
  __name: "RequestForm",
  props: {
    modelOptions: [],
    buttonName: String
  },
  setup(__props) {
    const storeRequestsEmployee = useRequestsEmployeeStore();
    useLoanStore();
    const prompt = ref(false);
    const modelType = ref(null);
    const modelTypeRef = ref(null);
    const modelDescriptionLoanRequest = ref(null);
    const modelDescriptionLoanRequestRef = ref(null);
    const modelPrice = ref(null);
    const modelPriceRef = ref(null);
    const modelDocumentType = ref(null);
    const modelDocumentTypeRef = ref(null);
    const modelDocumentTypeOptions = ["BIR FORM NO. 2316"];
    const modelDocumentDescription = ref(null);
    const modelDocumentDescriptionRef = ref(null);
    const modelLeaveSelectedDays = ref(null);
    const modelLeaveSelectedDaysRef = ref(null);
    const modelLeaveDescription = ref(null);
    const modelLeaveDescriptionRef = ref(null);
    function postRequest() {
      if (modelType.value == "Vale" || modelType.value == "Product Loan" || modelType.value == "Partial to A/R") {
        modelTypeRef.value.validate();
        modelDescriptionLoanRequestRef.value.validate();
        modelPriceRef.value.validate();
        if (modelTypeRef.value.hasError || modelDescriptionLoanRequestRef.value.hasError || modelPriceRef.value.hasError)
          ;
        const storeLoan = useLoanStore();
        const highestNumber = Math.max.apply(
          Math,
          storeLoan.rows.map(function(o) {
            return o.referenceId;
          })
        );
        const arr = {
          referenceId: highestNumber + 1,
          deductionType: "Company Loan",
          type: modelType.value,
          description: modelDescriptionLoanRequest.value,
          price: Number(modelPrice.value),
          status: "Pending",
          payPeriod: "Pending",
          remarks: "Remarks Description Lorem"
        };
        storeLoan.rows.push(arr);
        storeRequestsEmployee.rows.push(arr);
        modelType.value = null;
        modelDescriptionLoanRequest.value = null;
        modelPrice.value = null;
        prompt.value = false;
        Notify.create({
          icon: "done",
          color: "positive",
          message: "Submitted!"
        });
      } else if (modelType.value == "Document") {
        modelTypeRef.value.validate();
        modelDocumentTypeRef.value.validate();
        modelDocumentDescriptionRef.value.validate();
        if (modelTypeRef.value.hasError || modelDocumentTypeRef.value.hasError || modelDocumentDescriptionRef.value.hasError)
          ;
        const highestNumber = Math.max.apply(
          Math,
          storeRequestsEmployee.rows.map(function(o) {
            return o.referenceId;
          })
        );
        const documentArr = {
          referenceId: highestNumber + 1,
          type: modelDocumentType.value,
          description: modelDocumentDescription.value,
          status: "Pending",
          remarks: ""
        };
        storeRequestsEmployee.rows.push(documentArr);
        prompt.value = false;
      } else if (modelType.value == "Leave") {
        modelTypeRef.value.validate();
        modelLeaveSelectedDaysRef.value.validate();
        modelLeaveDescriptionRef.value.validate();
        if (modelTypeRef.value.hasError || modelLeaveSelectedDaysRef.value.hasError || modelLeaveDescriptionRef.value.hasError)
          ;
        const highestNumber = Math.max.apply(
          Math,
          storeRequestsEmployee.rows.map(function(o) {
            return o.referenceId;
          })
        );
        const leaveArr = {
          referenceId: highestNumber + 1,
          type: modelType.value,
          description: modelLeaveDescription.value,
          status: "Pending",
          remarks: ""
        };
        storeRequestsEmployee.rows.push(leaveArr);
        prompt.value = false;
      }
    }
    function resetLoanRequestForm() {
      modelType.value = null;
      modelDescriptionLoanRequest.value = null;
      modelPrice.value = null;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QBtn, {
          label: __props.buttonName,
          color: "primary",
          onClick: _cache[0] || (_cache[0] = ($event) => prompt.value = true)
        }, null, 8, ["label"]),
        createBaseVNode("div", null, [
          createVNode(QDialog, {
            modelValue: prompt.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => prompt.value = $event),
            persistent: ""
          }, {
            default: withCtx(() => [
              createVNode(QCard, { style: { "min-width": "500px" } }, {
                default: withCtx(() => [
                  createVNode(QForm, {
                    onSubmit: withModifiers(postRequest, ["prevent"]),
                    autofocus: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, toDisplayString(__props.buttonName) + " Form", 1)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, { class: "q-pt-none" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createBaseVNode("div", _hoisted_2, [
                              _hoisted_3,
                              createVNode(QSelect, {
                                filled: "",
                                ref_key: "modelTypeRef",
                                ref: modelTypeRef,
                                modelValue: modelType.value,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelType.value = $event),
                                options: __props.modelOptions,
                                class: normalizeClass([modelType.value == null ? "tw-w-32" : "tw-w-max"]),
                                rules: [(val) => !!val || "Field is required"],
                                "lazy-rules": ""
                              }, null, 8, ["modelValue", "options", "class", "rules"])
                            ]),
                            modelType.value == "Vale" || modelType.value == "Product Loan" || modelType.value == "Partial to A/R" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                              createBaseVNode("div", null, [
                                _hoisted_5,
                                createBaseVNode("div", _hoisted_6, [
                                  createVNode(QInput, {
                                    ref_key: "modelDescriptionLoanRequestRef",
                                    ref: modelDescriptionLoanRequestRef,
                                    modelValue: modelDescriptionLoanRequest.value,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => modelDescriptionLoanRequest.value = $event),
                                    filled: "",
                                    autogrow: "",
                                    class: "tw-max-w-full",
                                    rules: [(val) => !!val || "Field is required"],
                                    "lazy-rules": ""
                                  }, null, 8, ["modelValue", "rules"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_7, [
                                _hoisted_8,
                                createVNode(QInput, {
                                  ref_key: "modelPriceRef",
                                  ref: modelPriceRef,
                                  modelValue: modelPrice.value,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => modelPrice.value = $event),
                                  filled: "",
                                  dense: _ctx.dense,
                                  class: "tw-w-40",
                                  rules: [
                                    (val) => !!val || "Field is required",
                                    (val) => /^\d+(\.\d+)?$/.test(val) || "Invalid price"
                                  ],
                                  "lazy-rules": ""
                                }, null, 8, ["modelValue", "dense", "rules"])
                              ])
                            ])) : modelType.value == "Document" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                              createBaseVNode("div", null, [
                                createBaseVNode("div", _hoisted_10, [
                                  _hoisted_11,
                                  createVNode(QSelect, {
                                    filled: "",
                                    ref_key: "modelDocumentTypeRef",
                                    ref: modelDocumentTypeRef,
                                    modelValue: modelDocumentType.value,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => modelDocumentType.value = $event),
                                    options: modelDocumentTypeOptions,
                                    class: normalizeClass([
                                      modelDocumentType.value == null ? "tw-w-32" : "tw-w-max"
                                    ]),
                                    rules: [(val) => !!val || "Field is required"],
                                    "lazy-rules": ""
                                  }, null, 8, ["modelValue", "class", "rules"])
                                ]),
                                _hoisted_12,
                                createBaseVNode("div", _hoisted_13, [
                                  createVNode(QInput, {
                                    ref_key: "modelDocumentDescriptionRef",
                                    ref: modelDocumentDescriptionRef,
                                    modelValue: modelDocumentDescription.value,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => modelDocumentDescription.value = $event),
                                    filled: "",
                                    autogrow: "",
                                    class: "tw-max-w-full",
                                    rules: [(val) => !!val || "Field is required"],
                                    "lazy-rules": ""
                                  }, null, 8, ["modelValue", "rules"])
                                ])
                              ])
                            ])) : modelType.value == "Leave" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode("div", null, [
                                  createVNode(QDate, {
                                    modelValue: modelLeaveSelectedDays.value,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => modelLeaveSelectedDays.value = $event),
                                    multiple: ""
                                  }, null, 8, ["modelValue"])
                                ])
                              ]),
                              createVNode(QInput, {
                                ref_key: "modelLeaveSelectedDaysRef",
                                ref: modelLeaveSelectedDaysRef,
                                modelValue: modelLeaveSelectedDays.value,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => modelLeaveSelectedDays.value = $event),
                                "reverse-fill-mask": "",
                                mask: "####-##-## \xA0",
                                readonly: "",
                                autogrow: "",
                                borderless: ""
                              }, null, 8, ["modelValue"]),
                              _hoisted_16,
                              createBaseVNode("div", _hoisted_17, [
                                createVNode(QInput, {
                                  ref_key: "modelLeaveDescriptionRef",
                                  ref: modelLeaveDescriptionRef,
                                  modelValue: modelLeaveDescription.value,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => modelLeaveDescription.value = $event),
                                  filled: "",
                                  autogrow: "",
                                  class: "tw-max-w-full",
                                  rules: [(val) => !!val || "Field is required"],
                                  "lazy-rules": ""
                                }, null, 8, ["modelValue", "rules"])
                              ])
                            ])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(QCardActions, {
                        align: "right",
                        class: "text-primary"
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode(QBtn, {
                            flat: "",
                            label: "Cancel",
                            onClick: resetLoanRequestForm
                          }, null, 512), [
                            [ClosePopup]
                          ]),
                          createVNode(QBtn, {
                            flat: "",
                            label: __props.buttonName,
                            type: "submit",
                            class: "tw-bg-green-500"
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ], 64);
    };
  }
};
var RequestForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "RequestForm.vue"]]);
export { RequestForm as R };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdEZvcm0uZGE1YjdlYjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhY2hlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9kYXRlLXBlcnNpYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RhdGUvdXNlLWRhdGV0aW1lLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvZGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZGF0ZS9RRGF0ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZm9ybS9RRm9ybS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JlcXVlc3RGb3JtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRDYWNoZTogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IGZ1bmN0aW9uIChfLCBvYmopIHsgcmV0dXJuIG9iaiB9XG4gICAgICA6IGZ1bmN0aW9uIChrZXksIG9iaikge1xuICAgICAgICByZXR1cm4gY2FjaGVbIGtleSBdID09PSB2b2lkIDBcbiAgICAgICAgICA/IChjYWNoZVsga2V5IF0gPSBvYmopXG4gICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgIH0sXG5cbiAgICBnZXRDYWNoZVdpdGhGbjogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IGZ1bmN0aW9uIChfLCBmbikgeyByZXR1cm4gZm4oKSB9XG4gICAgICA6IGZ1bmN0aW9uIChrZXksIGZuKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgID8gKGNhY2hlWyBrZXkgXSA9IGZuKCkpXG4gICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgIH1cbiAgfVxufVxuIiwiLy8gdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFsYWFsaS9qYWxhYWxpLWpzXG5cbi8qXG4gIEphbGFhbGkgeWVhcnMgc3RhcnRpbmcgdGhlIDMzLXllYXIgcnVsZS5cbiovXG5jb25zdCBicmVha3MgPSBbXG4gIC02MSwgOSwgMzgsIDE5OSwgNDI2LCA2ODYsIDc1NiwgODE4LCAxMTExLCAxMTgxLCAxMjEwLFxuICAxNjM1LCAyMDYwLCAyMDk3LCAyMTkyLCAyMjYyLCAyMzI0LCAyMzk0LCAyNDU2LCAzMTc4XG5dXG5cbi8qXG4gIENvbnZlcnRzIGEgR3JlZ29yaWFuIGRhdGUgdG8gSmFsYWFsaS5cbiovXG5leHBvcnQgZnVuY3Rpb24gdG9KYWxhYWxpIChneSwgZ20sIGdkKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ3kpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICBnZCA9IGd5LmdldERhdGUoKVxuICAgIGdtID0gZ3kuZ2V0TW9udGgoKSArIDFcbiAgICBneSA9IGd5LmdldEZ1bGxZZWFyKClcbiAgfVxuICByZXR1cm4gZDJqKGcyZChneSwgZ20sIGdkKSlcbn1cblxuLypcbiAgQ29udmVydHMgYSBKYWxhYWxpIGRhdGUgdG8gR3JlZ29yaWFuLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0dyZWdvcmlhbiAoanksIGptLCBqZCkge1xuICByZXR1cm4gZDJnKGoyZChqeSwgam0sIGpkKSlcbn1cblxuLypcbiAgSXMgdGhpcyBhIGxlYXAgeWVhciBvciBub3Q/XG4qL1xuZnVuY3Rpb24gaXNMZWFwSmFsYWFsaVllYXIgKGp5KSB7XG4gIHJldHVybiBqYWxDYWxMZWFwKGp5KSA9PT0gMFxufVxuXG4vKlxuICBOdW1iZXIgb2YgZGF5cyBpbiBhIGdpdmVuIG1vbnRoIGluIGEgSmFsYWFsaSB5ZWFyLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBqYWxhYWxpTW9udGhMZW5ndGggKGp5LCBqbSkge1xuICBpZiAoam0gPD0gNikgcmV0dXJuIDMxXG4gIGlmIChqbSA8PSAxMSkgcmV0dXJuIDMwXG4gIGlmIChpc0xlYXBKYWxhYWxpWWVhcihqeSkpIHJldHVybiAzMFxuICByZXR1cm4gMjlcbn1cblxuLypcbiAgICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgICBsZWFwICgzNjYtZGF5IGxvbmcpIG9yIGlzIHRoZSBjb21tb24geWVhciAoMzY1IGRheXMpXG5cbiAgICBAcGFyYW0gankgSmFsYWFsaSBjYWxlbmRhciB5ZWFyICgtNjEgdG8gMzE3NylcbiAgICBAcmV0dXJucyBudW1iZXIgb2YgeWVhcnMgc2luY2UgdGhlIGxhc3QgbGVhcCB5ZWFyICgwIHRvIDQpXG4gKi9cbmZ1bmN0aW9uIGphbENhbExlYXAgKGp5KSB7XG4gIGNvbnN0IGJsID0gYnJlYWtzLmxlbmd0aFxuICBsZXRcbiAgICBqcCA9IGJyZWFrc1sgMCBdLFxuICAgIGptLFxuICAgIGp1bXAsXG4gICAgbGVhcCxcbiAgICBuLFxuICAgIGlcblxuICBpZiAoankgPCBqcCB8fCBqeSA+PSBicmVha3NbIGJsIC0gMSBdKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBKYWxhYWxpIHllYXIgJyArIGp5KSB9XG5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgaWYgKGp1bXAgLSBuIDwgNikgeyBuID0gbiAtIGp1bXAgKyBkaXYoanVtcCArIDQsIDMzKSAqIDMzIH1cbiAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gIGlmIChsZWFwID09PSAtMSkge1xuICAgIGxlYXAgPSA0XG4gIH1cblxuICByZXR1cm4gbGVhcFxufVxuXG4vKlxuICBUaGlzIGZ1bmN0aW9uIGRldGVybWluZXMgaWYgdGhlIEphbGFhbGkgKFBlcnNpYW4pIHllYXIgaXNcbiAgbGVhcCAoMzY2LWRheSBsb25nKSBvciBpcyB0aGUgY29tbW9uIHllYXIgKDM2NSBkYXlzKSwgYW5kXG4gIGZpbmRzIHRoZSBkYXkgaW4gTWFyY2ggKEdyZWdvcmlhbiBjYWxlbmRhcikgb2YgdGhlIGZpcnN0XG4gIGRheSBvZiB0aGUgSmFsYWFsaSB5ZWFyIChqeSkuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgY2FsZW5kYXIgeWVhciAoLTYxIHRvIDMxNzcpXG4gIEBwYXJhbSB3aXRob3V0TGVhcCB3aGVuIGRvbid0IG5lZWQgbGVhcCAodHJ1ZSBvciBmYWxzZSkgZGVmYXVsdCBpcyBmYWxzZVxuICBAcmV0dXJuXG4gICAgbGVhcDogbnVtYmVyIG9mIHllYXJzIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhciAoMCB0byA0KVxuICAgIGd5OiBHcmVnb3JpYW4geWVhciBvZiB0aGUgYmVnaW5uaW5nIG9mIEphbGFhbGkgeWVhclxuICAgIG1hcmNoOiB0aGUgTWFyY2ggZGF5IG9mIEZhcnZhcmRpbiB0aGUgMXN0ICgxc3QgZGF5IG9mIGp5KVxuICBAc2VlOiBodHRwOi8vd3d3LmFzdHJvLnVuaS50b3J1bi5wbC9+a2IvUGFwZXJzL0VNUC9QZXJzaWFuQy1FTVAuaHRtXG4gIEBzZWU6IGh0dHA6Ly93d3cuZm91cm1pbGFiLmNoL2RvY3VtZW50cy9jYWxlbmRhci9cbiovXG5mdW5jdGlvbiBqYWxDYWwgKGp5LCB3aXRob3V0TGVhcCkge1xuICBjb25zdFxuICAgIGJsID0gYnJlYWtzLmxlbmd0aCxcbiAgICBneSA9IGp5ICsgNjIxXG4gIGxldFxuICAgIGxlYXBKID0gLTE0LFxuICAgIGpwID0gYnJlYWtzWyAwIF0sXG4gICAgam0sXG4gICAganVtcCxcbiAgICBsZWFwLFxuICAgIG4sXG4gICAgaVxuXG4gIGlmIChqeSA8IGpwIHx8IGp5ID49IGJyZWFrc1sgYmwgLSAxIF0pIHsgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEphbGFhbGkgeWVhciAnICsgankpIH1cblxuICAvLyBGaW5kIHRoZSBsaW1pdGluZyB5ZWFycyBmb3IgdGhlIEphbGFhbGkgeWVhciBqeS5cbiAgZm9yIChpID0gMTsgaSA8IGJsOyBpICs9IDEpIHtcbiAgICBqbSA9IGJyZWFrc1sgaSBdXG4gICAganVtcCA9IGptIC0ganBcbiAgICBpZiAoankgPCBqbSkgeyBicmVhayB9XG4gICAgbGVhcEogPSBsZWFwSiArIGRpdihqdW1wLCAzMykgKiA4ICsgZGl2KG1vZChqdW1wLCAzMyksIDQpXG4gICAganAgPSBqbVxuICB9XG4gIG4gPSBqeSAtIGpwXG5cbiAgLy8gRmluZCB0aGUgbnVtYmVyIG9mIGxlYXAgeWVhcnMgZnJvbSBBRCA2MjEgdG8gdGhlIGJlZ2lubmluZ1xuICAvLyBvZiB0aGUgY3VycmVudCBKYWxhYWxpIHllYXIgaW4gdGhlIFBlcnNpYW4gY2FsZW5kYXIuXG4gIGxlYXBKID0gbGVhcEogKyBkaXYobiwgMzMpICogOCArIGRpdihtb2QobiwgMzMpICsgMywgNClcbiAgaWYgKG1vZChqdW1wLCAzMykgPT09IDQgJiYganVtcCAtIG4gPT09IDQpIHsgbGVhcEogKz0gMSB9XG5cbiAgLy8gQW5kIHRoZSBzYW1lIGluIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIgKHVudGlsIHRoZSB5ZWFyIGd5KS5cbiAgY29uc3QgbGVhcEcgPSBkaXYoZ3ksIDQpIC0gZGl2KChkaXYoZ3ksIDEwMCkgKyAxKSAqIDMsIDQpIC0gMTUwXG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBHcmVnb3JpYW4gZGF0ZSBvZiBGYXJ2YXJkaW4gdGhlIDFzdC5cbiAgY29uc3QgbWFyY2ggPSAyMCArIGxlYXBKIC0gbGVhcEdcblxuICAvLyBGaW5kIGhvdyBtYW55IHllYXJzIGhhdmUgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGxlYXAgeWVhci5cbiAgaWYgKCF3aXRob3V0TGVhcCkge1xuICAgIGlmIChqdW1wIC0gbiA8IDYpIHsgbiA9IG4gLSBqdW1wICsgZGl2KGp1bXAgKyA0LCAzMykgKiAzMyB9XG4gICAgbGVhcCA9IG1vZChtb2QobiArIDEsIDMzKSAtIDEsIDQpXG4gICAgaWYgKGxlYXAgPT09IC0xKSB7XG4gICAgICBsZWFwID0gNFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGVhcCxcbiAgICBneSxcbiAgICBtYXJjaFxuICB9XG59XG5cbi8qXG4gIENvbnZlcnRzIGEgZGF0ZSBvZiB0aGUgSmFsYWFsaSBjYWxlbmRhciB0byB0aGUgSnVsaWFuIERheSBudW1iZXIuXG5cbiAgQHBhcmFtIGp5IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICBAcGFyYW0gam0gSmFsYWFsaSBtb250aCAoMSB0byAxMilcbiAgQHBhcmFtIGpkIEphbGFhbGkgZGF5ICgxIHRvIDI5LzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gajJkIChqeSwgam0sIGpkKSB7XG4gIGNvbnN0IHIgPSBqYWxDYWwoanksIHRydWUpXG4gIHJldHVybiBnMmQoci5neSwgMywgci5tYXJjaCkgKyAoam0gLSAxKSAqIDMxIC0gZGl2KGptLCA3KSAqIChqbSAtIDcpICsgamQgLSAxXG59XG5cbi8qXG4gIENvbnZlcnRzIHRoZSBKdWxpYW4gRGF5IG51bWJlciB0byBhIGRhdGUgaW4gdGhlIEphbGFhbGkgY2FsZW5kYXIuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgank6IEphbGFhbGkgeWVhciAoMSB0byAzMTAwKVxuICAgIGptOiBKYWxhYWxpIG1vbnRoICgxIHRvIDEyKVxuICAgIGpkOiBKYWxhYWxpIGRheSAoMSB0byAyOS8zMSlcbiovXG5mdW5jdGlvbiBkMmogKGpkbikge1xuICBjb25zdCBneSA9IGQyZyhqZG4pLmd5IC8vIENhbGN1bGF0ZSBHcmVnb3JpYW4geWVhciAoZ3kpLlxuICBsZXRcbiAgICBqeSA9IGd5IC0gNjIxLFxuICAgIGpkLFxuICAgIGptLFxuICAgIGtcbiAgY29uc3RcbiAgICByID0gamFsQ2FsKGp5LCBmYWxzZSksXG4gICAgamRuMWYgPSBnMmQoZ3ksIDMsIHIubWFyY2gpXG5cbiAgLy8gRmluZCBudW1iZXIgb2YgZGF5cyB0aGF0IHBhc3NlZCBzaW5jZSAxIEZhcnZhcmRpbi5cbiAgayA9IGpkbiAtIGpkbjFmXG4gIGlmIChrID49IDApIHtcbiAgICBpZiAoayA8PSAxODUpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCA2IG1vbnRocy5cbiAgICAgIGptID0gMSArIGRpdihrLCAzMSlcbiAgICAgIGpkID0gbW9kKGssIDMxKSArIDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGp5LFxuICAgICAgICBqbSxcbiAgICAgICAgamRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUaGUgcmVtYWluaW5nIG1vbnRocy5cbiAgICAgIGsgLT0gMTg2XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIFByZXZpb3VzIEphbGFhbGkgeWVhci5cbiAgICBqeSAtPSAxXG4gICAgayArPSAxNzlcbiAgICBpZiAoci5sZWFwID09PSAxKSB7IGsgKz0gMSB9XG4gIH1cbiAgam0gPSA3ICsgZGl2KGssIDMwKVxuICBqZCA9IG1vZChrLCAzMCkgKyAxXG4gIHJldHVybiB7XG4gICAganksXG4gICAgam0sXG4gICAgamRcbiAgfVxufVxuXG4vKlxuICBDYWxjdWxhdGVzIHRoZSBKdWxpYW4gRGF5IG51bWJlciBmcm9tIEdyZWdvcmlhbiBvciBKdWxpYW5cbiAgY2FsZW5kYXIgZGF0ZXMuIFRoaXMgaW50ZWdlciBudW1iZXIgY29ycmVzcG9uZHMgdG8gdGhlIG5vb24gb2ZcbiAgdGhlIGRhdGUgKGkuZS4gMTIgaG91cnMgb2YgVW5pdmVyc2FsIFRpbWUpLlxuICBUaGUgcHJvY2VkdXJlIHdhcyB0ZXN0ZWQgdG8gYmUgZ29vZCBzaW5jZSAxIE1hcmNoLCAtMTAwMTAwIChvZiBib3RoXG4gIGNhbGVuZGFycykgdXAgdG8gYSBmZXcgbWlsbGlvbiB5ZWFycyBpbnRvIHRoZSBmdXR1cmUuXG5cbiAgQHBhcmFtIGd5IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICBAcGFyYW0gZ20gQ2FsZW5kYXIgbW9udGggKDEgdG8gMTIpXG4gIEBwYXJhbSBnZCBDYWxlbmRhciBkYXkgb2YgdGhlIG1vbnRoICgxIHRvIDI4LzI5LzMwLzMxKVxuICBAcmV0dXJuIEp1bGlhbiBEYXkgbnVtYmVyXG4qL1xuZnVuY3Rpb24gZzJkIChneSwgZ20sIGdkKSB7XG4gIGxldCBkID0gZGl2KChneSArIGRpdihnbSAtIDgsIDYpICsgMTAwMTAwKSAqIDE0NjEsIDQpXG4gICAgICArIGRpdigxNTMgKiBtb2QoZ20gKyA5LCAxMikgKyAyLCA1KVxuICAgICAgKyBnZCAtIDM0ODQwNDA4XG4gIGQgPSBkIC0gZGl2KGRpdihneSArIDEwMDEwMCArIGRpdihnbSAtIDgsIDYpLCAxMDApICogMywgNCkgKyA3NTJcbiAgcmV0dXJuIGRcbn1cblxuLypcbiAgQ2FsY3VsYXRlcyBHcmVnb3JpYW4gYW5kIEp1bGlhbiBjYWxlbmRhciBkYXRlcyBmcm9tIHRoZSBKdWxpYW4gRGF5IG51bWJlclxuICAoamRuKSBmb3IgdGhlIHBlcmlvZCBzaW5jZSBqZG49LTM0ODM5NjU1IChpLmUuIHRoZSB5ZWFyIC0xMDAxMDAgb2YgYm90aFxuICBjYWxlbmRhcnMpIHRvIHNvbWUgbWlsbGlvbnMgeWVhcnMgYWhlYWQgb2YgdGhlIHByZXNlbnQuXG5cbiAgQHBhcmFtIGpkbiBKdWxpYW4gRGF5IG51bWJlclxuICBAcmV0dXJuXG4gICAgZ3k6IENhbGVuZGFyIHllYXIgKHllYXJzIEJDIG51bWJlcmVkIDAsIC0xLCAtMiwgLi4uKVxuICAgIGdtOiBDYWxlbmRhciBtb250aCAoMSB0byAxMilcbiAgICBnZDogQ2FsZW5kYXIgZGF5IG9mIHRoZSBtb250aCBNICgxIHRvIDI4LzI5LzMwLzMxKVxuKi9cbmZ1bmN0aW9uIGQyZyAoamRuKSB7XG4gIGxldCBqID0gNCAqIGpkbiArIDEzOTM2MTYzMVxuICBqID0gaiArIGRpdihkaXYoNCAqIGpkbiArIDE4MzE4NzcyMCwgMTQ2MDk3KSAqIDMsIDQpICogNCAtIDM5MDhcbiAgY29uc3RcbiAgICBpID0gZGl2KG1vZChqLCAxNDYxKSwgNCkgKiA1ICsgMzA4LFxuICAgIGdkID0gZGl2KG1vZChpLCAxNTMpLCA1KSArIDEsXG4gICAgZ20gPSBtb2QoZGl2KGksIDE1MyksIDEyKSArIDEsXG4gICAgZ3kgPSBkaXYoaiwgMTQ2MSkgLSAxMDAxMDAgKyBkaXYoOCAtIGdtLCA2KVxuICByZXR1cm4ge1xuICAgIGd5LFxuICAgIGdtLFxuICAgIGdkXG4gIH1cbn1cblxuLypcbiAgVXRpbGl0eSBoZWxwZXIgZnVuY3Rpb25zLlxuKi9cblxuZnVuY3Rpb24gZGl2IChhLCBiKSB7XG4gIHJldHVybiB+fihhIC8gYilcbn1cblxuZnVuY3Rpb24gbW9kIChhLCBiKSB7XG4gIHJldHVybiBhIC0gfn4oYSAvIGIpICogYlxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHRvSmFsYWFsaSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZGF0ZS1wZXJzaWFuLmpzJ1xuaW1wb3J0IHsgcGFkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuXG5jb25zdCBjYWxlbmRhcnMgPSBbICdncmVnb3JpYW4nLCAncGVyc2lhbicgXVxuXG5leHBvcnQgY29uc3QgdXNlRGF0ZXRpbWVQcm9wcyA9IHtcbiAgbW9kZWxWYWx1ZToge1xuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG5cbiAgbWFzazoge1xuICAgIHR5cGU6IFN0cmluZ1xuICB9LFxuICBsb2NhbGU6IE9iamVjdCxcblxuICBjYWxlbmRhcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gY2FsZW5kYXJzLmluY2x1ZGVzKHYpLFxuICAgIGRlZmF1bHQ6ICdncmVnb3JpYW4nXG4gIH0sXG5cbiAgbGFuZHNjYXBlOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gIHNxdWFyZTogQm9vbGVhbixcbiAgZmxhdDogQm9vbGVhbixcbiAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZURhdGV0aW1lRW1pdHMgPSBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5SGFzaCAoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS55ZWFyICsgJy8nICsgcGFkKGRhdGUubW9udGgpICsgJy8nICsgcGFkKGRhdGUuZGF5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsICRxKSB7XG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gIH0pXG5cbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gMCA6IC0xXG4gIH0pXG5cbiAgY29uc3QgaGVhZGVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgY2xzID0gW11cbiAgICBwcm9wcy5jb2xvciAhPT0gdm9pZCAwICYmIGNscy5wdXNoKGBiZy0keyBwcm9wcy5jb2xvciB9YClcbiAgICBwcm9wcy50ZXh0Q29sb3IgIT09IHZvaWQgMCAmJiBjbHMucHVzaChgdGV4dC0keyBwcm9wcy50ZXh0Q29sb3IgfWApXG4gICAgcmV0dXJuIGNscy5qb2luKCcgJylcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRMb2NhbGUgKCkge1xuICAgIHJldHVybiBwcm9wcy5sb2NhbGUgIT09IHZvaWQgMFxuICAgICAgPyB7IC4uLiRxLmxhbmcuZGF0ZSwgLi4ucHJvcHMubG9jYWxlIH1cbiAgICAgIDogJHEubGFuZy5kYXRlXG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSAoZGF0ZU9ubHkpIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IHRpbWVGaWxsID0gZGF0ZU9ubHkgPT09IHRydWUgPyBudWxsIDogMFxuXG4gICAgaWYgKHByb3BzLmNhbGVuZGFyID09PSAncGVyc2lhbicpIHtcbiAgICAgIGNvbnN0IGpEYXRlID0gdG9KYWxhYWxpKGQpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBqRGF0ZS5qeSxcbiAgICAgICAgbW9udGg6IGpEYXRlLmptLFxuICAgICAgICBkYXk6IGpEYXRlLmpkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IGQuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOiBkLmdldE1vbnRoKCkgKyAxLFxuICAgICAgZGF5OiBkLmdldERhdGUoKSxcbiAgICAgIGhvdXI6IHRpbWVGaWxsLFxuICAgICAgbWludXRlOiB0aW1lRmlsbCxcbiAgICAgIHNlY29uZDogdGltZUZpbGwsXG4gICAgICBtaWxsaXNlY29uZDogdGltZUZpbGxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVkaXRhYmxlLFxuICAgIHRhYmluZGV4LFxuICAgIGhlYWRlckNsYXNzLFxuXG4gICAgZ2V0TG9jYWxlLFxuICAgIGdldEN1cnJlbnREYXRlXG4gIH1cbn1cbiIsIi8qIGVzbGludCBuby1mYWxsdGhyb3VnaDogMCAqL1xuXG5pbXBvcnQgeyBpc0RhdGUgfSBmcm9tICcuL2lzLmpzJ1xuaW1wb3J0IHsgcGFkLCBjYXBpdGFsaXplIH0gZnJvbSAnLi9mb3JtYXQuanMnXG5pbXBvcnQgeyBqYWxhYWxpTW9udGhMZW5ndGggfSBmcm9tICcuL3ByaXZhdGUvZGF0ZS1wZXJzaWFuLmpzJ1xuaW1wb3J0IGxhbmcsIHsgZGVmYXVsdExhbmcgfSBmcm9tICcuLi9sYW5nLmpzJ1xuXG5jb25zdFxuICBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDAsXG4gIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMCxcbiAgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwLFxuICBkZWZhdWx0TWFzayA9ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onLFxuICB0b2tlbiA9IC9cXFsoKD86W15cXF1cXFxcXXxcXFxcXXxcXFxcKSopXFxdfGR7MSw0fXxNezEsNH18bXsxLDJ9fHd7MSwyfXxRb3xEb3xEezEsNH18WVkoPzpZWSk/fEh7MSwyfXxoezEsMn18c3sxLDJ9fFN7MSwzfXxaezEsMn18YXsxLDJ9fFtBUUV4WF0vZyxcbiAgcmV2ZXJzZVRva2VuID0gLyhcXFtbXlxcXV0qXFxdKXxkezEsNH18TXsxLDR9fG17MSwyfXx3ezEsMn18UW98RG98RHsxLDR9fFlZKD86WVkpP3xIezEsMn18aHsxLDJ9fHN7MSwyfXxTezEsM318WnsxLDJ9fGF7MSwyfXxbQVFFeFhdfChbLiorOj9eLFxccyR7fSgpfFxcXFxdKykvZyxcbiAgcmVnZXhTdG9yZSA9IHt9XG5cbmZ1bmN0aW9uIGdldFJlZ2V4RGF0YSAobWFzaywgZGF0ZUxvY2FsZSkge1xuICBjb25zdFxuICAgIGRheXMgPSAnKCcgKyBkYXRlTG9jYWxlLmRheXMuam9pbignfCcpICsgJyknLFxuICAgIGtleSA9IG1hc2sgKyBkYXlzXG5cbiAgaWYgKHJlZ2V4U3RvcmVbIGtleSBdICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gcmVnZXhTdG9yZVsga2V5IF1cbiAgfVxuXG4gIGNvbnN0XG4gICAgZGF5c1Nob3J0ID0gJygnICsgZGF0ZUxvY2FsZS5kYXlzU2hvcnQuam9pbignfCcpICsgJyknLFxuICAgIG1vbnRocyA9ICcoJyArIGRhdGVMb2NhbGUubW9udGhzLmpvaW4oJ3wnKSArICcpJyxcbiAgICBtb250aHNTaG9ydCA9ICcoJyArIGRhdGVMb2NhbGUubW9udGhzU2hvcnQuam9pbignfCcpICsgJyknXG5cbiAgY29uc3QgbWFwID0ge31cbiAgbGV0IGluZGV4ID0gMFxuXG4gIGNvbnN0IHJlZ2V4VGV4dCA9IG1hc2sucmVwbGFjZShyZXZlcnNlVG9rZW4sIG1hdGNoID0+IHtcbiAgICBpbmRleCsrXG4gICAgc3dpdGNoIChtYXRjaCkge1xuICAgICAgY2FzZSAnWVknOlxuICAgICAgICBtYXAuWVkgPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnWVlZWSc6XG4gICAgICAgIG1hcC5ZWVlZID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoLT9cXFxcZHsxLDR9KSdcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICBtYXAuTSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICBtYXAuTSA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gTVxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICBtYXAuTU1NID0gaW5kZXhcbiAgICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0XG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgbWFwLk1NTU0gPSBpbmRleFxuICAgICAgICByZXR1cm4gbW9udGhzXG4gICAgICBjYXNlICdEJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ0RvJzpcbiAgICAgICAgbWFwLkQgPSBpbmRleCsrIC8vIGJ1bXBpbmcgdG8gRFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KHN0fG5kfHJkfHRoKSknXG4gICAgICBjYXNlICdERCc6XG4gICAgICAgIG1hcC5EID0gaW5kZXggLy8gYnVtcGluZyB0byBEXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBtYXAuSCA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnSEgnOlxuICAgICAgICBtYXAuSCA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gSFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdoJzpcbiAgICAgICAgbWFwLmggPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxLDJ9KSdcbiAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgbWFwLmggPSBpbmRleCAvLyBidW1waW5nIHRvIGhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7Mn0pJ1xuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIG1hcC5tID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoXFxcXGR7MSwyfSknXG4gICAgICBjYXNlICdtbSc6XG4gICAgICAgIG1hcC5tID0gaW5kZXggLy8gYnVtcGluZyB0byBtXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBtYXAucyA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnc3MnOlxuICAgICAgICBtYXAucyA9IGluZGV4IC8vIGJ1bXBpbmcgdG8gc1xuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgbWFwLlMgPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxfSknXG4gICAgICBjYXNlICdTUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXggLy8gYnVtcCB0byBTXG4gICAgICAgIHJldHVybiAnKFxcXFxkezJ9KSdcbiAgICAgIGNhc2UgJ1NTUyc6XG4gICAgICAgIG1hcC5TID0gaW5kZXggLy8gYnVtcCB0byBTXG4gICAgICAgIHJldHVybiAnKFxcXFxkezN9KSdcbiAgICAgIGNhc2UgJ0EnOlxuICAgICAgICBtYXAuQSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKEFNfFBNKSdcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBtYXAuYSA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKGFtfHBtKSdcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgbWFwLmFhID0gaW5kZXhcbiAgICAgICAgcmV0dXJuICcoYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLiknXG5cbiAgICAgIGNhc2UgJ2RkZCc6XG4gICAgICAgIHJldHVybiBkYXlzU2hvcnRcbiAgICAgIGNhc2UgJ2RkZGQnOlxuICAgICAgICByZXR1cm4gZGF5c1xuICAgICAgY2FzZSAnUSc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsxfSknXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiAnKDFzdHwybmR8M3JkfDR0aCknXG4gICAgICBjYXNlICdEREQnOlxuICAgICAgY2FzZSAnRERERCc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsM30pJ1xuICAgICAgY2FzZSAndyc6XG4gICAgICAgIHJldHVybiAnKFxcXFxkezEsMn0pJ1xuICAgICAgY2FzZSAnd3cnOlxuICAgICAgICByZXR1cm4gJyhcXFxcZHsyfSknXG5cbiAgICAgIGNhc2UgJ1onOiAvLyB0byBzcGxpdDogKD86KFopKCkoKXwoWystXSk/KFxcXFxkezJ9KTo/KFxcXFxkezJ9KSlcbiAgICAgICAgbWFwLlogPSBpbmRleFxuICAgICAgICByZXR1cm4gJyhafFsrLV1cXFxcZHsyfTpcXFxcZHsyfSknXG4gICAgICBjYXNlICdaWic6XG4gICAgICAgIG1hcC5aWiA9IGluZGV4XG4gICAgICAgIHJldHVybiAnKFp8WystXVxcXFxkezJ9XFxcXGR7Mn0pJ1xuXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgbWFwLlggPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkKyknXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgbWFwLnggPSBpbmRleFxuICAgICAgICByZXR1cm4gJygtP1xcXFxkezQsfSknXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGluZGV4LS1cbiAgICAgICAgaWYgKG1hdGNoWyAwIF0gPT09ICdbJykge1xuICAgICAgICAgIG1hdGNoID0gbWF0Y2guc3Vic3RyaW5nKDEsIG1hdGNoLmxlbmd0aCAtIDEpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzID0geyBtYXAsIHJlZ2V4OiBuZXcgUmVnRXhwKCdeJyArIHJlZ2V4VGV4dCkgfVxuICByZWdleFN0b3JlWyBrZXkgXSA9IHJlc1xuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZUxvY2FsZSAocGFyYW1EYXRlTG9jYWxlLCBsYW5nUHJvcHMpIHtcbiAgcmV0dXJuIHBhcmFtRGF0ZUxvY2FsZSAhPT0gdm9pZCAwXG4gICAgPyBwYXJhbURhdGVMb2NhbGVcbiAgICA6IChcbiAgICAgICAgbGFuZ1Byb3BzICE9PSB2b2lkIDBcbiAgICAgICAgICA/IGxhbmdQcm9wcy5kYXRlXG4gICAgICAgICAgOiBkZWZhdWx0TGFuZy5kYXRlXG4gICAgICApXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lIChvZmZzZXQsIGRlbGltZXRlciA9ICcnKSB7XG4gIGNvbnN0XG4gICAgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKycsXG4gICAgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KSxcbiAgICBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLFxuICAgIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MFxuXG4gIHJldHVybiBzaWduICsgcGFkKGhvdXJzKSArIGRlbGltZXRlciArIHBhZChtaW51dGVzKVxufVxuXG5mdW5jdGlvbiBhcHBseVllYXJNb250aERheUNoYW5nZSAoZGF0ZSwgbW9kLCBzaWduKSB7XG4gIGxldFxuICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGggPSBkYXRlLmdldE1vbnRoKClcblxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxuXG4gIGlmIChtb2QueWVhciAhPT0gdm9pZCAwKSB7XG4gICAgeWVhciArPSBzaWduICogbW9kLnllYXJcbiAgICBkZWxldGUgbW9kLnllYXJcbiAgfVxuXG4gIGlmIChtb2QubW9udGggIT09IHZvaWQgMCkge1xuICAgIG1vbnRoICs9IHNpZ24gKiBtb2QubW9udGhcbiAgICBkZWxldGUgbW9kLm1vbnRoXG4gIH1cblxuICBkYXRlLnNldERhdGUoMSlcbiAgZGF0ZS5zZXRNb250aCgyKVxuXG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhcilcbiAgZGF0ZS5zZXRNb250aChtb250aClcbiAgZGF0ZS5zZXREYXRlKE1hdGgubWluKGRheSwgZGF5c0luTW9udGgoZGF0ZSkpKVxuXG4gIGlmIChtb2QuZGF0ZSAhPT0gdm9pZCAwKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgc2lnbiAqIG1vZC5kYXRlKVxuICAgIGRlbGV0ZSBtb2QuZGF0ZVxuICB9XG5cbiAgcmV0dXJuIGRhdGVcbn1cblxuZnVuY3Rpb24gYXBwbHlZZWFyTW9udGhEYXkgKGRhdGUsIG1vZCwgbWlkZGxlKSB7XG4gIGNvbnN0XG4gICAgeWVhciA9IG1vZC55ZWFyICE9PSB2b2lkIDAgPyBtb2QueWVhciA6IGRhdGVbIGBnZXQkeyBtaWRkbGUgfUZ1bGxZZWFyYCBdKCksXG4gICAgbW9udGggPSBtb2QubW9udGggIT09IHZvaWQgMCA/IG1vZC5tb250aCAtIDEgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1Nb250aGAgXSgpLFxuICAgIG1heERheSA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApKS5nZXREYXRlKCksXG4gICAgZGF5ID0gTWF0aC5taW4obWF4RGF5LCBtb2QuZGF0ZSAhPT0gdm9pZCAwID8gbW9kLmRhdGUgOiBkYXRlWyBgZ2V0JHsgbWlkZGxlIH1EYXRlYCBdKCkpXG5cbiAgZGF0ZVsgYHNldCR7IG1pZGRsZSB9RGF0ZWAgXSgxKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1Nb250aGAgXSgyKVxuXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfUZ1bGxZZWFyYCBdKHllYXIpXG4gIGRhdGVbIGBzZXQkeyBtaWRkbGUgfU1vbnRoYCBdKG1vbnRoKVxuICBkYXRlWyBgc2V0JHsgbWlkZGxlIH1EYXRlYCBdKGRheSlcblxuICBkZWxldGUgbW9kLnllYXJcbiAgZGVsZXRlIG1vZC5tb250aFxuICBkZWxldGUgbW9kLmRhdGVcblxuICByZXR1cm4gZGF0ZVxufVxuXG5mdW5jdGlvbiBnZXRDaGFuZ2UgKGRhdGUsIHJhd01vZCwgc2lnbikge1xuICBjb25zdFxuICAgIG1vZCA9IG5vcm1hbGl6ZU1vZChyYXdNb2QpLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICB0ID0gbW9kLnllYXIgIT09IHZvaWQgMCB8fCBtb2QubW9udGggIT09IHZvaWQgMCB8fCBtb2QuZGF0ZSAhPT0gdm9pZCAwXG4gICAgICA/IGFwcGx5WWVhck1vbnRoRGF5Q2hhbmdlKGQsIG1vZCwgc2lnbikgLy8gcmVtb3ZlcyB5ZWFyL21vbnRoL2RheVxuICAgICAgOiBkXG5cbiAgZm9yIChjb25zdCBrZXkgaW4gbW9kKSB7XG4gICAgY29uc3Qgb3AgPSBjYXBpdGFsaXplKGtleSlcbiAgICB0WyBgc2V0JHsgb3AgfWAgXSh0WyBgZ2V0JHsgb3AgfWAgXSgpICsgc2lnbiAqIG1vZFsga2V5IF0pXG4gIH1cblxuICByZXR1cm4gdFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVNb2QgKG1vZCkge1xuICBjb25zdCBhY2MgPSB7IC4uLm1vZCB9XG5cbiAgaWYgKG1vZC55ZWFycyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLnllYXIgPSBtb2QueWVhcnNcbiAgICBkZWxldGUgYWNjLnllYXJzXG4gIH1cblxuICBpZiAobW9kLm1vbnRocyAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLm1vbnRoID0gbW9kLm1vbnRoc1xuICAgIGRlbGV0ZSBhY2MubW9udGhzXG4gIH1cblxuICBpZiAobW9kLmRheXMgIT09IHZvaWQgMCkge1xuICAgIGFjYy5kYXRlID0gbW9kLmRheXNcbiAgICBkZWxldGUgYWNjLmRheXNcbiAgfVxuICBpZiAobW9kLmRheSAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmRhdGUgPSBtb2QuZGF5XG4gICAgZGVsZXRlIGFjYy5kYXlcbiAgfVxuXG4gIGlmIChtb2QuaG91ciAhPT0gdm9pZCAwKSB7XG4gICAgYWNjLmhvdXJzID0gbW9kLmhvdXJcbiAgICBkZWxldGUgYWNjLmhvdXJcbiAgfVxuXG4gIGlmIChtb2QubWludXRlICE9PSB2b2lkIDApIHtcbiAgICBhY2MubWludXRlcyA9IG1vZC5taW51dGVcbiAgICBkZWxldGUgYWNjLm1pbnV0ZVxuICB9XG5cbiAgaWYgKG1vZC5zZWNvbmQgIT09IHZvaWQgMCkge1xuICAgIGFjYy5zZWNvbmRzID0gbW9kLnNlY29uZFxuICAgIGRlbGV0ZSBhY2Muc2Vjb25kXG4gIH1cblxuICBpZiAobW9kLm1pbGxpc2Vjb25kICE9PSB2b2lkIDApIHtcbiAgICBhY2MubWlsbGlzZWNvbmRzID0gbW9kLm1pbGxpc2Vjb25kXG4gICAgZGVsZXRlIGFjYy5taWxsaXNlY29uZFxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0RGF0ZSAoZGF0ZSwgcmF3TW9kLCB1dGMpIHtcbiAgY29uc3RcbiAgICBtb2QgPSBub3JtYWxpemVNb2QocmF3TW9kKSxcbiAgICBtaWRkbGUgPSB1dGMgPT09IHRydWUgPyAnVVRDJyA6ICcnLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICB0ID0gbW9kLnllYXIgIT09IHZvaWQgMCB8fCBtb2QubW9udGggIT09IHZvaWQgMCB8fCBtb2QuZGF0ZSAhPT0gdm9pZCAwXG4gICAgICA/IGFwcGx5WWVhck1vbnRoRGF5KGQsIG1vZCwgbWlkZGxlKSAvLyByZW1vdmVzIHllYXIvbW9udGgvZGF5XG4gICAgICA6IGRcblxuICBmb3IgKGNvbnN0IGtleSBpbiBtb2QpIHtcbiAgICBjb25zdCBvcCA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICAgIHRbIGBzZXQkeyBtaWRkbGUgfSR7IG9wIH1gIF0obW9kWyBrZXkgXSlcbiAgfVxuXG4gIHJldHVybiB0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0RGF0ZSAoc3RyLCBtYXNrLCBkYXRlTG9jYWxlKSB7XG4gIGNvbnN0IGQgPSBfX3NwbGl0RGF0ZShzdHIsIG1hc2ssIGRhdGVMb2NhbGUpXG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFxuICAgIGQueWVhcixcbiAgICBkLm1vbnRoID09PSBudWxsID8gbnVsbCA6IGQubW9udGggLSAxLFxuICAgIGQuZGF5ID09PSBudWxsID8gMSA6IGQuZGF5LFxuICAgIGQuaG91cixcbiAgICBkLm1pbnV0ZSxcbiAgICBkLnNlY29uZCxcbiAgICBkLm1pbGxpc2Vjb25kXG4gIClcblxuICBjb25zdCB0ek9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKVxuXG4gIHJldHVybiBkLnRpbWV6b25lT2Zmc2V0ID09PSBudWxsIHx8IGQudGltZXpvbmVPZmZzZXQgPT09IHR6T2Zmc2V0XG4gICAgPyBkYXRlXG4gICAgOiBnZXRDaGFuZ2UoZGF0ZSwgeyBtaW51dGVzOiBkLnRpbWV6b25lT2Zmc2V0IC0gdHpPZmZzZXQgfSwgMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3BsaXREYXRlIChzdHIsIG1hc2ssIGRhdGVMb2NhbGUsIGNhbGVuZGFyLCBkZWZhdWx0TW9kZWwpIHtcbiAgY29uc3QgZGF0ZSA9IHtcbiAgICB5ZWFyOiBudWxsLFxuICAgIG1vbnRoOiBudWxsLFxuICAgIGRheTogbnVsbCxcbiAgICBob3VyOiBudWxsLFxuICAgIG1pbnV0ZTogbnVsbCxcbiAgICBzZWNvbmQ6IG51bGwsXG4gICAgbWlsbGlzZWNvbmQ6IG51bGwsXG4gICAgdGltZXpvbmVPZmZzZXQ6IG51bGwsXG4gICAgZGF0ZUhhc2g6IG51bGwsXG4gICAgdGltZUhhc2g6IG51bGxcbiAgfVxuXG4gIGRlZmF1bHRNb2RlbCAhPT0gdm9pZCAwICYmIE9iamVjdC5hc3NpZ24oZGF0ZSwgZGVmYXVsdE1vZGVsKVxuXG4gIGlmIChcbiAgICBzdHIgPT09IHZvaWQgMFxuICAgIHx8IHN0ciA9PT0gbnVsbFxuICAgIHx8IHN0ciA9PT0gJydcbiAgICB8fCB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgaWYgKG1hc2sgPT09IHZvaWQgMCkge1xuICAgIG1hc2sgPSBkZWZhdWx0TWFza1xuICB9XG5cbiAgY29uc3RcbiAgICBsYW5nT3B0cyA9IGdldERhdGVMb2NhbGUoZGF0ZUxvY2FsZSwgbGFuZy5wcm9wcyksXG4gICAgbW9udGhzID0gbGFuZ09wdHMubW9udGhzLFxuICAgIG1vbnRoc1Nob3J0ID0gbGFuZ09wdHMubW9udGhzU2hvcnRcblxuICBjb25zdCB7IHJlZ2V4LCBtYXAgfSA9IGdldFJlZ2V4RGF0YShtYXNrLCBsYW5nT3B0cylcblxuICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaChyZWdleClcblxuICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgbGV0IHR6U3RyaW5nID0gJydcblxuICBpZiAobWFwLlggIT09IHZvaWQgMCB8fCBtYXAueCAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgc3RhbXAgPSBwYXJzZUludChtYXRjaFsgbWFwLlggIT09IHZvaWQgMCA/IG1hcC5YIDogbWFwLnggXSwgMTApXG5cbiAgICBpZiAoaXNOYU4oc3RhbXApID09PSB0cnVlIHx8IHN0YW1wIDwgMCkge1xuICAgICAgcmV0dXJuIGRhdGVcbiAgICB9XG5cbiAgICBjb25zdCBkID0gbmV3IERhdGUoc3RhbXAgKiAobWFwLlggIT09IHZvaWQgMCA/IDEwMDAgOiAxKSlcblxuICAgIGRhdGUueWVhciA9IGQuZ2V0RnVsbFllYXIoKVxuICAgIGRhdGUubW9udGggPSBkLmdldE1vbnRoKCkgKyAxXG4gICAgZGF0ZS5kYXkgPSBkLmdldERhdGUoKVxuICAgIGRhdGUuaG91ciA9IGQuZ2V0SG91cnMoKVxuICAgIGRhdGUubWludXRlID0gZC5nZXRNaW51dGVzKClcbiAgICBkYXRlLnNlY29uZCA9IGQuZ2V0U2Vjb25kcygpXG4gICAgZGF0ZS5taWxsaXNlY29uZCA9IGQuZ2V0TWlsbGlzZWNvbmRzKClcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAobWFwLllZWVkgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS55ZWFyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5ZWVlZIF0sIDEwKVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuWVkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KG1hdGNoWyBtYXAuWVkgXSwgMTApXG4gICAgICBkYXRlLnllYXIgPSB5IDwgMCA/IHkgOiAyMDAwICsgeVxuICAgIH1cblxuICAgIGlmIChtYXAuTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5NIF0sIDEwKVxuICAgICAgaWYgKGRhdGUubW9udGggPCAxIHx8IGRhdGUubW9udGggPiAxMikge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuTU1NICE9PSB2b2lkIDApIHtcbiAgICAgIGRhdGUubW9udGggPSBtb250aHNTaG9ydC5pbmRleE9mKG1hdGNoWyBtYXAuTU1NIF0pICsgMVxuICAgIH1cbiAgICBlbHNlIGlmIChtYXAuTU1NTSAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLm1vbnRoID0gbW9udGhzLmluZGV4T2YobWF0Y2hbIG1hcC5NTU1NIF0pICsgMVxuICAgIH1cblxuICAgIGlmIChtYXAuRCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmRheSA9IHBhcnNlSW50KG1hdGNoWyBtYXAuRCBdLCAxMClcblxuICAgICAgaWYgKGRhdGUueWVhciA9PT0gbnVsbCB8fCBkYXRlLm1vbnRoID09PSBudWxsIHx8IGRhdGUuZGF5IDwgMSkge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXhEYXkgPSBjYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgID8gKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgMCkpLmdldERhdGUoKVxuICAgICAgICA6IGphbGFhbGlNb250aExlbmd0aChkYXRlLnllYXIsIGRhdGUubW9udGgpXG5cbiAgICAgIGlmIChkYXRlLmRheSA+IG1heERheSkge1xuICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXAuSCAhPT0gdm9pZCAwKSB7XG4gICAgICBkYXRlLmhvdXIgPSBwYXJzZUludChtYXRjaFsgbWFwLkggXSwgMTApICUgMjRcbiAgICB9XG4gICAgZWxzZSBpZiAobWFwLmggIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5ob3VyID0gcGFyc2VJbnQobWF0Y2hbIG1hcC5oIF0sIDEwKSAlIDEyXG4gICAgICBpZiAoXG4gICAgICAgIChtYXAuQSAmJiBtYXRjaFsgbWFwLkEgXSA9PT0gJ1BNJylcbiAgICAgICAgfHwgKG1hcC5hICYmIG1hdGNoWyBtYXAuYSBdID09PSAncG0nKVxuICAgICAgICB8fCAobWFwLmFhICYmIG1hdGNoWyBtYXAuYWEgXSA9PT0gJ3AubS4nKVxuICAgICAgKSB7XG4gICAgICAgIGRhdGUuaG91ciArPSAxMlxuICAgICAgfVxuICAgICAgZGF0ZS5ob3VyID0gZGF0ZS5ob3VyICUgMjRcbiAgICB9XG5cbiAgICBpZiAobWFwLm0gIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5taW51dGUgPSBwYXJzZUludChtYXRjaFsgbWFwLm0gXSwgMTApICUgNjBcbiAgICB9XG5cbiAgICBpZiAobWFwLnMgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5zZWNvbmQgPSBwYXJzZUludChtYXRjaFsgbWFwLnMgXSwgMTApICUgNjBcbiAgICB9XG5cbiAgICBpZiAobWFwLlMgIT09IHZvaWQgMCkge1xuICAgICAgZGF0ZS5taWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoWyBtYXAuUyBdLCAxMCkgKiAxMCAqKiAoMyAtIG1hdGNoWyBtYXAuUyBdLmxlbmd0aClcbiAgICB9XG5cbiAgICBpZiAobWFwLlogIT09IHZvaWQgMCB8fCBtYXAuWlogIT09IHZvaWQgMCkge1xuICAgICAgdHpTdHJpbmcgPSAobWFwLlogIT09IHZvaWQgMCA/IG1hdGNoWyBtYXAuWiBdLnJlcGxhY2UoJzonLCAnJykgOiBtYXRjaFsgbWFwLlpaIF0pXG4gICAgICBkYXRlLnRpbWV6b25lT2Zmc2V0ID0gKHR6U3RyaW5nWyAwIF0gPT09ICcrJyA/IC0xIDogMSkgKiAoNjAgKiB0elN0cmluZy5zbGljZSgxLCAzKSArIDEgKiB0elN0cmluZy5zbGljZSgzLCA1KSlcbiAgICB9XG4gIH1cblxuICBkYXRlLmRhdGVIYXNoID0gcGFkKGRhdGUueWVhciwgNikgKyAnLycgKyBwYWQoZGF0ZS5tb250aCkgKyAnLycgKyBwYWQoZGF0ZS5kYXkpXG4gIGRhdGUudGltZUhhc2ggPSBwYWQoZGF0ZS5ob3VyKSArICc6JyArIHBhZChkYXRlLm1pbnV0ZSkgKyAnOicgKyBwYWQoZGF0ZS5zZWNvbmQpICsgdHpTdHJpbmdcblxuICByZXR1cm4gZGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZCAoZGF0ZSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInXG4gICAgPyB0cnVlXG4gICAgOiBpc05hTihEYXRlLnBhcnNlKGRhdGUpKSA9PT0gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRGF0ZSAobW9kLCB1dGMpIHtcbiAgcmV0dXJuIGFkanVzdERhdGUobmV3IERhdGUoKSwgbW9kLCB1dGMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsgKGRhdGUpIHtcbiAgY29uc3QgZG93ID0gbmV3IERhdGUoZGF0ZSkuZ2V0RGF5KClcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3dcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtPZlllYXIgKGRhdGUpIHtcbiAgLy8gUmVtb3ZlIHRpbWUgY29tcG9uZW50cyBvZiBkYXRlXG4gIGNvbnN0IHRodXJzZGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKVxuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICB0aHVyc2RheS5zZXREYXRlKHRodXJzZGF5LmdldERhdGUoKSAtICgodGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMylcblxuICAvLyBUYWtlIEphbnVhcnkgNHRoIGFzIGl0IGlzIGFsd2F5cyBpbiB3ZWVrIDEgKHNlZSBJU08gODYwMSlcbiAgY29uc3QgZmlyc3RUaHVyc2RheSA9IG5ldyBEYXRlKHRodXJzZGF5LmdldEZ1bGxZZWFyKCksIDAsIDQpXG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKSAtICgoZmlyc3RUaHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKVxuXG4gIC8vIENoZWNrIGlmIGRheWxpZ2h0LXNhdmluZy10aW1lLXN3aXRjaCBvY2N1cnJlZCBhbmQgY29ycmVjdCBmb3IgaXRcbiAgY29uc3QgZHMgPSB0aHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpIC0gZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpXG4gIHRodXJzZGF5LnNldEhvdXJzKHRodXJzZGF5LmdldEhvdXJzKCkgLSBkcylcblxuICAvLyBOdW1iZXIgb2Ygd2Vla3MgYmV0d2VlbiB0YXJnZXQgVGh1cnNkYXkgYW5kIGZpcnN0IFRodXJzZGF5XG4gIGNvbnN0IHdlZWtEaWZmID0gKHRodXJzZGF5IC0gZmlyc3RUaHVyc2RheSkgLyAoTUlMTElTRUNPTkRTX0lOX0RBWSAqIDcpXG4gIHJldHVybiAxICsgTWF0aC5mbG9vcih3ZWVrRGlmZilcbn1cblxuZnVuY3Rpb24gZ2V0RGF5SWRlbnRpZmllciAoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICogMTAwMDAgKyBkYXRlLmdldE1vbnRoKCkgKiAxMDAgKyBkYXRlLmdldERhdGUoKVxufVxuXG5mdW5jdGlvbiBnZXREYXRlSWRlbnRpZmllciAoZGF0ZSwgb25seURhdGUgLyogPSBmYWxzZSAqLykge1xuICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSlcbiAgcmV0dXJuIG9ubHlEYXRlID09PSB0cnVlID8gZ2V0RGF5SWRlbnRpZmllcihkKSA6IGQuZ2V0VGltZSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW5EYXRlcyAoZGF0ZSwgZnJvbSwgdG8sIG9wdHMgPSB7fSkge1xuICBjb25zdFxuICAgIGQxID0gZ2V0RGF0ZUlkZW50aWZpZXIoZnJvbSwgb3B0cy5vbmx5RGF0ZSksXG4gICAgZDIgPSBnZXREYXRlSWRlbnRpZmllcih0bywgb3B0cy5vbmx5RGF0ZSksXG4gICAgY3VyID0gZ2V0RGF0ZUlkZW50aWZpZXIoZGF0ZSwgb3B0cy5vbmx5RGF0ZSlcblxuICByZXR1cm4gKGN1ciA+IGQxIHx8IChvcHRzLmluY2x1c2l2ZUZyb20gPT09IHRydWUgJiYgY3VyID09PSBkMSkpXG4gICAgJiYgKGN1ciA8IGQyIHx8IChvcHRzLmluY2x1c2l2ZVRvID09PSB0cnVlICYmIGN1ciA9PT0gZDIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9EYXRlIChkYXRlLCBtb2QpIHtcbiAgcmV0dXJuIGdldENoYW5nZShkYXRlLCBtb2QsIDEpXG59XG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3RGcm9tRGF0ZSAoZGF0ZSwgbW9kKSB7XG4gIHJldHVybiBnZXRDaGFuZ2UoZGF0ZSwgbW9kLCAtMSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXRlIChkYXRlLCB1bml0LCB1dGMpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgcHJlZml4ID0gYHNldCR7IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycgfWBcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Nb250aGAgXSgwKVxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9RGF0ZWAgXSgxKVxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Ib3Vyc2AgXSgwKVxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbnV0ZXNgIF0oMClcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgdFsgYCR7IHByZWZpeCB9U2Vjb25kc2AgXSgwKVxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1NaWxsaXNlY29uZHNgIF0oMClcbiAgfVxuICByZXR1cm4gdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kT2ZEYXRlIChkYXRlLCB1bml0LCB1dGMpIHtcbiAgY29uc3RcbiAgICB0ID0gbmV3IERhdGUoZGF0ZSksXG4gICAgcHJlZml4ID0gYHNldCR7IHV0YyA9PT0gdHJ1ZSA/ICdVVEMnIDogJycgfWBcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgICB0WyBgJHsgcHJlZml4IH1Nb250aGAgXSgxMSlcbiAgICBjYXNlICdtb250aCc6XG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfURhdGVgIF0oZGF5c0luTW9udGgodCkpXG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfUhvdXJzYCBdKDIzKVxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbnV0ZXNgIF0oNTkpXG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfVNlY29uZHNgIF0oNTkpXG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHRbIGAkeyBwcmVmaXggfU1pbGxpc2Vjb25kc2AgXSg5OTkpXG4gIH1cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heERhdGUgKGRhdGUgLyogLCAuLi5hcmdzICovKSB7XG4gIGxldCB0ID0gbmV3IERhdGUoZGF0ZSlcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGQgPT4ge1xuICAgIHQgPSBNYXRoLm1heCh0LCBuZXcgRGF0ZShkKSlcbiAgfSlcbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbkRhdGUgKGRhdGUgLyosIC4uLmFyZ3MgKi8pIHtcbiAgbGV0IHQgPSBuZXcgRGF0ZShkYXRlKVxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLmZvckVhY2goZCA9PiB7XG4gICAgdCA9IE1hdGgubWluKHQsIG5ldyBEYXRlKGQpKVxuICB9KVxuICByZXR1cm4gdFxufVxuXG5mdW5jdGlvbiBnZXREaWZmICh0LCBzdWIsIGludGVydmFsKSB7XG4gIHJldHVybiAoXG4gICAgKHQuZ2V0VGltZSgpIC0gdC5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgICAtIChzdWIuZ2V0VGltZSgpIC0gc3ViLmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuICApIC8gaW50ZXJ2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVEaWZmIChkYXRlLCBzdWJ0cmFjdCwgdW5pdCA9ICdkYXlzJykge1xuICBjb25zdFxuICAgIHQgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICBzdWIgPSBuZXcgRGF0ZShzdWJ0cmFjdClcblxuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gKHQuZ2V0RnVsbFllYXIoKSAtIHN1Yi5nZXRGdWxsWWVhcigpKVxuXG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gKHQuZ2V0RnVsbFllYXIoKSAtIHN1Yi5nZXRGdWxsWWVhcigpKSAqIDEyICsgdC5nZXRNb250aCgpIC0gc3ViLmdldE1vbnRoKClcblxuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnZGF5JyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ2RheScpLCBNSUxMSVNFQ09ORFNfSU5fREFZKVxuXG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgICAgcmV0dXJuIGdldERpZmYoc3RhcnRPZkRhdGUodCwgJ2hvdXInKSwgc3RhcnRPZkRhdGUoc3ViLCAnaG91cicpLCBNSUxMSVNFQ09ORFNfSU5fSE9VUilcblxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICByZXR1cm4gZ2V0RGlmZihzdGFydE9mRGF0ZSh0LCAnbWludXRlJyksIHN0YXJ0T2ZEYXRlKHN1YiwgJ21pbnV0ZScpLCBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKVxuXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgIHJldHVybiBnZXREaWZmKHN0YXJ0T2ZEYXRlKHQsICdzZWNvbmQnKSwgc3RhcnRPZkRhdGUoc3ViLCAnc2Vjb25kJyksIDEwMDApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhciAoZGF0ZSkge1xuICByZXR1cm4gZ2V0RGF0ZURpZmYoZGF0ZSwgc3RhcnRPZkRhdGUoZGF0ZSwgJ3llYXInKSwgJ2RheXMnKSArIDFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZmVyRGF0ZUZvcm1hdCAoZGF0ZSkge1xuICByZXR1cm4gaXNEYXRlKGRhdGUpID09PSB0cnVlXG4gICAgPyAnZGF0ZSdcbiAgICA6ICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgPyAnbnVtYmVyJyA6ICdzdHJpbmcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZUJldHdlZW4gKGRhdGUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHQgPSBuZXcgRGF0ZShkYXRlKVxuXG4gIGlmIChtaW4pIHtcbiAgICBjb25zdCBsb3cgPSBuZXcgRGF0ZShtaW4pXG4gICAgaWYgKHQgPCBsb3cpIHtcbiAgICAgIHJldHVybiBsb3dcbiAgICB9XG4gIH1cblxuICBpZiAobWF4KSB7XG4gICAgY29uc3QgaGlnaCA9IG5ldyBEYXRlKG1heClcbiAgICBpZiAodCA+IGhpZ2gpIHtcbiAgICAgIHJldHVybiBoaWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURhdGUgKGRhdGUsIGRhdGUyLCB1bml0KSB7XG4gIGNvbnN0XG4gICAgdCA9IG5ldyBEYXRlKGRhdGUpLFxuICAgIGQgPSBuZXcgRGF0ZShkYXRlMilcblxuICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHQuZ2V0VGltZSgpID09PSBkLmdldFRpbWUoKVxuICB9XG5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIGlmICh0LmdldFNlY29uZHMoKSAhPT0gZC5nZXRTZWNvbmRzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnbWludXRlJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgICBpZiAodC5nZXRNaW51dGVzKCkgIT09IGQuZ2V0TWludXRlcygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ2hvdXInOiAvLyBpbnRlbnRpb25hbCBmYWxsLXRocm91Z2hcbiAgICBjYXNlICdob3Vycyc6XG4gICAgICBpZiAodC5nZXRIb3VycygpICE9PSBkLmdldEhvdXJzKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSAnZGF5JzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBpZiAodC5nZXREYXRlKCkgIT09IGQuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgJ21vbnRoJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAnbW9udGhzJzpcbiAgICAgIGlmICh0LmdldE1vbnRoKCkgIT09IGQuZ2V0TW9udGgoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICd5ZWFyJzogLy8gaW50ZW50aW9uYWwgZmFsbC10aHJvdWdoXG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgaWYgKHQuZ2V0RnVsbFllYXIoKSAhPT0gZC5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRlIGlzU2FtZURhdGUgdW5rbm93biB1bml0ICR7IHVuaXQgfWApXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGggKGRhdGUpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApKS5nZXREYXRlKClcbn1cblxuZnVuY3Rpb24gZ2V0T3JkaW5hbCAobikge1xuICBpZiAobiA+PSAxMSAmJiBuIDw9IDEzKSB7XG4gICAgcmV0dXJuIGAkeyBuIH10aGBcbiAgfVxuICBzd2l0Y2ggKG4gJSAxMCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGAkeyBuIH1zdGBcbiAgICBjYXNlIDI6IHJldHVybiBgJHsgbiB9bmRgXG4gICAgY2FzZSAzOiByZXR1cm4gYCR7IG4gfXJkYFxuICB9XG4gIHJldHVybiBgJHsgbiB9dGhgXG59XG5cbmNvbnN0IGZvcm1hdHRlciA9IHtcbiAgLy8gWWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gIFlZIChkYXRlLCBkYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgPCAxOTAwIHdpdGggbmV3IERhdGUoKVxuICAgIGNvbnN0IHkgPSB0aGlzLllZWVkoZGF0ZSwgZGF0ZUxvY2FsZSwgZm9yY2VkWWVhcikgJSAxMDBcbiAgICByZXR1cm4geSA+PSAwXG4gICAgICA/IHBhZCh5KVxuICAgICAgOiAnLScgKyBwYWQoTWF0aC5hYnMoeSkpXG4gIH0sXG5cbiAgLy8gWWVhcjogMTkwMCwgMTkwMSwgLi4uLCAyMDk5XG4gIFlZWVkgKGRhdGUsIF9kYXRlTG9jYWxlLCBmb3JjZWRZZWFyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgPCAxOTAwIHdpdGggbmV3IERhdGUoKVxuICAgIHJldHVybiBmb3JjZWRZZWFyICE9PSB2b2lkIDAgJiYgZm9yY2VkWWVhciAhPT0gbnVsbFxuICAgICAgPyBmb3JjZWRZZWFyXG4gICAgICA6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICB9LFxuXG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gIE0gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMVxuICB9LFxuXG4gIC8vIE1vbnRoOiAwMSwgMDIsIC4uLiwgMTJcbiAgTU0gKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gIH0sXG5cbiAgLy8gTW9udGggU2hvcnQgTmFtZTogSmFuLCBGZWIsIC4uLlxuICBNTU0gKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5tb250aHNTaG9ydFsgZGF0ZS5nZXRNb250aCgpIF1cbiAgfSxcblxuICAvLyBNb250aCBOYW1lOiBKYW51YXJ5LCBGZWJydWFyeSwgLi4uXG4gIE1NTU0gKGRhdGUsIGRhdGVMb2NhbGUpIHtcbiAgICByZXR1cm4gZGF0ZUxvY2FsZS5tb250aHNbIGRhdGUuZ2V0TW9udGgoKSBdXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMSwgMiwgMywgNFxuICBRIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKVxuICB9LFxuXG4gIC8vIFF1YXJ0ZXI6IDFzdCwgMm5kLCAzcmQsIDR0aFxuICBRbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKHRoaXMuUShkYXRlKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgbW9udGg6IDEsIDIsIC4uLiwgMzFcbiAgRCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERhdGUoKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMXN0LCAybmQsIC4uLiwgMzFzdFxuICBEbyAoZGF0ZSkge1xuICAgIHJldHVybiBnZXRPcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMDEsIDAyLCAuLi4sIDMxXG4gIEREIChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChkYXRlLmdldERhdGUoKSlcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhcjogMSwgMiwgLi4uLCAzNjZcbiAgREREIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAwMDEsIDAwMiwgLi4uLCAzNjZcbiAgRERERCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZ2V0RGF5T2ZZZWFyKGRhdGUpLCAzKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiAwLCAxLCAuLi4sIDZcbiAgZCAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldERheSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1LCBNbywgLi4uXG4gIGRkIChkYXRlLCBkYXRlTG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGRkZChkYXRlLCBkYXRlTG9jYWxlKS5zbGljZSgwLCAyKVxuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrOiBTdW4sIE1vbiwgLi4uXG4gIGRkZCAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiBkYXRlTG9jYWxlLmRheXNTaG9ydFsgZGF0ZS5nZXREYXkoKSBdXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IFN1bmRheSwgTW9uZGF5LCAuLi5cbiAgZGRkZCAoZGF0ZSwgZGF0ZUxvY2FsZSkge1xuICAgIHJldHVybiBkYXRlTG9jYWxlLmRheXNbIGRhdGUuZ2V0RGF5KCkgXVxuICB9LFxuXG4gIC8vIERheSBvZiBJU08gd2VlazogMSwgMiwgLi4uLCA3XG4gIEUgKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXkoKSB8fCA3XG4gIH0sXG5cbiAgLy8gV2VlayBvZiBZZWFyOiAxIDIgLi4uIDUyIDUzXG4gIHcgKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0V2Vla09mWWVhcihkYXRlKVxuICB9LFxuXG4gIC8vIFdlZWsgb2YgWWVhcjogMDEgMDIgLi4uIDUyIDUzXG4gIHd3IChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZChnZXRXZWVrT2ZZZWFyKGRhdGUpKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAsIDEsIC4uLiAyM1xuICBIIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAwLCAwMSwgLi4uLCAyM1xuICBISCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRIb3VycygpKVxuICB9LFxuXG4gIC8vIEhvdXI6IDEsIDIsIC4uLiwgMTJcbiAgaCAoZGF0ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gICAgcmV0dXJuIGhvdXJzID09PSAwXG4gICAgICA/IDEyXG4gICAgICA6IChob3VycyA+IDEyID8gaG91cnMgJSAxMiA6IGhvdXJzKVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICBoaCAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQodGhpcy5oKGRhdGUpKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMCwgMSwgLi4uLCA1OVxuICBtIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwMCwgMDEsIC4uLiwgNTlcbiAgbW0gKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0TWludXRlcygpKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICBzIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwMCwgMDEsIC4uLiwgNTlcbiAgc3MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKVxuICB9LFxuXG4gIC8vIDEvMTAgb2Ygc2Vjb25kOiAwLCAxLCAuLi4sIDlcbiAgUyAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDApXG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgU1MgKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkKE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSlcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZDogMDAwLCAwMDEsIC4uLiwgOTk5XG4gIFNTUyAoZGF0ZSkge1xuICAgIHJldHVybiBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMylcbiAgfSxcblxuICAvLyBNZXJpZGllbTogQU0sIFBNXG4gIEEgKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5IKGRhdGUpIDwgMTIgPyAnQU0nIDogJ1BNJ1xuICB9LFxuXG4gIC8vIE1lcmlkaWVtOiBhbSwgcG1cbiAgYSAoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLkgoZGF0ZSkgPCAxMiA/ICdhbScgOiAncG0nXG4gIH0sXG5cbiAgLy8gTWVyaWRpZW06IGEubS4sIHAubS5cbiAgYWEgKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5IKGRhdGUpIDwgMTIgPyAnYS5tLicgOiAncC5tLidcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDBcbiAgWiAoZGF0ZSwgX2RhdGVMb2NhbGUsIF9mb3JjZWRZZWFyLCBmb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IHZvaWQgMCB8fCBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gbnVsbFxuICAgICAgPyBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIDogZm9yY2VkVGltZXpvbmVPZmZzZXRcblxuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0ek9mZnNldCwgJzonKVxuICB9LFxuXG4gIC8vIFRpbWV6b25lOiAtMDEwMCwgKzAwMDAsIC4uLiArMTIwMFxuICBaWiAoZGF0ZSwgX2RhdGVMb2NhbGUsIF9mb3JjZWRZZWFyLCBmb3JjZWRUaW1lem9uZU9mZnNldCkge1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gZm9yY2VkVGltZXpvbmVPZmZzZXQgPT09IHZvaWQgMCB8fCBmb3JjZWRUaW1lem9uZU9mZnNldCA9PT0gbnVsbFxuICAgICAgPyBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgIDogZm9yY2VkVGltZXpvbmVPZmZzZXRcblxuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0ek9mZnNldClcbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwXG4gIFggKGRhdGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApXG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcDogNTEyOTY5NTIwOTAwXG4gIHggKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZSAodmFsLCBtYXNrLCBkYXRlTG9jYWxlLCBfX2ZvcmNlZFllYXIsIF9fZm9yY2VkVGltZXpvbmVPZmZzZXQpIHtcbiAgaWYgKFxuICAgICh2YWwgIT09IDAgJiYgIXZhbClcbiAgICB8fCB2YWwgPT09IEluZmluaXR5XG4gICAgfHwgdmFsID09PSAtSW5maW5pdHlcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsKVxuXG4gIGlmIChpc05hTihkYXRlKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG1hc2sgPT09IHZvaWQgMCkge1xuICAgIG1hc2sgPSBkZWZhdWx0TWFza1xuICB9XG5cbiAgY29uc3QgbG9jYWxlID0gZ2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlLCBsYW5nLnByb3BzKVxuXG4gIHJldHVybiBtYXNrLnJlcGxhY2UoXG4gICAgdG9rZW4sXG4gICAgKG1hdGNoLCB0ZXh0KSA9PiAoXG4gICAgICBtYXRjaCBpbiBmb3JtYXR0ZXJcbiAgICAgICAgPyBmb3JtYXR0ZXJbIG1hdGNoIF0oZGF0ZSwgbG9jYWxlLCBfX2ZvcmNlZFllYXIsIF9fZm9yY2VkVGltZXpvbmVPZmZzZXQpXG4gICAgICAgIDogKHRleHQgPT09IHZvaWQgMCA/IG1hdGNoIDogdGV4dC5zcGxpdCgnXFxcXF0nKS5qb2luKCddJykpXG4gICAgKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZSAoZGF0ZSkge1xuICByZXR1cm4gaXNEYXRlKGRhdGUpID09PSB0cnVlXG4gICAgPyBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSlcbiAgICA6IGRhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1ZhbGlkLFxuICBleHRyYWN0RGF0ZSxcbiAgYnVpbGREYXRlLFxuICBnZXREYXlPZldlZWssXG4gIGdldFdlZWtPZlllYXIsXG4gIGlzQmV0d2VlbkRhdGVzLFxuICBhZGRUb0RhdGUsXG4gIHN1YnRyYWN0RnJvbURhdGUsXG4gIGFkanVzdERhdGUsXG4gIHN0YXJ0T2ZEYXRlLFxuICBlbmRPZkRhdGUsXG4gIGdldE1heERhdGUsXG4gIGdldE1pbkRhdGUsXG4gIGdldERhdGVEaWZmLFxuICBnZXREYXlPZlllYXIsXG4gIGluZmVyRGF0ZUZvcm1hdCxcbiAgZ2V0RGF0ZUJldHdlZW4sXG4gIGlzU2FtZURhdGUsXG4gIGRheXNJbk1vbnRoLFxuICBmb3JtYXREYXRlLFxuICBjbG9uZVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIFRyYW5zaXRpb24sIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZUNhY2hlIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhY2hlLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtQXR0cnMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuaW1wb3J0IHVzZURhdGV0aW1lLCB7IHVzZURhdGV0aW1lUHJvcHMsIHVzZURhdGV0aW1lRW1pdHMsIGdldERheUhhc2ggfSBmcm9tICcuL3VzZS1kYXRldGltZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgX19zcGxpdERhdGUsIGdldERhdGVEaWZmIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0ZS5qcydcbmltcG9ydCB7IHBhZCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGphbGFhbGlNb250aExlbmd0aCwgdG9HcmVnb3JpYW4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2RhdGUtcGVyc2lhbi5qcydcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmNvbnN0IHllYXJzSW50ZXJ2YWwgPSAyMFxuY29uc3Qgdmlld3MgPSBbICdDYWxlbmRhcicsICdZZWFycycsICdNb250aHMnIF1cbmNvbnN0IHZpZXdJc1ZhbGlkID0gdiA9PiB2aWV3cy5pbmNsdWRlcyh2KVxuY29uc3QgeWVhck1vbnRoVmFsaWRhdG9yID0gdiA9PiAvXi0/W1xcZF0rXFwvWzAtMV1cXGQkLy50ZXN0KHYpXG5jb25zdCBsaW5lU3RyID0gJyBcXHUyMDE0ICdcblxuZnVuY3Rpb24gZ2V0TW9udGhIYXNoIChkYXRlKSB7XG4gIHJldHVybiBkYXRlLnllYXIgKyAnLycgKyBwYWQoZGF0ZS5tb250aClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FEYXRlJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhdGV0aW1lUHJvcHMsXG4gICAgLi4udXNlRm9ybVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuICAgIHJhbmdlOiBCb29sZWFuLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBzdWJ0aXRsZTogU3RyaW5nLFxuXG4gICAgbWFzazoge1xuICAgICAgLy8gdGhpcyBtYXNrIGlzIGZvcmNlZFxuICAgICAgLy8gd2hlbiB1c2luZyBwZXJzaWFuIGNhbGVuZGFyXG4gICAgICBkZWZhdWx0OiAnWVlZWS9NTS9ERCdcbiAgICB9LFxuXG4gICAgZGVmYXVsdFllYXJNb250aDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB5ZWFyTW9udGhWYWxpZGF0b3JcbiAgICB9LFxuXG4gICAgeWVhcnNJbk1vbnRoVmlldzogQm9vbGVhbixcblxuICAgIGV2ZW50czogWyBBcnJheSwgRnVuY3Rpb24gXSxcbiAgICBldmVudENvbG9yOiBbIFN0cmluZywgRnVuY3Rpb24gXSxcblxuICAgIGVtaXRJbW1lZGlhdGVseTogQm9vbGVhbixcblxuICAgIG9wdGlvbnM6IFsgQXJyYXksIEZ1bmN0aW9uIF0sXG5cbiAgICBuYXZpZ2F0aW9uTWluWWVhck1vbnRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHllYXJNb250aFZhbGlkYXRvclxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uTWF4WWVhck1vbnRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHllYXJNb250aFZhbGlkYXRvclxuICAgIH0sXG5cbiAgICBub1Vuc2V0OiBCb29sZWFuLFxuXG4gICAgZmlyc3REYXlPZldlZWs6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICB0b2RheUJ0bjogQm9vbGVhbixcbiAgICBtaW5pbWFsOiBCb29sZWFuLFxuICAgIGRlZmF1bHRWaWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnQ2FsZW5kYXInLFxuICAgICAgdmFsaWRhdG9yOiB2aWV3SXNWYWxpZFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZURhdGV0aW1lRW1pdHMsXG4gICAgJ3JhbmdlU3RhcnQnLCAncmFuZ2VFbmQnLCAnbmF2aWdhdGlvbidcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgZ2V0Q2FjaGUgfSA9IHVzZUNhY2hlKClcbiAgICBjb25zdCB7IHRhYmluZGV4LCBoZWFkZXJDbGFzcywgZ2V0TG9jYWxlLCBnZXRDdXJyZW50RGF0ZSB9ID0gdXNlRGF0ZXRpbWUocHJvcHMsICRxKVxuXG4gICAgbGV0IGxhc3RFbWl0VmFsdWVcblxuICAgIGNvbnN0IGZvcm1BdHRycyA9IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICAgIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBpbm5lck1hc2sgPSByZWYoZ2V0TWFzaygpKVxuICAgIGNvbnN0IGlubmVyTG9jYWxlID0gcmVmKGdldExvY2FsZSgpKVxuXG4gICAgY29uc3QgbWFzayA9IGNvbXB1dGVkKCgpID0+IGdldE1hc2soKSlcbiAgICBjb25zdCBsb2NhbGUgPSBjb21wdXRlZCgoKSA9PiBnZXRMb2NhbGUoKSlcblxuICAgIGNvbnN0IHRvZGF5ID0gY29tcHV0ZWQoKCkgPT4gZ2V0Q3VycmVudERhdGUoKSlcblxuICAgIC8vIG1vZGVsIG9mIGN1cnJlbnQgY2FsZW5kYXIgdmlldzpcbiAgICBjb25zdCB2aWV3TW9kZWwgPSByZWYoZ2V0Vmlld01vZGVsKGlubmVyTWFzay52YWx1ZSwgaW5uZXJMb2NhbGUudmFsdWUpKVxuXG4gICAgY29uc3QgdmlldyA9IHJlZihwcm9wcy5kZWZhdWx0VmlldylcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgIGNvbnN0IG1vbnRoRGlyZWN0aW9uID0gcmVmKGRpcmVjdGlvbi52YWx1ZSlcbiAgICBjb25zdCB5ZWFyRGlyZWN0aW9uID0gcmVmKGRpcmVjdGlvbi52YWx1ZSlcblxuICAgIGNvbnN0IHllYXIgPSB2aWV3TW9kZWwudmFsdWUueWVhclxuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHJlZih5ZWFyIC0gKHllYXIgJSB5ZWFyc0ludGVydmFsKSAtICh5ZWFyIDwgMCA/IHllYXJzSW50ZXJ2YWwgOiAwKSlcbiAgICBjb25zdCBlZGl0UmFuZ2UgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gcHJvcHMubGFuZHNjYXBlID09PSB0cnVlID8gJ2xhbmRzY2FwZScgOiAncG9ydHJhaXQnXG4gICAgICByZXR1cm4gYHEtZGF0ZSBxLWRhdGUtLSR7IHR5cGUgfSBxLWRhdGUtLSR7IHR5cGUgfS0keyBwcm9wcy5taW5pbWFsID09PSB0cnVlID8gJ21pbmltYWwnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtZGF0ZS0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWRhdGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtZGF0ZS0tc3F1YXJlIG5vLWJvcmRlci1yYWRpdXMnIDogJycpXG4gICAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtZGF0ZS0tZmxhdCBuby1zaGFkb3cnIDogJycpXG4gICAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6IChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSA/ICcgcS1kYXRlLS1yZWFkb25seScgOiAnJykpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXB1dGVkQ29sb3IgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gcHJvcHMuY29sb3IgfHwgJ3ByaW1hcnknXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXB1dGVkVGV4dENvbG9yID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb3BzLnRleHRDb2xvciB8fCAnd2hpdGUnXG4gICAgfSlcblxuICAgIGNvbnN0IGlzSW1tZWRpYXRlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmVtaXRJbW1lZGlhdGVseSA9PT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnJhbmdlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3Qgbm9ybWFsaXplZE1vZGVsID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgOiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSB2b2lkIDAgPyBbIHByb3BzLm1vZGVsVmFsdWUgXSA6IFtdKVxuICAgICkpXG5cbiAgICBjb25zdCBkYXlzTW9kZWwgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgbm9ybWFsaXplZE1vZGVsLnZhbHVlXG4gICAgICAgIC5maWx0ZXIoZGF0ZSA9PiB0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIC5tYXAoZGF0ZSA9PiBkZWNvZGVTdHJpbmcoZGF0ZSwgaW5uZXJNYXNrLnZhbHVlLCBpbm5lckxvY2FsZS52YWx1ZSkpXG4gICAgICAgIC5maWx0ZXIoZGF0ZSA9PlxuICAgICAgICAgIGRhdGUuZGF0ZUhhc2ggIT09IG51bGxcbiAgICAgICAgICAmJiBkYXRlLmRheSAhPT0gbnVsbFxuICAgICAgICAgICYmIGRhdGUubW9udGggIT09IG51bGxcbiAgICAgICAgICAmJiBkYXRlLnllYXIgIT09IG51bGxcbiAgICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHJhbmdlTW9kZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBmbiA9IGRhdGUgPT4gZGVjb2RlU3RyaW5nKGRhdGUsIGlubmVyTWFzay52YWx1ZSwgaW5uZXJMb2NhbGUudmFsdWUpXG4gICAgICByZXR1cm4gbm9ybWFsaXplZE1vZGVsLnZhbHVlXG4gICAgICAgIC5maWx0ZXIoZGF0ZSA9PiBpc09iamVjdChkYXRlKSA9PT0gdHJ1ZSAmJiBkYXRlLmZyb20gIT09IHZvaWQgMCAmJiBkYXRlLnRvICE9PSB2b2lkIDApXG4gICAgICAgIC5tYXAocmFuZ2UgPT4gKHsgZnJvbTogZm4ocmFuZ2UuZnJvbSksIHRvOiBmbihyYW5nZS50bykgfSkpXG4gICAgICAgIC5maWx0ZXIocmFuZ2UgPT4gcmFuZ2UuZnJvbS5kYXRlSGFzaCAhPT0gbnVsbCAmJiByYW5nZS50by5kYXRlSGFzaCAhPT0gbnVsbCAmJiByYW5nZS5mcm9tLmRhdGVIYXNoIDwgcmFuZ2UudG8uZGF0ZUhhc2gpXG4gICAgfSlcblxuICAgIGNvbnN0IGdldE5hdGl2ZURhdGVGbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgPyBtb2RlbCA9PiBuZXcgRGF0ZShtb2RlbC55ZWFyLCBtb2RlbC5tb250aCAtIDEsIG1vZGVsLmRheSlcbiAgICAgICAgOiBtb2RlbCA9PiB7XG4gICAgICAgICAgY29uc3QgZ0RhdGUgPSB0b0dyZWdvcmlhbihtb2RlbC55ZWFyLCBtb2RlbC5tb250aCwgbW9kZWwuZGF5KVxuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShnRGF0ZS5neSwgZ0RhdGUuZ20gLSAxLCBnRGF0ZS5nZClcbiAgICAgICAgfVxuICAgICkpXG5cbiAgICBjb25zdCBlbmNvZGVPYmplY3RGbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNhbGVuZGFyID09PSAncGVyc2lhbidcbiAgICAgICAgPyBnZXREYXlIYXNoXG4gICAgICAgIDogKGRhdGUsIG1hc2ssIGxvY2FsZSkgPT4gZm9ybWF0RGF0ZShcbiAgICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgICBkYXRlLnllYXIsXG4gICAgICAgICAgICAgIGRhdGUubW9udGggLSAxLFxuICAgICAgICAgICAgICBkYXRlLmRheSxcbiAgICAgICAgICAgICAgZGF0ZS5ob3VyLFxuICAgICAgICAgICAgICBkYXRlLm1pbnV0ZSxcbiAgICAgICAgICAgICAgZGF0ZS5zZWNvbmQsXG4gICAgICAgICAgICAgIGRhdGUubWlsbGlzZWNvbmRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXNrID09PSB2b2lkIDAgPyBpbm5lck1hc2sudmFsdWUgOiBtYXNrLFxuICAgICAgICAgICAgbG9jYWxlID09PSB2b2lkIDAgPyBpbm5lckxvY2FsZS52YWx1ZSA6IGxvY2FsZSxcbiAgICAgICAgICAgIGRhdGUueWVhcixcbiAgICAgICAgICAgIGRhdGUudGltZXpvbmVPZmZzZXRcbiAgICAgICAgICApXG4gICAgKSlcblxuICAgIGNvbnN0IGRheXNJbk1vZGVsID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGRheXNNb2RlbC52YWx1ZS5sZW5ndGggKyByYW5nZU1vZGVsLnZhbHVlLnJlZHVjZShcbiAgICAgICAgKGFjYywgcmFuZ2UpID0+IGFjYyArIDEgKyBnZXREYXRlRGlmZihcbiAgICAgICAgICBnZXROYXRpdmVEYXRlRm4udmFsdWUocmFuZ2UudG8pLFxuICAgICAgICAgIGdldE5hdGl2ZURhdGVGbi52YWx1ZShyYW5nZS5mcm9tKVxuICAgICAgICApLFxuICAgICAgICAwXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgaGVhZGVyVGl0bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMudGl0bGUgIT09IHZvaWQgMCAmJiBwcm9wcy50aXRsZSAhPT0gbnVsbCAmJiBwcm9wcy50aXRsZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLnRpdGxlXG4gICAgICB9XG5cbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBlZGl0UmFuZ2UudmFsdWUuaW5pdFxuICAgICAgICBjb25zdCBkYXRlID0gZ2V0TmF0aXZlRGF0ZUZuLnZhbHVlKG1vZGVsKVxuXG4gICAgICAgIHJldHVybiBpbm5lckxvY2FsZS52YWx1ZS5kYXlzU2hvcnRbIGRhdGUuZ2V0RGF5KCkgXSArICcsICdcbiAgICAgICAgICArIGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0WyBtb2RlbC5tb250aCAtIDEgXSArICcgJ1xuICAgICAgICAgICsgbW9kZWwuZGF5ICsgbGluZVN0ciArICc/J1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5c0luTW9kZWwudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxpbmVTdHJcbiAgICAgIH1cblxuICAgICAgaWYgKGRheXNJbk1vZGVsLnZhbHVlID4gMSkge1xuICAgICAgICByZXR1cm4gYCR7IGRheXNJbk1vZGVsLnZhbHVlIH0gJHsgaW5uZXJMb2NhbGUudmFsdWUucGx1cmFsRGF5IH1gXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZGVsID0gZGF5c01vZGVsLnZhbHVlWyAwIF1cbiAgICAgIGNvbnN0IGRhdGUgPSBnZXROYXRpdmVEYXRlRm4udmFsdWUobW9kZWwpXG5cbiAgICAgIGlmIChpc05hTihkYXRlLnZhbHVlT2YoKSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGxpbmVTdHJcbiAgICAgIH1cblxuICAgICAgaWYgKGlubmVyTG9jYWxlLnZhbHVlLmhlYWRlclRpdGxlICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGlubmVyTG9jYWxlLnZhbHVlLmhlYWRlclRpdGxlKGRhdGUsIG1vZGVsKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5uZXJMb2NhbGUudmFsdWUuZGF5c1Nob3J0WyBkYXRlLmdldERheSgpIF0gKyAnLCAnXG4gICAgICAgICsgaW5uZXJMb2NhbGUudmFsdWUubW9udGhzU2hvcnRbIG1vZGVsLm1vbnRoIC0gMSBdICsgJyAnXG4gICAgICAgICsgbW9kZWwuZGF5XG4gICAgfSlcblxuICAgIGNvbnN0IG1pblNlbGVjdGVkTW9kZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZS5jb25jYXQocmFuZ2VNb2RlbC52YWx1ZS5tYXAocmFuZ2UgPT4gcmFuZ2UuZnJvbSkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnllYXIgLSBiLnllYXIgfHwgYS5tb250aCAtIGIubW9udGgpXG5cbiAgICAgIHJldHVybiBtb2RlbFsgMCBdXG4gICAgfSlcblxuICAgIGNvbnN0IG1heFNlbGVjdGVkTW9kZWwgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtb2RlbCA9IGRheXNNb2RlbC52YWx1ZS5jb25jYXQocmFuZ2VNb2RlbC52YWx1ZS5tYXAocmFuZ2UgPT4gcmFuZ2UudG8pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi55ZWFyIC0gYS55ZWFyIHx8IGIubW9udGggLSBhLm1vbnRoKVxuXG4gICAgICByZXR1cm4gbW9kZWxbIDAgXVxuICAgIH0pXG5cbiAgICBjb25zdCBoZWFkZXJTdWJ0aXRsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5zdWJ0aXRsZSAhPT0gdm9pZCAwICYmIHByb3BzLnN1YnRpdGxlICE9PSBudWxsICYmIHByb3BzLnN1YnRpdGxlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcHJvcHMuc3VidGl0bGVcbiAgICAgIH1cblxuICAgICAgaWYgKGRheXNJbk1vZGVsLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXlzSW5Nb2RlbC52YWx1ZSA+IDEpIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IG1pblNlbGVjdGVkTW9kZWwudmFsdWVcbiAgICAgICAgY29uc3QgdG8gPSBtYXhTZWxlY3RlZE1vZGVsLnZhbHVlXG4gICAgICAgIGNvbnN0IG1vbnRoID0gaW5uZXJMb2NhbGUudmFsdWUubW9udGhzU2hvcnRcblxuICAgICAgICByZXR1cm4gbW9udGhbIGZyb20ubW9udGggLSAxIF0gKyAoXG4gICAgICAgICAgZnJvbS55ZWFyICE9PSB0by55ZWFyXG4gICAgICAgICAgICA/ICcgJyArIGZyb20ueWVhciArIGxpbmVTdHIgKyBtb250aFsgdG8ubW9udGggLSAxIF0gKyAnICdcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIGZyb20ubW9udGggIT09IHRvLm1vbnRoXG4gICAgICAgICAgICAgICAgICA/IGxpbmVTdHIgKyBtb250aFsgdG8ubW9udGggLSAxIF1cbiAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgKVxuICAgICAgICApICsgJyAnICsgdG8ueWVhclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF5c01vZGVsLnZhbHVlWyAwIF0ueWVhclxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRlQXJyb3cgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBbICRxLmljb25TZXQuZGF0ZXRpbWUuYXJyb3dMZWZ0LCAkcS5pY29uU2V0LmRhdGV0aW1lLmFycm93UmlnaHQgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gdmFsLnJldmVyc2UoKSA6IHZhbFxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wdXRlZEZpcnN0RGF5T2ZXZWVrID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZmlyc3REYXlPZldlZWsgIT09IHZvaWQgMFxuICAgICAgICA/IE51bWJlcihwcm9wcy5maXJzdERheU9mV2VlaylcbiAgICAgICAgOiBpbm5lckxvY2FsZS52YWx1ZS5maXJzdERheU9mV2Vla1xuICAgICkpXG5cbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgZGF5cyA9IGlubmVyTG9jYWxlLnZhbHVlLmRheXNTaG9ydCxcbiAgICAgICAgZmlyc3QgPSBjb21wdXRlZEZpcnN0RGF5T2ZXZWVrLnZhbHVlXG5cbiAgICAgIHJldHVybiBmaXJzdCA+IDBcbiAgICAgICAgPyBkYXlzLnNsaWNlKGZpcnN0LCA3KS5jb25jYXQoZGF5cy5zbGljZSgwLCBmaXJzdCkpXG4gICAgICAgIDogZGF5c1xuICAgIH0pXG5cbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSB2aWV3TW9kZWwudmFsdWVcbiAgICAgIHJldHVybiBwcm9wcy5jYWxlbmRhciAhPT0gJ3BlcnNpYW4nXG4gICAgICAgID8gKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgMCkpLmdldERhdGUoKVxuICAgICAgICA6IGphbGFhbGlNb250aExlbmd0aChkYXRlLnllYXIsIGRhdGUubW9udGgpXG4gICAgfSlcblxuICAgIGNvbnN0IGV2dENvbG9yID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLmV2ZW50Q29sb3IgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5ldmVudENvbG9yXG4gICAgICAgIDogKCkgPT4gcHJvcHMuZXZlbnRDb2xvclxuICAgICkpXG5cbiAgICBjb25zdCBtaW5OYXYgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubmF2aWdhdGlvbk1pblllYXJNb250aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5uYXZpZ2F0aW9uTWluWWVhck1vbnRoLnNwbGl0KCcvJylcbiAgICAgIHJldHVybiB7IHllYXI6IHBhcnNlSW50KGRhdGFbIDAgXSwgMTApLCBtb250aDogcGFyc2VJbnQoZGF0YVsgMSBdLCAxMCkgfVxuICAgIH0pXG5cbiAgICBjb25zdCBtYXhOYXYgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubmF2aWdhdGlvbk1heFllYXJNb250aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5uYXZpZ2F0aW9uTWF4WWVhck1vbnRoLnNwbGl0KCcvJylcbiAgICAgIHJldHVybiB7IHllYXI6IHBhcnNlSW50KGRhdGFbIDAgXSwgMTApLCBtb250aDogcGFyc2VJbnQoZGF0YVsgMSBdLCAxMCkgfVxuICAgIH0pXG5cbiAgICBjb25zdCBuYXZCb3VuZGFyaWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbW9udGg6IHsgcHJldjogdHJ1ZSwgbmV4dDogdHJ1ZSB9LFxuICAgICAgICB5ZWFyOiB7IHByZXY6IHRydWUsIG5leHQ6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWluTmF2LnZhbHVlICE9PSBudWxsICYmIG1pbk5hdi52YWx1ZS55ZWFyID49IHZpZXdNb2RlbC52YWx1ZS55ZWFyKSB7XG4gICAgICAgIGRhdGEueWVhci5wcmV2ID0gZmFsc2VcbiAgICAgICAgaWYgKG1pbk5hdi52YWx1ZS55ZWFyID09PSB2aWV3TW9kZWwudmFsdWUueWVhciAmJiBtaW5OYXYudmFsdWUubW9udGggPj0gdmlld01vZGVsLnZhbHVlLm1vbnRoKSB7XG4gICAgICAgICAgZGF0YS5tb250aC5wcmV2ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF4TmF2LnZhbHVlICE9PSBudWxsICYmIG1heE5hdi52YWx1ZS55ZWFyIDw9IHZpZXdNb2RlbC52YWx1ZS55ZWFyKSB7XG4gICAgICAgIGRhdGEueWVhci5uZXh0ID0gZmFsc2VcbiAgICAgICAgaWYgKG1heE5hdi52YWx1ZS55ZWFyID09PSB2aWV3TW9kZWwudmFsdWUueWVhciAmJiBtYXhOYXYudmFsdWUubW9udGggPD0gdmlld01vZGVsLnZhbHVlLm1vbnRoKSB7XG4gICAgICAgICAgZGF0YS5tb250aC5uZXh0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXlzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgZGF5c01vZGVsLnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBjb25zdCBoYXNoID0gZ2V0TW9udGhIYXNoKGVudHJ5KVxuXG4gICAgICAgIGlmIChtYXBbIGhhc2ggXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgbWFwWyBoYXNoIF0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwWyBoYXNoIF0ucHVzaChlbnRyeS5kYXkpXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWFwXG4gICAgfSlcblxuICAgIGNvbnN0IHJhbmdlTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgcmFuZ2VNb2RlbC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgY29uc3QgaGFzaEZyb20gPSBnZXRNb250aEhhc2goZW50cnkuZnJvbSlcbiAgICAgICAgY29uc3QgaGFzaFRvID0gZ2V0TW9udGhIYXNoKGVudHJ5LnRvKVxuXG4gICAgICAgIGlmIChtYXBbIGhhc2hGcm9tIF0gPT09IHZvaWQgMCkge1xuICAgICAgICAgIG1hcFsgaGFzaEZyb20gXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtYXBbIGhhc2hGcm9tIF0ucHVzaCh7XG4gICAgICAgICAgZnJvbTogZW50cnkuZnJvbS5kYXksXG4gICAgICAgICAgdG86IGhhc2hGcm9tID09PSBoYXNoVG8gPyBlbnRyeS50by5kYXkgOiB2b2lkIDAsXG4gICAgICAgICAgcmFuZ2U6IGVudHJ5XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGhhc2hGcm9tIDwgaGFzaFRvKSB7XG4gICAgICAgICAgbGV0IGhhc2hcbiAgICAgICAgICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBlbnRyeS5mcm9tXG4gICAgICAgICAgY29uc3QgY3VyID0gbW9udGggPCAxMlxuICAgICAgICAgICAgPyB7IHllYXIsIG1vbnRoOiBtb250aCArIDEgfVxuICAgICAgICAgICAgOiB7IHllYXI6IHllYXIgKyAxLCBtb250aDogMSB9XG5cbiAgICAgICAgICB3aGlsZSAoKGhhc2ggPSBnZXRNb250aEhhc2goY3VyKSkgPD0gaGFzaFRvKSB7XG4gICAgICAgICAgICBpZiAobWFwWyBoYXNoIF0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBtYXBbIGhhc2ggXSA9IFtdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hcFsgaGFzaCBdLnB1c2goe1xuICAgICAgICAgICAgICBmcm9tOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHRvOiBoYXNoID09PSBoYXNoVG8gPyBlbnRyeS50by5kYXkgOiB2b2lkIDAsXG4gICAgICAgICAgICAgIHJhbmdlOiBlbnRyeVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY3VyLm1vbnRoKytcbiAgICAgICAgICAgIGlmIChjdXIubW9udGggPiAxMikge1xuICAgICAgICAgICAgICBjdXIueWVhcisrXG4gICAgICAgICAgICAgIGN1ci5tb250aCA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3QgcmFuZ2VWaWV3ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKGVkaXRSYW5nZS52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpbml0LCBpbml0SGFzaCwgZmluYWwsIGZpbmFsSGFzaCB9ID0gZWRpdFJhbmdlLnZhbHVlXG5cbiAgICAgIGNvbnN0IFsgZnJvbSwgdG8gXSA9IGluaXRIYXNoIDw9IGZpbmFsSGFzaFxuICAgICAgICA/IFsgaW5pdCwgZmluYWwgXVxuICAgICAgICA6IFsgZmluYWwsIGluaXQgXVxuXG4gICAgICBjb25zdCBmcm9tSGFzaCA9IGdldE1vbnRoSGFzaChmcm9tKVxuICAgICAgY29uc3QgdG9IYXNoID0gZ2V0TW9udGhIYXNoKHRvKVxuXG4gICAgICBpZiAoZnJvbUhhc2ggIT09IHZpZXdNb250aEhhc2gudmFsdWUgJiYgdG9IYXNoICE9PSB2aWV3TW9udGhIYXNoLnZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB2aWV3ID0ge31cblxuICAgICAgaWYgKGZyb21IYXNoID09PSB2aWV3TW9udGhIYXNoLnZhbHVlKSB7XG4gICAgICAgIHZpZXcuZnJvbSA9IGZyb20uZGF5XG4gICAgICAgIHZpZXcuaW5jbHVkZUZyb20gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy5mcm9tID0gMVxuICAgICAgfVxuXG4gICAgICBpZiAodG9IYXNoID09PSB2aWV3TW9udGhIYXNoLnZhbHVlKSB7XG4gICAgICAgIHZpZXcudG8gPSB0by5kYXlcbiAgICAgICAgdmlldy5pbmNsdWRlVG8gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmlldy50byA9IGRheXNJbk1vbnRoLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2aWV3XG4gICAgfSlcblxuICAgIGNvbnN0IHZpZXdNb250aEhhc2ggPSBjb21wdXRlZCgoKSA9PiBnZXRNb250aEhhc2godmlld01vZGVsLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkRheXNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBtYXAgPSB7fVxuXG4gICAgICBpZiAocHJvcHMub3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgICBtYXBbIGkgXSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXBcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm4gPSB0eXBlb2YgcHJvcHMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLm9wdGlvbnNcbiAgICAgICAgOiBkYXRlID0+IHByb3BzLm9wdGlvbnMuaW5jbHVkZXMoZGF0ZSlcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gZGF5c0luTW9udGgudmFsdWU7IGkrKykge1xuICAgICAgICBjb25zdCBkYXlIYXNoID0gdmlld01vbnRoSGFzaC52YWx1ZSArICcvJyArIHBhZChpKVxuICAgICAgICBtYXBbIGkgXSA9IGZuKGRheUhhc2gpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXBcbiAgICB9KVxuXG4gICAgY29uc3QgZXZlbnREYXlzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgbWFwID0ge31cblxuICAgICAgaWYgKHByb3BzLmV2ZW50cyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNJbk1vbnRoLnZhbHVlOyBpKyspIHtcbiAgICAgICAgICBtYXBbIGkgXSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmbiA9IHR5cGVvZiBwcm9wcy5ldmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHByb3BzLmV2ZW50c1xuICAgICAgICAgIDogZGF0ZSA9PiBwcm9wcy5ldmVudHMuaW5jbHVkZXMoZGF0ZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZGF5SGFzaCA9IHZpZXdNb250aEhhc2gudmFsdWUgKyAnLycgKyBwYWQoaSlcbiAgICAgICAgICBtYXBbIGkgXSA9IGZuKGRheUhhc2gpID09PSB0cnVlICYmIGV2dENvbG9yLnZhbHVlKGRheUhhc2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hcFxuICAgIH0pXG5cbiAgICBjb25zdCB2aWV3RGF5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCBkYXRlLCBlbmREYXlcbiAgICAgIGNvbnN0IHsgeWVhciwgbW9udGggfSA9IHZpZXdNb2RlbC52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuY2FsZW5kYXIgIT09ICdwZXJzaWFuJykge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKVxuICAgICAgICBlbmREYXkgPSAobmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAwKSkuZ2V0RGF0ZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZ0RhdGUgPSB0b0dyZWdvcmlhbih5ZWFyLCBtb250aCwgMSlcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGdEYXRlLmd5LCBnRGF0ZS5nbSAtIDEsIGdEYXRlLmdkKVxuICAgICAgICBsZXQgcHJldkpNID0gbW9udGggLSAxXG4gICAgICAgIGxldCBwcmV2SlkgPSB5ZWFyXG4gICAgICAgIGlmIChwcmV2Sk0gPT09IDApIHtcbiAgICAgICAgICBwcmV2Sk0gPSAxMlxuICAgICAgICAgIHByZXZKWS0tXG4gICAgICAgIH1cbiAgICAgICAgZW5kRGF5ID0gamFsYWFsaU1vbnRoTGVuZ3RoKHByZXZKWSwgcHJldkpNKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXlzOiBkYXRlLmdldERheSgpIC0gY29tcHV0ZWRGaXJzdERheU9mV2Vlay52YWx1ZSAtIDEsXG4gICAgICAgIGVuZERheVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBkYXlzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gW11cbiAgICAgIGNvbnN0IHsgZGF5cywgZW5kRGF5IH0gPSB2aWV3RGF5cy52YWx1ZVxuXG4gICAgICBjb25zdCBsZW4gPSBkYXlzIDwgMCA/IGRheXMgKyA3IDogZGF5c1xuICAgICAgaWYgKGxlbiA8IDYpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVuZERheSAtIGxlbjsgaSA8PSBlbmREYXk7IGkrKykge1xuICAgICAgICAgIHJlcy5wdXNoKHsgaSwgZmlsbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzLmxlbmd0aFxuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkYXlzSW5Nb250aC52YWx1ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IHsgaSwgZXZlbnQ6IGV2ZW50RGF5c01hcC52YWx1ZVsgaSBdLCBjbGFzc2VzOiBbXSB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbkRheXNNYXAudmFsdWVbIGkgXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRheS5pbiA9IHRydWVcbiAgICAgICAgICBkYXkuZmxhdCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5wdXNoKGRheSlcbiAgICAgIH1cblxuICAgICAgLy8gaWYgY3VycmVudCB2aWV3IGhhcyBkYXlzIGluIG1vZGVsXG4gICAgICBpZiAoZGF5c01hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF5c01hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICBjb25zdCBpID0gaW5kZXggKyBkYXkgLSAxXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNbIGkgXSwge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogZmFsc2UsXG4gICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgIHRleHRDb2xvcjogY29tcHV0ZWRUZXh0Q29sb3IudmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBjdXJyZW50IHZpZXcgaGFzIHJhbmdlcyBpbiBtb2RlbFxuICAgICAgaWYgKHJhbmdlTWFwLnZhbHVlWyB2aWV3TW9udGhIYXNoLnZhbHVlIF0gIT09IHZvaWQgMCkge1xuICAgICAgICByYW5nZU1hcC52YWx1ZVsgdmlld01vbnRoSGFzaC52YWx1ZSBdLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGlmIChlbnRyeS5mcm9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSBpbmRleCArIGVudHJ5LmZyb20gLSAxXG4gICAgICAgICAgICBjb25zdCB0byA9IGluZGV4ICsgKGVudHJ5LnRvIHx8IGRheXNJbk1vbnRoLnZhbHVlKSAtIDFcblxuICAgICAgICAgICAgZm9yIChsZXQgZGF5ID0gZnJvbTsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBmcm9tIF0sIHtcbiAgICAgICAgICAgICAgcmFuZ2VGcm9tOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiBmYWxzZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZW50cnkudG8gIT09IHZvaWQgMCAmJiBPYmplY3QuYXNzaWduKHJlc1sgdG8gXSwge1xuICAgICAgICAgICAgICByYW5nZVRvOiB0cnVlLFxuICAgICAgICAgICAgICBmbGF0OiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZW50cnkudG8gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIGVudHJ5LnRvIC0gMVxuXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSBpbmRleDsgZGF5IDw9IHRvOyBkYXkrKykge1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc1sgZGF5IF0sIHtcbiAgICAgICAgICAgICAgICByYW5nZTogZW50cnkucmFuZ2UsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29tcHV0ZWRDb2xvci52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyB0byBdLCB7XG4gICAgICAgICAgICAgIGZsYXQ6IGZhbHNlLFxuICAgICAgICAgICAgICByYW5nZVRvOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRvID0gaW5kZXggKyBkYXlzSW5Nb250aC52YWx1ZSAtIDFcbiAgICAgICAgICAgIGZvciAobGV0IGRheSA9IGluZGV4OyBkYXkgPD0gdG87IGRheSsrKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzWyBkYXkgXSwge1xuICAgICAgICAgICAgICAgIHJhbmdlOiBlbnRyeS5yYW5nZSxcbiAgICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb21wdXRlZENvbG9yLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogY29tcHV0ZWRUZXh0Q29sb3IudmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBmcm9tID0gaW5kZXggKyByYW5nZVZpZXcudmFsdWUuZnJvbSAtIDFcbiAgICAgICAgY29uc3QgdG8gPSBpbmRleCArIHJhbmdlVmlldy52YWx1ZS50byAtIDFcblxuICAgICAgICBmb3IgKGxldCBkYXkgPSBmcm9tOyBkYXkgPD0gdG87IGRheSsrKSB7XG4gICAgICAgICAgcmVzWyBkYXkgXS5jb2xvciA9IGNvbXB1dGVkQ29sb3IudmFsdWVcbiAgICAgICAgICByZXNbIGRheSBdLmVkaXRSYW5nZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUuaW5jbHVkZUZyb20gPT09IHRydWUpIHtcbiAgICAgICAgICByZXNbIGZyb20gXS5lZGl0UmFuZ2VGcm9tID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5nZVZpZXcudmFsdWUuaW5jbHVkZVRvID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVzWyB0byBdLmVkaXRSYW5nZVRvID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gdG9kYXkudmFsdWUueWVhciAmJiB2aWV3TW9kZWwudmFsdWUubW9udGggPT09IHRvZGF5LnZhbHVlLm1vbnRoKSB7XG4gICAgICAgIHJlc1sgaW5kZXggKyB0b2RheS52YWx1ZS5kYXkgLSAxIF0udG9kYXkgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxlZnQgPSByZXMubGVuZ3RoICUgN1xuICAgICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGFmdGVyRGF5cyA9IDcgLSBsZWZ0XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGFmdGVyRGF5czsgaSsrKSB7XG4gICAgICAgICAgcmVzLnB1c2goeyBpLCBmaWxsOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgbGV0IGNscyA9ICdxLWRhdGVfX2NhbGVuZGFyLWl0ZW0gJ1xuXG4gICAgICAgIGlmIChkYXkuZmlsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNscyArPSAncS1kYXRlX19jYWxlbmRhci1pdGVtLS1maWxsJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyArPSBgcS1kYXRlX19jYWxlbmRhci1pdGVtLS0keyBkYXkuaW4gPT09IHRydWUgPyAnaW4nIDogJ291dCcgfWBcblxuICAgICAgICAgIGlmIChkYXkucmFuZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY2xzICs9IGAgcS1kYXRlX19yYW5nZSR7IGRheS5yYW5nZVRvID09PSB0cnVlID8gJy10bycgOiAoZGF5LnJhbmdlRnJvbSA9PT0gdHJ1ZSA/ICctZnJvbScgOiAnJykgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF5LmVkaXRSYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzICs9IGAgcS1kYXRlX19lZGl0LXJhbmdlJHsgZGF5LmVkaXRSYW5nZUZyb20gPT09IHRydWUgPyAnLWZyb20nIDogJycgfSR7IGRheS5lZGl0UmFuZ2VUbyA9PT0gdHJ1ZSA/ICctdG8nIDogJycgfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZGF5LnJhbmdlICE9PSB2b2lkIDAgfHwgZGF5LmVkaXRSYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xzICs9IGAgdGV4dC0keyBkYXkuY29sb3IgfWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXkuY2xhc3NlcyA9IGNsc1xuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgaWYgKGxhc3RFbWl0VmFsdWUgPT09IHYpIHtcbiAgICAgICAgbGFzdEVtaXRWYWx1ZSA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGdldFZpZXdNb2RlbChpbm5lck1hc2sudmFsdWUsIGlubmVyTG9jYWxlLnZhbHVlKVxuICAgICAgICB1cGRhdGVWaWV3TW9kZWwobW9kZWwueWVhciwgbW9kZWwubW9udGgsIG1vZGVsKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCh2aWV3LCAoKSA9PiB7XG4gICAgICBpZiAoYmx1clRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBwcm94eS4kZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT09IHRydWUpIHtcbiAgICAgICAgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHZpZXdNb2RlbC52YWx1ZS55ZWFyICsgJ3wnICsgdmlld01vZGVsLnZhbHVlLm1vbnRoLCAoKSA9PiB7XG4gICAgICBlbWl0KCduYXZpZ2F0aW9uJywgeyB5ZWFyOiB2aWV3TW9kZWwudmFsdWUueWVhciwgbW9udGg6IHZpZXdNb2RlbC52YWx1ZS5tb250aCB9KVxuICAgIH0pXG5cbiAgICB3YXRjaChtYXNrLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlVmFsdWUodmFsLCBpbm5lckxvY2FsZS52YWx1ZSwgJ21hc2snKVxuICAgICAgaW5uZXJNYXNrLnZhbHVlID0gdmFsXG4gICAgfSlcblxuICAgIHdhdGNoKGxvY2FsZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVZhbHVlKGlubmVyTWFzay52YWx1ZSwgdmFsLCAnbG9jYWxlJylcbiAgICAgIGlubmVyTG9jYWxlLnZhbHVlID0gdmFsXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHNldFRvZGF5ICgpIHtcbiAgICAgIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gdG9kYXkudmFsdWVcblxuICAgICAgY29uc3QgZGF0ZSA9IHtcbiAgICAgICAgLy8gY29udGFpbnMgbW9yZSBwcm9wcyB0aGFuIG5lZWRlZCAoaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKVxuICAgICAgICAvLyBidXQgdGhvc2UgYXJlbid0IHVzZWQgaW4gdGhlIHByb2Nlc3Npbmcgb2YgdGhpcyBcImRhdGVcIiB2YXJpYWJsZVxuICAgICAgICAuLi52aWV3TW9kZWwudmFsdWUsXG5cbiAgICAgICAgLy8gb3ZlcndyaXRpbmcgd2l0aCB0b2RheSdzIGRhdGVcbiAgICAgICAgeWVhcixcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb250aE1hcCA9IGRheXNNYXAudmFsdWVbIGdldE1vbnRoSGFzaChkYXRlKSBdXG5cbiAgICAgIGlmIChtb250aE1hcCA9PT0gdm9pZCAwIHx8IG1vbnRoTWFwLmluY2x1ZGVzKGRhdGUuZGF5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYWRkVG9Nb2RlbChkYXRlKVxuICAgICAgfVxuXG4gICAgICBzZXRDYWxlbmRhclRvKGRhdGUueWVhciwgZGF0ZS5tb250aClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWaWV3ICh2aWV3TW9kZSkge1xuICAgICAgaWYgKHZpZXdJc1ZhbGlkKHZpZXdNb2RlKSA9PT0gdHJ1ZSkge1xuICAgICAgICB2aWV3LnZhbHVlID0gdmlld01vZGVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXRDYWxlbmRhciAodHlwZSwgZGVzY2VuZGluZykge1xuICAgICAgaWYgKFsgJ21vbnRoJywgJ3llYXInIF0uaW5jbHVkZXModHlwZSkpIHtcbiAgICAgICAgY29uc3QgZm4gPSB0eXBlID09PSAnbW9udGgnID8gZ29Ub01vbnRoIDogZ29Ub1llYXJcbiAgICAgICAgZm4oZGVzY2VuZGluZyA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDYWxlbmRhclRvICh5ZWFyLCBtb250aCkge1xuICAgICAgdmlldy52YWx1ZSA9ICdDYWxlbmRhcidcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCBtb250aClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRFZGl0aW5nUmFuZ2UgKGZyb20sIHRvKSB7XG4gICAgICBpZiAocHJvcHMucmFuZ2UgPT09IGZhbHNlIHx8ICFmcm9tKSB7XG4gICAgICAgIGVkaXRSYW5nZS52YWx1ZSA9IG51bGxcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGluaXQgPSBPYmplY3QuYXNzaWduKHsgLi4udmlld01vZGVsLnZhbHVlIH0sIGZyb20pXG4gICAgICBjb25zdCBmaW5hbCA9IHRvICE9PSB2b2lkIDBcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHsgLi4udmlld01vZGVsLnZhbHVlIH0sIHRvKVxuICAgICAgICA6IGluaXRcblxuICAgICAgZWRpdFJhbmdlLnZhbHVlID0ge1xuICAgICAgICBpbml0LFxuICAgICAgICBpbml0SGFzaDogZ2V0RGF5SGFzaChpbml0KSxcbiAgICAgICAgZmluYWwsXG4gICAgICAgIGZpbmFsSGFzaDogZ2V0RGF5SGFzaChmaW5hbClcbiAgICAgIH1cblxuICAgICAgc2V0Q2FsZW5kYXJUbyhpbml0LnllYXIsIGluaXQubW9udGgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWFzayAoKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2FsZW5kYXIgPT09ICdwZXJzaWFuJyA/ICdZWVlZL01NL0REJyA6IHByb3BzLm1hc2tcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGVTdHJpbmcgKGRhdGUsIG1hc2ssIGxvY2FsZSkge1xuICAgICAgcmV0dXJuIF9fc3BsaXREYXRlKFxuICAgICAgICBkYXRlLFxuICAgICAgICBtYXNrLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHByb3BzLmNhbGVuZGFyLFxuICAgICAgICB7XG4gICAgICAgICAgaG91cjogMCxcbiAgICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICAgIG1pbGxpc2Vjb25kOiAwXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWV3TW9kZWwgKG1hc2ssIGxvY2FsZSkge1xuICAgICAgY29uc3QgbW9kZWwgPSBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IChwcm9wcy5tb2RlbFZhbHVlID8gWyBwcm9wcy5tb2RlbFZhbHVlIF0gOiBbXSlcblxuICAgICAgaWYgKG1vZGVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdFZpZXdNb2RlbCgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IG1vZGVsWyBtb2RlbC5sZW5ndGggLSAxIF1cbiAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVTdHJpbmcoXG4gICAgICAgIHRhcmdldC5mcm9tICE9PSB2b2lkIDAgPyB0YXJnZXQuZnJvbSA6IHRhcmdldCxcbiAgICAgICAgbWFzayxcbiAgICAgICAgbG9jYWxlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkZWNvZGVkLmRhdGVIYXNoID09PSBudWxsXG4gICAgICAgID8gZ2V0RGVmYXVsdFZpZXdNb2RlbCgpXG4gICAgICAgIDogZGVjb2RlZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERlZmF1bHRWaWV3TW9kZWwgKCkge1xuICAgICAgbGV0IHllYXIsIG1vbnRoXG5cbiAgICAgIGlmIChwcm9wcy5kZWZhdWx0WWVhck1vbnRoICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgZCA9IHByb3BzLmRlZmF1bHRZZWFyTW9udGguc3BsaXQoJy8nKVxuICAgICAgICB5ZWFyID0gcGFyc2VJbnQoZFsgMCBdLCAxMClcbiAgICAgICAgbW9udGggPSBwYXJzZUludChkWyAxIF0sIDEwKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG1heSBjb21lIGZyb20gZGF0YSgpIHdoZXJlIGNvbXB1dGVkXG4gICAgICAgIC8vIHByb3BzIGFyZSBub3QgeWV0IGF2YWlsYWJsZVxuICAgICAgICBjb25zdCBkID0gdG9kYXkudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gdG9kYXkudmFsdWVcbiAgICAgICAgICA6IGdldEN1cnJlbnREYXRlKClcblxuICAgICAgICB5ZWFyID0gZC55ZWFyXG4gICAgICAgIG1vbnRoID0gZC5tb250aFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyLFxuICAgICAgICBtb250aCxcbiAgICAgICAgZGF5OiAxLFxuICAgICAgICBob3VyOiAwLFxuICAgICAgICBtaW51dGU6IDAsXG4gICAgICAgIHNlY29uZDogMCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgICAgIGRhdGVIYXNoOiB5ZWFyICsgJy8nICsgcGFkKG1vbnRoKSArICcvMDEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub01vbnRoIChvZmZzZXQpIHtcbiAgICAgIGxldCB5ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICAgIGxldCBtb250aCA9IE51bWJlcih2aWV3TW9kZWwudmFsdWUubW9udGgpICsgb2Zmc2V0XG5cbiAgICAgIGlmIChtb250aCA9PT0gMTMpIHtcbiAgICAgICAgbW9udGggPSAxXG4gICAgICAgIHllYXIrK1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobW9udGggPT09IDApIHtcbiAgICAgICAgbW9udGggPSAxMlxuICAgICAgICB5ZWFyLS1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlVmlld01vZGVsKHllYXIsIG1vbnRoKVxuICAgICAgaXNJbW1lZGlhdGUudmFsdWUgPT09IHRydWUgJiYgZW1pdEltbWVkaWF0ZWx5KCdtb250aCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ29Ub1llYXIgKG9mZnNldCkge1xuICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2aWV3TW9kZWwudmFsdWUueWVhcikgKyBvZmZzZXRcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCB2aWV3TW9kZWwudmFsdWUubW9udGgpXG4gICAgICBpc0ltbWVkaWF0ZS52YWx1ZSA9PT0gdHJ1ZSAmJiBlbWl0SW1tZWRpYXRlbHkoJ3llYXInKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFllYXIgKHllYXIpIHtcbiAgICAgIHVwZGF0ZVZpZXdNb2RlbCh5ZWFyLCB2aWV3TW9kZWwudmFsdWUubW9udGgpXG4gICAgICB2aWV3LnZhbHVlID0gcHJvcHMuZGVmYXVsdFZpZXcgPT09ICdZZWFycycgPyAnTW9udGhzJyA6ICdDYWxlbmRhcidcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgneWVhcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TW9udGggKG1vbnRoKSB7XG4gICAgICB1cGRhdGVWaWV3TW9kZWwodmlld01vZGVsLnZhbHVlLnllYXIsIG1vbnRoKVxuICAgICAgdmlldy52YWx1ZSA9ICdDYWxlbmRhcidcbiAgICAgIGlzSW1tZWRpYXRlLnZhbHVlID09PSB0cnVlICYmIGVtaXRJbW1lZGlhdGVseSgnbW9udGgnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZURhdGUgKGRhdGUsIG1vbnRoSGFzaCkge1xuICAgICAgY29uc3QgbW9udGggPSBkYXlzTWFwLnZhbHVlWyBtb250aEhhc2ggXVxuICAgICAgY29uc3QgZm4gPSBtb250aCAhPT0gdm9pZCAwICYmIG1vbnRoLmluY2x1ZGVzKGRhdGUuZGF5KSA9PT0gdHJ1ZVxuICAgICAgICA/IHJlbW92ZUZyb21Nb2RlbFxuICAgICAgICA6IGFkZFRvTW9kZWxcblxuICAgICAgZm4oZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaG9ydERhdGUgKGRhdGUpIHtcbiAgICAgIHJldHVybiB7IHllYXI6IGRhdGUueWVhciwgbW9udGg6IGRhdGUubW9udGgsIGRheTogZGF0ZS5kYXkgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXdNb2RlbCAoeWVhciwgbW9udGgsIHRpbWUpIHtcbiAgICAgIGlmIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgeWVhciA8PSBtaW5OYXYudmFsdWUueWVhcikge1xuICAgICAgICBpZiAobW9udGggPCBtaW5OYXYudmFsdWUubW9udGggfHwgeWVhciA8IG1pbk5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgbW9udGggPSBtaW5OYXYudmFsdWUubW9udGhcbiAgICAgICAgfVxuICAgICAgICB5ZWFyID0gbWluTmF2LnZhbHVlLnllYXJcbiAgICAgIH1cblxuICAgICAgaWYgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiB5ZWFyID49IG1heE5hdi52YWx1ZS55ZWFyKSB7XG4gICAgICAgIGlmIChtb250aCA+IG1heE5hdi52YWx1ZS5tb250aCB8fCB5ZWFyID4gbWF4TmF2LnZhbHVlLnllYXIpIHtcbiAgICAgICAgICBtb250aCA9IG1heE5hdi52YWx1ZS5tb250aFxuICAgICAgICB9XG4gICAgICAgIHllYXIgPSBtYXhOYXYudmFsdWUueWVhclxuICAgICAgfVxuXG4gICAgICBpZiAodGltZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCB0aW1lem9uZU9mZnNldCwgdGltZUhhc2ggfSA9IHRpbWVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih2aWV3TW9kZWwudmFsdWUsIHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCB0aW1lem9uZU9mZnNldCwgdGltZUhhc2ggfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SGFzaCA9IHllYXIgKyAnLycgKyBwYWQobW9udGgpICsgJy8wMSdcblxuICAgICAgaWYgKG5ld0hhc2ggIT09IHZpZXdNb2RlbC52YWx1ZS5kYXRlSGFzaCkge1xuICAgICAgICBtb250aERpcmVjdGlvbi52YWx1ZSA9ICh2aWV3TW9kZWwudmFsdWUuZGF0ZUhhc2ggPCBuZXdIYXNoKSA9PT0gKCRxLmxhbmcucnRsICE9PSB0cnVlKSA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgICAgaWYgKHllYXIgIT09IHZpZXdNb2RlbC52YWx1ZS55ZWFyKSB7XG4gICAgICAgICAgeWVhckRpcmVjdGlvbi52YWx1ZSA9IG1vbnRoRGlyZWN0aW9uLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgc3RhcnRZZWFyLnZhbHVlID0geWVhciAtIHllYXIgJSB5ZWFyc0ludGVydmFsIC0gKHllYXIgPCAwID8geWVhcnNJbnRlcnZhbCA6IDApXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih2aWV3TW9kZWwudmFsdWUsIHtcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgIGRheTogMSxcbiAgICAgICAgICAgIGRhdGVIYXNoOiBuZXdIYXNoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0VmFsdWUgKHZhbCwgYWN0aW9uLCBkYXRlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbCAhPT0gbnVsbCAmJiB2YWwubGVuZ3RoID09PSAxICYmIHByb3BzLm11bHRpcGxlID09PSBmYWxzZVxuICAgICAgICA/IHZhbFsgMCBdXG4gICAgICAgIDogdmFsXG5cbiAgICAgIGxhc3RFbWl0VmFsdWUgPSB2YWx1ZVxuXG4gICAgICBjb25zdCB7IHJlYXNvbiwgZGV0YWlscyB9ID0gZ2V0RW1pdFBhcmFtcyhhY3Rpb24sIGRhdGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlLCByZWFzb24sIGRldGFpbHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdEltbWVkaWF0ZWx5IChyZWFzb24pIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXlzTW9kZWwudmFsdWVbIDAgXSAhPT0gdm9pZCAwICYmIGRheXNNb2RlbC52YWx1ZVsgMCBdLmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgID8geyAuLi5kYXlzTW9kZWwudmFsdWVbIDAgXSB9XG4gICAgICAgIDogeyAuLi52aWV3TW9kZWwudmFsdWUgfSAvLyBpbmhlcml0IGRheSwgaG91cnMsIG1pbnV0ZXMsIG1pbGxpc2Vjb25kcy4uLlxuXG4gICAgICAvLyBuZXh0VGljayByZXF1aXJlZCBiZWNhdXNlIG9mIGFuaW1hdGlvbiBkZWxheSBpbiB2aWV3TW9kZWxcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZGF0ZS55ZWFyID0gdmlld01vZGVsLnZhbHVlLnllYXJcbiAgICAgICAgZGF0ZS5tb250aCA9IHZpZXdNb2RlbC52YWx1ZS5tb250aFxuXG4gICAgICAgIGNvbnN0IG1heERheSA9IHByb3BzLmNhbGVuZGFyICE9PSAncGVyc2lhbidcbiAgICAgICAgICA/IChuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIDApKS5nZXREYXRlKClcbiAgICAgICAgICA6IGphbGFhbGlNb250aExlbmd0aChkYXRlLnllYXIsIGRhdGUubW9udGgpXG5cbiAgICAgICAgZGF0ZS5kYXkgPSBNYXRoLm1pbihNYXRoLm1heCgxLCBkYXRlLmRheSksIG1heERheSlcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGVuY29kZUVudHJ5KGRhdGUpXG4gICAgICAgIGxhc3RFbWl0VmFsdWUgPSB2YWx1ZVxuXG4gICAgICAgIGNvbnN0IHsgZGV0YWlscyB9ID0gZ2V0RW1pdFBhcmFtcygnJywgZGF0ZSlcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSwgcmVhc29uLCBkZXRhaWxzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbWl0UGFyYW1zIChhY3Rpb24sIGRhdGUpIHtcbiAgICAgIHJldHVybiBkYXRlLmZyb20gIT09IHZvaWQgMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHJlYXNvbjogYCR7IGFjdGlvbiB9LXJhbmdlYCxcbiAgICAgICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICAgICAgLi4uZ2V0U2hvcnREYXRlKGRhdGUudGFyZ2V0KSxcbiAgICAgICAgICAgICAgZnJvbTogZ2V0U2hvcnREYXRlKGRhdGUuZnJvbSksXG4gICAgICAgICAgICAgIHRvOiBnZXRTaG9ydERhdGUoZGF0ZS50bylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgcmVhc29uOiBgJHsgYWN0aW9uIH0tZGF5YCxcbiAgICAgICAgICAgIGRldGFpbHM6IGdldFNob3J0RGF0ZShkYXRlKVxuICAgICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmNvZGVFbnRyeSAoZGF0ZSwgbWFzaywgbG9jYWxlKSB7XG4gICAgICByZXR1cm4gZGF0ZS5mcm9tICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IGZyb206IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUuZnJvbSwgbWFzaywgbG9jYWxlKSwgdG86IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUudG8sIG1hc2ssIGxvY2FsZSkgfVxuICAgICAgICA6IGVuY29kZU9iamVjdEZuLnZhbHVlKGRhdGUsIG1hc2ssIGxvY2FsZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb01vZGVsIChkYXRlKSB7XG4gICAgICBsZXQgdmFsdWVcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChkYXRlLmZyb20gIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIHdlIGFsc28gbmVlZCB0byBmaWx0ZXIgb3V0IGludGVyc2VjdGlvbnNcblxuICAgICAgICAgIGNvbnN0IGZyb21IYXNoID0gZ2V0RGF5SGFzaChkYXRlLmZyb20pXG4gICAgICAgICAgY29uc3QgdG9IYXNoID0gZ2V0RGF5SGFzaChkYXRlLnRvKVxuXG4gICAgICAgICAgY29uc3QgZGF5cyA9IGRheXNNb2RlbC52YWx1ZVxuICAgICAgICAgICAgLmZpbHRlcihkYXkgPT4gZGF5LmRhdGVIYXNoIDwgZnJvbUhhc2ggfHwgZGF5LmRhdGVIYXNoID4gdG9IYXNoKVxuXG4gICAgICAgICAgY29uc3QgcmFuZ2VzID0gcmFuZ2VNb2RlbC52YWx1ZVxuICAgICAgICAgICAgLmZpbHRlcigoeyBmcm9tLCB0byB9KSA9PiB0by5kYXRlSGFzaCA8IGZyb21IYXNoIHx8IGZyb20uZGF0ZUhhc2ggPiB0b0hhc2gpXG5cbiAgICAgICAgICB2YWx1ZSA9IGRheXMuY29uY2F0KHJhbmdlcykuY29uY2F0KGRhdGUpLm1hcChlbnRyeSA9PiBlbmNvZGVFbnRyeShlbnRyeSkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc3QgbW9kZWwgPSBub3JtYWxpemVkTW9kZWwudmFsdWUuc2xpY2UoKVxuICAgICAgICAgIG1vZGVsLnB1c2goZW5jb2RlRW50cnkoZGF0ZSkpXG4gICAgICAgICAgdmFsdWUgPSBtb2RlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBlbmNvZGVFbnRyeShkYXRlKVxuICAgICAgfVxuXG4gICAgICBlbWl0VmFsdWUodmFsdWUsICdhZGQnLCBkYXRlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21Nb2RlbCAoZGF0ZSkge1xuICAgICAgaWYgKHByb3BzLm5vVW5zZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBtb2RlbCA9IG51bGxcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZW5jb2RlRW50cnkoZGF0ZSlcblxuICAgICAgICBpZiAoZGF0ZS5mcm9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuZmlsdGVyKFxuICAgICAgICAgICAgZGF0ZSA9PiAoXG4gICAgICAgICAgICAgIGRhdGUuZnJvbSAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgPyAoZGF0ZS5mcm9tICE9PSB2YWwuZnJvbSAmJiBkYXRlLnRvICE9PSB2YWwudG8pXG4gICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5maWx0ZXIoZGF0ZSA9PiBkYXRlICE9PSB2YWwpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbW9kZWwgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW1pdFZhbHVlKG1vZGVsLCAncmVtb3ZlJywgZGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAobWFzaywgbG9jYWxlLCByZWFzb24pIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gZGF5c01vZGVsLnZhbHVlXG4gICAgICAgIC5jb25jYXQocmFuZ2VNb2RlbC52YWx1ZSlcbiAgICAgICAgLm1hcChlbnRyeSA9PiBlbmNvZGVFbnRyeShlbnRyeSwgbWFzaywgbG9jYWxlKSlcbiAgICAgICAgLmZpbHRlcihlbnRyeSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVudHJ5LmZyb20gIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBlbnRyeS5mcm9tLmRhdGVIYXNoICE9PSBudWxsICYmIGVudHJ5LnRvLmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgICAgICA6IGVudHJ5LmRhdGVIYXNoICE9PSBudWxsXG4gICAgICAgIH0pXG5cbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgKHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gbW9kZWwgOiBtb2RlbFsgMCBdKSB8fCBudWxsLCByZWFzb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyICgpIHtcbiAgICAgIGlmIChwcm9wcy5taW5pbWFsID09PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1kYXRlX19oZWFkZXIgJyArIGhlYWRlckNsYXNzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sICgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGtleTogJ2gteXItJyArIGhlYWRlclN1YnRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci1zdWJ0aXRsZSBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgKyAodmlldy52YWx1ZSA9PT0gJ1llYXJzJyA/ICdxLWRhdGVfX2hlYWRlci1saW5rLS1hY3RpdmUnIDogJ2N1cnNvci1wb2ludGVyJyksXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAuLi5nZXRDYWNoZSgndlknLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2sgKCkgeyB2aWV3LnZhbHVlID0gJ1llYXJzJyB9LFxuICAgICAgICAgICAgICBvbktleXVwIChlKSB7IGUua2V5Q29kZSA9PT0gMTMgJiYgKHZpZXcudmFsdWUgPSAnWWVhcnMnKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIFsgaGVhZGVyU3VidGl0bGUudmFsdWUgXSkpXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRpdGxlIHJlbGF0aXZlLXBvc2l0aW9uIGZsZXggbm8td3JhcCdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24gY29sJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoVHJhbnNpdGlvbiwge1xuICAgICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgICAgfSwgKCkgPT4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdoLXN1YicgKyBoZWFkZXJUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2hlYWRlci10aXRsZS1sYWJlbCBxLWRhdGVfX2hlYWRlci1saW5rICdcbiAgICAgICAgICAgICAgICArICh2aWV3LnZhbHVlID09PSAnQ2FsZW5kYXInID8gJ3EtZGF0ZV9faGVhZGVyLWxpbmstLWFjdGl2ZScgOiAnY3Vyc29yLXBvaW50ZXInKSxcbiAgICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgndkMnLCB7XG4gICAgICAgICAgICAgICAgb25DbGljayAoKSB7IHZpZXcudmFsdWUgPSAnQ2FsZW5kYXInIH0sXG4gICAgICAgICAgICAgICAgb25LZXl1cCAoZSkgeyBlLmtleUNvZGUgPT09IDEzICYmICh2aWV3LnZhbHVlID0gJ0NhbGVuZGFyJykgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgWyBoZWFkZXJUaXRsZS52YWx1ZSBdKSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIHByb3BzLnRvZGF5QnRuID09PSB0cnVlID8gaChRQnRuLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9faGVhZGVyLXRvZGF5IHNlbGYtc3RhcnQnLFxuICAgICAgICAgICAgaWNvbjogJHEuaWNvblNldC5kYXRldGltZS50b2RheSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBvbkNsaWNrOiBzZXRUb2RheVxuICAgICAgICAgIH0pIDogbnVsbFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYXZpZ2F0aW9uICh7IGxhYmVsLCB0eXBlLCBrZXksIGRpciwgZ29UbywgYm91bmRhcmllcywgY2xzIH0pIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JvdyBpdGVtcy1jZW50ZXIgcS1kYXRlX19hcnJvdydcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBmbGF0OiB0cnVlLFxuICAgICAgICAgICAgaWNvbjogZGF0ZUFycm93LnZhbHVlWyAwIF0sXG4gICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICBkaXNhYmxlOiBib3VuZGFyaWVzLnByZXYgPT09IGZhbHNlLFxuICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ2dvLSMnICsgdHlwZSwgeyBvbkNsaWNrICgpIHsgZ29UbygtMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY2VudGVyJyArIGNsc1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1qdW1wLScgKyBkaXJcbiAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7IGtleSB9LCBbXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG5vQ2FwczogdHJ1ZSxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIHRhYmluZGV4OiB0YWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAgICAgLi4uZ2V0Q2FjaGUoJ3ZpZXcjJyArIHR5cGUsIHsgb25DbGljazogKCkgPT4geyB2aWV3LnZhbHVlID0gdHlwZSB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pKVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdyb3cgaXRlbXMtY2VudGVyIHEtZGF0ZV9fYXJyb3cnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBzaXplOiAnc20nLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgICAgZGlzYWJsZTogYm91bmRhcmllcy5uZXh0ID09PSBmYWxzZSxcbiAgICAgICAgICAgIC4uLmdldENhY2hlKCdnbysjJyArIHR5cGUsIHsgb25DbGljayAoKSB7IGdvVG8oMSkgfSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVmlld3MgPSB7XG4gICAgICBDYWxlbmRhcjogKCkgPT4gKFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NhbGVuZGFyLXZpZXcnLFxuICAgICAgICAgIGNsYXNzOiAncS1kYXRlX192aWV3IHEtZGF0ZV9fY2FsZW5kYXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fbmF2aWdhdGlvbiByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZ2V0TmF2aWdhdGlvbih7XG4gICAgICAgICAgICBsYWJlbDogaW5uZXJMb2NhbGUudmFsdWUubW9udGhzWyB2aWV3TW9kZWwudmFsdWUubW9udGggLSAxIF0sXG4gICAgICAgICAgICB0eXBlOiAnTW9udGhzJyxcbiAgICAgICAgICAgIGtleTogdmlld01vZGVsLnZhbHVlLm1vbnRoLFxuICAgICAgICAgICAgZGlyOiBtb250aERpcmVjdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGdvVG86IGdvVG9Nb250aCxcbiAgICAgICAgICAgIGJvdW5kYXJpZXM6IG5hdkJvdW5kYXJpZXMudmFsdWUubW9udGgsXG4gICAgICAgICAgICBjbHM6ICcgY29sJ1xuICAgICAgICAgIH0pLmNvbmNhdChnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgIGxhYmVsOiB2aWV3TW9kZWwudmFsdWUueWVhcixcbiAgICAgICAgICAgIHR5cGU6ICdZZWFycycsXG4gICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgZGlyOiB5ZWFyRGlyZWN0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZ29UbzogZ29Ub1llYXIsXG4gICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICBjbHM6ICcnXG4gICAgICAgICAgfSkpKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX19jYWxlbmRhci13ZWVrZGF5cyByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXAnXG4gICAgICAgICAgfSwgZGF5c09mV2Vlay52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWl0ZW0nIH0sIFsgaCgnZGl2JywgZGF5KSBdKSkpLFxuXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMtY29udGFpbmVyIHJlbGF0aXZlLXBvc2l0aW9uIG92ZXJmbG93LWhpZGRlbidcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKFRyYW5zaXRpb24sIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3EtdHJhbnNpdGlvbi0tc2xpZGUtJyArIG1vbnRoRGlyZWN0aW9uLnZhbHVlXG4gICAgICAgICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGtleTogdmlld01vbnRoSGFzaC52YWx1ZSxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NhbGVuZGFyLWRheXMgZml0J1xuICAgICAgICAgICAgfSwgZGF5cy52YWx1ZS5tYXAoZGF5ID0+IGgoJ2RpdicsIHsgY2xhc3M6IGRheS5jbGFzc2VzIH0sIFtcbiAgICAgICAgICAgICAgZGF5LmluID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBoKFxuICAgICAgICAgICAgICAgICAgUUJ0biwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogZGF5LnRvZGF5ID09PSB0cnVlID8gJ3EtZGF0ZV9fdG9kYXknIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmbGF0OiBkYXkuZmxhdCxcbiAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogZGF5LnVuZWxldmF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXkuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogZGF5LnRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRheS5pLFxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLmdldENhY2hlKCdkYXkjJyArIGRheS5pLCB7XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4geyBvbkRheUNsaWNrKGRheS5pKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VvdmVyOiAoKSA9PiB7IG9uRGF5TW91c2VvdmVyKGRheS5pKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZGF5LmV2ZW50ICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/ICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2V2ZW50IGJnLScgKyBkYXkuZXZlbnQgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogaCgnZGl2JywgJycgKyBkYXkuaSlcbiAgICAgICAgICAgIF0pKSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuXG4gICAgICBNb250aHMgKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IHZpZXdNb2RlbC52YWx1ZS55ZWFyID09PSB0b2RheS52YWx1ZS55ZWFyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBtb250aCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChtaW5OYXYudmFsdWUgIT09IG51bGwgJiYgdmlld01vZGVsLnZhbHVlLnllYXIgPT09IG1pbk5hdi52YWx1ZS55ZWFyICYmIG1pbk5hdi52YWx1ZS5tb250aCA+IG1vbnRoKVxuICAgICAgICAgICAgfHwgKG1heE5hdi52YWx1ZSAhPT0gbnVsbCAmJiB2aWV3TW9kZWwudmFsdWUueWVhciA9PT0gbWF4TmF2LnZhbHVlLnllYXIgJiYgbWF4TmF2LnZhbHVlLm1vbnRoIDwgbW9udGgpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGVudCA9IGlubmVyTG9jYWxlLnZhbHVlLm1vbnRoc1Nob3J0Lm1hcCgobW9udGgsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSB2aWV3TW9kZWwudmFsdWUubW9udGggPT09IGkgKyAxXG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21vbnRocy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjdXJyZW50WWVhciA9PT0gdHJ1ZSAmJiB0b2RheS52YWx1ZS5tb250aCA9PT0gaSArIDEgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICBmbGF0OiBhY3RpdmUgIT09IHRydWUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtb250aCxcbiAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRDb2xvci52YWx1ZSA6IG51bGwsXG4gICAgICAgICAgICAgIHRleHRDb2xvcjogYWN0aXZlID09PSB0cnVlID8gY29tcHV0ZWRUZXh0Q29sb3IudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoaSArIDEpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgnbW9udGgjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRNb250aChpICsgMSkgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuXG4gICAgICAgIHByb3BzLnllYXJzSW5Nb250aFZpZXcgPT09IHRydWUgJiYgY29udGVudC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdyb3cgbm8td3JhcCBmdWxsLXdpZHRoJyB9LCBbXG4gICAgICAgICAgICBnZXROYXZpZ2F0aW9uKHtcbiAgICAgICAgICAgICAgbGFiZWw6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICB0eXBlOiAnWWVhcnMnLFxuICAgICAgICAgICAgICBrZXk6IHZpZXdNb2RlbC52YWx1ZS55ZWFyLFxuICAgICAgICAgICAgICBkaXI6IHllYXJEaXJlY3Rpb24udmFsdWUsXG4gICAgICAgICAgICAgIGdvVG86IGdvVG9ZZWFyLFxuICAgICAgICAgICAgICBib3VuZGFyaWVzOiBuYXZCb3VuZGFyaWVzLnZhbHVlLnllYXIsXG4gICAgICAgICAgICAgIGNsczogJyBjb2wnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21vbnRocy12aWV3JyxcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX21vbnRocyBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgICB9LCBjb250ZW50KVxuICAgICAgfSxcblxuICAgICAgWWVhcnMgKCkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRZZWFyLnZhbHVlLFxuICAgICAgICAgIHN0b3AgPSBzdGFydCArIHllYXJzSW50ZXJ2YWwsXG4gICAgICAgICAgeWVhcnMgPSBbXVxuXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB5ZWFyID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKG1pbk5hdi52YWx1ZSAhPT0gbnVsbCAmJiBtaW5OYXYudmFsdWUueWVhciA+IHllYXIpXG4gICAgICAgICAgICB8fCAobWF4TmF2LnZhbHVlICE9PSBudWxsICYmIG1heE5hdi52YWx1ZS55ZWFyIDwgeWVhcilcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gc3RvcDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gdmlld01vZGVsLnZhbHVlLnllYXIgPT09IGlcblxuICAgICAgICAgIHllYXJzLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1pdGVtIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICAgIGtleTogJ3lyJyArIGksXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRvZGF5LnZhbHVlLnllYXIgPT09IGkgPyAncS1kYXRlX190b2RheScgOiBudWxsLFxuICAgICAgICAgICAgICAgIGZsYXQ6ICFhY3RpdmUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGksXG4gICAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgdW5lbGV2YXRlZDogYWN0aXZlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmUgPT09IHRydWUgPyBjb21wdXRlZENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFjdGl2ZSA9PT0gdHJ1ZSA/IGNvbXB1dGVkVGV4dENvbG9yLnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZTogaXNEaXNhYmxlZChpKSxcbiAgICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneXIjJyArIGksIHsgb25DbGljazogKCkgPT4geyBzZXRZZWFyKGkpIH0gfSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZGF0ZV9fdmlldyBxLWRhdGVfX3llYXJzIGZsZXggZmxleC1jZW50ZXInXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RhcnQpLFxuICAgICAgICAgICAgICAuLi5nZXRDYWNoZSgneS0nLCB7IG9uQ2xpY2s6ICgpID0+IHsgc3RhcnRZZWFyLnZhbHVlIC09IHllYXJzSW50ZXJ2YWwgfSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1kYXRlX195ZWFycy1jb250ZW50IGNvbCBzZWxmLXN0cmV0Y2ggcm93IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICB9LCB5ZWFycyksXG5cbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2NvbC1hdXRvJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgICAgICAgIGljb246IGRhdGVBcnJvdy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRGlzYWJsZWQoc3RvcCksXG4gICAgICAgICAgICAgIC4uLmdldENhY2hlKCd5KycsIHsgb25DbGljazogKCkgPT4geyBzdGFydFllYXIudmFsdWUgKz0geWVhcnNJbnRlcnZhbCB9IH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlDbGljayAoZGF5SW5kZXgpIHtcbiAgICAgIGNvbnN0IGRheSA9IHsgLi4udmlld01vZGVsLnZhbHVlLCBkYXk6IGRheUluZGV4IH1cblxuICAgICAgaWYgKHByb3BzLnJhbmdlID09PSBmYWxzZSkge1xuICAgICAgICB0b2dnbGVEYXRlKGRheSwgdmlld01vbnRoSGFzaC52YWx1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlZGl0UmFuZ2UudmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGF5UHJvcHMgPSBkYXlzLnZhbHVlLmZpbmQoZGF5ID0+IGRheS5maWxsICE9PSB0cnVlICYmIGRheS5pID09PSBkYXlJbmRleClcblxuICAgICAgICBpZiAocHJvcHMubm9VbnNldCAhPT0gdHJ1ZSAmJiBkYXlQcm9wcy5yYW5nZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKHsgdGFyZ2V0OiBkYXksIGZyb206IGRheVByb3BzLnJhbmdlLmZyb20sIHRvOiBkYXlQcm9wcy5yYW5nZS50byB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheVByb3BzLnNlbGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVtb3ZlRnJvbU1vZGVsKGRheSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluaXRIYXNoID0gZ2V0RGF5SGFzaChkYXkpXG5cbiAgICAgICAgZWRpdFJhbmdlLnZhbHVlID0ge1xuICAgICAgICAgIGluaXQ6IGRheSxcbiAgICAgICAgICBpbml0SGFzaCxcbiAgICAgICAgICBmaW5hbDogZGF5LFxuICAgICAgICAgIGZpbmFsSGFzaDogaW5pdEhhc2hcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ3JhbmdlU3RhcnQnLCBnZXRTaG9ydERhdGUoZGF5KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGluaXRIYXNoID0gZWRpdFJhbmdlLnZhbHVlLmluaXRIYXNoLFxuICAgICAgICAgIGZpbmFsSGFzaCA9IGdldERheUhhc2goZGF5KSxcbiAgICAgICAgICBwYXlsb2FkID0gaW5pdEhhc2ggPD0gZmluYWxIYXNoXG4gICAgICAgICAgICA/IHsgZnJvbTogZWRpdFJhbmdlLnZhbHVlLmluaXQsIHRvOiBkYXkgfVxuICAgICAgICAgICAgOiB7IGZyb206IGRheSwgdG86IGVkaXRSYW5nZS52YWx1ZS5pbml0IH1cblxuICAgICAgICBlZGl0UmFuZ2UudmFsdWUgPSBudWxsXG4gICAgICAgIGFkZFRvTW9kZWwoaW5pdEhhc2ggPT09IGZpbmFsSGFzaCA/IGRheSA6IHsgdGFyZ2V0OiBkYXksIC4uLnBheWxvYWQgfSlcblxuICAgICAgICBlbWl0KCdyYW5nZUVuZCcsIHtcbiAgICAgICAgICBmcm9tOiBnZXRTaG9ydERhdGUocGF5bG9hZC5mcm9tKSxcbiAgICAgICAgICB0bzogZ2V0U2hvcnREYXRlKHBheWxvYWQudG8pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EYXlNb3VzZW92ZXIgKGRheUluZGV4KSB7XG4gICAgICBpZiAoZWRpdFJhbmdlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsID0geyAuLi52aWV3TW9kZWwudmFsdWUsIGRheTogZGF5SW5kZXggfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWRpdFJhbmdlLnZhbHVlLCB7XG4gICAgICAgICAgZmluYWwsXG4gICAgICAgICAgZmluYWxIYXNoOiBnZXREYXlIYXNoKGZpbmFsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNldFRvZGF5LCBzZXRWaWV3LCBvZmZzZXRDYWxlbmRhciwgc2V0Q2FsZW5kYXJUbywgc2V0RWRpdGluZ1JhbmdlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX2NvbnRlbnQgY29sIHJlbGF0aXZlLXBvc2l0aW9uJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaChUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgICBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJ1xuICAgICAgICAgIH0sIHJlbmRlclZpZXdzWyB2aWV3LnZhbHVlIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IGRlZiA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICBkZWYgIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRhdGVfX2FjdGlvbnMnIH0sIGRlZilcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgIGluamVjdEZvcm1JbnB1dChjb250ZW50LCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGdldEhlYWRlcigpLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWYsXG4gICAgICAgICAgY2xhc3M6ICdxLWRhdGVfX21haW4gY29sIGNvbHVtbicsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICAgIH0sIGNvbnRlbnQpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljaywgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBmb3JtS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRm9ybScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9FcnJvckZvY3VzOiBCb29sZWFuLFxuICAgIG5vUmVzZXRGb2N1czogQm9vbGVhbixcbiAgICBncmVlZHk6IEJvb2xlYW4sXG5cbiAgICBvblN1Ym1pdDogRnVuY3Rpb25cbiAgfSxcblxuICBlbWl0czogWyAncmVzZXQnLCAndmFsaWRhdGlvblN1Y2Nlc3MnLCAndmFsaWRhdGlvbkVycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCB2YWxpZGF0ZUluZGV4ID0gMFxuICAgIGNvbnN0IHJlZ2lzdGVyZWRDb21wb25lbnRzID0gW11cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlIChzaG91bGRGb2N1cykge1xuICAgICAgY29uc3QgZm9jdXMgPSB0eXBlb2Ygc2hvdWxkRm9jdXMgPT09ICdib29sZWFuJ1xuICAgICAgICA/IHNob3VsZEZvY3VzXG4gICAgICAgIDogcHJvcHMubm9FcnJvckZvY3VzICE9PSB0cnVlXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gKyt2YWxpZGF0ZUluZGV4XG5cbiAgICAgIGNvbnN0IGVtaXRFdmVudCA9IChyZXMsIHJlZikgPT4ge1xuICAgICAgICBlbWl0KCd2YWxpZGF0aW9uJyArIChyZXMgPT09IHRydWUgPyAnU3VjY2VzcycgOiAnRXJyb3InKSwgcmVmKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZGF0ZUNvbXBvbmVudCA9IGNvbXAgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZCA9IGNvbXAudmFsaWRhdGUoKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWQudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gdmFsaWQudGhlbihcbiAgICAgICAgICAgIHZhbGlkID0+ICh7IHZhbGlkLCBjb21wIH0pLFxuICAgICAgICAgICAgZXJyID0+ICh7IHZhbGlkOiBmYWxzZSwgY29tcCwgZXJyIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHsgdmFsaWQsIGNvbXAgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JzUHJvbWlzZSA9IHByb3BzLmdyZWVkeSA9PT0gdHJ1ZVxuICAgICAgICA/IFByb21pc2VcbiAgICAgICAgICAuYWxsKHJlZ2lzdGVyZWRDb21wb25lbnRzLm1hcCh2YWxpZGF0ZUNvbXBvbmVudCkpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5maWx0ZXIociA9PiByLnZhbGlkICE9PSB0cnVlKSlcbiAgICAgICAgOiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBjb21wKSA9PiBhY2MudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUNvbXBvbmVudChjb21wKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnZhbGlkID09PSBmYWxzZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QocikgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gWyBlcnJvciBdKVxuXG4gICAgICByZXR1cm4gZXJyb3JzUHJvbWlzZS50aGVuKGVycm9ycyA9PiB7XG4gICAgICAgIGlmIChlcnJvcnMgPT09IHZvaWQgMCB8fCBlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5kZXggPT09IHZhbGlkYXRlSW5kZXggJiYgZW1pdEV2ZW50KHRydWUpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCBvdXRkYXRlZCBhbHJlYWR5XG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHsgY29tcCwgZXJyIH0gPSBlcnJvcnNbIDAgXVxuXG4gICAgICAgICAgZXJyICE9PSB2b2lkIDAgJiYgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgZW1pdEV2ZW50KGZhbHNlLCBjb21wKVxuXG4gICAgICAgICAgaWYgKGZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgZmlyc3QgbW91bnRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlRXJyb3IgPSBlcnJvcnMuZmluZCgoeyBjb21wIH0pID0+IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbXAuZm9jdXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgJiYgdm1Jc0Rlc3Ryb3llZChjb21wLiQpID09PSBmYWxzZVxuICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVycm9yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgYWN0aXZlRXJyb3IuY29tcC5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgICB2YWxpZGF0ZUluZGV4KytcblxuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgdHlwZW9mIGNvbXAucmVzZXRWYWxpZGF0aW9uID09PSAnZnVuY3Rpb24nICYmIGNvbXAucmVzZXRWYWxpZGF0aW9uKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3QgaW5kZXggPSB2YWxpZGF0ZUluZGV4ICsgMVxuXG4gICAgICB2YWxpZGF0ZSgpLnRoZW4odmFsID0+IHtcbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkICYmIHZhbGlkYXRpb24gc3VjY2VlZGVkXG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCAmJiB2YWwgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMub25TdWJtaXQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZW1pdCgnc3VibWl0JywgZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChldnQgIT09IHZvaWQgMCAmJiBldnQudGFyZ2V0ICE9PSB2b2lkIDAgJiYgdHlwZW9mIGV2dC50YXJnZXQuc3VibWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgZW1pdCgncmVzZXQnKVxuXG4gICAgICBuZXh0VGljaygoKSA9PiB7IC8vIGFsbG93IHVzZXJsYW5kIHRvIHJlc2V0IHZhbHVlcyBiZWZvcmVcbiAgICAgICAgcmVzZXRWYWxpZGF0aW9uKClcbiAgICAgICAgaWYgKHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1Jlc2V0Rm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgICBmb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXMgKCkge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdIFt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c10gW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpXG4gICAgICAgICAgfHwgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChyb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF0nKSwgZWwgPT4gZWwudGFiSW5kZXggPiAtMSlcblxuICAgICAgICB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB2b2lkIDAgJiYgdGFyZ2V0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm92aWRlKGZvcm1LZXksIHtcbiAgICAgIGJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMucHVzaCh2bVByb3h5KVxuICAgICAgfSxcblxuICAgICAgdW5iaW5kQ29tcG9uZW50ICh2bVByb3h5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmVnaXN0ZXJlZENvbXBvbmVudHMuaW5kZXhPZih2bVByb3h5KVxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgc2hvdWxkQWN0aXZhdGUgPSBmYWxzZVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzaG91bGRBY3RpdmF0ZSA9IHRydWVcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPT09IHRydWUgJiYgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIGZvY3VzKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHZhbGlkYXRlLFxuICAgICAgcmVzZXRWYWxpZGF0aW9uLFxuICAgICAgc3VibWl0LFxuICAgICAgcmVzZXQsXG4gICAgICBmb2N1cyxcbiAgICAgIGdldFZhbGlkYXRpb25Db21wb25lbnRzOiAoKSA9PiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZm9ybScsIHtcbiAgICAgIGNsYXNzOiAncS1mb3JtJyxcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIG9uU3VibWl0OiBzdWJtaXQsXG4gICAgICBvblJlc2V0OiByZXNldFxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiPHNjcmlwdCBzZXR1cD5cclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgeyB1c2VMb2FuU3RvcmUgfSBmcm9tIFwic3RvcmVzL3BhZ2VzL2xvYW5cIjtcclxuaW1wb3J0IHsgdXNlUmVxdWVzdHNFbXBsb3llZVN0b3JlIH0gZnJvbSBcInN0b3Jlcy9wYWdlcy9yZXF1ZXN0c0VtcGxveWVlXCI7XHJcbmltcG9ydCB7IE5vdGlmeSB9IGZyb20gXCJxdWFzYXJcIjtcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xyXG4gIG1vZGVsT3B0aW9uczogW10sXHJcbiAgYnV0dG9uTmFtZTogU3RyaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlUmVxdWVzdHNFbXBsb3llZSA9IHVzZVJlcXVlc3RzRW1wbG95ZWVTdG9yZSgpO1xyXG5jb25zdCBzdG9yZUxvYW4gPSB1c2VMb2FuU3RvcmUoKTtcclxuY29uc3QgcHJvbXB0ID0gcmVmKGZhbHNlKTtcclxuXHJcbmNvbnN0IG1vZGVsVHlwZSA9IHJlZihudWxsKTtcclxuY29uc3QgbW9kZWxUeXBlUmVmID0gcmVmKG51bGwpO1xyXG4vLyBjb25zdCBtb2RlbFR5cGVMb2FuUmVxdWVzdE9wdGlvbnMgPSBbXCJWYWxlXCIsIFwiUHJvZHVjdCBMb2FuXCIsIFwiUGFydGlhbCB0byBBL1JcIl07XHJcbmNvbnN0IG1vZGVsRGVzY3JpcHRpb25Mb2FuUmVxdWVzdCA9IHJlZihudWxsKTtcclxuY29uc3QgbW9kZWxEZXNjcmlwdGlvbkxvYW5SZXF1ZXN0UmVmID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbFByaWNlID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbFByaWNlUmVmID0gcmVmKG51bGwpO1xyXG5cclxuY29uc3QgbW9kZWxEb2N1bWVudFR5cGUgPSByZWYobnVsbCk7XHJcbmNvbnN0IG1vZGVsRG9jdW1lbnRUeXBlUmVmID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbERvY3VtZW50VHlwZU9wdGlvbnMgPSBbXCJCSVIgRk9STSBOTy4gMjMxNlwiXTtcclxuY29uc3QgbW9kZWxEb2N1bWVudERlc2NyaXB0aW9uID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbERvY3VtZW50RGVzY3JpcHRpb25SZWYgPSByZWYobnVsbCk7XHJcblxyXG5jb25zdCBtb2RlbExlYXZlU2VsZWN0ZWREYXlzID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbExlYXZlU2VsZWN0ZWREYXlzUmVmID0gcmVmKG51bGwpO1xyXG5jb25zdCBtb2RlbExlYXZlRGVzY3JpcHRpb24gPSByZWYobnVsbCk7XHJcbmNvbnN0IG1vZGVsTGVhdmVEZXNjcmlwdGlvblJlZiA9IHJlZihudWxsKTtcclxuXHJcbmZ1bmN0aW9uIHBvc3RSZXF1ZXN0KCkge1xyXG4gIGlmIChcclxuICAgIG1vZGVsVHlwZS52YWx1ZSA9PSBcIlZhbGVcIiB8fFxyXG4gICAgbW9kZWxUeXBlLnZhbHVlID09IFwiUHJvZHVjdCBMb2FuXCIgfHxcclxuICAgIG1vZGVsVHlwZS52YWx1ZSA9PSBcIlBhcnRpYWwgdG8gQS9SXCJcclxuICApIHtcclxuICAgIG1vZGVsVHlwZVJlZi52YWx1ZS52YWxpZGF0ZSgpO1xyXG4gICAgbW9kZWxEZXNjcmlwdGlvbkxvYW5SZXF1ZXN0UmVmLnZhbHVlLnZhbGlkYXRlKCk7XHJcbiAgICBtb2RlbFByaWNlUmVmLnZhbHVlLnZhbGlkYXRlKCk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBtb2RlbFR5cGVSZWYudmFsdWUuaGFzRXJyb3IgfHxcclxuICAgICAgbW9kZWxEZXNjcmlwdGlvbkxvYW5SZXF1ZXN0UmVmLnZhbHVlLmhhc0Vycm9yIHx8XHJcbiAgICAgIG1vZGVsUHJpY2VSZWYudmFsdWUuaGFzRXJyb3JcclxuICAgICkge1xyXG4gICAgICAvLyBIYXMgRXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZUxvYW4gPSB1c2VMb2FuU3RvcmUoKTtcclxuICAgIGNvbnN0IGhpZ2hlc3ROdW1iZXIgPSBNYXRoLm1heC5hcHBseShcclxuICAgICAgTWF0aCxcclxuICAgICAgc3RvcmVMb2FuLnJvd3MubWFwKGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgcmV0dXJuIG8ucmVmZXJlbmNlSWQ7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc3QgYXJyID0ge1xyXG4gICAgICByZWZlcmVuY2VJZDogaGlnaGVzdE51bWJlciArIDEsXHJcbiAgICAgIGRlZHVjdGlvblR5cGU6IFwiQ29tcGFueSBMb2FuXCIsXHJcbiAgICAgIHR5cGU6IG1vZGVsVHlwZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IG1vZGVsRGVzY3JpcHRpb25Mb2FuUmVxdWVzdC52YWx1ZSxcclxuICAgICAgcHJpY2U6IE51bWJlcihtb2RlbFByaWNlLnZhbHVlKSxcclxuICAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcclxuICAgICAgcGF5UGVyaW9kOiBcIlBlbmRpbmdcIixcclxuICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICB9O1xyXG4gICAgc3RvcmVMb2FuLnJvd3MucHVzaChhcnIpO1xyXG5cclxuICAgIHN0b3JlUmVxdWVzdHNFbXBsb3llZS5yb3dzLnB1c2goYXJyKTtcclxuXHJcbiAgICBtb2RlbFR5cGUudmFsdWUgPSBudWxsO1xyXG4gICAgbW9kZWxEZXNjcmlwdGlvbkxvYW5SZXF1ZXN0LnZhbHVlID0gbnVsbDtcclxuICAgIG1vZGVsUHJpY2UudmFsdWUgPSBudWxsO1xyXG5cclxuICAgIHByb21wdC52YWx1ZSA9IGZhbHNlO1xyXG5cclxuICAgIE5vdGlmeS5jcmVhdGUoe1xyXG4gICAgICBpY29uOiBcImRvbmVcIixcclxuICAgICAgY29sb3I6IFwicG9zaXRpdmVcIixcclxuICAgICAgbWVzc2FnZTogXCJTdWJtaXR0ZWQhXCIsXHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKG1vZGVsVHlwZS52YWx1ZSA9PSBcIkRvY3VtZW50XCIpIHtcclxuICAgIG1vZGVsVHlwZVJlZi52YWx1ZS52YWxpZGF0ZSgpO1xyXG4gICAgbW9kZWxEb2N1bWVudFR5cGVSZWYudmFsdWUudmFsaWRhdGUoKTtcclxuICAgIG1vZGVsRG9jdW1lbnREZXNjcmlwdGlvblJlZi52YWx1ZS52YWxpZGF0ZSgpO1xyXG4gICAgaWYgKFxyXG4gICAgICBtb2RlbFR5cGVSZWYudmFsdWUuaGFzRXJyb3IgfHxcclxuICAgICAgbW9kZWxEb2N1bWVudFR5cGVSZWYudmFsdWUuaGFzRXJyb3IgfHxcclxuICAgICAgbW9kZWxEb2N1bWVudERlc2NyaXB0aW9uUmVmLnZhbHVlLmhhc0Vycm9yXHJcbiAgICApIHtcclxuICAgICAgLy8gSGFzIEVycm9yXHJcbiAgICB9XHJcbiAgICBjb25zdCBoaWdoZXN0TnVtYmVyID0gTWF0aC5tYXguYXBwbHkoXHJcbiAgICAgIE1hdGgsXHJcbiAgICAgIHN0b3JlUmVxdWVzdHNFbXBsb3llZS5yb3dzLm1hcChmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHJldHVybiBvLnJlZmVyZW5jZUlkO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkb2N1bWVudEFyciA9IHtcclxuICAgICAgcmVmZXJlbmNlSWQ6IGhpZ2hlc3ROdW1iZXIgKyAxLFxyXG4gICAgICB0eXBlOiBtb2RlbERvY3VtZW50VHlwZS52YWx1ZSxcclxuICAgICAgZGVzY3JpcHRpb246IG1vZGVsRG9jdW1lbnREZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcclxuICAgICAgcmVtYXJrczogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVSZXF1ZXN0c0VtcGxveWVlLnJvd3MucHVzaChkb2N1bWVudEFycik7XHJcblxyXG4gICAgcHJvbXB0LnZhbHVlID0gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChtb2RlbFR5cGUudmFsdWUgPT0gXCJMZWF2ZVwiKSB7XHJcbiAgICBtb2RlbFR5cGVSZWYudmFsdWUudmFsaWRhdGUoKTtcclxuICAgIG1vZGVsTGVhdmVTZWxlY3RlZERheXNSZWYudmFsdWUudmFsaWRhdGUoKTtcclxuICAgIG1vZGVsTGVhdmVEZXNjcmlwdGlvblJlZi52YWx1ZS52YWxpZGF0ZSgpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgbW9kZWxUeXBlUmVmLnZhbHVlLmhhc0Vycm9yIHx8XHJcbiAgICAgIG1vZGVsTGVhdmVTZWxlY3RlZERheXNSZWYudmFsdWUuaGFzRXJyb3IgfHxcclxuICAgICAgbW9kZWxMZWF2ZURlc2NyaXB0aW9uUmVmLnZhbHVlLmhhc0Vycm9yXHJcbiAgICApIHtcclxuICAgICAgLy8gSGFzIEVycm9yXHJcbiAgICB9XHJcbiAgICBjb25zdCBoaWdoZXN0TnVtYmVyID0gTWF0aC5tYXguYXBwbHkoXHJcbiAgICAgIE1hdGgsXHJcbiAgICAgIHN0b3JlUmVxdWVzdHNFbXBsb3llZS5yb3dzLm1hcChmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHJldHVybiBvLnJlZmVyZW5jZUlkO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvL0ZJWE1FOiBBZGQgUHVzaCB0byBUYWJsZSBIZXJlXHJcbiAgICBjb25zdCBsZWF2ZUFyciA9IHtcclxuICAgICAgcmVmZXJlbmNlSWQ6IGhpZ2hlc3ROdW1iZXIgKyAxLFxyXG4gICAgICB0eXBlOiBtb2RlbFR5cGUudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBtb2RlbExlYXZlRGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXHJcbiAgICAgIHJlbWFya3M6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3JlUmVxdWVzdHNFbXBsb3llZS5yb3dzLnB1c2gobGVhdmVBcnIpO1xyXG4gICAgcHJvbXB0LnZhbHVlID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldExvYW5SZXF1ZXN0Rm9ybSgpIHtcclxuICBtb2RlbFR5cGUudmFsdWUgPSBudWxsO1xyXG4gIG1vZGVsRGVzY3JpcHRpb25Mb2FuUmVxdWVzdC52YWx1ZSA9IG51bGw7XHJcbiAgbW9kZWxQcmljZS52YWx1ZSA9IG51bGw7XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjx0ZW1wbGF0ZT5cclxuICA8cS1idG4gOmxhYmVsPVwiYnV0dG9uTmFtZVwiIGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cInByb21wdCA9IHRydWVcIiAvPlxyXG4gIDxkaXY+XHJcbiAgICA8cS1kaWFsb2cgdi1tb2RlbD1cInByb21wdFwiIHBlcnNpc3RlbnQ+XHJcbiAgICAgIDxxLWNhcmQgc3R5bGU9XCJtaW4td2lkdGg6IDUwMHB4XCI+XHJcbiAgICAgICAgPHEtZm9ybSBAc3VibWl0LnByZXZlbnQ9XCJwb3N0UmVxdWVzdFwiIGF1dG9mb2N1cz5cclxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyBidXR0b25OYW1lIH19IEZvcm08L2Rpdj5cclxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XHJcbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJxLXB0LW5vbmVcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1tYi0zIHR3LXdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1jb250ZW50LWNlbnRlciB0dy1tci0zXCI+VHlwZTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxxLXNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICBmaWxsZWRcclxuICAgICAgICAgICAgICAgICAgcmVmPVwibW9kZWxUeXBlUmVmXCJcclxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwibW9kZWxPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiW21vZGVsVHlwZSA9PSBudWxsID8gJ3R3LXctMzInIDogJ3R3LXctbWF4J11cIlxyXG4gICAgICAgICAgICAgICAgICA6cnVsZXM9XCJbKHZhbCkgPT4gISF2YWwgfHwgJ0ZpZWxkIGlzIHJlcXVpcmVkJ11cIlxyXG4gICAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgbW9kZWxUeXBlID09ICdWYWxlJyB8fFxyXG4gICAgICAgICAgICAgICAgICBtb2RlbFR5cGUgPT0gJ1Byb2R1Y3QgTG9hbicgfHxcclxuICAgICAgICAgICAgICAgICAgbW9kZWxUeXBlID09ICdQYXJ0aWFsIHRvIEEvUidcclxuICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5EZXNjcmlwdGlvbjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3LXBiLTMgdHctcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxxLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJtb2RlbERlc2NyaXB0aW9uTG9hblJlcXVlc3RSZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsRGVzY3JpcHRpb25Mb2FuUmVxdWVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9ncm93XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInR3LW1heC13LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiWyh2YWwpID0+ICEhdmFsIHx8ICdGaWVsZCBpcyByZXF1aXJlZCddXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhenktcnVsZXNcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3LWNvbnRlbnQtY2VudGVyIHR3LW1yLTNcIj5QcmljZTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9XCJtb2RlbFByaWNlUmVmXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9kZWxQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgOmRlbnNlPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidHctdy00MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHZhbCkgPT4gISF2YWwgfHwgJ0ZpZWxkIGlzIHJlcXVpcmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICh2YWwpID0+IC9eXFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbCkgfHwgJ0ludmFsaWQgcHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIF1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhenktcnVsZXNcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwibW9kZWxUeXBlID09ICdEb2N1bWVudCdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1mbGV4IHR3LW1iLTMgdHctd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1jb250ZW50LWNlbnRlciB0dy1tci0zXCI+RG9jdW1lbnQgVHlwZTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cS1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwibW9kZWxEb2N1bWVudFR5cGVSZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsRG9jdW1lbnRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwibW9kZWxEb2N1bWVudFR5cGVPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIltcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxEb2N1bWVudFR5cGUgPT0gbnVsbCA/ICd0dy13LTMyJyA6ICd0dy13LW1heCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBdXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsodmFsKSA9PiAhIXZhbCB8fCAnRmllbGQgaXMgcmVxdWlyZWQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+RGVzY3JpcHRpb246PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1wYi0zIHR3LXB4LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPVwibW9kZWxEb2N1bWVudERlc2NyaXB0aW9uUmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbERvY3VtZW50RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvZ3Jvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0dy1tYXgtdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsodmFsKSA9PiAhIXZhbCB8fCAnRmllbGQgaXMgcmVxdWlyZWQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYXp5LXJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cIm1vZGVsVHlwZSA9PSAnTGVhdmUnXCIgY2xhc3M9XCJ0dy13LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1mbGV4IHR3LWp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHEtZGF0ZSB2LW1vZGVsPVwibW9kZWxMZWF2ZVNlbGVjdGVkRGF5c1wiIG11bHRpcGxlIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICByZWY9XCJtb2RlbExlYXZlU2VsZWN0ZWREYXlzUmVmXCJcclxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsTGVhdmVTZWxlY3RlZERheXNcIlxyXG4gICAgICAgICAgICAgICAgICByZXZlcnNlLWZpbGwtbWFza1xyXG4gICAgICAgICAgICAgICAgICBtYXNrPVwiIyMjIy0jIy0jIyAmbmJzcDtcIlxyXG4gICAgICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICBhdXRvZ3Jvd1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJsZXNzXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L3EtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PkRlc2NyaXB0aW9uOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInR3LXBiLTMgdHctcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm1vZGVsTGVhdmVEZXNjcmlwdGlvblJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1vZGVsTGVhdmVEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2dyb3dcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInR3LW1heC13LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlsodmFsKSA9PiAhIXZhbCB8fCAnRmllbGQgaXMgcmVxdWlyZWQnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eS1ydWxlc1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxxLWJ0blxyXG4gICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxyXG4gICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0TG9hblJlcXVlc3RGb3JtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHEtYnRuXHJcbiAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgIDpsYWJlbD1cImJ1dHRvbk5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidHctYmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgPC9xLWZvcm0+XHJcbiAgICAgIDwvcS1jYXJkPlxyXG4gICAgPC9xLWRpYWxvZz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLyogQWRkIHlvdXIgY29tcG9uZW50IHN0eWxlcyBoZXJlICovXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6WyJsYW5nIiwibWFzayIsImxvY2FsZSIsIm1vZGVsIiwiZGF0ZSIsImRheXMiLCJ5ZWFyIiwidmlldyIsImRheSIsImZvY3VzIiwicmVmIiwidmFsaWQiLCJjb21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWUsU0FBQSxXQUFZO0FBQ3pCLFFBQU0sUUFBUSxvQkFBSSxJQUFLO0FBRXZCLFNBQU87QUFBQSxJQUNMLFVBRUksU0FBVSxLQUFLLEtBQUs7QUFDcEIsYUFBTyxNQUFPLFNBQVUsU0FDbkIsTUFBTyxPQUFRLE1BQ2hCLE1BQU87QUFBQSxJQUNaO0FBQUEsSUFFSCxnQkFFSSxTQUFVLEtBQUssSUFBSTtBQUNuQixhQUFPLE1BQU8sU0FBVSxTQUNuQixNQUFPLE9BQVEsR0FBSSxJQUNwQixNQUFPO0FBQUEsSUFDWjtBQUFBLEVBQ0o7QUFDSDtBQ2ZBLE1BQU0sU0FBUztBQUFBLEVBQ2I7QUFBQSxFQUFLO0FBQUEsRUFBRztBQUFBLEVBQUk7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQUs7QUFBQSxFQUFLO0FBQUEsRUFBSztBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFDakQ7QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUFBLEVBQU07QUFBQSxFQUFNO0FBQUEsRUFBTTtBQUNsRDtBQUtPLFNBQVMsVUFBVyxJQUFJLElBQUksSUFBSTtBQUNyQyxNQUFJLE9BQU8sVUFBVSxTQUFTLEtBQUssRUFBRSxNQUFNLGlCQUFpQjtBQUMxRCxTQUFLLEdBQUcsUUFBUztBQUNqQixTQUFLLEdBQUcsU0FBUSxJQUFLO0FBQ3JCLFNBQUssR0FBRyxZQUFhO0FBQUEsRUFDdEI7QUFDRCxTQUFPLElBQUks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
