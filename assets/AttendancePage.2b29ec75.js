import { Q as QSelect } from "./QSelect.054a7805.js";
import { Q as QTable } from "./QTable.e0a74aa1.js";
import { Q as QPage } from "./QPage.912c99b4.js";
import { P as PageHeader } from "./PageHeader.bf28944a.js";
import { _ as _export_sfc, r as ref, o as openBlock, a5 as createBlock, w as withCtx, d as createVNode, c as createElementBlock, a as createBaseVNode, g as createCommentVNode } from "./index.cc9bdf73.js";
import "./use-key-composition.f687006c.js";
import "./focus-manager.71507900.js";
import "./position-engine.816f361e.js";
import "./QList.79bff727.js";
import "./pageHeader.b3a6f4b2.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "tw-flex tw-justify-between tw-items-center tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-p-4 tw-rounded-lg" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Present: 12", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Late: 0", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Absent: 3", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-pr-4" }, "Leave: 0", -1);
const _hoisted_7 = { class: "q-my-lg tw-w-7/12 tw-mx-auto" };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { class: "tw-flex tw-justify-between tw-items-center tw-w-6/12 tw-mx-auto tw-mb-3 tw-bg-white tw-shadow-lg tw-p-4 tw-rounded-lg" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Present: 15", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Late: 0", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex" }, "Absent: 0", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "tw-flex tw-pr-4" }, "Leave: 0", -1);
const _hoisted_14 = { class: "q-my-lg tw-w-7/12 tw-mx-auto" };
const _sfc_main = {
  __name: "AttendancePage",
  setup(__props) {
    const model = ref("January 1 - 15 2024");
    const options = ["January 1 - 15 2024", "January 16 - 31 2024"];
    const columns = [
      {
        name: "day",
        required: true,
        label: "Day",
        align: "center  ",
        field: (row) => row.day,
        format: (val) => `${val}`,
        sortable: true
      },
      {
        name: "Time-In",
        align: "center",
        label: "Time-In",
        field: "timeIn",
        sortable: true
      },
      {
        name: "Time-Out",
        align: "center",
        label: "Time-Out",
        field: "timeOut",
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
    const rows1 = [
      {
        day: 1,
        timeIn: "08:03 AM",
        timeOut: "05:07 PM",
        remarks: "Present"
      },
      {
        day: 2,
        timeIn: "08:02 AM",
        timeOut: "05:05 PM",
        remarks: "Present"
      },
      {
        day: 3,
        timeIn: "08:01 AM",
        timeOut: "05:09 PM",
        remarks: "Present"
      },
      {
        day: 4,
        timeIn: "08:05 AM",
        timeOut: "05:08 PM",
        remarks: "Present"
      },
      {
        day: 5,
        timeIn: "08:08 AM",
        timeOut: "05:12 PM",
        remarks: "Present"
      },
      {
        day: 6,
        timeIn: "07:55 AM",
        timeOut: "05:23 PM",
        remarks: "Present"
      },
      {
        day: 7,
        timeIn: "07:58 AM",
        timeOut: "05:15 PM",
        remarks: "Present"
      },
      {
        day: 8,
        timeIn: "08:13 AM",
        timeOut: "05:09 PM",
        remarks: "Present"
      },
      {
        day: 9,
        timeIn: "08:12 AM",
        timeOut: "05:05 PM",
        remarks: "Present"
      },
      {
        day: 10,
        timeIn: "08:11 AM",
        timeOut: "05:06 PM",
        remarks: "Present"
      },
      {
        day: 11,
        timeIn: "08:07 AM",
        timeOut: "05:02 PM",
        remarks: "Present"
      },
      {
        day: 12,
        timeIn: "08:09 AM",
        timeOut: "05:03 PM",
        remarks: "Present"
      },
      {
        day: 13,
        timeIn: null,
        timeOut: null,
        remarks: "Absent"
      },
      {
        day: 14,
        timeIn: null,
        timeOut: null,
        remarks: "Absent"
      },
      {
        day: 15,
        timeIn: null,
        timeOut: null,
        remarks: "Absent"
      }
    ];
    const rows2 = [
      {
        day: 1,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 2,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 3,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 4,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 5,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 6,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 7,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 8,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 9,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 10,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 11,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 12,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 13,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 14,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      },
      {
        day: 15,
        timeIn: "08:00 AM",
        timeOut: "05:00 PM",
        remarks: "Present"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(PageHeader, { currentPage: "Attendance" }),
          model.value === "January 1 - 15 2024" ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QSelect, {
                borderless: "",
                modelValue: model.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                options,
                onOnChange: _cache[1] || (_cache[1] = ($event) => _ctx.onChange($event)),
                class: "tw-flex tw-pl-3 tw-w-min tw-text-nowrap tw-outline tw-outline-1 tw-outline-slate-400 tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-lg"
              }, null, 8, ["modelValue"]),
              _hoisted_3,
              _hoisted_4,
              _hoisted_5,
              _hoisted_6
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QTable, {
                class: "my-sticky-header-table tw-rounded-xl",
                flat: "",
                bordered: "",
                title: "",
                rows: rows1,
                columns,
                "row-key": "name",
                "hide-pagination": true,
                "rows-per-page-options": [0],
                sortBy: "day"
              })
            ])
          ])) : createCommentVNode("", true),
          model.value === "January 16 - 31 2024" ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(QSelect, {
                borderless: "",
                modelValue: model.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value = $event),
                options,
                onOnChange: _cache[3] || (_cache[3] = ($event) => _ctx.onChange($event)),
                class: "tw-flex tw-pl-3 tw-w-min tw-text-nowrap tw-outline tw-outline-1 tw-outline-slate-400 tw-pr-2 tw-bg-white tw-shadow-lg tw-rounded-lg"
              }, null, 8, ["modelValue"]),
              _hoisted_10,
              _hoisted_11,
              _hoisted_12,
              _hoisted_13
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(QTable, {
                class: "my-sticky-header-table tw-rounded-xl",
                flat: "",
                bordered: "",
                title: "",
                rows: rows2,
                columns,
                "row-key": "name",
                "hide-pagination": true,
                "rows-per-page-options": [0],
                sortBy: "day"
              })
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
var AttendancePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AttendancePage.vue"]]);
export { AttendancePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0ZW5kYW5jZVBhZ2UuMmIyOWVjNzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BdHRlbmRhbmNlUGFnZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cD5cclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZUhlYWRlci52dWVcIjtcclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xyXG5cclxuY29uc3QgbW9kZWwgPSByZWYoXCJKYW51YXJ5IDEgLSAxNSAyMDI0XCIpO1xyXG5jb25zdCBvcHRpb25zID0gW1wiSmFudWFyeSAxIC0gMTUgMjAyNFwiLCBcIkphbnVhcnkgMTYgLSAzMSAyMDI0XCJdO1xyXG5cclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcImRheVwiLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogXCJEYXlcIixcclxuICAgIGFsaWduOiBcImNlbnRlciAgXCIsXHJcbiAgICBmaWVsZDogKHJvdykgPT4gcm93LmRheSxcclxuICAgIGZvcm1hdDogKHZhbCkgPT4gYCR7dmFsfWAsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGltZS1JblwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJUaW1lLUluXCIsXHJcbiAgICBmaWVsZDogXCJ0aW1lSW5cIixcclxuICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaW1lLU91dFwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBsYWJlbDogXCJUaW1lLU91dFwiLFxyXG4gICAgZmllbGQ6IFwidGltZU91dFwiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlbWFya3NcIixcclxuICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgbGFiZWw6IFwiUmVtYXJrc1wiLFxyXG4gICAgZmllbGQ6IFwicmVtYXJrc1wiLFxyXG4gICAgc29ydGFibGU6IHRydWUsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8qXHJcbiAge1xyXG4gICAgZGF5OiBcIjEyM1wiLFxyXG4gICAgdGltZUluOiBcIlRJTUUgSU5cIixcclxuICAgIHRpbWVPdXQ6IFwiVElNRSBPVVRcIixcclxuICAgIHJlbWFya3M6IDEsXHJcbiAgfSxcclxuXHJcbiovXHJcblxyXG5jb25zdCByb3dzMSA9IFtcclxuICB7XHJcbiAgICBkYXk6IDEsXHJcbiAgICB0aW1lSW46IFwiMDg6MDMgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDcgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAyLFxyXG4gICAgdGltZUluOiBcIjA4OjAyIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjA1IFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogMyxcclxuICAgIHRpbWVJbjogXCIwODowMSBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowOSBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDQsXHJcbiAgICB0aW1lSW46IFwiMDg6MDUgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDggUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiA1LFxyXG4gICAgdGltZUluOiBcIjA4OjA4IEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjEyIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogNixcclxuICAgIHRpbWVJbjogXCIwNzo1NSBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNToyMyBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDcsXHJcbiAgICB0aW1lSW46IFwiMDc6NTggQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MTUgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiA4LFxyXG4gICAgdGltZUluOiBcIjA4OjEzIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjA5IFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogOSxcclxuICAgIHRpbWVJbjogXCIwODoxMiBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowNSBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDEwLFxyXG4gICAgdGltZUluOiBcIjA4OjExIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjA2IFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogMTEsXHJcbiAgICB0aW1lSW46IFwiMDg6MDcgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDIgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAxMixcclxuICAgIHRpbWVJbjogXCIwODowOSBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMyBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDEzLFxyXG4gICAgdGltZUluOiBudWxsLFxyXG4gICAgdGltZU91dDogbnVsbCxcclxuICAgIHJlbWFya3M6IFwiQWJzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDE0LFxyXG4gICAgdGltZUluOiBudWxsLFxyXG4gICAgdGltZU91dDogbnVsbCxcclxuICAgIHJlbWFya3M6IFwiQWJzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDE1LFxyXG4gICAgdGltZUluOiBudWxsLFxyXG4gICAgdGltZU91dDogbnVsbCxcclxuICAgIHJlbWFya3M6IFwiQWJzZW50XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJvd3MyID0gW1xyXG4gIHtcclxuICAgIGRheTogMSxcclxuICAgIHRpbWVJbjogXCIwODowMCBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMCBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDIsXHJcbiAgICB0aW1lSW46IFwiMDg6MDAgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDAgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAzLFxyXG4gICAgdGltZUluOiBcIjA4OjAwIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjAwIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogNCxcclxuICAgIHRpbWVJbjogXCIwODowMCBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMCBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDUsXHJcbiAgICB0aW1lSW46IFwiMDg6MDAgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDAgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiA2LFxyXG4gICAgdGltZUluOiBcIjA4OjAwIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjAwIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogNyxcclxuICAgIHRpbWVJbjogXCIwODowMCBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMCBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDgsXHJcbiAgICB0aW1lSW46IFwiMDg6MDAgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDAgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiA5LFxyXG4gICAgdGltZUluOiBcIjA4OjAwIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjAwIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogMTAsXHJcbiAgICB0aW1lSW46IFwiMDg6MDAgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDAgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAxMSxcclxuICAgIHRpbWVJbjogXCIwODowMCBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMCBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDEyLFxyXG4gICAgdGltZUluOiBcIjA4OjAwIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjAwIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGRheTogMTMsXHJcbiAgICB0aW1lSW46IFwiMDg6MDAgQU1cIixcclxuICAgIHRpbWVPdXQ6IFwiMDU6MDAgUE1cIixcclxuICAgIHJlbWFya3M6IFwiUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF5OiAxNCxcclxuICAgIHRpbWVJbjogXCIwODowMCBBTVwiLFxyXG4gICAgdGltZU91dDogXCIwNTowMCBQTVwiLFxyXG4gICAgcmVtYXJrczogXCJQcmVzZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXk6IDE1LFxyXG4gICAgdGltZUluOiBcIjA4OjAwIEFNXCIsXHJcbiAgICB0aW1lT3V0OiBcIjA1OjAwIFBNXCIsXHJcbiAgICByZW1hcmtzOiBcIlByZXNlbnRcIixcclxuICB9LFxyXG5dO1xyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8cS1wYWdlPlxyXG4gICAgPHBhZ2UtaGVhZGVyIGN1cnJlbnRQYWdlPVwiQXR0ZW5kYW5jZVwiIC8+XHJcbiAgICA8ZGl2IHYtaWY9XCJtb2RlbCA9PT0gJ0phbnVhcnkgMSAtIDE1IDIwMjQnXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctanVzdGlmeS1iZXR3ZWVuIHR3LWl0ZW1zLWNlbnRlciB0dy13LTYvMTIgdHctbXgtYXV0byB0dy1tYi0zIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1wLTQgdHctcm91bmRlZC1sZ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cS1zZWxlY3RcclxuICAgICAgICAgIGJvcmRlcmxlc3NcclxuICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbFwiXHJcbiAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgQG9uQ2hhbmdlPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctcGwtMyB0dy13LW1pbiB0dy10ZXh0LW5vd3JhcCB0dy1vdXRsaW5lIHR3LW91dGxpbmUtMSB0dy1vdXRsaW5lLXNsYXRlLTQwMCB0dy1wci0yIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1yb3VuZGVkLWxnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9xLXNlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleFwiPlByZXNlbnQ6IDEyPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXhcIj5MYXRlOiAwPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXhcIj5BYnNlbnQ6IDM8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1wci00XCI+TGVhdmU6IDA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxLW15LWxnIHR3LXctNy8xMiB0dy1teC1hdXRvXCI+XHJcbiAgICAgICAgPHEtdGFibGVcclxuICAgICAgICAgIGNsYXNzPVwibXktc3RpY2t5LWhlYWRlci10YWJsZSB0dy1yb3VuZGVkLXhsXCJcclxuICAgICAgICAgIGZsYXRcclxuICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICA6cm93cz1cInJvd3MxXCJcclxuICAgICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICByb3cta2V5PVwibmFtZVwiXHJcbiAgICAgICAgICA6aGlkZS1wYWdpbmF0aW9uPVwidHJ1ZVwiXHJcbiAgICAgICAgICA6cm93cy1wZXItcGFnZS1vcHRpb25zPVwiWzBdXCJcclxuICAgICAgICAgIHNvcnRCeT1cImRheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1pZj1cIm1vZGVsID09PSAnSmFudWFyeSAxNiAtIDMxIDIwMjQnXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctanVzdGlmeS1iZXR3ZWVuIHR3LWl0ZW1zLWNlbnRlciB0dy13LTYvMTIgdHctbXgtYXV0byB0dy1tYi0zIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1wLTQgdHctcm91bmRlZC1sZ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cS1zZWxlY3RcclxuICAgICAgICAgIGJvcmRlcmxlc3NcclxuICAgICAgICAgIHYtbW9kZWw9XCJtb2RlbFwiXHJcbiAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgQG9uQ2hhbmdlPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICBjbGFzcz1cInR3LWZsZXggdHctcGwtMyB0dy13LW1pbiB0dy10ZXh0LW5vd3JhcCB0dy1vdXRsaW5lIHR3LW91dGxpbmUtMSB0dy1vdXRsaW5lLXNsYXRlLTQwMCB0dy1wci0yIHR3LWJnLXdoaXRlIHR3LXNoYWRvdy1sZyB0dy1yb3VuZGVkLWxnXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9xLXNlbGVjdD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleFwiPlByZXNlbnQ6IDE1PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXhcIj5MYXRlOiAwPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3LWZsZXhcIj5BYnNlbnQ6IDA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHctZmxleCB0dy1wci00XCI+TGVhdmU6IDA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxLW15LWxnIHR3LXctNy8xMiB0dy1teC1hdXRvXCI+XHJcbiAgICAgICAgPHEtdGFibGVcclxuICAgICAgICAgIGNsYXNzPVwibXktc3RpY2t5LWhlYWRlci10YWJsZSB0dy1yb3VuZGVkLXhsXCJcclxuICAgICAgICAgIGZsYXRcclxuICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICA6cm93cz1cInJvd3MyXCJcclxuICAgICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXHJcbiAgICAgICAgICByb3cta2V5PVwibmFtZVwiXHJcbiAgICAgICAgICA6aGlkZS1wYWdpbmF0aW9uPVwidHJ1ZVwiXHJcbiAgICAgICAgICA6cm93cy1wZXItcGFnZS1vcHRpb25zPVwiWzBdXCJcclxuICAgICAgICAgIHNvcnRCeT1cImRheVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3EtcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFVBQU0sUUFBUSxJQUFJLHFCQUFxQjtBQUN2QyxVQUFNLFVBQVUsQ0FBQyx1QkFBdUIsc0JBQXNCO0FBRTlELFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFRLElBQUk7QUFBQSxRQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxJQUNIO0FBWUEsVUFBTSxRQUFRO0FBQUEsTUFDWjtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsSUFDSDtBQUVBLFVBQU0sUUFBUTtBQUFBLE1BQ1o7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsTUFDVjtBQUFBLElBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
