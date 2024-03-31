import { Q as QTable } from "./QTable.e0a74aa1.js";
import { Q as QPage } from "./QPage.912c99b4.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import { u as useRequestsEmployeeStore } from "./requestsEmployee.d25d95e5.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, a3 as Fragment, a as createBaseVNode, e as unref, f as createTextVNode } from "./index.cc9bdf73.js";
import "./QList.79bff727.js";
import "./focus-manager.71507900.js";
import "./QSelect.054a7805.js";
import "./use-key-composition.f687006c.js";
import "./position-engine.816f361e.js";
import "./pageHeader.b3a6f4b2.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-mb-3 tw-text-center tw-gap-y-2 tw-w-8/12 tw-mx-auto" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-p-3 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "" }, "01 / 30 / 2024")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-p-2 tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-flex-row" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex-auto tw-px-3" }, [
        /* @__PURE__ */ createTextVNode(" PRESENT"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("span", { class: "tw-underline" }, "1")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex-auto tw-px-3" }, [
        /* @__PURE__ */ createTextVNode(" LATE"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("span", { class: "tw-underline" }, "2")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex-auto tw-px-3" }, [
        /* @__PURE__ */ createTextVNode(" ABSENT"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createBaseVNode("span", { class: "tw-underline" }, "3")
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-bg-white tw-rounded-full tw-shadow-md tw-flex-nowrap" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-flex-row tw-p-2" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-px-3" }, [
        /* @__PURE__ */ createTextVNode("TIME-IN"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode("8:00AM")
      ]),
      /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-px-3" }, [
        /* @__PURE__ */ createTextVNode("TIME-OUT"),
        /* @__PURE__ */ createBaseVNode("br"),
        /* @__PURE__ */ createTextVNode("________")
      ])
    ])
  ])
], -1);
const _hoisted_2 = { class: "tw-w-8/12 tw-mx-auto" };
const _sfc_main = {
  __name: "DashboardPage",
  setup(__props) {
    const columns = [
      {
        name: "referenceId",
        required: true,
        label: "Reference ID",
        align: "left",
        field: (row) => row.referenceId,
        format: (val) => `${val}`,
        sortable: true
      },
      {
        name: "Type",
        align: "center",
        label: "Type",
        field: "type",
        sortable: true
      },
      {
        name: "Description",
        align: "center",
        label: "Description",
        field: "description",
        sortable: true
      },
      {
        name: "Status",
        align: "center",
        label: "Status",
        field: "status",
        sortable: true
      },
      {
        name: "Remarks",
        align: "center",
        label: "Remarks",
        field: "remarks",
        sortable: true
      }
    ];
    const storeRequestsEmployee = useRequestsEmployeeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PageHeader, { currentPage: "Dashboard" }),
        createVNode(QPage, null, {
          default: withCtx(() => [
            _hoisted_1,
            createBaseVNode("div", _hoisted_2, [
              createVNode(QTable, {
                class: "my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
                flat: "",
                bordered: "",
                title: "Requests",
                rows: unref(storeRequestsEmployee).rows,
                columns,
                "rows-per-page-options": [10, 20, 0],
                "row-key": "name"
              }, null, 8, ["rows"])
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
var DashboardPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "DashboardPage.vue"]]);
export { DashboardPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkUGFnZS5hMjQ2NTA3MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0Rhc2hib2FyZFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXA+XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VIZWFkZXIudnVlXCI7XHJcbmltcG9ydCB7IHVzZVJlcXVlc3RzRW1wbG95ZWVTdG9yZSB9IGZyb20gXCJzdG9yZXMvcGFnZXMvcmVxdWVzdHNFbXBsb3llZVwiO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInJlZmVyZW5jZUlkXCIsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiBcIlJlZmVyZW5jZSBJRFwiLFxyXG4gICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgZmllbGQ6IChyb3cpID0+IHJvdy5yZWZlcmVuY2VJZCxcclxuICAgIGZvcm1hdDogKHZhbCkgPT4gYCR7dmFsfWAsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHlwZVwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJUeXBlXCIsXHJcbiAgICBmaWVsZDogXCJ0eXBlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3RhdHVzXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxyXG4gICAgZmllbGQ6IFwic3RhdHVzXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVtYXJrc1wiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJSZW1hcmtzXCIsXHJcbiAgICBmaWVsZDogXCJyZW1hcmtzXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc3RvcmVSZXF1ZXN0c0VtcGxveWVlID0gdXNlUmVxdWVzdHNFbXBsb3llZVN0b3JlKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxwYWdlLWhlYWRlciBjdXJyZW50UGFnZT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgPHEtcGFnZT5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJ0dy1mbGV4IHR3LWZsZXgtd3JhcCB0dy1pdGVtcy1jZW50ZXIgdHctanVzdGlmeS1hcm91bmQgdHctbWItMyB0dy10ZXh0LWNlbnRlciB0dy1nYXAteS0yIHR3LXctOC8xMiB0dy1teC1hdXRvXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwidHctZmxleCB0dy1wLTMgdHctYmctd2hpdGUgdHctcm91bmRlZC1mdWxsIHR3LXNoYWRvdy1tZCB0dy1mbGV4LW5vd3JhcFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+MDEgLyAzMCAvIDIwMjQ8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctcC0yIHR3LWJnLXdoaXRlIHR3LXJvdW5kZWQtZnVsbCB0dy1zaGFkb3ctbWQgdHctZmxleC1ub3dyYXBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXggdHctZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1mbGV4LWF1dG8gdHctcHgtM1wiPlxyXG4gICAgICAgICAgICBQUkVTRU5UPGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHctdW5kZXJsaW5lXCI+MTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXgtYXV0byB0dy1weC0zXCI+XHJcbiAgICAgICAgICAgIExBVEU8YnIgLz48c3BhbiBjbGFzcz1cInR3LXVuZGVybGluZVwiPjI8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1mbGV4LWF1dG8gdHctcHgtM1wiPlxyXG4gICAgICAgICAgICBBQlNFTlQ8YnIgLz48c3BhbiBjbGFzcz1cInR3LXVuZGVybGluZVwiPjM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctYmctd2hpdGUgdHctcm91bmRlZC1mdWxsIHR3LXNoYWRvdy1tZCB0dy1mbGV4LW5vd3JhcFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1mbGV4LXJvdyB0dy1wLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1mbGV4IHR3LXB4LTNcIj5USU1FLUlOPGJyIC8+ODowMEFNPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1weC0zXCI+VElNRS1PVVQ8YnIgLz5fX19fX19fXzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInR3LXctOC8xMiB0dy1teC1hdXRvXCI+XHJcbiAgICAgIDxxLXRhYmxlXHJcbiAgICAgICAgY2xhc3M9XCJteS1zdGlja3ktaGVhZGVyLXRhYmxlIHR3LXctMTEvMTIgdHctbXgtYXV0byB0dy1tdC02IHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1ib3JkZXIgdHctcm91bmRlZC0zeGwgdHctYm9yZGVyLWNvbGxhcHNlXCJcclxuICAgICAgICBmbGF0XHJcbiAgICAgICAgYm9yZGVyZWRcclxuICAgICAgICB0aXRsZT1cIlJlcXVlc3RzXCJcclxuICAgICAgICA6cm93cz1cInN0b3JlUmVxdWVzdHNFbXBsb3llZS5yb3dzXCJcclxuICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxyXG4gICAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMTAsIDIwLCAwXVwiXHJcbiAgICAgICAgcm93LWtleT1cIm5hbWVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9xLXBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFRLElBQUk7QUFBQSxRQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0g7QUFFQSxVQUFNLHdCQUF3Qix5QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
