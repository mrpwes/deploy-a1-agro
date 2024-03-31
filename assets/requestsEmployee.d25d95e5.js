import { aq as defineStore } from "./index.cc9bdf73.js";
const useRequestsEmployeeStore = defineStore("requestsEmployee", {
  state: () => ({
    columns: [
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
    ],
    rows: [
      {
        referenceId: 1,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 2,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 3,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 4,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 5,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 6,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 7,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 8,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 9,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 10,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 11,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 12,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 13,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 14,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 15,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 16,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 17,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 18,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 19,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 20,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 21,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 1",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 22,
        type: "Type 1",
        description: "Lorem ips...",
        status: "Status 2",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 23,
        type: "Type 2",
        description: "Lorem ips...",
        status: "Status 3",
        remarks: "Remarks Description Lorem"
      },
      {
        referenceId: 24,
        type: "Type 3",
        description: "Lorem ips...",
        status: "Status 4",
        remarks: "Remarks Description Lorem"
      }
    ]
  }),
  getters: {},
  actions: {}
});
export { useRequestsEmployeeStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdHNFbXBsb3llZS5kMjVkOTVlNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9wYWdlcy9yZXF1ZXN0c0VtcGxveWVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XHJcblxyXG4vL1BBR0VTXHJcbi8vREFTSEJPQVJEXHJcbi8vUkVRVUVTVCBUTyBBRE1JTlxyXG5leHBvcnQgY29uc3QgdXNlUmVxdWVzdHNFbXBsb3llZVN0b3JlID0gZGVmaW5lU3RvcmUoXCJyZXF1ZXN0c0VtcGxveWVlXCIsIHtcclxuICBzdGF0ZTogKCkgPT4gKHtcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwicmVmZXJlbmNlSWRcIixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogXCJSZWZlcmVuY2UgSURcIixcclxuICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgZmllbGQ6IChyb3cpID0+IHJvdy5yZWZlcmVuY2VJZCxcclxuICAgICAgICBmb3JtYXQ6ICh2YWwpID0+IGAke3ZhbH1gLFxyXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJUeXBlXCIsXHJcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxyXG4gICAgICAgIGZpZWxkOiBcInR5cGVcIixcclxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGZpZWxkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN0YXR1c1wiLFxyXG4gICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxyXG4gICAgICAgIGZpZWxkOiBcInN0YXR1c1wiLFxyXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZW1hcmtzXCIsXHJcbiAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiUmVtYXJrc1wiLFxyXG4gICAgICAgIGZpZWxkOiBcInJlbWFya3NcIixcclxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgcm93czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDEsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDFcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAyLFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAyXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMyxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgM1wiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDQsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDRcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA1LFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAxXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogNixcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgMlwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDcsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDNcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA4LFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyA0XCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogOSxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgMVwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDEwLFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAyXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMTEsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDNcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAxMixcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgNFwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDEzLFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAxXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMTQsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDJcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAxNSxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgM1wiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDE2LFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyA0XCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMTcsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDFcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAxOCxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgMlwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDE5LFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAzXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMjAsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDRcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAyMSxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgMVwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVmZXJlbmNlSWQ6IDIyLFxyXG4gICAgICAgIHR5cGU6IFwiVHlwZSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzLi4uXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlN0YXR1cyAyXCIsXHJcbiAgICAgICAgcmVtYXJrczogXCJSZW1hcmtzIERlc2NyaXB0aW9uIExvcmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogMjMsXHJcbiAgICAgICAgdHlwZTogXCJUeXBlIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHMuLi5cIixcclxuICAgICAgICBzdGF0dXM6IFwiU3RhdHVzIDNcIixcclxuICAgICAgICByZW1hcmtzOiBcIlJlbWFya3MgRGVzY3JpcHRpb24gTG9yZW1cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAyNCxcclxuICAgICAgICB0eXBlOiBcIlR5cGUgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwcy4uLlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJTdGF0dXMgNFwiLFxyXG4gICAgICAgIHJlbWFya3M6IFwiUmVtYXJrcyBEZXNjcmlwdGlvbiBMb3JlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9KSxcclxuXHJcbiAgZ2V0dGVyczoge1xyXG4gICAgLy8gZG91YmxlQ291bnQoc3RhdGUpIHtcclxuICAgIC8vICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIgKiAyO1xyXG4gICAgLy8gfSxcclxuICB9LFxyXG5cclxuICBhY3Rpb25zOiB7XHJcbiAgICAvLyBpbmNyZW1lbnQoKSB7XHJcbiAgICAvLyAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgLy8gfSxcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLWSxNQUFDLDJCQUEyQixZQUFZLG9CQUFvQjtBQUFBLEVBQ3RFLE9BQU8sT0FBTztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFRLElBQUk7QUFBQSxRQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHO0FBQUEsUUFDcEIsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNYO0FBQUEsTUFDRDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNEO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxJQUVELE1BQU07QUFBQSxNQUNKO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNWO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDTDtBQUFBLEVBRUUsU0FBUyxDQUlSO0FBQUEsRUFFRCxTQUFTLENBSVI7QUFDSCxDQUFDOzsifQ==
