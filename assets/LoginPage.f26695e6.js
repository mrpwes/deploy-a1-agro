import { _ as _export_sfc, u as useAuthenticationStore, o as openBlock, c as createElementBlock, a as createBaseVNode, d as createVNode, w as withCtx, e as unref, n as normalizeClass, Q as QBtn, f as createTextVNode, g as createCommentVNode } from "./index.cc9bdf73.js";
import { Q as QInput } from "./QInput.723cff93.js";
import { _ as _imports_0 } from "./logo.0a83e219.js";
import "./use-key-composition.f687006c.js";
import "./focus-manager.71507900.js";
const _hoisted_1 = { class: "tw-flex tw-mx-auto tw-h-screen tw-my-auto tw-w-max" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-min-w-min tw-flex tw-my-auto tw-p-2 tw-bg-primary tw-text-white" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-mb-24 tw-mr-32" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      class: "tw-size-32"
    }),
    /* @__PURE__ */ createBaseVNode("div", { class: "tw-my-auto tw-pl-3 tw-text-2xl" }, [
      /* @__PURE__ */ createTextVNode(" A1 Agro Fertilizer "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("and Chemical Supply ")
    ])
  ])
], -1);
const _hoisted_3 = { class: "tw-w-auto tw-my-auto" };
const _hoisted_4 = { class: "tw-flex tw-p-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-w-24" }, null, -1);
const _hoisted_6 = { class: "tw-text-white tw-m-3 tw-bg-gray-100 tw-shadow-lg tw-mx-auto tw-rounded-3xl" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-text-center tw-text-3xl tw-p-4" }, "Sign In", -1);
const _hoisted_8 = { class: "tw-p-3 tw-rounded-3xl tw-bg-neutral-300 tw-center tw-mx-5 tw-mb-3" };
const _hoisted_9 = { class: "tw-rounded-3xl tw-bg-neutral-300 tw-center tw-p-3 tw-mx-5" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", null, "PASSWORD", -1);
const _hoisted_11 = { class: "tw-mx-auto tw-w-max tw-text-center" };
const _hoisted_12 = {
  key: 0,
  class: "tw-bg-red-200 tw-border tw-border-red-500 tw-px-2 tw-py-1 tw-mt-2"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("text", { class: "tw-font-bold" }, "Wrong Credentials", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15 = { class: "tw-text-lg tw-text-center tw-p-3" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-h-24" }, null, -1);
const _sfc_main = {
  __name: "LoginPage",
  setup(__props) {
    const storeAuthentication = useAuthenticationStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => unref(storeAuthentication).setUserType("employee")),
              class: normalizeClass([{
                "bg-secondary": unref(storeAuthentication).getUserType === "employee",
                "tw-bg-grey": unref(storeAuthentication).getUserType === "admin"
              }, "tw-normal-case tw-rounded-full"])
            }, {
              default: withCtx(() => [
                createTextVNode("Employee Login")
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QBtn, {
              onClick: _cache[1] || (_cache[1] = ($event) => unref(storeAuthentication).setUserType("admin")),
              class: normalizeClass([{
                "bg-secondary": unref(storeAuthentication).getUserType === "admin",
                "tw-bg-grey": unref(storeAuthentication).getUserType === "employee"
              }, "tw-mx-4 tw-normal-case tw-rounded-full"])
            }, {
              default: withCtx(() => [
                createTextVNode("Admin Login")
              ]),
              _: 1
            }, 8, ["class"]),
            _hoisted_5
          ]),
          createBaseVNode("div", _hoisted_6, [
            _hoisted_7,
            createBaseVNode("div", _hoisted_8, [
              createTextVNode(" EMPLOYEE ID "),
              createVNode(QInput, {
                borderless: "",
                modelValue: unref(storeAuthentication).employeeId,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(storeAuthentication).employeeId = $event),
                class: "tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white tw-mt-1",
                dense: "dense"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createVNode(QInput, {
                borderless: "",
                modelValue: unref(storeAuthentication).password,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(storeAuthentication).password = $event),
                class: "tw-w-full tw-px-2 tw-rounded-3xl tw-bg-white tw-mt-1",
                dense: "dense",
                type: "password"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_11, [
              unref(storeAuthentication).firstSubmit && (!unref(storeAuthentication).employeeId || !unref(storeAuthentication).password) ? (openBlock(), createElementBlock("p", _hoisted_12, [
                _hoisted_13,
                _hoisted_14,
                createTextVNode(" Invalid employee id or password ")
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(QBtn, {
                class: "tw-bottom-1 tw-rounded-3xl tw-px-7 bg-secondary tw-normal-case",
                onClick: _cache[4] || (_cache[4] = ($event) => unref(storeAuthentication).firstSubmit = true),
                to: "/dashboard"
              }, {
                default: withCtx(() => [
                  createTextVNode("Login")
                ]),
                _: 1
              })
            ])
          ]),
          _hoisted_16
        ])
      ]);
    };
  }
};
var LoginPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "LoginPage.vue"]]);
export { LoginPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmYyNjY5NWU2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvTG9naW5QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwPlxyXG5pbXBvcnQgeyB1c2VBdXRoZW50aWNhdGlvblN0b3JlIH0gZnJvbSBcIi4uL3N0b3Jlcy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuY29uc3Qgc3RvcmVBdXRoZW50aWNhdGlvbiA9IHVzZUF1dGhlbnRpY2F0aW9uU3RvcmUoKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInR3LWZsZXggdHctbXgtYXV0byB0dy1oLXNjcmVlbiB0dy1teS1hdXRvIHR3LXctbWF4XCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwidHctbWluLXctbWluIHR3LWZsZXggdHctbXktYXV0byB0dy1wLTIgdHctYmctcHJpbWFyeSB0dy10ZXh0LXdoaXRlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXggdHctbWItMjQgdHctbXItMzJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9sb2dvLnBuZ1wiIGNsYXNzPVwidHctc2l6ZS0zMlwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LW15LWF1dG8gdHctcGwtMyB0dy10ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgQTEgQWdybyBGZXJ0aWxpemVyIDxiciAvPmFuZCBDaGVtaWNhbCBTdXBwbHlcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0dy13LWF1dG8gdHctbXktYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1wLTNcIj5cclxuICAgICAgICA8cS1idG5cclxuICAgICAgICAgIHYtb246Y2xpY2s9XCJzdG9yZUF1dGhlbnRpY2F0aW9uLnNldFVzZXJUeXBlKCdlbXBsb3llZScpXCJcclxuICAgICAgICAgIHYtYmluZDpjbGFzcz1cIntcclxuICAgICAgICAgICAgJ2JnLXNlY29uZGFyeSc6IHN0b3JlQXV0aGVudGljYXRpb24uZ2V0VXNlclR5cGUgPT09ICdlbXBsb3llZScsXHJcbiAgICAgICAgICAgICd0dy1iZy1ncmV5Jzogc3RvcmVBdXRoZW50aWNhdGlvbi5nZXRVc2VyVHlwZSA9PT0gJ2FkbWluJyxcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJ0dy1ub3JtYWwtY2FzZSB0dy1yb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgPkVtcGxveWVlIExvZ2luPC9xLWJ0blxyXG4gICAgICAgID5cclxuICAgICAgICA8cS1idG5cclxuICAgICAgICAgIHYtb246Y2xpY2s9XCJzdG9yZUF1dGhlbnRpY2F0aW9uLnNldFVzZXJUeXBlKCdhZG1pbicpXCJcclxuICAgICAgICAgIHYtYmluZDpjbGFzcz1cIntcclxuICAgICAgICAgICAgJ2JnLXNlY29uZGFyeSc6IHN0b3JlQXV0aGVudGljYXRpb24uZ2V0VXNlclR5cGUgPT09ICdhZG1pbicsXHJcbiAgICAgICAgICAgICd0dy1iZy1ncmV5Jzogc3RvcmVBdXRoZW50aWNhdGlvbi5nZXRVc2VyVHlwZSA9PT0gJ2VtcGxveWVlJyxcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJ0dy1teC00IHR3LW5vcm1hbC1jYXNlIHR3LXJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICA+QWRtaW4gTG9naW48L3EtYnRuXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0dy13LTI0XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJ0dy10ZXh0LXdoaXRlIHR3LW0tMyB0dy1iZy1ncmF5LTEwMCB0dy1zaGFkb3ctbGcgdHctbXgtYXV0byB0dy1yb3VuZGVkLTN4bFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctdGV4dC1jZW50ZXIgdHctdGV4dC0zeGwgdHctcC00XCI+U2lnbiBJbjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwidHctcC0zIHR3LXJvdW5kZWQtM3hsIHR3LWJnLW5ldXRyYWwtMzAwIHR3LWNlbnRlciB0dy1teC01IHR3LW1iLTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVNUExPWUVFIElEXHJcbiAgICAgICAgICA8cS1pbnB1dFxyXG4gICAgICAgICAgICBib3JkZXJsZXNzXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZUF1dGhlbnRpY2F0aW9uLmVtcGxveWVlSWRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInR3LXctZnVsbCB0dy1weC0yIHR3LXJvdW5kZWQtM3hsIHR3LWJnLXdoaXRlIHR3LW10LTFcIlxyXG4gICAgICAgICAgICBkZW5zZT1cImRlbnNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LXJvdW5kZWQtM3hsIHR3LWJnLW5ldXRyYWwtMzAwIHR3LWNlbnRlciB0dy1wLTMgdHctbXgtNVwiPlxyXG4gICAgICAgICAgPGRpdj5QQVNTV09SRDwvZGl2PlxyXG4gICAgICAgICAgPHEtaW5wdXRcclxuICAgICAgICAgICAgYm9yZGVybGVzc1xyXG4gICAgICAgICAgICB2LW1vZGVsPVwic3RvcmVBdXRoZW50aWNhdGlvbi5wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidHctdy1mdWxsIHR3LXB4LTIgdHctcm91bmRlZC0zeGwgdHctYmctd2hpdGUgdHctbXQtMVwiXHJcbiAgICAgICAgICAgIGRlbnNlPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctbXgtYXV0byB0dy13LW1heCB0dy10ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgIHN0b3JlQXV0aGVudGljYXRpb24uZmlyc3RTdWJtaXQgJiZcclxuICAgICAgICAgICAgICAoIXN0b3JlQXV0aGVudGljYXRpb24uZW1wbG95ZWVJZCB8fCAhc3RvcmVBdXRoZW50aWNhdGlvbi5wYXNzd29yZClcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0dy1iZy1yZWQtMjAwIHR3LWJvcmRlciB0dy1ib3JkZXItcmVkLTUwMCB0dy1weC0yIHR3LXB5LTEgdHctbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwidHctZm9udC1ib2xkXCI+V3JvbmcgQ3JlZGVudGlhbHM8L3RleHQ+PGJyIC8+XHJcbiAgICAgICAgICAgIEludmFsaWQgZW1wbG95ZWUgaWQgb3IgcGFzc3dvcmRcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwhLS0gPGJyXHJcbiAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICBzdG9yZUF1dGhlbnRpY2F0aW9uLmZpcnN0U3VibWl0ICYmICFzdG9yZUF1dGhlbnRpY2F0aW9uLmVtcGxveWVlSWRcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgc3RvcmVBdXRoZW50aWNhdGlvbi5maXJzdFN1Ym1pdCAmJiAhc3RvcmVBdXRoZW50aWNhdGlvbi5wYXNzd29yZFxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInR3LXRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgID5QYXNzd29yZCBpcyByZXF1aXJlZDwvc3BhblxyXG4gICAgICAgICAgPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctdGV4dC1sZyB0dy10ZXh0LWNlbnRlciB0dy1wLTNcIj5cclxuICAgICAgICAgIDxxLWJ0blxyXG4gICAgICAgICAgICBjbGFzcz1cInR3LWJvdHRvbS0xIHR3LXJvdW5kZWQtM3hsIHR3LXB4LTcgYmctc2Vjb25kYXJ5IHR3LW5vcm1hbC1jYXNlXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwic3RvcmVBdXRoZW50aWNhdGlvbi5maXJzdFN1Ym1pdCA9IHRydWVcIlxyXG4gICAgICAgICAgICB0bz1cIi9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICA+TG9naW48L3EtYnRuXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidHctaC0yNFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxVQUFNLHNCQUFzQix1QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
