import { Q as QTable } from "./QTable.e0a74aa1.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import { R as RequestForm } from "./RequestForm.da5b7eb2.js";
import { u as useLoanStore } from "./loan.253a6661.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, d as createVNode, a as createBaseVNode, e as unref, a3 as Fragment } from "./index.cc9bdf73.js";
import "./QList.79bff727.js";
import "./focus-manager.71507900.js";
import "./QSelect.054a7805.js";
import "./use-key-composition.f687006c.js";
import "./position-engine.816f361e.js";
import "./pageHeader.b3a6f4b2.js";
import "./QCardSection.3ccee344.js";
import "./QInput.723cff93.js";
import "./ClosePopup.5ef9f279.js";
import "./requestsEmployee.d25d95e5.js";
const _hoisted_1 = { class: "tw-w-6/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5" };
const _sfc_main = {
  __name: "LoanPage",
  setup(__props) {
    const storeLoan = useLoanStore();
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
        name: "Price",
        align: "center",
        label: "Price",
        field: "price",
        sortable: true
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PageHeader, { currentPage: "Loan" }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(RequestForm, {
            modelOptions: ["Vale", "Product Loan", "Partial to A/R"],
            buttonName: "Request Loan"
          })
        ]),
        createVNode(QTable, {
          class: "my-sticky-header-table tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
          flat: "",
          bordered: "",
          title: "",
          rows: unref(storeLoan).rows,
          columns,
          "rows-per-page-options": [10, 20, 0],
          "row-key": "name"
        }, null, 8, ["rows"])
      ], 64);
    };
  }
};
var LoanPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "LoanPage.vue"]]);
export { LoanPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hblBhZ2UuYjU0NzZlMmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb2FuUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cD5cclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhlYWRlci52dWVcIjtcclxuaW1wb3J0IFJlcXVlc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1JlcXVlc3RGb3JtLnZ1ZVwiO1xyXG5pbXBvcnQgeyB1c2VMb2FuU3RvcmUgfSBmcm9tIFwic3RvcmVzL3BhZ2VzL2xvYW5cIjtcclxuXHJcbmNvbnN0IHN0b3JlTG9hbiA9IHVzZUxvYW5TdG9yZSgpO1xyXG5cclxuLy8gZnVuY3Rpb24gcmVzZXRMb2FuUmVxdWVzdCgpIHtcclxuLy8gICBtb2RlbERlc2NyaXB0aW9uTG9hblJlcXVlc3QgPSByZWYobnVsbCk7XHJcbi8vICAgbW9kZWxQcmljZSA9IHJlZihudWxsKTtcclxuLy8gICBtb2RlbFR5cGVMb2FuUmVxdWVzdCA9IHJlZihudWxsKTtcclxuLy8gfVxyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcInJlZmVyZW5jZUlkXCIsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiBcIlJlZmVyZW5jZSBJRFwiLFxyXG4gICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgZmllbGQ6IChyb3cpID0+IHJvdy5yZWZlcmVuY2VJZCxcclxuICAgIGZvcm1hdDogKHZhbCkgPT4gYCR7dmFsfWAsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHlwZVwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJUeXBlXCIsXHJcbiAgICBmaWVsZDogXCJ0eXBlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUHJpY2VcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiUHJpY2VcIixcclxuICAgIGZpZWxkOiBcInByaWNlXCIsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8cGFnZS1oZWFkZXIgY3VycmVudFBhZ2U9XCJMb2FuXCIgLz5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInR3LXctNi8xMiB0dy1teC1hdXRvIHR3LWZsZXggdHctanVzdGlmeS1lbmQgdHctbWItNVwiPlxyXG4gICAgPHJlcXVlc3QtZm9ybVxyXG4gICAgICA6bW9kZWxPcHRpb25zPVwiWydWYWxlJywgJ1Byb2R1Y3QgTG9hbicsICdQYXJ0aWFsIHRvIEEvUiddXCJcclxuICAgICAgOmJ1dHRvbk5hbWU9XCInUmVxdWVzdCBMb2FuJ1wiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8cS10YWJsZVxyXG4gICAgY2xhc3M9XCJteS1zdGlja3ktaGVhZGVyLXRhYmxlIHR3LXctNi8xMiB0dy1teC1hdXRvIHR3LW1iLTMgdHctYmctd2hpdGUgdHctc2hhZG93LWxnIHR3LWJvcmRlciB0dy1yb3VuZGVkLTN4bCB0dy1ib3JkZXItY29sbGFwc2VcIlxyXG4gICAgZmxhdFxyXG4gICAgYm9yZGVyZWRcclxuICAgIHRpdGxlPVwiXCJcclxuICAgIDpyb3dzPVwic3RvcmVMb2FuLnJvd3NcIlxyXG4gICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMTAsIDIwLCAwXVwiXHJcbiAgICByb3cta2V5PVwibmFtZVwiXHJcbiAgLz5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxVQUFNLFlBQVksYUFBWTtBQVE5QixVQUFNLFVBQVU7QUFBQSxNQUNkO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsUUFBUSxJQUFJO0FBQUEsUUFDcEIsUUFBUSxDQUFDLFFBQVEsR0FBRztBQUFBLFFBQ3BCLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsSUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
