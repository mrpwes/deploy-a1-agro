import { k as createComponent, j as computed, p as h, I as hSlot, t as getCurrentInstance, aq as defineStore, _ as _export_sfc, r as ref, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, e as unref, a3 as Fragment, a as createBaseVNode, Q as QBtn, a6 as toDisplayString, V as withDirectives } from "./index.cc9bdf73.js";
import { Q as QCard, a as QCardActions, C as ClosePopup } from "./ClosePopup.5ef9f279.js";
import { Q as QDialog } from "./position-engine.816f361e.js";
import { Q as QTable } from "./QTable.e0a74aa1.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import "./focus-manager.71507900.js";
import "./QList.79bff727.js";
import "./QSelect.054a7805.js";
import "./use-key-composition.f687006c.js";
import "./pageHeader.b3a6f4b2.js";
var QTd = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name = vm.vnode.key;
      const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
      if (col === void 0) {
        return;
      }
      const { row } = props.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    rows: [
      {
        invoiceNumber: 1,
        date: "2022-01-01",
        description: " lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        recipient: " lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        issuer: "Issuer 1",
        amount: 1e3
      },
      {
        invoiceNumber: 2,
        date: "2022-02-01",
        description: "Description 2",
        recipient: "Recipient 2",
        issuer: "Issuer 2",
        amount: 2e3
      },
      {
        invoiceNumber: 3,
        date: "2022-03-01",
        description: "Description 3",
        recipient: "Recipient 3",
        issuer: "Issuer 3",
        amount: 3e3
      },
      {
        invoiceNumber: 4,
        date: "2022-04-01",
        description: "Description 4",
        recipient: "Recipient 4",
        issuer: "Issuer 4",
        amount: 4e3
      },
      {
        invoiceNumber: 5,
        date: "2022-05-01",
        description: "Description 5",
        recipient: "Recipient 5",
        issuer: "Issuer 5",
        amount: 5e3
      }
    ]
  }),
  getters: {},
  actions: {}
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-pl-1" }, "VIEW", -1);
const _hoisted_2 = { class: "tw-grid tw-grid-cols-2 tw-gap-3 tw-p-5" };
const _hoisted_3 = { class: "tw-col-span-2" };
const _sfc_main = {
  __name: "InvoicePage",
  setup(__props) {
    const invoiceStore = useInvoiceStore();
    const selectedRow = ref(null);
    const viewPrompt = ref(false);
    function openmodel(row) {
      console.log("hi");
      this.selectedRow = row;
      this.viewPrompt = true;
    }
    const columns = [
      {
        name: "invoiceNumber",
        required: true,
        label: "Invoice #",
        align: "center",
        field: (row) => row.invoiceNumber,
        format: (val) => `${val}`,
        sortable: true
      },
      {
        name: "Date",
        align: "center",
        label: "Date",
        field: "date",
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
        name: "Recipient",
        align: "center",
        label: "Recipient",
        field: "recipient",
        sortable: true
      },
      {
        name: "Issuer",
        align: "center",
        label: "Issuer",
        field: "issuer",
        sortable: true
      },
      {
        name: "Amount",
        align: "center",
        label: "Amount",
        field: "amount",
        sortable: true
      },
      {
        name: "actions",
        align: "center",
        label: ""
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PageHeader, { currentPage: "Invoice" }),
        createVNode(QTable, {
          class: "my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mb-3 tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
          title: "",
          "wrap-cells": "",
          rows: unref(invoiceStore).rows,
          columns,
          "row-key": "name"
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { props }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(QBtn, {
                    icon: "visibility",
                    onClick: ($event) => openmodel(props.row)
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createBaseVNode("div", null, [
                    createVNode(QDialog, {
                      modelValue: viewPrompt.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => viewPrompt.value = $event),
                      persistent: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QCard, { style: { "min-width": "500px" } }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_2, [
                              createBaseVNode("div", null, "Invoice Number: " + toDisplayString(selectedRow.value.invoiceNumber), 1),
                              createBaseVNode("div", null, "Date: " + toDisplayString(selectedRow.value.date), 1),
                              createBaseVNode("div", _hoisted_3, " Description: " + toDisplayString(selectedRow.value.description), 1),
                              createBaseVNode("div", null, "Recipient: " + toDisplayString(selectedRow.value.recipient), 1),
                              createBaseVNode("div", null, "Issuer: " + toDisplayString(selectedRow.value.issuer), 1),
                              createBaseVNode("div", null, "Amount: " + toDisplayString(selectedRow.value.amount), 1)
                            ]),
                            createVNode(QCardActions, {
                              align: "right",
                              class: "text-primary"
                            }, {
                              default: withCtx(() => [
                                withDirectives(createVNode(QBtn, {
                                  flat: "",
                                  label: "OK"
                                }, null, 512), [
                                  [ClosePopup]
                                ])
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
                ])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["rows"])
      ], 64);
    };
  }
};
var InvoicePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "InvoicePage.vue"]]);
export { InvoicePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52b2ljZVBhZ2UuZjgxYWQ4ZDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRkLmpzIiwiLi4vLi4vLi4vc3JjL3N0b3Jlcy9wYWdlcy9pbnZvaWNlLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0ludm9pY2VQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgeyByb3cgfSA9IHByb3BzLnByb3BzXG5cbiAgICAgIHJldHVybiBoKCd0ZCcsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUgKyBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSW52b2ljZVN0b3JlID0gZGVmaW5lU3RvcmUoXCJpbnZvaWNlXCIsIHtcclxuICBzdGF0ZTogKCkgPT4gKHtcclxuICAgIHJvd3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGludm9pY2VOdW1iZXI6IDEsXHJcbiAgICAgICAgZGF0ZTogXCIyMDIyLTAxLTAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIiBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiLFxyXG4gICAgICAgIHJlY2lwaWVudDogXCIgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIixcclxuICAgICAgICBpc3N1ZXI6IFwiSXNzdWVyIDFcIixcclxuICAgICAgICBhbW91bnQ6IDEwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnZvaWNlTnVtYmVyOiAyLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMi0wMi0wMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDJcIixcclxuICAgICAgICByZWNpcGllbnQ6IFwiUmVjaXBpZW50IDJcIixcclxuICAgICAgICBpc3N1ZXI6IFwiSXNzdWVyIDJcIixcclxuICAgICAgICBhbW91bnQ6IDIwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnZvaWNlTnVtYmVyOiAzLFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMi0wMy0wMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgICByZWNpcGllbnQ6IFwiUmVjaXBpZW50IDNcIixcclxuICAgICAgICBpc3N1ZXI6IFwiSXNzdWVyIDNcIixcclxuICAgICAgICBhbW91bnQ6IDMwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnZvaWNlTnVtYmVyOiA0LFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMi0wNC0wMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDRcIixcclxuICAgICAgICByZWNpcGllbnQ6IFwiUmVjaXBpZW50IDRcIixcclxuICAgICAgICBpc3N1ZXI6IFwiSXNzdWVyIDRcIixcclxuICAgICAgICBhbW91bnQ6IDQwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnZvaWNlTnVtYmVyOiA1LFxyXG4gICAgICAgIGRhdGU6IFwiMjAyMi0wNS0wMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDVcIixcclxuICAgICAgICByZWNpcGllbnQ6IFwiUmVjaXBpZW50IDVcIixcclxuICAgICAgICBpc3N1ZXI6IFwiSXNzdWVyIDVcIixcclxuICAgICAgICBhbW91bnQ6IDUwMDAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pLFxyXG5cclxuICBnZXR0ZXJzOiB7XHJcbiAgICAvLyBkb3VibGVDb3VudChzdGF0ZSkge1xyXG4gICAgLy8gICByZXR1cm4gc3RhdGUuY291bnRlciAqIDI7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIC8vIGluY3JlbWVudCgpIHtcclxuICAgIC8vICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCI8c2NyaXB0IHNldHVwPlxyXG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XHJcblxyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyLnZ1ZVwiO1xyXG5pbXBvcnQgeyB1c2VJbnZvaWNlU3RvcmUgfSBmcm9tIFwic3RvcmVzL3BhZ2VzL2ludm9pY2VcIjtcclxuXHJcbmNvbnN0IGludm9pY2VTdG9yZSA9IHVzZUludm9pY2VTdG9yZSgpO1xyXG5cclxuY29uc3Qgc2VsZWN0ZWRSb3cgPSByZWYobnVsbCk7XHJcbmNvbnN0IHZpZXdQcm9tcHQgPSByZWYoZmFsc2UpO1xyXG5cclxuZnVuY3Rpb24gb3Blbm1vZGVsKHJvdykge1xyXG4gIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbiAgdGhpcy5zZWxlY3RlZFJvdyA9IHJvdztcclxuICB0aGlzLnZpZXdQcm9tcHQgPSB0cnVlO1xyXG59XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiaW52b2ljZU51bWJlclwiLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogXCJJbnZvaWNlICNcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgZmllbGQ6IChyb3cpID0+IHJvdy5pbnZvaWNlTnVtYmVyLFxyXG4gICAgZm9ybWF0OiAodmFsKSA9PiBgJHt2YWx9YCxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEYXRlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIkRhdGVcIixcclxuICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgZmllbGQ6IFwiZGVzY3JpcHRpb25cIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWNpcGllbnRcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiUmVjaXBpZW50XCIsXHJcbiAgICBmaWVsZDogXCJyZWNpcGllbnRcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJJc3N1ZXJcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiSXNzdWVyXCIsXHJcbiAgICBmaWVsZDogXCJpc3N1ZXJcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbW91bnRcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiQW1vdW50XCIsXHJcbiAgICBmaWVsZDogXCJhbW91bnRcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJhY3Rpb25zXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlwiLFxyXG4gIH0sXHJcbl07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxwYWdlLWhlYWRlciBjdXJyZW50UGFnZT1cIkludm9pY2VcIiAvPlxyXG4gIDxxLXRhYmxlXHJcbiAgICBjbGFzcz1cIm15LXN0aWNreS1oZWFkZXItdGFibGUgdHctdy0xMS8xMiB0dy1teC1hdXRvIHR3LW1iLTMgdHctbXQtNiB0dy1iZy13aGl0ZSB0dy1zaGFkb3ctbGcgdHctYm9yZGVyIHR3LXJvdW5kZWQtM3hsIHR3LWJvcmRlci1jb2xsYXBzZVwiXHJcbiAgICB0aXRsZT1cIlwiXHJcbiAgICB3cmFwLWNlbGxzXHJcbiAgICA6cm93cz1cImludm9pY2VTdG9yZS5yb3dzXCJcclxuICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXHJcbiAgICByb3cta2V5PVwibmFtZVwiXHJcbiAgPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtYWN0aW9ucz1cInByb3BzXCI+XHJcbiAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxxLWJ0biBpY29uPVwidmlzaWJpbGl0eVwiIEBjbGljaz1cIm9wZW5tb2RlbChwcm9wcy5yb3cpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1wbC0xXCI+VklFVzwvZGl2PlxyXG4gICAgICAgICAgPC9xLWJ0bj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxxLWRpYWxvZyB2LW1vZGVsPVwidmlld1Byb21wdFwiIHBlcnNpc3RlbnQ+XHJcbiAgICAgICAgICAgICAgPHEtY2FyZCBzdHlsZT1cIm1pbi13aWR0aDogNTAwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0dy1ncmlkIHR3LWdyaWQtY29scy0yIHR3LWdhcC0zIHR3LXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pkludm9pY2UgTnVtYmVyOiB7eyBzZWxlY3RlZFJvdy5pbnZvaWNlTnVtYmVyIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+RGF0ZToge3sgc2VsZWN0ZWRSb3cuZGF0ZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHctY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7eyBzZWxlY3RlZFJvdy5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5SZWNpcGllbnQ6IHt7IHNlbGVjdGVkUm93LnJlY2lwaWVudCB9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pklzc3Vlcjoge3sgc2VsZWN0ZWRSb3cuaXNzdWVyIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+QW1vdW50OiB7eyBzZWxlY3RlZFJvdy5hbW91bnQgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPHEtYnRuIGZsYXQgbGFiZWw9XCJPS1wiIHYtY2xvc2UtcG9wdXAgLz5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8cS1idG5cclxuICAgICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmludCBJbnZvaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInR3LWJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+ICAtLT5cclxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLWFjdGlvbnM+PC9xLWNhcmRcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwvcS1kaWFsb2c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9xLXRkPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L3EtdGFi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QU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
