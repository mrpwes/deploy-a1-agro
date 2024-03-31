import { Q as QTable } from "./QTable.e0a74aa1.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import { R as RequestForm } from "./RequestForm.da5b7eb2.js";
import { u as useRequestsEmployeeStore } from "./requestsEmployee.d25d95e5.js";
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
import "./loan.253a6661.js";
const _hoisted_1 = { class: "tw-w-11/12 tw-mx-auto tw-flex tw-justify-end tw-mb-5" };
const _sfc_main = {
  __name: "RequestToAdminPage",
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
        createVNode(PageHeader, { currentPage: "Request To Admin" }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(RequestForm, {
            modelOptions: [
              "Vale",
              "Product Loan",
              "Partial to A/R",
              "Document",
              "Leave"
            ],
            buttonName: "Request To Admin"
          })
        ]),
        createVNode(QTable, {
          class: "my-sticky-header-table tw-w-11/12 tw-mx-auto tw-mt-6 tw-bg-white tw-shadow-lg tw-border tw-rounded-3xl tw-border-collapse",
          flat: "",
          bordered: "",
          title: "",
          rows: unref(storeRequestsEmployee).rows,
          columns,
          "rows-per-page-options": [10, 20, 0],
          "row-key": "name"
        }, null, 8, ["rows"])
      ], 64);
    };
  }
};
var RequestToAdminPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "RequestToAdminPage.vue"]]);
export { RequestToAdminPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdFRvQWRtaW5QYWdlLjU2YjI5MTkxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUmVxdWVzdFRvQWRtaW5QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwPlxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwicmVmZXJlbmNlSWRcIixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbGFiZWw6IFwiUmVmZXJlbmNlIElEXCIsXHJcbiAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBmaWVsZDogKHJvdykgPT4gcm93LnJlZmVyZW5jZUlkLFxyXG4gICAgZm9ybWF0OiAodmFsKSA9PiBgJHt2YWx9YCxcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUeXBlXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlR5cGVcIixcclxuICAgIGZpZWxkOiBcInR5cGVcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgZmllbGQ6IFwiZGVzY3JpcHRpb25cIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTdGF0dXNcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiU3RhdHVzXCIsXHJcbiAgICBmaWVsZDogXCJzdGF0dXNcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZW1hcmtzXCIsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGxhYmVsOiBcIlJlbWFya3NcIixcclxuICAgIGZpZWxkOiBcInJlbWFya3NcIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyLnZ1ZVwiO1xyXG5pbXBvcnQgUmVxdWVzdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVxdWVzdEZvcm0udnVlXCI7XHJcbmltcG9ydCB7IHVzZVJlcXVlc3RzRW1wbG95ZWVTdG9yZSB9IGZyb20gXCJzdG9yZXMvcGFnZXMvcmVxdWVzdHNFbXBsb3llZVwiO1xyXG5cclxuY29uc3Qgc3RvcmVSZXF1ZXN0c0VtcGxveWVlID0gdXNlUmVxdWVzdHNFbXBsb3llZVN0b3JlKCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxwYWdlLWhlYWRlciBjdXJyZW50UGFnZT1cIlJlcXVlc3QgVG8gQWRtaW5cIiAvPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidHctdy0xMS8xMiB0dy1teC1hdXRvIHR3LWZsZXggdHctanVzdGlmeS1lbmQgdHctbWItNVwiPlxyXG4gICAgPHJlcXVlc3QtZm9ybVxyXG4gICAgICA6bW9kZWxPcHRpb25zPVwiW1xyXG4gICAgICAgICdWYWxlJyxcclxuICAgICAgICAnUHJvZHVjdCBMb2FuJyxcclxuICAgICAgICAnUGFydGlhbCB0byBBL1InLFxyXG4gICAgICAgICdEb2N1bWVudCcsXHJcbiAgICAgICAgJ0xlYXZlJyxcclxuICAgICAgXVwiXHJcbiAgICAgIDpidXR0b25OYW1lPVwiJ1JlcXVlc3QgVG8gQWRtaW4nXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPHEtdGFibGVcclxuICAgIGNsYXNzPVwibXktc3RpY2t5LWhlYWRlci10YWJsZSB0dy13LTExLzEyIHR3LW14LWF1dG8gdHctbXQtNiB0dy1iZy13aGl0ZSB0dy1zaGFkb3ctbGcgdHctYm9yZGVyIHR3LXJvdW5kZWQtM3hsIHR3LWJvcmRlci1jb2xsYXBzZVwiXHJcbiAgICBmbGF0XHJcbiAgICBib3JkZXJlZFxyXG4gICAgdGl0bGU9XCJcIlxyXG4gICAgOnJvd3M9XCJzdG9yZVJlcXVlc3RzRW1wbG95ZWUucm93c1wiXHJcbiAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxyXG4gICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlsxMCwgMjAsIDBdXCJcclxuICAgIHJvdy1rZXk9XCJuYW1lXCJcclxuICAvPlxyXG48L3RlbXBsYXRlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFRLElBQUk7QUFBQSxRQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0g7QUFNQSxVQUFNLHdCQUF3Qix5QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
