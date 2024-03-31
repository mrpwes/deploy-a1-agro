import { u as useFieldProps, a as useFormProps, b as useFieldEmits, c as useFormInputNameAttr, d as useFieldState, e as useField, f as fieldValueIsFilled, g as useKeyComposition } from "./use-key-composition.f687006c.js";
import { r as ref, h as watch, i as nextTick, s as shouldIgnoreKey, j as computed, k as createComponent, l as onBeforeUnmount, m as onMounted, p as h, q as injectProp, t as getCurrentInstance, v as stop } from "./index.cc9bdf73.js";
import { a as addFocusFn } from "./focus-manager.71507900.js";
const NAMED_MASKS = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
};
const TOKENS = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (v) => v.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (v) => v.toLocaleLowerCase() }
};
const KEYS = Object.keys(TOKENS);
KEYS.forEach((key) => {
  TOKENS[key].regex = new RegExp(TOKENS[key].pattern);
});
const tokenRegexMask = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + KEYS.join("") + "])|(.)", "g"), escRegex = /[.*+?^${}()|[\]\\]/g;
const MARKER = String.fromCharCode(1);
const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function useMask(props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;
  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());
  function getIsTypeText() {
    return props.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(props.type);
  }
  watch(() => props.type + props.autogrow, updateMaskInternals);
  watch(() => props.mask, (v) => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    } else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit("update:modelValue", val);
    }
  });
  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });
  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });
  function getInitialMaskedValue() {
    updateMaskInternals();
    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));
      return props.fillMask !== false ? fillWithMask(masked) : masked;
    }
    return props.modelValue;
  }
  function getPaddedMaskMarked(size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size);
    }
    let pad = "", localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);
    if (padPos > -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }
      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }
    return localMaskMarked;
  }
  function updateMaskInternals() {
    hasMask.value = props.mask !== void 0 && props.mask.length !== 0 && getIsTypeText();
    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = "";
      maskReplaced = "";
      return;
    }
    const localComputedMask = NAMED_MASKS[props.mask] === void 0 ? props.mask : NAMED_MASKS[props.mask], fillChar = typeof props.fillMask === "string" && props.fillMask.length !== 0 ? props.fillMask.slice(0, 1) : "_", fillCharEscaped = fillChar.replace(escRegex, "\\$&"), unmask = [], extract = [], mask = [];
    let firstMatch = props.reverseFillMask === true, unmaskChar = "", negateChar = "";
    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[token];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push("(?:" + negateChar + "+)?(" + c.pattern + "+)?(?:" + negateChar + "+)?(" + c.pattern + "+)?");
          firstMatch = false;
        }
        extract.push("(?:" + negateChar + "+)?(" + c.pattern + ")?");
      } else if (esc !== void 0) {
        unmaskChar = "\\" + (esc === "\\" ? "" : esc);
        mask.push(esc);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      } else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === "\\" ? "\\\\\\\\" : c.replace(escRegex, "\\\\$&");
        mask.push(c);
        unmask.push("([^" + unmaskChar + "]+)?" + unmaskChar + "?");
      }
    });
    const unmaskMatcher = new RegExp(
      "^" + unmask.join("") + "(" + (unmaskChar === "" ? "." : "[^" + unmaskChar + "]") + "+)?" + (unmaskChar === "" ? "" : "[" + unmaskChar + "]*") + "$"
    ), extractLast = extract.length - 1, extractMatcher = extract.map((re, index) => {
      if (index === 0 && props.reverseFillMask === true) {
        return new RegExp("^" + fillCharEscaped + "*" + re);
      } else if (index === extractLast) {
        return new RegExp(
          "^" + re + "(" + (negateChar === "" ? "." : negateChar) + "+)?" + (props.reverseFillMask === true ? "$" : fillCharEscaped + "*")
        );
      }
      return new RegExp("^" + re);
    });
    computedMask = mask;
    computedUnmask = (val) => {
      const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join("");
      }
      const extractMatch = [], extractMatcherLength = extractMatcher.length;
      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[i].exec(str);
        if (m === null) {
          break;
        }
        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join("");
      }
      return val;
    };
    maskMarked = mask.map((v) => typeof v === "string" ? v : MARKER).join("");
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }
  function updateMaskValue(rawVal, updateMaskInternalsFlag, inputType) {
    const inp = inputRef.value, end = inp.selectionEnd, endReverse = inp.value.length - end, unmasked = unmaskValue(rawVal);
    updateMaskInternalsFlag === true && updateMaskInternals();
    const preMasked = maskValue(unmasked), masked = props.fillMask !== false ? fillWithMask(preMasked) : preMasked, changed = innerValue.value !== masked;
    inp.value !== masked && (inp.value = masked);
    changed === true && (innerValue.value = masked);
    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (inputType === "insertFromPaste" && props.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[i] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(inputType) > -1) {
        const cursor = props.reverseFillMask === true ? end === 0 ? masked.length > preMasked.length ? 1 : 0 : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1 : end;
        inp.setSelectionRange(cursor, cursor, "forward");
        return;
      }
      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));
          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, "forward");
          } else {
            moveCursor.rightReverse(inp, cursor);
          }
        } else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, "backward");
        }
      } else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        } else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });
    const val = props.unmaskedValue === true ? unmaskValue(masked) : masked;
    if (String(props.modelValue) !== val && (props.modelValue !== null || val !== "")) {
      emitValue(val, true);
    }
  }
  function moveCursorForPaste(inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));
    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;
    inp.setSelectionRange(start, end, "forward");
  }
  const moveCursor = {
    left(inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break;
        }
      }
      if (i < 0 && maskMarked[cursor] !== void 0 && maskMarked[cursor] !== MARKER) {
        return moveCursor.right(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    right(inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (maskMarked[i] === MARKER) {
          cursor = i;
          break;
        } else if (maskMarked[i - 1] === MARKER) {
          cursor = i;
        }
      }
      if (i > limit && maskMarked[cursor - 1] !== void 0 && maskMarked[cursor - 1] !== MARKER) {
        return moveCursor.left(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    },
    leftReverse(inp, cursor) {
      const localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);
      for (; i >= 0; i--) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          break;
        } else if (localMaskMarked[i] === MARKER) {
          cursor = i;
          if (i === 0) {
            break;
          }
        }
      }
      if (i < 0 && localMaskMarked[cursor] !== void 0 && localMaskMarked[cursor] !== MARKER) {
        return moveCursor.rightReverse(inp, 0);
      }
      cursor >= 0 && inp.setSelectionRange(cursor, cursor, "backward");
    },
    rightReverse(inp, cursor) {
      const limit = inp.value.length, localMaskMarked = getPaddedMaskMarked(limit), noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);
      for (; i <= limit; i++) {
        if (localMaskMarked[i - 1] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break;
        }
      }
      if (i > limit && localMaskMarked[cursor - 1] !== void 0 && localMaskMarked[cursor - 1] !== MARKER) {
        return moveCursor.leftReverse(inp, limit);
      }
      inp.setSelectionRange(cursor, cursor, "forward");
    }
  };
  function onMaskedClick(e) {
    emit("click", e);
    selectionAnchor = void 0;
  }
  function onMaskedKeydown(e) {
    emit("keydown", e);
    if (shouldIgnoreKey(e) === true || e.altKey === true) {
      return;
    }
    const inp = inputRef.value, start = inp.selectionStart, end = inp.selectionEnd;
    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === "forward" ? start : end;
      }
      const fn = moveCursor[(e.keyCode === 39 ? "right" : "left") + (props.reverseFillMask === true ? "Reverse" : "")];
      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);
      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), "forward");
      }
    } else if (e.keyCode === 8 && props.reverseFillMask !== true && start === end) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, "backward");
    } else if (e.keyCode === 46 && props.reverseFillMask === true && start === end) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, "forward");
    }
  }
  function maskValue(val) {
    if (val === void 0 || val === null || val === "") {
      return "";
    }
    if (props.reverseFillMask === true) {
      return maskValueReverse(val);
    }
    const mask = computedMask;
    let valIndex = 0, output = "";
    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const valChar = val[valIndex], maskDef = mask[maskIndex];
      if (typeof maskDef === "string") {
        output += maskDef;
        valChar === maskDef && valIndex++;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar;
        valIndex++;
      } else {
        return output;
      }
    }
    return output;
  }
  function maskValueReverse(val) {
    const mask = computedMask, firstTokenIndex = maskMarked.indexOf(MARKER);
    let valIndex = val.length - 1, output = "";
    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex > -1; maskIndex--) {
      const maskDef = mask[maskIndex];
      let valChar = val[valIndex];
      if (typeof maskDef === "string") {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      } else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[valIndex];
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar));
      } else {
        return output;
      }
    }
    return output;
  }
  function unmaskValue(val) {
    return typeof val !== "string" || computedUnmask === void 0 ? typeof val === "number" ? computedUnmask("" + val) : val : computedUnmask(val);
  }
  function fillWithMask(val) {
    if (maskReplaced.length - val.length <= 0) {
      return val;
    }
    return props.reverseFillMask === true && val.length !== 0 ? maskReplaced.slice(0, -val.length) + val : val + maskReplaced.slice(val.length);
  }
  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  };
}
function useFileFormDomProps(props, typeGuard) {
  function getFormDomProps() {
    const model = props.modelValue;
    try {
      const dt = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      if (Object(model) === model) {
        ("length" in model ? Array.from(model) : [model]).forEach((file) => {
          dt.items.add(file);
        });
      }
      return {
        files: dt.files
      };
    } catch (e) {
      return {
        files: void 0
      };
    }
  }
  return typeGuard === true ? computed(() => {
    if (props.type !== "file") {
      return;
    }
    return getFormDomProps();
  }) : computed(getFormDomProps);
}
var QInput = createComponent({
  name: "QInput",
  inheritAttrs: false,
  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,
    modelValue: { required: false },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;
    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = useMask(props, emit, emitValue, inputRef);
    const formDomProps = useFileFormDomProps(props, true);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const onComposition = useKeyComposition(onInput);
    const state = useFieldState();
    const isTextarea = computed(
      () => props.type === "textarea" || props.autogrow === true
    );
    const isTypeText = computed(
      () => isTextarea.value === true || ["text", "search", "url", "tel", "password"].includes(props.type)
    );
    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        evt.onClick = onMaskedClick;
      }
      if (props.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }
      return evt;
    });
    const inputAttrs = computed(() => {
      const attrs2 = {
        tabindex: 0,
        "data-autofocus": props.autofocus === true || void 0,
        rows: props.type === "textarea" ? 6 : void 0,
        "aria-label": props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };
      if (isTextarea.value === false) {
        attrs2.type = props.type;
      }
      if (props.autogrow === true) {
        attrs2.rows = 1;
      }
      return attrs2;
    });
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });
    watch(() => props.modelValue, (v) => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;
          if (String(v) === emitCachedValue) {
            return;
          }
        }
        updateMaskValue(v);
      } else if (innerValue.value !== v) {
        innerValue.value = v;
        if (props.type === "number" && temp.hasOwnProperty("value") === true) {
          if (typedNumber === true) {
            typedNumber = false;
          } else {
            delete temp.value;
          }
        }
      }
      props.autogrow === true && nextTick(adjustHeight);
    });
    watch(() => props.autogrow, (val) => {
      if (val === true) {
        nextTick(adjustHeight);
      } else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = "auto";
      }
    });
    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });
    function focus() {
      addFocusFn(() => {
        const el = document.activeElement;
        if (inputRef.value !== null && inputRef.value !== el && (el === null || el.id !== state.targetUid.value)) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }
    function select() {
      inputRef.value !== null && inputRef.value.select();
    }
    function onPaste(e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }
      emit("paste", e);
    }
    function onInput(e) {
      if (!e || !e.target) {
        return;
      }
      if (props.type === "file") {
        emit("update:modelValue", e.target.files);
        return;
      }
      const val = e.target.value;
      if (e.target.qComposing === true) {
        temp.value = val;
        return;
      }
      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      } else {
        emitValue(val);
        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;
          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }
      props.autogrow === true && adjustHeight();
    }
    function onAnimationend(e) {
      emit("animationend", e);
      adjustHeight();
    }
    function emitValue(val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;
        if (props.type !== "number" && temp.hasOwnProperty("value") === true) {
          delete temp.value;
        }
        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;
          stopWatcher === true && (stopValueWatcher = true);
          emit("update:modelValue", val);
          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }
        emitValueFn = void 0;
      };
      if (props.type === "number") {
        typedNumber = true;
        temp.value = val;
      }
      if (props.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      } else {
        emitValueFn();
      }
    }
    function adjustHeight() {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          const { scrollTop } = inp;
          const { overflowY, maxHeight } = $q.platform.is.firefox === true ? {} : window.getComputedStyle(inp);
          const changeOverflow = overflowY !== void 0 && overflowY !== "scroll";
          changeOverflow === true && (inp.style.overflowY = "hidden");
          parentStyle.marginBottom = inp.scrollHeight - 1 + "px";
          inp.style.height = "1px";
          inp.style.height = inp.scrollHeight + "px";
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? "auto" : "hidden");
          parentStyle.marginBottom = "";
          inp.scrollTop = scrollTop;
        }
      });
    }
    function onChange(e) {
      onComposition(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      emit("change", e.target.value);
    }
    function onFinishEditing(e) {
      e !== void 0 && stop(e);
      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }
      emitValueFn !== void 0 && emitValueFn();
      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;
      props.type !== "file" && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : "";
        }
      });
    }
    function getCurValue() {
      return temp.hasOwnProperty("value") === true ? temp.value : innerValue.value !== void 0 ? innerValue.value : "";
    }
    onBeforeUnmount(() => {
      onFinishEditing();
    });
    onMounted(() => {
      props.autogrow === true && adjustHeight();
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-${isTextarea.value === true ? "textarea" : "input"}` + (props.autogrow === true ? " q-textarea--autogrow" : "")
      ),
      hasShadow: computed(
        () => props.type !== "file" && typeof props.shadowText === "string" && props.shadowText.length !== 0
      ),
      inputRef,
      emitValue,
      hasValue,
      floatingLabel: computed(
        () => hasValue.value === true && (props.type !== "number" || isNaN(innerValue.value) === false) || fieldValueIsFilled(props.displayValue)
      ),
      getControl: () => {
        return h(isTextarea.value === true ? "textarea" : "input", {
          ref: inputRef,
          class: [
            "q-field__native q-placeholder",
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...props.type !== "file" ? { value: getCurValue() } : formDomProps.value
        });
      },
      getShadowControl: () => {
        return h("div", {
          class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (isTextarea.value === true ? "" : " text-no-wrap")
        }, [
          h("span", { class: "invisible" }, getCurValue()),
          h("span", props.shadowText)
        ]);
      }
    });
    const renderFn = useField(state);
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return renderFn;
  }
});
export { QInput as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUlucHV0LjcyM2NmZjkzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L3VzZS1tYXNrLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmlsZS1kb20tcHJvcHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2lucHV0L1FJbnB1dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWYsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbi8vIGxlYXZlIE5BTUVEX01BU0tTIGF0IHRvcCBvZiBmaWxlIChjb2RlIHJlZmVyZW5jZWQgZnJvbSBkb2NzKVxuY29uc3QgTkFNRURfTUFTS1MgPSB7XG4gIGRhdGU6ICcjIyMjLyMjLyMjJyxcbiAgZGF0ZXRpbWU6ICcjIyMjLyMjLyMjICMjOiMjJyxcbiAgdGltZTogJyMjOiMjJyxcbiAgZnVsbHRpbWU6ICcjIzojIzojIycsXG4gIHBob25lOiAnKCMjIykgIyMjIC0gIyMjIycsXG4gIGNhcmQ6ICcjIyMjICMjIyMgIyMjIyAjIyMjJ1xufVxuXG5jb25zdCBUT0tFTlMgPSB7XG4gICcjJzogeyBwYXR0ZXJuOiAnW1xcXFxkXScsIG5lZ2F0ZTogJ1teXFxcXGRdJyB9LFxuXG4gIFM6IHsgcGF0dGVybjogJ1thLXpBLVpdJywgbmVnYXRlOiAnW15hLXpBLVpdJyB9LFxuICBOOiB7IHBhdHRlcm46ICdbMC05YS16QS1aXScsIG5lZ2F0ZTogJ1teMC05YS16QS1aXScgfSxcblxuICBBOiB7IHBhdHRlcm46ICdbYS16QS1aXScsIG5lZ2F0ZTogJ1teYS16QS1aXScsIHRyYW5zZm9ybTogdiA9PiB2LnRvTG9jYWxlVXBwZXJDYXNlKCkgfSxcbiAgYTogeyBwYXR0ZXJuOiAnW2EtekEtWl0nLCBuZWdhdGU6ICdbXmEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZUxvd2VyQ2FzZSgpIH0sXG5cbiAgWDogeyBwYXR0ZXJuOiAnWzAtOWEtekEtWl0nLCBuZWdhdGU6ICdbXjAtOWEtekEtWl0nLCB0cmFuc2Zvcm06IHYgPT4gdi50b0xvY2FsZVVwcGVyQ2FzZSgpIH0sXG4gIHg6IHsgcGF0dGVybjogJ1swLTlhLXpBLVpdJywgbmVnYXRlOiAnW14wLTlhLXpBLVpdJywgdHJhbnNmb3JtOiB2ID0+IHYudG9Mb2NhbGVMb3dlckNhc2UoKSB9XG59XG5cbmNvbnN0IEtFWVMgPSBPYmplY3Qua2V5cyhUT0tFTlMpXG5LRVlTLmZvckVhY2goa2V5ID0+IHtcbiAgVE9LRU5TWyBrZXkgXS5yZWdleCA9IG5ldyBSZWdFeHAoVE9LRU5TWyBrZXkgXS5wYXR0ZXJuKVxufSlcblxuY29uc3RcbiAgdG9rZW5SZWdleE1hc2sgPSBuZXcgUmVnRXhwKCdcXFxcXFxcXChbXi4qKz9eJHt9KCl8KFtcXFxcXV0pfChbLiorP14ke30oKXxbXFxcXF1dKXwoWycgKyBLRVlTLmpvaW4oJycpICsgJ10pfCguKScsICdnJyksXG4gIGVzY1JlZ2V4ID0gL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nXG5cbmNvbnN0IE1BUktFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMSlcblxuZXhwb3J0IGNvbnN0IHVzZU1hc2tQcm9wcyA9IHtcbiAgbWFzazogU3RyaW5nLFxuICByZXZlcnNlRmlsbE1hc2s6IEJvb2xlYW4sXG4gIGZpbGxNYXNrOiBbIEJvb2xlYW4sIFN0cmluZyBdLFxuICB1bm1hc2tlZFZhbHVlOiBCb29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgZW1pdCwgZW1pdFZhbHVlLCBpbnB1dFJlZikge1xuICBsZXQgbWFza01hcmtlZCwgbWFza1JlcGxhY2VkLCBjb21wdXRlZE1hc2ssIGNvbXB1dGVkVW5tYXNrLCBwYXN0ZWRUZXh0U3RhcnQsIHNlbGVjdGlvbkFuY2hvclxuXG4gIGNvbnN0IGhhc01hc2sgPSByZWYobnVsbClcbiAgY29uc3QgaW5uZXJWYWx1ZSA9IHJlZihnZXRJbml0aWFsTWFza2VkVmFsdWUoKSlcblxuICBmdW5jdGlvbiBnZXRJc1R5cGVUZXh0ICgpIHtcbiAgICByZXR1cm4gcHJvcHMuYXV0b2dyb3cgPT09IHRydWVcbiAgICAgIHx8IFsgJ3RleHRhcmVhJywgJ3RleHQnLCAnc2VhcmNoJywgJ3VybCcsICd0ZWwnLCAncGFzc3dvcmQnIF0uaW5jbHVkZXMocHJvcHMudHlwZSlcbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnR5cGUgKyBwcm9wcy5hdXRvZ3JvdywgdXBkYXRlTWFza0ludGVybmFscylcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5tYXNrLCB2ID0+IHtcbiAgICBpZiAodiAhPT0gdm9pZCAwKSB7XG4gICAgICB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSB1bm1hc2tWYWx1ZShpbm5lclZhbHVlLnZhbHVlKVxuICAgICAgdXBkYXRlTWFza0ludGVybmFscygpXG4gICAgICBwcm9wcy5tb2RlbFZhbHVlICE9PSB2YWwgJiYgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgfVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZpbGxNYXNrICsgcHJvcHMucmV2ZXJzZUZpbGxNYXNrLCAoKSA9PiB7XG4gICAgaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSwgdHJ1ZSlcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy51bm1hc2tlZFZhbHVlLCAoKSA9PiB7XG4gICAgaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVNYXNrVmFsdWUoaW5uZXJWYWx1ZS52YWx1ZSlcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRJbml0aWFsTWFza2VkVmFsdWUgKCkge1xuICAgIHVwZGF0ZU1hc2tJbnRlcm5hbHMoKVxuXG4gICAgaWYgKGhhc01hc2sudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG1hc2tlZCA9IG1hc2tWYWx1ZSh1bm1hc2tWYWx1ZShwcm9wcy5tb2RlbFZhbHVlKSlcblxuICAgICAgcmV0dXJuIHByb3BzLmZpbGxNYXNrICE9PSBmYWxzZVxuICAgICAgICA/IGZpbGxXaXRoTWFzayhtYXNrZWQpXG4gICAgICAgIDogbWFza2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzLm1vZGVsVmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZGRlZE1hc2tNYXJrZWQgKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IG1hc2tNYXJrZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWFza01hcmtlZC5zbGljZSgtc2l6ZSlcbiAgICB9XG5cbiAgICBsZXQgcGFkID0gJycsIGxvY2FsTWFza01hcmtlZCA9IG1hc2tNYXJrZWRcbiAgICBjb25zdCBwYWRQb3MgPSBsb2NhbE1hc2tNYXJrZWQuaW5kZXhPZihNQVJLRVIpXG5cbiAgICBpZiAocGFkUG9zID4gLTEpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzaXplIC0gbG9jYWxNYXNrTWFya2VkLmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBwYWQgKz0gTUFSS0VSXG4gICAgICB9XG5cbiAgICAgIGxvY2FsTWFza01hcmtlZCA9IGxvY2FsTWFza01hcmtlZC5zbGljZSgwLCBwYWRQb3MpICsgcGFkICsgbG9jYWxNYXNrTWFya2VkLnNsaWNlKHBhZFBvcylcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxNYXNrTWFya2VkXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVNYXNrSW50ZXJuYWxzICgpIHtcbiAgICBoYXNNYXNrLnZhbHVlID0gcHJvcHMubWFzayAhPT0gdm9pZCAwXG4gICAgICAmJiBwcm9wcy5tYXNrLmxlbmd0aCAhPT0gMFxuICAgICAgJiYgZ2V0SXNUeXBlVGV4dCgpXG5cbiAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbXB1dGVkVW5tYXNrID0gdm9pZCAwXG4gICAgICBtYXNrTWFya2VkID0gJydcbiAgICAgIG1hc2tSZXBsYWNlZCA9ICcnXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgbG9jYWxDb21wdXRlZE1hc2sgPSBOQU1FRF9NQVNLU1sgcHJvcHMubWFzayBdID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5tYXNrXG4gICAgICAgIDogTkFNRURfTUFTS1NbIHByb3BzLm1hc2sgXSxcbiAgICAgIGZpbGxDaGFyID0gdHlwZW9mIHByb3BzLmZpbGxNYXNrID09PSAnc3RyaW5nJyAmJiBwcm9wcy5maWxsTWFzay5sZW5ndGggIT09IDBcbiAgICAgICAgPyBwcm9wcy5maWxsTWFzay5zbGljZSgwLCAxKVxuICAgICAgICA6ICdfJyxcbiAgICAgIGZpbGxDaGFyRXNjYXBlZCA9IGZpbGxDaGFyLnJlcGxhY2UoZXNjUmVnZXgsICdcXFxcJCYnKSxcbiAgICAgIHVubWFzayA9IFtdLFxuICAgICAgZXh0cmFjdCA9IFtdLFxuICAgICAgbWFzayA9IFtdXG5cbiAgICBsZXRcbiAgICAgIGZpcnN0TWF0Y2ggPSBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUsXG4gICAgICB1bm1hc2tDaGFyID0gJycsXG4gICAgICBuZWdhdGVDaGFyID0gJydcblxuICAgIGxvY2FsQ29tcHV0ZWRNYXNrLnJlcGxhY2UodG9rZW5SZWdleE1hc2ssIChfLCBjaGFyMSwgZXNjLCB0b2tlbiwgY2hhcjIpID0+IHtcbiAgICAgIGlmICh0b2tlbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGMgPSBUT0tFTlNbIHRva2VuIF1cbiAgICAgICAgbWFzay5wdXNoKGMpXG4gICAgICAgIG5lZ2F0ZUNoYXIgPSBjLm5lZ2F0ZVxuICAgICAgICBpZiAoZmlyc3RNYXRjaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGV4dHJhY3QucHVzaCgnKD86JyArIG5lZ2F0ZUNoYXIgKyAnKyk/KCcgKyBjLnBhdHRlcm4gKyAnKyk/KD86JyArIG5lZ2F0ZUNoYXIgKyAnKyk/KCcgKyBjLnBhdHRlcm4gKyAnKyk/JylcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBleHRyYWN0LnB1c2goJyg/OicgKyBuZWdhdGVDaGFyICsgJyspPygnICsgYy5wYXR0ZXJuICsgJyk/JylcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVzYyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVubWFza0NoYXIgPSAnXFxcXCcgKyAoZXNjID09PSAnXFxcXCcgPyAnJyA6IGVzYylcbiAgICAgICAgbWFzay5wdXNoKGVzYylcbiAgICAgICAgdW5tYXNrLnB1c2goJyhbXicgKyB1bm1hc2tDaGFyICsgJ10rKT8nICsgdW5tYXNrQ2hhciArICc/JylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBjID0gY2hhcjEgIT09IHZvaWQgMCA/IGNoYXIxIDogY2hhcjJcbiAgICAgICAgdW5tYXNrQ2hhciA9IGMgPT09ICdcXFxcJyA/ICdcXFxcXFxcXFxcXFxcXFxcJyA6IGMucmVwbGFjZShlc2NSZWdleCwgJ1xcXFxcXFxcJCYnKVxuICAgICAgICBtYXNrLnB1c2goYylcbiAgICAgICAgdW5tYXNrLnB1c2goJyhbXicgKyB1bm1hc2tDaGFyICsgJ10rKT8nICsgdW5tYXNrQ2hhciArICc/JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3RcbiAgICAgIHVubWFza01hdGNoZXIgPSBuZXcgUmVnRXhwKFxuICAgICAgICAnXidcbiAgICAgICAgKyB1bm1hc2suam9pbignJylcbiAgICAgICAgKyAnKCcgKyAodW5tYXNrQ2hhciA9PT0gJycgPyAnLicgOiAnW14nICsgdW5tYXNrQ2hhciArICddJykgKyAnKyk/J1xuICAgICAgICArICh1bm1hc2tDaGFyID09PSAnJyA/ICcnIDogJ1snICsgdW5tYXNrQ2hhciArICddKicpICsgJyQnXG4gICAgICApLFxuICAgICAgZXh0cmFjdExhc3QgPSBleHRyYWN0Lmxlbmd0aCAtIDEsXG4gICAgICBleHRyYWN0TWF0Y2hlciA9IGV4dHJhY3QubWFwKChyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIGZpbGxDaGFyRXNjYXBlZCArICcqJyArIHJlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBleHRyYWN0TGFzdCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14nICsgcmVcbiAgICAgICAgICAgICsgJygnICsgKG5lZ2F0ZUNoYXIgPT09ICcnID8gJy4nIDogbmVnYXRlQ2hhcikgKyAnKyk/J1xuICAgICAgICAgICAgKyAocHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlID8gJyQnIDogZmlsbENoYXJFc2NhcGVkICsgJyonKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJlKVxuICAgICAgfSlcblxuICAgIGNvbXB1dGVkTWFzayA9IG1hc2tcbiAgICBjb21wdXRlZFVubWFzayA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB1bm1hc2tNYXRjaCA9IHVubWFza01hdGNoZXIuZXhlYyhwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUgPyB2YWwgOiB2YWwuc2xpY2UoMCwgbWFzay5sZW5ndGggKyAxKSlcbiAgICAgIGlmICh1bm1hc2tNYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICB2YWwgPSB1bm1hc2tNYXRjaC5zbGljZSgxKS5qb2luKCcnKVxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBleHRyYWN0TWF0Y2ggPSBbXSxcbiAgICAgICAgZXh0cmFjdE1hdGNoZXJMZW5ndGggPSBleHRyYWN0TWF0Y2hlci5sZW5ndGhcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIHN0ciA9IHZhbDsgaSA8IGV4dHJhY3RNYXRjaGVyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbSA9IGV4dHJhY3RNYXRjaGVyWyBpIF0uZXhlYyhzdHIpXG5cbiAgICAgICAgaWYgKG0gPT09IG51bGwpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKG0uc2hpZnQoKS5sZW5ndGgpXG4gICAgICAgIGV4dHJhY3RNYXRjaC5wdXNoKC4uLm0pXG4gICAgICB9XG4gICAgICBpZiAoZXh0cmFjdE1hdGNoLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZXh0cmFjdE1hdGNoLmpvaW4oJycpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG4gICAgbWFza01hcmtlZCA9IG1hc2subWFwKHYgPT4gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBNQVJLRVIpKS5qb2luKCcnKVxuICAgIG1hc2tSZXBsYWNlZCA9IG1hc2tNYXJrZWQuc3BsaXQoTUFSS0VSKS5qb2luKGZpbGxDaGFyKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTWFza1ZhbHVlIChyYXdWYWwsIHVwZGF0ZU1hc2tJbnRlcm5hbHNGbGFnLCBpbnB1dFR5cGUpIHtcbiAgICBjb25zdFxuICAgICAgaW5wID0gaW5wdXRSZWYudmFsdWUsXG4gICAgICBlbmQgPSBpbnAuc2VsZWN0aW9uRW5kLFxuICAgICAgZW5kUmV2ZXJzZSA9IGlucC52YWx1ZS5sZW5ndGggLSBlbmQsXG4gICAgICB1bm1hc2tlZCA9IHVubWFza1ZhbHVlKHJhd1ZhbClcblxuICAgIC8vIFVwZGF0ZSBoZXJlIHNvIHVubWFzayB1c2VzIHRoZSBvcmlnaW5hbCBmaWxsQ2hhclxuICAgIHVwZGF0ZU1hc2tJbnRlcm5hbHNGbGFnID09PSB0cnVlICYmIHVwZGF0ZU1hc2tJbnRlcm5hbHMoKVxuXG4gICAgY29uc3RcbiAgICAgIHByZU1hc2tlZCA9IG1hc2tWYWx1ZSh1bm1hc2tlZCksXG4gICAgICBtYXNrZWQgPSBwcm9wcy5maWxsTWFzayAhPT0gZmFsc2VcbiAgICAgICAgPyBmaWxsV2l0aE1hc2socHJlTWFza2VkKVxuICAgICAgICA6IHByZU1hc2tlZCxcbiAgICAgIGNoYW5nZWQgPSBpbm5lclZhbHVlLnZhbHVlICE9PSBtYXNrZWRcblxuICAgIC8vIFdlIHdhbnQgdG8gYXZvaWQgXCJmbGlja2VyaW5nXCIgc28gd2Ugc2V0IHZhbHVlIGltbWVkaWF0ZWx5XG4gICAgaW5wLnZhbHVlICE9PSBtYXNrZWQgJiYgKGlucC52YWx1ZSA9IG1hc2tlZClcblxuICAgIGNoYW5nZWQgPT09IHRydWUgJiYgKGlubmVyVmFsdWUudmFsdWUgPSBtYXNrZWQpXG5cbiAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnAgJiYgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgaWYgKG1hc2tlZCA9PT0gbWFza1JlcGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSA/IG1hc2tSZXBsYWNlZC5sZW5ndGggOiAwXG4gICAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2ZvcndhcmQnKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXRUeXBlID09PSAnaW5zZXJ0RnJvbVBhc3RlJyAmJiBwcm9wcy5yZXZlcnNlRmlsbE1hc2sgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgbWF4RW5kID0gaW5wLnNlbGVjdGlvbkVuZFxuICAgICAgICBsZXQgY3Vyc29yID0gZW5kIC0gMVxuICAgICAgICAvLyBlYWNoIG5vbi1tYXJrZXIgY2hhciBtZWFucyB3ZSBtb3ZlIG9uY2UgdG8gcmlnaHRcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhc3RlZFRleHRTdGFydDsgaSA8PSBjdXJzb3IgJiYgaSA8IG1heEVuZDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1hc2tNYXJrZWRbIGkgXSAhPT0gTUFSS0VSKSB7XG4gICAgICAgICAgICBjdXJzb3IrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgY3Vyc29yKVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoWyAnZGVsZXRlQ29udGVudEJhY2t3YXJkJywgJ2RlbGV0ZUNvbnRlbnRGb3J3YXJkJyBdLmluZGV4T2YoaW5wdXRUeXBlKSA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZVxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICBlbmQgPT09IDBcbiAgICAgICAgICAgICAgICA/IChtYXNrZWQubGVuZ3RoID4gcHJlTWFza2VkLmxlbmd0aCA/IDEgOiAwKVxuICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoMCwgbWFza2VkLmxlbmd0aCAtIChtYXNrZWQgPT09IG1hc2tSZXBsYWNlZCA/IDAgOiBNYXRoLm1pbihwcmVNYXNrZWQubGVuZ3RoLCBlbmRSZXZlcnNlKSArIDEpKSArIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGVuZFxuXG4gICAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2ZvcndhcmQnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnJldmVyc2VGaWxsTWFzayA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IE1hdGgubWF4KDAsIG1hc2tlZC5sZW5ndGggLSAobWFza2VkID09PSBtYXNrUmVwbGFjZWQgPyAwIDogTWF0aC5taW4ocHJlTWFza2VkLmxlbmd0aCwgZW5kUmV2ZXJzZSArIDEpKSlcblxuICAgICAgICAgIGlmIChjdXJzb3IgPT09IDEgJiYgZW5kID09PSAxKSB7XG4gICAgICAgICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdmb3J3YXJkJylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0UmV2ZXJzZShpbnAsIGN1cnNvcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yID0gbWFza2VkLmxlbmd0aCAtIGVuZFJldmVyc2VcbiAgICAgICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdiYWNrd2FyZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoY2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IE1hdGgubWF4KDAsIG1hc2tNYXJrZWQuaW5kZXhPZihNQVJLRVIpLCBNYXRoLm1pbihwcmVNYXNrZWQubGVuZ3RoLCBlbmQpIC0gMSlcbiAgICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgY3Vyc29yKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IGVuZCAtIDFcbiAgICAgICAgICBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgY3Vyc29yKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHZhbCA9IHByb3BzLnVubWFza2VkVmFsdWUgPT09IHRydWVcbiAgICAgID8gdW5tYXNrVmFsdWUobWFza2VkKVxuICAgICAgOiBtYXNrZWRcblxuICAgIGlmIChcbiAgICAgIFN0cmluZyhwcm9wcy5tb2RlbFZhbHVlKSAhPT0gdmFsXG4gICAgICAmJiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCB8fCB2YWwgIT09ICcnKVxuICAgICkge1xuICAgICAgZW1pdFZhbHVlKHZhbCwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlQ3Vyc29yRm9yUGFzdGUgKGlucCwgc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IHByZU1hc2tlZCA9IG1hc2tWYWx1ZSh1bm1hc2tWYWx1ZShpbnAudmFsdWUpKVxuXG4gICAgc3RhcnQgPSBNYXRoLm1heCgwLCBtYXNrTWFya2VkLmluZGV4T2YoTUFSS0VSKSwgTWF0aC5taW4ocHJlTWFza2VkLmxlbmd0aCwgc3RhcnQpKVxuICAgIHBhc3RlZFRleHRTdGFydCA9IHN0YXJ0XG5cbiAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgJ2ZvcndhcmQnKVxuICB9XG5cbiAgY29uc3QgbW92ZUN1cnNvciA9IHtcbiAgICBsZWZ0IChpbnAsIGN1cnNvcikge1xuICAgICAgY29uc3Qgbm9NYXJrQmVmb3JlID0gbWFza01hcmtlZC5zbGljZShjdXJzb3IgLSAxKS5pbmRleE9mKE1BUktFUikgPT09IC0xXG4gICAgICBsZXQgaSA9IE1hdGgubWF4KDAsIGN1cnNvciAtIDEpXG5cbiAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAobWFza01hcmtlZFsgaSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBjdXJzb3IgPSBpXG4gICAgICAgICAgbm9NYXJrQmVmb3JlID09PSB0cnVlICYmIGN1cnNvcisrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGkgPCAwXG4gICAgICAgICYmIG1hc2tNYXJrZWRbIGN1cnNvciBdICE9PSB2b2lkIDBcbiAgICAgICAgJiYgbWFza01hcmtlZFsgY3Vyc29yIF0gIT09IE1BUktFUlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBtb3ZlQ3Vyc29yLnJpZ2h0KGlucCwgMClcbiAgICAgIH1cblxuICAgICAgY3Vyc29yID49IDAgJiYgaW5wLnNldFNlbGVjdGlvblJhbmdlKGN1cnNvciwgY3Vyc29yLCAnYmFja3dhcmQnKVxuICAgIH0sXG5cbiAgICByaWdodCAoaW5wLCBjdXJzb3IpIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gaW5wLnZhbHVlLmxlbmd0aFxuICAgICAgbGV0IGkgPSBNYXRoLm1pbihsaW1pdCwgY3Vyc29yICsgMSlcblxuICAgICAgZm9yICg7IGkgPD0gbGltaXQ7IGkrKykge1xuICAgICAgICBpZiAobWFza01hcmtlZFsgaSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBjdXJzb3IgPSBpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXNrTWFya2VkWyBpIC0gMSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBjdXJzb3IgPSBpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpID4gbGltaXRcbiAgICAgICAgJiYgbWFza01hcmtlZFsgY3Vyc29yIC0gMSBdICE9PSB2b2lkIDBcbiAgICAgICAgJiYgbWFza01hcmtlZFsgY3Vyc29yIC0gMSBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5sZWZ0KGlucCwgbGltaXQpXG4gICAgICB9XG5cbiAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2ZvcndhcmQnKVxuICAgIH0sXG5cbiAgICBsZWZ0UmV2ZXJzZSAoaW5wLCBjdXJzb3IpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGxvY2FsTWFza01hcmtlZCA9IGdldFBhZGRlZE1hc2tNYXJrZWQoaW5wLnZhbHVlLmxlbmd0aClcbiAgICAgIGxldCBpID0gTWF0aC5tYXgoMCwgY3Vyc29yIC0gMSlcblxuICAgICAgZm9yICg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChsb2NhbE1hc2tNYXJrZWRbIGkgLSAxIF0gPT09IE1BUktFUikge1xuICAgICAgICAgIGN1cnNvciA9IGlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxvY2FsTWFza01hcmtlZFsgaSBdID09PSBNQVJLRVIpIHtcbiAgICAgICAgICBjdXJzb3IgPSBpXG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgaSA8IDBcbiAgICAgICAgJiYgbG9jYWxNYXNrTWFya2VkWyBjdXJzb3IgXSAhPT0gdm9pZCAwXG4gICAgICAgICYmIGxvY2FsTWFza01hcmtlZFsgY3Vyc29yIF0gIT09IE1BUktFUlxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBtb3ZlQ3Vyc29yLnJpZ2h0UmV2ZXJzZShpbnAsIDApXG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA+PSAwICYmIGlucC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3IsIGN1cnNvciwgJ2JhY2t3YXJkJylcbiAgICB9LFxuXG4gICAgcmlnaHRSZXZlcnNlIChpbnAsIGN1cnNvcikge1xuICAgICAgY29uc3RcbiAgICAgICAgbGltaXQgPSBpbnAudmFsdWUubGVuZ3RoLFxuICAgICAgICBsb2NhbE1hc2tNYXJrZWQgPSBnZXRQYWRkZWRNYXNrTWFya2VkKGxpbWl0KSxcbiAgICAgICAgbm9NYXJrQmVmb3JlID0gbG9jYWxNYXNrTWFya2VkLnNsaWNlKDAsIGN1cnNvciArIDEpLmluZGV4T2YoTUFSS0VSKSA9PT0gLTFcbiAgICAgIGxldCBpID0gTWF0aC5taW4obGltaXQsIGN1cnNvciArIDEpXG5cbiAgICAgIGZvciAoOyBpIDw9IGxpbWl0OyBpKyspIHtcbiAgICAgICAgaWYgKGxvY2FsTWFza01hcmtlZFsgaSAtIDEgXSA9PT0gTUFSS0VSKSB7XG4gICAgICAgICAgY3Vyc29yID0gaVxuICAgICAgICAgIGN1cnNvciA+IDAgJiYgbm9NYXJrQmVmb3JlID09PSB0cnVlICYmIGN1cnNvci0tXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGkgPiBsaW1pdFxuICAgICAgICAmJiBsb2NhbE1hc2tNYXJrZWRbIGN1cnNvciAtIDEgXSAhPT0gdm9pZCAwXG4gICAgICAgICYmIGxvY2FsTWFza01hcmtlZFsgY3Vyc29yIC0gMSBdICE9PSBNQVJLRVJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbW92ZUN1cnNvci5sZWZ0UmV2ZXJzZShpbnAsIGxpbWl0KVxuICAgICAgfVxuXG4gICAgICBpbnAuc2V0U2VsZWN0aW9uUmFuZ2UoY3Vyc29yLCBjdXJzb3IsICdmb3J3YXJkJylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1hc2tlZENsaWNrIChlKSB7XG4gICAgZW1pdCgnY2xpY2snLCBlKVxuXG4gICAgc2VsZWN0aW9uQW5jaG9yID0gdm9pZCAwXG4gIH1cblxuICBmdW5jdGlvbiBvbk1hc2tlZEtleWRvd24gKGUpIHtcbiAgICBlbWl0KCdrZXlkb3duJywgZSlcblxuICAgIGlmIChcbiAgICAgIHNob3VsZElnbm9yZUtleShlKSA9PT0gdHJ1ZVxuICAgICAgfHwgZS5hbHRLZXkgPT09IHRydWUgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIHRoZXNlXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdFxuICAgICAgaW5wID0gaW5wdXRSZWYudmFsdWUsXG4gICAgICBzdGFydCA9IGlucC5zZWxlY3Rpb25TdGFydCxcbiAgICAgIGVuZCA9IGlucC5zZWxlY3Rpb25FbmRcblxuICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgc2VsZWN0aW9uQW5jaG9yID0gdm9pZCAwXG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkgeyAvLyBMZWZ0IC8gUmlnaHRcbiAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIHNlbGVjdGlvbkFuY2hvciA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNlbGVjdGlvbkFuY2hvciA9IGlucC5zZWxlY3Rpb25EaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IHN0YXJ0IDogZW5kXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gbW92ZUN1cnNvclsgKGUua2V5Q29kZSA9PT0gMzkgPyAncmlnaHQnIDogJ2xlZnQnKSArIChwcm9wcy5yZXZlcnNlRmlsbE1hc2sgPT09IHRydWUgPyAnUmV2ZXJzZScgOiAnJykgXVxuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGZuKGlucCwgc2VsZWN0aW9uQW5jaG9yID09PSBzdGFydCA/IGVuZCA6IHN0YXJ0KVxuXG4gICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBpbnAuc2VsZWN0aW9uU3RhcnRcbiAgICAgICAgaW5wLnNldFNlbGVjdGlvblJhbmdlKE1hdGgubWluKHNlbGVjdGlvbkFuY2hvciwgY3Vyc29yKSwgTWF0aC5tYXgoc2VsZWN0aW9uQW5jaG9yLCBjdXJzb3IpLCAnZm9yd2FyZCcpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgZS5rZXlDb2RlID09PSA4IC8vIEJhY2tzcGFjZVxuICAgICAgJiYgcHJvcHMucmV2ZXJzZUZpbGxNYXNrICE9PSB0cnVlXG4gICAgICAmJiBzdGFydCA9PT0gZW5kXG4gICAgKSB7XG4gICAgICBtb3ZlQ3Vyc29yLmxlZnQoaW5wLCBzdGFydClcbiAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShpbnAuc2VsZWN0aW9uU3RhcnQsIGVuZCwgJ2JhY2t3YXJkJylcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBlLmtleUNvZGUgPT09IDQ2IC8vIERlbGV0ZVxuICAgICAgJiYgcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlXG4gICAgICAmJiBzdGFydCA9PT0gZW5kXG4gICAgKSB7XG4gICAgICBtb3ZlQ3Vyc29yLnJpZ2h0UmV2ZXJzZShpbnAsIGVuZClcbiAgICAgIGlucC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgaW5wLnNlbGVjdGlvbkVuZCwgJ2ZvcndhcmQnKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hc2tWYWx1ZSAodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSB7IHJldHVybiAnJyB9XG5cbiAgICBpZiAocHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFza1ZhbHVlUmV2ZXJzZSh2YWwpXG4gICAgfVxuXG4gICAgY29uc3QgbWFzayA9IGNvbXB1dGVkTWFza1xuXG4gICAgbGV0IHZhbEluZGV4ID0gMCwgb3V0cHV0ID0gJydcblxuICAgIGZvciAobGV0IG1hc2tJbmRleCA9IDA7IG1hc2tJbmRleCA8IG1hc2subGVuZ3RoOyBtYXNrSW5kZXgrKykge1xuICAgICAgY29uc3RcbiAgICAgICAgdmFsQ2hhciA9IHZhbFsgdmFsSW5kZXggXSxcbiAgICAgICAgbWFza0RlZiA9IG1hc2tbIG1hc2tJbmRleCBdXG5cbiAgICAgIGlmICh0eXBlb2YgbWFza0RlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3V0cHV0ICs9IG1hc2tEZWZcbiAgICAgICAgdmFsQ2hhciA9PT0gbWFza0RlZiAmJiB2YWxJbmRleCsrXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWxDaGFyICE9PSB2b2lkIDAgJiYgbWFza0RlZi5yZWdleC50ZXN0KHZhbENoYXIpKSB7XG4gICAgICAgIG91dHB1dCArPSBtYXNrRGVmLnRyYW5zZm9ybSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBtYXNrRGVmLnRyYW5zZm9ybSh2YWxDaGFyKVxuICAgICAgICAgIDogdmFsQ2hhclxuICAgICAgICB2YWxJbmRleCsrXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hc2tWYWx1ZVJldmVyc2UgKHZhbCkge1xuICAgIGNvbnN0XG4gICAgICBtYXNrID0gY29tcHV0ZWRNYXNrLFxuICAgICAgZmlyc3RUb2tlbkluZGV4ID0gbWFza01hcmtlZC5pbmRleE9mKE1BUktFUilcblxuICAgIGxldCB2YWxJbmRleCA9IHZhbC5sZW5ndGggLSAxLCBvdXRwdXQgPSAnJ1xuXG4gICAgZm9yIChsZXQgbWFza0luZGV4ID0gbWFzay5sZW5ndGggLSAxOyBtYXNrSW5kZXggPj0gMCAmJiB2YWxJbmRleCA+IC0xOyBtYXNrSW5kZXgtLSkge1xuICAgICAgY29uc3QgbWFza0RlZiA9IG1hc2tbIG1hc2tJbmRleCBdXG5cbiAgICAgIGxldCB2YWxDaGFyID0gdmFsWyB2YWxJbmRleCBdXG5cbiAgICAgIGlmICh0eXBlb2YgbWFza0RlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3V0cHV0ID0gbWFza0RlZiArIG91dHB1dFxuICAgICAgICB2YWxDaGFyID09PSBtYXNrRGVmICYmIHZhbEluZGV4LS1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbENoYXIgIT09IHZvaWQgMCAmJiBtYXNrRGVmLnJlZ2V4LnRlc3QodmFsQ2hhcikpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIG91dHB1dCA9IChtYXNrRGVmLnRyYW5zZm9ybSAhPT0gdm9pZCAwID8gbWFza0RlZi50cmFuc2Zvcm0odmFsQ2hhcikgOiB2YWxDaGFyKSArIG91dHB1dFxuICAgICAgICAgIHZhbEluZGV4LS1cbiAgICAgICAgICB2YWxDaGFyID0gdmFsWyB2YWxJbmRleCBdXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bm1vZGlmaWVkLWxvb3AtY29uZGl0aW9uXG4gICAgICAgIH0gd2hpbGUgKGZpcnN0VG9rZW5JbmRleCA9PT0gbWFza0luZGV4ICYmIHZhbENoYXIgIT09IHZvaWQgMCAmJiBtYXNrRGVmLnJlZ2V4LnRlc3QodmFsQ2hhcikpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRcbiAgfVxuXG4gIGZ1bmN0aW9uIHVubWFza1ZhbHVlICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgfHwgY29tcHV0ZWRVbm1hc2sgPT09IHZvaWQgMFxuICAgICAgPyAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicgPyBjb21wdXRlZFVubWFzaygnJyArIHZhbCkgOiB2YWwpXG4gICAgICA6IGNvbXB1dGVkVW5tYXNrKHZhbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGxXaXRoTWFzayAodmFsKSB7XG4gICAgaWYgKG1hc2tSZXBsYWNlZC5sZW5ndGggLSB2YWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMucmV2ZXJzZUZpbGxNYXNrID09PSB0cnVlICYmIHZhbC5sZW5ndGggIT09IDBcbiAgICAgID8gbWFza1JlcGxhY2VkLnNsaWNlKDAsIC12YWwubGVuZ3RoKSArIHZhbFxuICAgICAgOiB2YWwgKyBtYXNrUmVwbGFjZWQuc2xpY2UodmFsLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJWYWx1ZSxcbiAgICBoYXNNYXNrLFxuICAgIG1vdmVDdXJzb3JGb3JQYXN0ZSxcbiAgICB1cGRhdGVNYXNrVmFsdWUsXG4gICAgb25NYXNrZWRLZXlkb3duLFxuICAgIG9uTWFza2VkQ2xpY2tcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgdHlwZUd1YXJkKSB7XG4gIGZ1bmN0aW9uIGdldEZvcm1Eb21Qcm9wcyAoKSB7XG4gICAgY29uc3QgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZHQgPSAnRGF0YVRyYW5zZmVyJyBpbiB3aW5kb3dcbiAgICAgICAgPyBuZXcgRGF0YVRyYW5zZmVyKClcbiAgICAgICAgOiAoJ0NsaXBib2FyZEV2ZW50JyBpbiB3aW5kb3dcbiAgICAgICAgICAgID8gbmV3IENsaXBib2FyZEV2ZW50KCcnKS5jbGlwYm9hcmREYXRhXG4gICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcblxuICAgICAgaWYgKE9iamVjdChtb2RlbCkgPT09IG1vZGVsKSB7XG4gICAgICAgICgnbGVuZ3RoJyBpbiBtb2RlbFxuICAgICAgICAgID8gQXJyYXkuZnJvbShtb2RlbClcbiAgICAgICAgICA6IFsgbW9kZWwgXVxuICAgICAgICApLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgZHQuaXRlbXMuYWRkKGZpbGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVzOiBkdC5maWxlc1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZXM6IHZvaWQgMFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlR3VhcmQgPT09IHRydWVcbiAgICA/IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRGb3JtRG9tUHJvcHMoKVxuICAgIH0pXG4gICAgOiBjb21wdXRlZChnZXRGb3JtRG9tUHJvcHMpXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VGaWVsZFByb3BzLCB1c2VGaWVsZEVtaXRzLCBmaWVsZFZhbHVlSXNGaWxsZWQgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcbmltcG9ydCB1c2VNYXNrLCB7IHVzZU1hc2tQcm9wcyB9IGZyb20gJy4vdXNlLW1hc2suanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbnB1dE5hbWVBdHRyIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcbmltcG9ydCB1c2VGaWxlRm9ybURvbVByb3BzIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZpbGUtZG9tLXByb3BzLmpzJ1xuaW1wb3J0IHVzZUtleUNvbXBvc2l0aW9uIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWtleS1jb21wb3NpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUlucHV0JyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRmllbGRQcm9wcyxcbiAgICAuLi51c2VNYXNrUHJvcHMsXG4gICAgLi4udXNlRm9ybVByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogeyByZXF1aXJlZDogZmFsc2UgfSxcblxuICAgIHNoYWRvd1RleHQ6IFN0cmluZyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgYXV0b2dyb3c6IEJvb2xlYW4sIC8vIG1ha2VzIGEgdGV4dGFyZWFcblxuICAgIGlucHV0Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlRmllbGRFbWl0cyxcbiAgICAncGFzdGUnLCAnY2hhbmdlJyxcbiAgICAna2V5ZG93bicsICdjbGljaycsICdhbmltYXRpb25lbmQnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCB0ZW1wID0ge31cbiAgICBsZXQgZW1pdENhY2hlZFZhbHVlID0gTmFOLCB0eXBlZE51bWJlciwgc3RvcFZhbHVlV2F0Y2hlciwgZW1pdFRpbWVyID0gbnVsbCwgZW1pdFZhbHVlRm5cblxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbmFtZVByb3AgPSB1c2VGb3JtSW5wdXROYW1lQXR0cihwcm9wcylcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyVmFsdWUsXG4gICAgICBoYXNNYXNrLFxuICAgICAgbW92ZUN1cnNvckZvclBhc3RlLFxuICAgICAgdXBkYXRlTWFza1ZhbHVlLFxuICAgICAgb25NYXNrZWRLZXlkb3duLFxuICAgICAgb25NYXNrZWRDbGlja1xuICAgIH0gPSB1c2VNYXNrKHByb3BzLCBlbWl0LCBlbWl0VmFsdWUsIGlucHV0UmVmKVxuXG4gICAgY29uc3QgZm9ybURvbVByb3BzID0gdXNlRmlsZUZvcm1Eb21Qcm9wcyhwcm9wcywgLyogdHlwZSBndWFyZCAqLyB0cnVlKVxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCBzdGF0ZSA9IHVzZUZpZWxkU3RhdGUoKVxuXG4gICAgY29uc3QgaXNUZXh0YXJlYSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy50eXBlID09PSAndGV4dGFyZWEnIHx8IHByb3BzLmF1dG9ncm93ID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaXNUeXBlVGV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBpc1RleHRhcmVhLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCBbICd0ZXh0JywgJ3NlYXJjaCcsICd1cmwnLCAndGVsJywgJ3Bhc3N3b3JkJyBdLmluY2x1ZGVzKHByb3BzLnR5cGUpXG4gICAgKVxuXG4gICAgY29uc3Qgb25FdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBldnQgPSB7XG4gICAgICAgIC4uLnN0YXRlLnNwbGl0QXR0cnMubGlzdGVuZXJzLnZhbHVlLFxuICAgICAgICBvbklucHV0LFxuICAgICAgICBvblBhc3RlLFxuICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgIC8vIHN3aXRjaGluZyBmb2N1cyBiZWZvcmUgY29uZmlybWluZyBjb21wb3NpdGlvbiBjaG9pY2VcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgIG9uQmx1cjogb25GaW5pc2hFZGl0aW5nLFxuICAgICAgICBvbkZvY3VzOiBzdG9wXG4gICAgICB9XG5cbiAgICAgIGV2dC5vbkNvbXBvc2l0aW9uc3RhcnQgPSBldnQub25Db21wb3NpdGlvbnVwZGF0ZSA9IGV2dC5vbkNvbXBvc2l0aW9uZW5kID0gb25Db21wb3NpdGlvblxuXG4gICAgICBpZiAoaGFzTWFzay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25LZXlkb3duID0gb25NYXNrZWRLZXlkb3duXG4gICAgICAgIC8vIHJlc2V0IHNlbGVjdGlvbiBhbmNob3Igb24gcG9pbnRlciBzZWxlY3Rpb25cbiAgICAgICAgZXZ0Lm9uQ2xpY2sgPSBvbk1hc2tlZENsaWNrXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSkge1xuICAgICAgICBldnQub25BbmltYXRpb25lbmQgPSBvbkFuaW1hdGlvbmVuZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZ0XG4gICAgfSlcblxuICAgIGNvbnN0IGlucHV0QXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSB8fCB2b2lkIDAsXG4gICAgICAgIHJvd3M6IHByb3BzLnR5cGUgPT09ICd0ZXh0YXJlYScgPyA2IDogdm9pZCAwLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLmxhYmVsLFxuICAgICAgICBuYW1lOiBuYW1lUHJvcC52YWx1ZSxcbiAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICBpZDogc3RhdGUudGFyZ2V0VWlkLnZhbHVlLFxuICAgICAgICBtYXhsZW5ndGg6IHByb3BzLm1heGxlbmd0aCxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGUgPT09IHRydWUsXG4gICAgICAgIHJlYWRvbmx5OiBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNUZXh0YXJlYS52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXR0cnMudHlwZSA9IHByb3BzLnR5cGVcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmF1dG9ncm93ID09PSB0cnVlKSB7XG4gICAgICAgIGF0dHJzLnJvd3MgPSAxXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICAvLyBzb21lIGJyb3dzZXJzIGxvc2UgdGhlIG5hdGl2ZSBpbnB1dCB2YWx1ZVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gcmVhdHRhY2ggaXQgZHluYW1pY2FsbHlcbiAgICAvLyAobGlrZSB0eXBlPVwicGFzc3dvcmRcIiA8LT4gdHlwZT1cInRleHRcIjsgc2VlICMxMjA3OClcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy50eXBlLCAoKSA9PiB7XG4gICAgICBpZiAoaW5wdXRSZWYudmFsdWUpIHtcbiAgICAgICAgaW5wdXRSZWYudmFsdWUudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHYgPT4ge1xuICAgICAgaWYgKGhhc01hc2sudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHN0b3BWYWx1ZVdhdGNoZXIgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wVmFsdWVXYXRjaGVyID0gZmFsc2VcblxuICAgICAgICAgIGlmIChTdHJpbmcodikgPT09IGVtaXRDYWNoZWRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlTWFza1ZhbHVlKHYpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbm5lclZhbHVlLnZhbHVlICE9PSB2KSB7XG4gICAgICAgIGlubmVyVmFsdWUudmFsdWUgPSB2XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzLnR5cGUgPT09ICdudW1iZXInXG4gICAgICAgICAgJiYgdGVtcC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodHlwZWROdW1iZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHR5cGVkTnVtYmVyID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdGVtcC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0ZXh0YXJlYSBvbmx5XG4gICAgICBwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSAmJiBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmF1dG9ncm93LCB2YWwgPT4ge1xuICAgICAgLy8gdGV4dGFyZWEgb25seVxuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgICB9XG4gICAgICAvLyBpZiBpdCBoYXMgYSBudW1iZXIgb2Ygcm93cyBzZXQgcmVzcGVjdCBpdFxuICAgICAgZWxzZSBpZiAoaW5wdXRSZWYudmFsdWUgIT09IG51bGwgJiYgYXR0cnMucm93cyA+IDApIHtcbiAgICAgICAgaW5wdXRSZWYudmFsdWUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRlbnNlLCAoKSA9PiB7XG4gICAgICBwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSAmJiBuZXh0VGljayhhZGp1c3RIZWlnaHQpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlucHV0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICAgJiYgaW5wdXRSZWYudmFsdWUgIT09IGVsXG4gICAgICAgICAgJiYgKGVsID09PSBudWxsIHx8IGVsLmlkICE9PSBzdGF0ZS50YXJnZXRVaWQudmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgIGlucHV0UmVmLnZhbHVlLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdCAoKSB7XG4gICAgICBpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbCAmJiBpbnB1dFJlZi52YWx1ZS5zZWxlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFzdGUgKGUpIHtcbiAgICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnJldmVyc2VGaWxsTWFzayAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBpbnAgPSBlLnRhcmdldFxuICAgICAgICBtb3ZlQ3Vyc29yRm9yUGFzdGUoaW5wLCBpbnAuc2VsZWN0aW9uU3RhcnQsIGlucC5zZWxlY3Rpb25FbmQpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ3Bhc3RlJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbklucHV0IChlKSB7XG4gICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZS50YXJnZXQuZmlsZXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZVxuXG4gICAgICBpZiAoZS50YXJnZXQucUNvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICB0ZW1wLnZhbHVlID0gdmFsXG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNNYXNrLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZU1hc2tWYWx1ZSh2YWwsIGZhbHNlLCBlLmlucHV0VHlwZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbWl0VmFsdWUodmFsKVxuXG4gICAgICAgIGlmIChpc1R5cGVUZXh0LnZhbHVlID09PSB0cnVlICYmIGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0gPSBlLnRhcmdldFxuXG4gICAgICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ICE9PSB2b2lkIDAgJiYgc2VsZWN0aW9uRW5kICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHZhbC5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gdHJpZ2dlciBpdCBpbW1lZGlhdGVseSB0b28sXG4gICAgICAvLyB0byBhdm9pZCBcImZsaWNrZXJpbmdcIlxuICAgICAgcHJvcHMuYXV0b2dyb3cgPT09IHRydWUgJiYgYWRqdXN0SGVpZ2h0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkFuaW1hdGlvbmVuZCAoZSkge1xuICAgICAgZW1pdCgnYW5pbWF0aW9uZW5kJywgZSlcbiAgICAgIGFkanVzdEhlaWdodCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1pdFZhbHVlICh2YWwsIHN0b3BXYXRjaGVyKSB7XG4gICAgICBlbWl0VmFsdWVGbiA9ICgpID0+IHtcbiAgICAgICAgZW1pdFRpbWVyID0gbnVsbFxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wcy50eXBlICE9PSAnbnVtYmVyJ1xuICAgICAgICAgICYmIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVsZXRlIHRlbXAudmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB2YWwgJiYgZW1pdENhY2hlZFZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgICBlbWl0Q2FjaGVkVmFsdWUgPSB2YWxcblxuICAgICAgICAgIHN0b3BXYXRjaGVyID09PSB0cnVlICYmIChzdG9wVmFsdWVXYXRjaGVyID0gdHJ1ZSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbClcblxuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGVtaXRDYWNoZWRWYWx1ZSA9PT0gdmFsICYmIChlbWl0Q2FjaGVkVmFsdWUgPSBOYU4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXRWYWx1ZUZuID0gdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICB0eXBlZE51bWJlciA9IHRydWVcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGVib3VuY2UgIT09IHZvaWQgMCkge1xuICAgICAgICBlbWl0VGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KGVtaXRUaW1lcilcbiAgICAgICAgdGVtcC52YWx1ZSA9IHZhbFxuICAgICAgICBlbWl0VGltZXIgPSBzZXRUaW1lb3V0KGVtaXRWYWx1ZUZuLCBwcm9wcy5kZWJvdW5jZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbWl0VmFsdWVGbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGV4dGFyZWEgb25seVxuICAgIGZ1bmN0aW9uIGFkanVzdEhlaWdodCAoKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnAgPSBpbnB1dFJlZi52YWx1ZVxuICAgICAgICBpZiAoaW5wICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U3R5bGUgPSBpbnAucGFyZW50Tm9kZS5zdHlsZVxuICAgICAgICAgIC8vIGNocm9tZSBkb2VzIG5vdCBrZWVwIHNjcm9sbCAjMTU0OThcbiAgICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gaW5wXG4gICAgICAgICAgLy8gY2hyb21lIGNhbGN1bGF0ZXMgYSBzbWFsbGVyIHNjcm9sbEhlaWdodCB3aGVuIGluIGEgLmNvbHVtbiBjb250YWluZXJcbiAgICAgICAgICBjb25zdCB7IG92ZXJmbG93WSwgbWF4SGVpZ2h0IH0gPSAkcS5wbGF0Zm9ybS5pcy5maXJlZm94ID09PSB0cnVlXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGlucClcbiAgICAgICAgICAvLyBvbiBmaXJlZm94IG9yIGlmIG92ZXJmbG93WSBpcyBzcGVjaWZpZWQgYXMgc2Nyb2xsICMxNDI2MywgIzE0MzQ0XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgdG91Y2ggb3ZlcmZsb3dcbiAgICAgICAgICAvLyBmaXJlZm94IGlzIG5vdCBzbyBiYWQgaW4gdGhlIGVuZFxuICAgICAgICAgIGNvbnN0IGNoYW5nZU92ZXJmbG93ID0gb3ZlcmZsb3dZICE9PSB2b2lkIDAgJiYgb3ZlcmZsb3dZICE9PSAnc2Nyb2xsJ1xuXG4gICAgICAgICAgLy8gcmVzZXQgaGVpZ2h0IG9mIHRleHRhcmVhIHRvIGEgc21hbGwgc2l6ZSB0byBkZXRlY3QgdGhlIHJlYWwgaGVpZ2h0XG4gICAgICAgICAgLy8gYnV0IGtlZXAgdGhlIHRvdGFsIGNvbnRyb2wgc2l6ZSB0aGUgc2FtZVxuICAgICAgICAgIGNoYW5nZU92ZXJmbG93ID09PSB0cnVlICYmIChpbnAuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbicpXG4gICAgICAgICAgcGFyZW50U3R5bGUubWFyZ2luQm90dG9tID0gKGlucC5zY3JvbGxIZWlnaHQgLSAxKSArICdweCdcbiAgICAgICAgICBpbnAuc3R5bGUuaGVpZ2h0ID0gJzFweCdcblxuICAgICAgICAgIGlucC5zdHlsZS5oZWlnaHQgPSBpbnAuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgIC8vIHdlIHNob3VsZCBhbGxvdyBzY3JvbGxiYXJzIG9ubHlcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBtYXhIZWlnaHQgYW5kIGNvbnRlbnQgaXMgdGFsbGVyIHRoYW4gbWF4SGVpZ2h0XG4gICAgICAgICAgY2hhbmdlT3ZlcmZsb3cgPT09IHRydWUgJiYgKGlucC5zdHlsZS5vdmVyZmxvd1kgPSBwYXJzZUludChtYXhIZWlnaHQsIDEwKSA8IGlucC5zY3JvbGxIZWlnaHQgPyAnYXV0bycgOiAnaGlkZGVuJylcbiAgICAgICAgICBwYXJlbnRTdHlsZS5tYXJnaW5Cb3R0b20gPSAnJ1xuICAgICAgICAgIGlucC5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNoYW5nZSAoZSkge1xuICAgICAgb25Db21wb3NpdGlvbihlKVxuXG4gICAgICBpZiAoZW1pdFRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChlbWl0VGltZXIpXG4gICAgICAgIGVtaXRUaW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgZW1pdFZhbHVlRm4gIT09IHZvaWQgMCAmJiBlbWl0VmFsdWVGbigpXG5cbiAgICAgIGVtaXQoJ2NoYW5nZScsIGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRmluaXNoRWRpdGluZyAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcblxuICAgICAgaWYgKGVtaXRUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZW1pdFRpbWVyKVxuICAgICAgICBlbWl0VGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGVtaXRWYWx1ZUZuICE9PSB2b2lkIDAgJiYgZW1pdFZhbHVlRm4oKVxuXG4gICAgICB0eXBlZE51bWJlciA9IGZhbHNlXG4gICAgICBzdG9wVmFsdWVXYXRjaGVyID0gZmFsc2VcbiAgICAgIGRlbGV0ZSB0ZW1wLnZhbHVlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gdXNlIHNldFRpbWVvdXQgaW5zdGVhZCBvZiB0aGlzLiRuZXh0VGlja1xuICAgICAgLy8gdG8gYXZvaWQgYSBidWcgd2hlcmUgZm9jdXNvdXQgaXMgbm90IGVtaXR0ZWQgZm9yIHR5cGUgZGF0ZS90aW1lL3dlZWsvLi4uXG4gICAgICBwcm9wcy50eXBlICE9PSAnZmlsZScgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlucHV0UmVmLnZhbHVlLnZhbHVlID0gaW5uZXJWYWx1ZS52YWx1ZSAhPT0gdm9pZCAwID8gaW5uZXJWYWx1ZS52YWx1ZSA6ICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VyVmFsdWUgKCkge1xuICAgICAgcmV0dXJuIHRlbXAuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPT09IHRydWVcbiAgICAgICAgPyB0ZW1wLnZhbHVlXG4gICAgICAgIDogKGlubmVyVmFsdWUudmFsdWUgIT09IHZvaWQgMCA/IGlubmVyVmFsdWUudmFsdWUgOiAnJylcbiAgICB9XG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgb25GaW5pc2hFZGl0aW5nKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIC8vIHRleHRhcmVhIG9ubHlcbiAgICAgIHByb3BzLmF1dG9ncm93ID09PSB0cnVlICYmIGFkanVzdEhlaWdodCgpXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZpZWxkQ2xhc3M6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGBxLSR7IGlzVGV4dGFyZWEudmFsdWUgPT09IHRydWUgPyAndGV4dGFyZWEnIDogJ2lucHV0JyB9YFxuICAgICAgICArIChwcm9wcy5hdXRvZ3JvdyA9PT0gdHJ1ZSA/ICcgcS10ZXh0YXJlYS0tYXV0b2dyb3cnIDogJycpXG4gICAgICApLFxuXG4gICAgICBoYXNTaGFkb3c6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIHByb3BzLnR5cGUgIT09ICdmaWxlJ1xuICAgICAgICAmJiB0eXBlb2YgcHJvcHMuc2hhZG93VGV4dCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgcHJvcHMuc2hhZG93VGV4dC5sZW5ndGggIT09IDBcbiAgICAgICksXG5cbiAgICAgIGlucHV0UmVmLFxuXG4gICAgICBlbWl0VmFsdWUsXG5cbiAgICAgIGhhc1ZhbHVlLFxuXG4gICAgICBmbG9hdGluZ0xhYmVsOiBjb21wdXRlZCgoKSA9PlxuICAgICAgICAoXG4gICAgICAgICAgaGFzVmFsdWUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAocHJvcHMudHlwZSAhPT0gJ251bWJlcicgfHwgaXNOYU4oaW5uZXJWYWx1ZS52YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICApXG4gICAgICAgIHx8IGZpZWxkVmFsdWVJc0ZpbGxlZChwcm9wcy5kaXNwbGF5VmFsdWUpXG4gICAgICApLFxuXG4gICAgICBnZXRDb250cm9sOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoKGlzVGV4dGFyZWEudmFsdWUgPT09IHRydWUgPyAndGV4dGFyZWEnIDogJ2lucHV0Jywge1xuICAgICAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICdxLWZpZWxkX19uYXRpdmUgcS1wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICBwcm9wcy5pbnB1dENsYXNzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAuLi5pbnB1dEF0dHJzLnZhbHVlLFxuICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlLFxuICAgICAgICAgIC4uLihcbiAgICAgICAgICAgIHByb3BzLnR5cGUgIT09ICdmaWxlJ1xuICAgICAgICAgICAgICA/IHsgdmFsdWU6IGdldEN1clZhbHVlKCkgfVxuICAgICAgICAgICAgICA6IGZvcm1Eb21Qcm9wcy52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIGdldFNoYWRvd0NvbnRyb2w6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX25hdGl2ZSBxLWZpZWxkX19zaGFkb3cgYWJzb2x1dGUtYm90dG9tIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICAgICAgKyAoaXNUZXh0YXJlYS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyB0ZXh0LW5vLXdyYXAnKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6ICdpbnZpc2libGUnIH0sIGdldEN1clZhbHVlKCkpLFxuICAgICAgICAgIGgoJ3NwYW4nLCBwcm9wcy5zaGFkb3dUZXh0KVxuICAgICAgICBdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZW5kZXJGbiA9IHVzZUZpZWxkKHN0YXRlKVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgZm9jdXMsXG4gICAgICBzZWxlY3QsXG4gICAgICBnZXROYXRpdmVFbGVtZW50OiAoKSA9PiBpbnB1dFJlZi52YWx1ZSAvLyBkZXByZWNhdGVkXG4gICAgfSlcblxuICAgIGluamVjdFByb3AocHJveHksICduYXRpdmVFbCcsICgpID0+IGlucHV0UmVmLnZhbHVlKVxuXG4gICAgcmV0dXJu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
