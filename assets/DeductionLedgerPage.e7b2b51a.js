import { Q as QSelect } from "./QSelect.054a7805.js";
import { Q as QTable } from "./QTable.e0a74aa1.js";
import { Q as QPage } from "./QPage.912c99b4.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import { u as useLoanStore } from "./loan.253a6661.js";
import { aq as defineStore, _ as _export_sfc, r as ref, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, a3 as Fragment, a as createBaseVNode, a5 as createBlock, e as unref, g as createCommentVNode } from "./index.cc9bdf73.js";
import "./use-key-composition.f687006c.js";
import "./focus-manager.71507900.js";
import "./position-engine.816f361e.js";
import "./QList.79bff727.js";
import "./pageHeader.b3a6f4b2.js";
const useSSSStore = defineStore("sss", {
  state: () => ({
    rows: [
      {
        referenceId: 1,
        deductionType: "SSS",
        type: "SSS Contribution",
        description: "Description 1",
        price: 1e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 2,
        deductionType: "SSS",
        type: "SSS Calamity Loan",
        description: "Description 2",
        price: 2e3,
        payPeriod: "September 1-15 2023"
      },
      {
        referenceId: 3,
        deductionType: "SSS",
        type: "SSS Loan",
        description: "Description 3",
        price: 3e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 4,
        deductionType: "SSS",
        type: "SSS Loan",
        description: "Description 4",
        price: 4e3,
        payPeriod: "August 15-30 2023"
      },
      {
        referenceId: 5,
        deductionType: "SSS",
        type: "SSS Contribution",
        description: "Description 5",
        price: 5e3,
        payPeriod: "August 1-15 2023"
      }
    ]
  }),
  getters: {},
  actions: {}
});
const usePhilHealthStore = defineStore("philHealth", {
  state: () => ({
    rows: [
      {
        referenceId: 1,
        deductionType: "PhilHealth",
        type: "PhilHealth Contribution",
        description: "Description 1",
        price: 1e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 2,
        deductionType: "PhilHealth",
        type: "PhilHealth Contribution",
        description: "Description 2",
        price: 2e3,
        payPeriod: "September 1-15 2023"
      },
      {
        referenceId: 3,
        deductionType: "PhilHealth",
        type: "PhilHealth Contribution",
        description: "Description 3",
        price: 3e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 4,
        deductionType: "PhilHealth",
        type: "PhilHealth Contribution",
        description: "Description 4",
        price: 4e3,
        payPeriod: "August 15-30 2023"
      },
      {
        referenceId: 5,
        deductionType: "PhilHealth",
        type: "PhilHealth Contribution",
        description: "Description 5",
        price: 5e3,
        payPeriod: "August 1-15 2023"
      }
    ]
  }),
  getters: {},
  actions: {}
});
const useTaxStore = defineStore("tax", {
  state: () => ({
    rows: [
      {
        referenceId: 1,
        deductionType: "Tax",
        type: "Income Tax",
        description: "Description 1",
        price: 1e3,
        payPeriod: "Dec 15-30 2023"
      },
      {
        referenceId: 2,
        deductionType: "Tax",
        type: "Income Tax",
        description: "Description 2",
        price: 2e3,
        payPeriod: "Dec 15-30 2023"
      },
      {
        referenceId: 3,
        deductionType: "Tax",
        type: "Income Tax",
        description: "Description 3",
        price: 3e3,
        payPeriod: "Dec 15-30 2023"
      },
      {
        referenceId: 4,
        deductionType: "Tax",
        type: "Income Tax",
        description: "Description 4",
        price: 4e3,
        payPeriod: "Dec 15-30 2023"
      },
      {
        referenceId: 5,
        deductionType: "Tax",
        type: "Income Tax",
        description: "Description 5",
        price: 5e3,
        payPeriod: "Dec 15-30 2023"
      }
    ]
  }),
  getters: {},
  actions: {}
});
const _hoisted_1 = { class: "tw-w-6/12 tw-mx-auto tw-mb-3" };
const _sfc_main = {
  __name: "DeductionLedgerPage",
  setup(__props) {
    const storeLoan = useLoanStore();
    const storeSSSLoan = useSSSStore();
    const storePhilHealth = usePhilHealthStore();
    const storeTax = useTaxStore();
    const deductionListModel = ref("All");
    const deductionListOptions = [
      "Company Loan",
      "SSS",
      "PhilHealth",
      "Tax",
      "All"
    ];
    const allColumns = [
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
        name: "Deduction Type",
        align: "center",
        label: "Deduction Type",
        field: "deductionType",
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
        name: "Pay Period",
        align: "center",
        label: "Pay Period",
        field: "payPeriod",
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
        name: "Price",
        align: "center",
        label: "Price",
        field: "price",
        sortable: true
      }
    ];
    const loanColumns = [
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
        name: "Pay Period",
        align: "center",
        label: "Pay Period",
        field: "payPeriod",
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
        name: "Price",
        align: "center",
        label: "Price",
        field: "price",
        sortable: true
      }
    ];
    const allStore = storeLoan.rows.concat(storeSSSLoan.rows).concat(storePhilHealth.rows).concat(storeTax.rows);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PageHeader, { currentPage: "Deduction Ledger" }),
        createVNode(QPage, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(QSelect, {
                borderless: "",
                modelValue: deductionListModel.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => deductionListModel.value = $event),
                options: deductionListOptions,
                onOnChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event)),
                class: "tw-pl-3 tw-w-min tw-text-nowrap tw-outline tw-outline-1 tw-outline-slate-400 tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-3xl"
              }, null, 8, ["modelValue"])
            ]),
            deductionListModel.value == "All" ? (openBlock(), createBlock(QTable, {
              key: 0,
              class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
              flat: "",
              bordered: "",
              title: "",
              rows: unref(allStore),
              columns: allColumns,
              "rows-per-page-options": [10, 20, 0],
              "row-key": "name"
            }, null, 8, ["rows"])) : deductionListModel.value == "Company Loan" ? (openBlock(), createBlock(QTable, {
              key: 1,
              class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
              flat: "",
              bordered: "",
              title: "",
              rows: unref(storeLoan).rows,
              columns: loanColumns,
              "rows-per-page-options": [10, 20, 0],
              "row-key": "name"
            }, null, 8, ["rows"])) : deductionListModel.value == "SSS" ? (openBlock(), createBlock(QTable, {
              key: 2,
              class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
              flat: "",
              bordered: "",
              title: "",
              rows: unref(storeSSSLoan).rows,
              columns: loanColumns,
              "rows-per-page-options": [10, 20, 0],
              "row-key": "name"
            }, null, 8, ["rows"])) : deductionListModel.value == "PhilHealth" ? (openBlock(), createBlock(QTable, {
              key: 3,
              class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
              flat: "",
              bordered: "",
              title: "",
              rows: unref(storePhilHealth).rows,
              columns: loanColumns,
              "rows-per-page-options": [10, 20, 0],
              "row-key": "name"
            }, null, 8, ["rows"])) : deductionListModel.value == "Tax" ? (openBlock(), createBlock(QTable, {
              key: 4,
              class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
              flat: "",
              bordered: "",
              title: "",
              rows: unref(storeTax).rows,
              columns: loanColumns,
              "rows-per-page-options": [10, 20, 0],
              "row-key": "name"
            }, null, 8, ["rows"])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
var DeductionLedgerPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "DeductionLedgerPage.vue"]]);
export { DeductionLedgerPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVkdWN0aW9uTGVkZ2VyUGFnZS5lN2IyYjUxYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9wYWdlcy9zc3MuanMiLCIuLi8uLi8uLi9zcmMvc3RvcmVzL3BhZ2VzL3BoaWxIZWFsdGguanMiLCIuLi8uLi8uLi9zcmMvc3RvcmVzL3BhZ2VzL3RheC5qcyIsIi4uLy4uLy4uL3NyYy9wYWdlcy9EZWR1Y3Rpb25MZWRnZXJQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVNTU1N0b3JlID0gZGVmaW5lU3RvcmUoXCJzc3NcIiwge1xyXG4gIHN0YXRlOiAoKSA9PiAoe1xyXG4gICAgcm93czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDEsXHJcbiAgICAgICAgZGVkdWN0aW9uVHlwZTogXCJTU1NcIixcclxuICAgICAgICB0eXBlOiBcIlNTUyBDb250cmlidXRpb25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIk9jdG9iZXIgMS0xNSAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMixcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIlNTU1wiLFxyXG4gICAgICAgIHR5cGU6IFwiU1NTIENhbGFtaXR5IExvYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAyXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIlNlcHRlbWJlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAzLFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiU1NTXCIsXHJcbiAgICAgICAgdHlwZTogXCJTU1MgTG9hblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgICBwcmljZTogMzAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiT2N0b2JlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA0LFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiU1NTXCIsXHJcbiAgICAgICAgdHlwZTogXCJTU1MgTG9hblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDRcIixcclxuICAgICAgICBwcmljZTogNDAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiQXVndXN0IDE1LTMwIDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA1LFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiU1NTXCIsXHJcbiAgICAgICAgdHlwZTogXCJTU1MgQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gNVwiLFxyXG4gICAgICAgIHByaWNlOiA1MDAwLFxyXG4gICAgICAgIHBheVBlcmlvZDogXCJBdWd1c3QgMS0xNSAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pLFxyXG5cclxuICBnZXR0ZXJzOiB7XHJcbiAgICAvLyBkb3VibGVDb3VudChzdGF0ZSkge1xyXG4gICAgLy8gICByZXR1cm4gc3RhdGUuY291bnRlciAqIDI7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIC8vIGluY3JlbWVudCgpIHtcclxuICAgIC8vICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBoaWxIZWFsdGhTdG9yZSA9IGRlZmluZVN0b3JlKFwicGhpbEhlYWx0aFwiLCB7XHJcbiAgc3RhdGU6ICgpID0+ICh7XHJcbiAgICByb3dzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMSxcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIlBoaWxIZWFsdGhcIixcclxuICAgICAgICB0eXBlOiBcIlBoaWxIZWFsdGggQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gMVwiLFxyXG4gICAgICAgIHByaWNlOiAxMDAwLFxyXG4gICAgICAgIHBheVBlcmlvZDogXCJPY3RvYmVyIDEtMTUgMjAyM1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDIsXHJcbiAgICAgICAgZGVkdWN0aW9uVHlwZTogXCJQaGlsSGVhbHRoXCIsXHJcbiAgICAgICAgdHlwZTogXCJQaGlsSGVhbHRoIENvbnRyaWJ1dGlvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDJcIixcclxuICAgICAgICBwcmljZTogMjAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiU2VwdGVtYmVyIDEtMTUgMjAyM1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDMsXHJcbiAgICAgICAgZGVkdWN0aW9uVHlwZTogXCJQaGlsSGVhbHRoXCIsXHJcbiAgICAgICAgdHlwZTogXCJQaGlsSGVhbHRoIENvbnRyaWJ1dGlvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgICBwcmljZTogMzAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiT2N0b2JlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA0LFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiUGhpbEhlYWx0aFwiLFxyXG4gICAgICAgIHR5cGU6IFwiUGhpbEhlYWx0aCBDb250cmlidXRpb25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiA0XCIsXHJcbiAgICAgICAgcHJpY2U6IDQwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIkF1Z3VzdCAxNS0zMCAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogNSxcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIlBoaWxIZWFsdGhcIixcclxuICAgICAgICB0eXBlOiBcIlBoaWxIZWFsdGggQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gNVwiLFxyXG4gICAgICAgIHByaWNlOiA1MDAwLFxyXG4gICAgICAgIHBheVBlcmlvZDogXCJBdWd1c3QgMS0xNSAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pLFxyXG5cclxuICBnZXR0ZXJzOiB7XHJcbiAgICAvLyBkb3VibGVDb3VudChzdGF0ZSkge1xyXG4gICAgLy8gICByZXR1cm4gc3RhdGUuY291bnRlciAqIDI7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIC8vIGluY3JlbWVudCgpIHtcclxuICAgIC8vICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVRheFN0b3JlID0gZGVmaW5lU3RvcmUoXCJ0YXhcIiwge1xyXG4gIHN0YXRlOiAoKSA9PiAoe1xyXG4gICAgcm93czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDEsXHJcbiAgICAgICAgZGVkdWN0aW9uVHlwZTogXCJUYXhcIixcclxuICAgICAgICB0eXBlOiBcIkluY29tZSBUYXhcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAxXCIsXHJcbiAgICAgICAgcHJpY2U6IDEwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIkRlYyAxNS0zMCAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMixcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIlRheFwiLFxyXG4gICAgICAgIHR5cGU6IFwiSW5jb21lIFRheFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDJcIixcclxuICAgICAgICBwcmljZTogMjAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiRGVjIDE1LTMwIDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAzLFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiVGF4XCIsXHJcbiAgICAgICAgdHlwZTogXCJJbmNvbWUgVGF4XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gM1wiLFxyXG4gICAgICAgIHByaWNlOiAzMDAwLFxyXG4gICAgICAgIHBheVBlcmlvZDogXCJEZWMgMTUtMzAgMjAyM1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDQsXHJcbiAgICAgICAgZGVkdWN0aW9uVHlwZTogXCJUYXhcIixcclxuICAgICAgICB0eXBlOiBcIkluY29tZSBUYXhcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiA0XCIsXHJcbiAgICAgICAgcHJpY2U6IDQwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIkRlYyAxNS0zMCAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogNSxcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIlRheFwiLFxyXG4gICAgICAgIHR5cGU6IFwiSW5jb21lIFRheFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDVcIixcclxuICAgICAgICBwcmljZTogNTAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiRGVjIDE1LTMwIDIwMjNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSksXHJcblxyXG4gIGdldHRlcnM6IHtcclxuICAgIC8vIGRvdWJsZUNvdW50KHN0YXRlKSB7XHJcbiAgICAvLyAgIHJldHVybiBzdGF0ZS5jb3VudGVyICogMjtcclxuICAgIC8vIH0sXHJcbiAgfSxcclxuXHJcbiAgYWN0aW9uczoge1xyXG4gICAgLy8gaW5jcmVtZW50KCkge1xyXG4gICAgLy8gICB0aGlzLmNvdW50ZXIrKztcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsIjxzY3JpcHQgc2V0dXA+XHJcbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhlYWRlci52dWVcIjtcclxuaW1wb3J0IHsgdXNlTG9hblN0b3JlIH0gZnJvbSBcInNyYy9zdG9yZXMvcGFnZXMvbG9hblwiO1xyXG5pbXBvcnQgeyB1c2VTU1NTdG9yZSB9IGZyb20gXCJzcmMvc3RvcmVzL3BhZ2VzL3Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VQaGlsSGVhbHRoU3RvcmUgfSBmcm9tIFwic3JjL3N0b3Jlcy9wYWdlcy9waGlsSGVhbHRoXCI7XHJcbmltcG9ydCB7IHVzZVRheFN0b3JlIH0gZnJvbSBcInNyYy9zdG9yZXMvcGFnZXMvdGF4XCI7XHJcblxyXG5jb25zdCBzdG9yZUxvYW4gPSB1c2VMb2FuU3RvcmUoKTtcclxuY29uc3Qgc3RvcmVTU1NMb2FuID0gdXNlU1NTU3RvcmUoKTtcclxuY29uc3Qgc3RvcmVQaGlsSGVhbHRoID0gdXNlUGhpbEhlYWx0aFN0b3JlKCk7XHJcbmNvbnN0IHN0b3JlVGF4ID0gdXNlVGF4U3RvcmUoKTtcclxuXHJcbmNvbnN0IGRlZHVjdGlvbkxpc3RNb2RlbCA9IHJlZihcIkFsbFwiKTtcclxuY29uc3QgZGVkdWN0aW9uTGlzdE9wdGlvbnMgPSBbXHJcbiAgXCJDb21wYW55IExvYW5cIixcclxuICBcIlNTU1wiLFxyXG4gIFwiUGhpbEhlYWx0aFwiLFxyXG4gIFwiVGF4XCIsXHJcbiAgXCJBbGxcIixcclxuXTtcclxuXHJcbi8vRklYTUU6IE5lZWQgdG8gYWRkIHRoZSBjb3JyZWN0IGNvbHVtbnNcclxuY29uc3QgYWxsQ29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInJlZmVyZW5jZUlkXCIsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiBcIlJlZmVyZW5jZSBJRFwiLFxyXG4gICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgZmllbGQ6IChyb3cpID0+IHJvdy5yZWZlcmVuY2VJZCxcclxuICAgIGZvcm1hdDogKHZhbCkgPT4gYCR7dmFsfWAsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGVkdWN0aW9uIFR5cGVcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiRGVkdWN0aW9uIFR5cGVcIixcclxuICAgIGZpZWxkOiBcImRlZHVjdGlvblR5cGVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUeXBlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlR5cGVcIixcclxuICAgIGZpZWxkOiBcInR5cGVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQYXkgUGVyaW9kXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlBheSBQZXJpb2RcIixcclxuICAgIGZpZWxkOiBcInBheVBlcmlvZFwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICBmaWVsZDogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlByaWNlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlByaWNlXCIsXHJcbiAgICBmaWVsZDogXCJwcmljZVwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGxvYW5Db2x1bW5zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwicmVmZXJlbmNlSWRcIixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbGFiZWw6IFwiUmVmZXJlbmNlIElEXCIsXHJcbiAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBmaWVsZDogKHJvdykgPT4gcm93LnJlZmVyZW5jZUlkLFxyXG4gICAgZm9ybWF0OiAodmFsKSA9PiBgJHt2YWx9YCxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUeXBlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlR5cGVcIixcclxuICAgIGZpZWxkOiBcInR5cGVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQYXkgUGVyaW9kXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlBheSBQZXJpb2RcIixcclxuICAgIGZpZWxkOiBcInBheVBlcmlvZFwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICBmaWVsZDogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlByaWNlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlByaWNlXCIsXHJcbiAgICBmaWVsZDogXCJwcmljZVwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNzc0NvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJyZWZlcmVuY2VJZFwiLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogXCJSZWZlcmVuY2UgSURcIixcclxuICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgIGZpZWxkOiAocm93KSA9PiByb3cucmVmZXJlbmNlSWQsXHJcbiAgICBmb3JtYXQ6ICh2YWwpID0+IGAke3ZhbH1gLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlR5cGVcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiVHlwZVwiLFxyXG4gICAgZmllbGQ6IFwidHlwZVwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBheSBQZXJpb2RcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiUGF5IFBlcmlvZFwiLFxyXG4gICAgZmllbGQ6IFwicGF5UGVyaW9kXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUHJpY2VcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiUHJpY2VcIixcclxuICAgIGZpZWxkOiBcInByaWNlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWxsU3RvcmUgPSBzdG9yZUxvYW4ucm93c1xyXG4gIC5jb25jYXQoc3RvcmVTU1NMb2FuLnJvd3MpXHJcbiAgLmNvbmNhdChzdG9yZVBoaWxIZWFsdGgucm93cylcclxuICAuY29uY2F0KHN0b3JlVGF4LnJvd3MpO1xyXG48L3NjcmlwdD5cclxuPHRlbXBsYXRlPlxyXG4gIDxwYWdlLWhlYWRlciBjdXJyZW50UGFnZT1cIkRlZHVjdGlvbiBMZWRnZXJcIiAvPlxyXG4gIDxxLXBhZ2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHctdy02LzEyIHR3LW14LWF1dG8gdHctbWItM1wiPlxyXG4gICAgICA8cS1zZWxlY3RcclxuICAgICAgICBib3JkZXJsZXNzXHJcbiAgICAgICAgdi1tb2RlbD1cImRlZHVjdGlvbkxpc3RNb2RlbFwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJkZWR1Y3Rpb25MaXN0T3B0aW9uc1wiXHJcbiAgICAgICAgQG9uQ2hhbmdlPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJ0dy1wbC0zIHR3LXctbWluIHR3LXRleHQtbm93cmFwIHR3LW91dGxpbmUgdHctb3V0bGluZS0xIHR3LW91dGxpbmUtc2xhdGUtNDAwIHR3LXByLTIgdHctYmctd2hpdGUgdHctc2hhZG93LWxnIHR3LXJvdW5kZWQtM3hsXCJcclxuICAgICAgPlxyXG4gICAgICA8L3Etc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cS10YWJsZVxyXG4gICAgICB2LWlmPVwiZGVkdWN0aW9uTGlzdE1vZGVsID09ICdBbGwnXCJcclxuICAgICAgY2xhc3M9XCJteS1zdGlja3ktaGVhZGVyLXRhYmxlIHR3LXctNi8xMiB0dy1teC1hdXRvIHR3LW1iLTMgdHctYmctd2hpdGUgdHctc2hhZG93LWxnIHR3LWJvcmRlciB0dy1yb3VuZGVkLTN4bCB0dy1ib3JkZXItY29sbGFwc2VcIlxyXG4gICAgICBmbGF0XHJcbiAgICAgIGJvcmRlcmVkXHJcbiAgICAgIHRpdGxlPVwiXCJcclxuICAgICAgOnJvd3M9XCJhbGxTdG9yZVwiXHJcbiAgICAgIDpjb2x1bW5zPVwiYWxsQ29sdW1uc1wiXHJcbiAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMTAsIDIwLCAwXVwiXHJcbiAgICAgIHJvdy1rZXk9XCJuYW1lXCJcclxuICAgID5cclxuICAgIDwvcS10YWJsZT5cclxuICAgIDxxLXRhYmxlXHJcbiAgICAgIHYtZWxzZS1pZj1cImRlZHVjdGlvbkxpc3RNb2RlbCA9PSAnQ29tcGFueSBMb2FuJ1wiXHJcbiAgICAgIGNsYXNzPVwibXktc3RpY2t5LWhlYWRlci10YWJsZSB0dy13LTYvMTIgdHctbXgtYXV0byB0dy1tYi0zIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1ib3JkZXIgdHctcm91bmRlZC0zeGwgdHctYm9yZGVyLWNvbGxhcHNlXCJcclxuICAgICAgZmxhdFxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICB0aXRsZT1cIlwiXHJcbiAgICAgIDpyb3dzPVwic3RvcmVMb2FuLnJvd3NcIlxyXG4gICAgICA6Y29sdW1ucz1cImxvYW5Db2x1bW5zXCJcclxuICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlsxMCwgMjAsIDBdXCJcclxuICAgICAgcm93LWtleT1cIm5hbWVcIlxyXG4gICAgLz5cclxuICAgIDxxLXRhYmxlXHJcbiAgICAgIHYtZWxzZS1pZj1cImRlZHVjdGlvbkxpc3RNb2RlbCA9PSAnU1NTJ1wiXHJcbiAgICAgIGNsYXNzPVwibXktc3RpY2t5LWhlYWRlci10YWJsZSB0dy13LTYvMTIgdHctbXgtYXV0byB0dy1tYi0zIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1ib3JkZXIgdHctcm91bmRlZC0zeGwgdHctYm9yZGVyLWNvbGxhcHNlXCJcclxuICAgICAgZmxhdFxyXG4gICAgICBib3JkZXJlZFxyXG4gICAgICB0aXRsZT1cIlwiXHJcbiAgICAgIDpyb3dzPVwic3RvcmVTU1NMb2FuLnJvd3NcIlxyXG4gICAgICA6Y29sdW1ucz1cImxvYW5Db2x1bW5zXCJcclxuICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlsxMCwgMjAsIDBdXCJcclxuICAgICAgcm93LWtleT1cIm5hbWVcIlxyXG4gICAgLz5cclxuICAgIDxxLXRhYmxlXHJcbiAgICAgIHYtZWxzZS1pZj1cImRlZHVjdGlvbkxpc3RNb2RlbCA9PSAnUGhpbEhlYWx0aCdcIlxyXG4gICAgICBjbGFzcz1cIm15LXN0aWNreS1oZWFkZXItdGFibGUgdHctdy02LzEyIHR3LW14LWF1dG8gdHctbWItMyB0dy1iZy13aGl0ZSB0dy1zaGFkb3ctbGcgdHctYm9yZGVyIHR3LXJvdW5kZWQtM3hsIHR3LWJvcmRlci1jb2xsYXBzZVwiXHJcbiAgICAgIGZsYXRcclxuICAgICAgYm9yZGVyZWRcclxuICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICA6cm93cz1cInN0b3JlUGhpbEhlYWx0aC5yb3dzXCJcclxuICAgICAgOmNvbHVtbnM9XCJsb2FuQ29sdW1uc1wiXHJcbiAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMTAsIDIwLCAwXVwiXHJcbiAgICAgIHJvdy1rZXk9XCJuYW1lXCJcclxuICAgIC8+XHJcbiAgICA8cS10YWJsZVxyXG4gICAgICB2LWVsc2UtaWY9XCJkZWR1Y3Rpb25MaXN0TW9kZWwgPT0gJ1RheCdcIlxyXG4gICAgICBjbGFzcz1cIm15LXN0aWNreS1oZWFkZXItdGFibGUgdHctdy02LzEyIHR3LW14LWF1dG8gdHctbWItMyB0dy1iZy13aGl0ZSB0dy1zaGFkb3ctbGcgdHctYm9yZGVyIHR3LXJvdW5kZWQtM3hsIHR3LWJvcmRlci1jb2xsYXBzZVwiXHJcbiAgICAgIGZsYXRcclxuICAgICAgYm9yZGVyZWRcclxuICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICA6cm93cz1cInN0b3JlVGF4LnJvd3NcIlxyXG4gICAgICA6Y29sdW1ucz1cImxvYW5Db2x1bW5zXCJcclxuICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlsxMCwgMjAsIDBdXCJcclxuICAgICAgcm93LWtleT1cIm5hbWVcIlxyXG4gICAgLz5cclxuICA8L3EtcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxjQUFjLFlBQVksT0FBTztBQUFBLEVBQzVDLE9BQU8sT0FBTztBQUFBLElBQ1osTUFBTTtBQUFBLE1BQ0o7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsRUFDTDtBQUFBLEVBRUUsU0FBUyxDQUlSO0FBQUEsRUFFRCxTQUFTLENBSVI7QUFDSCxDQUFDO0FDekRNLE1BQU0scUJBQXFCLFlBQVksY0FBYztBQUFBLEVBQzFELE9BQU8sT0FBTztBQUFBLElBQ1osTUFBTTtBQUFBLE1BQ0o7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsRUFDTDtBQUFBLEVBRUUsU0FBUyxDQUlSO0FBQUEsRUFFRCxTQUFTLENBSVI7QUFDSCxDQUFDO0FDekRNLE1BQU0sY0FBYyxZQUFZLE9BQU87QUFBQSxFQUM1QyxPQUFPLE9BQU87QUFBQSxJQUNaLE1BQU07QUFBQSxNQUNKO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0w7QUFBQSxFQUVFLFNBQVMsQ0FJUjtBQUFBLEVBRUQsU0FBUyxDQUlSO0FBQ0gsQ0FBQzs7Ozs7QUNuREQsVUFBTSxZQUFZLGFBQVk7QUFDOUIsVUFBTSxlQUFlLFlBQVc7QUFDaEMsVUFBTSxrQkFBa0IsbUJBQWtCO0FBQzFDLFVBQU0sV0FBVyxZQUFXO0FBRTVCLFVBQU0scUJBQXFCLElBQUksS0FBSztBQUNwQyxVQUFNLHVCQUF1QjtBQUFBLE1BQzNCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFHQSxVQUFNLGFBQWE7QUFBQSxNQUNqQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQVEsSUFBSTtBQUFBLFFBQ3BCLFFBQVEsQ0FBQyxRQUFRLEdBQUc7QUFBQSxRQUNwQixVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxJQUNIO0FBRUEsVUFBTSxjQUFjO0FBQUEsTUFDbEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFRLElBQUk7QUFBQSxRQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0g7QUEwQ0EsVUFBTSxXQUFXLFVBQVUsS0FDeEIsT0FBTyxhQUFhLElBQUksRUFDeEIsT0FBTyxnQkFBZ0IsSUFBSSxFQUMzQixPQUFPLFNBQVMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
