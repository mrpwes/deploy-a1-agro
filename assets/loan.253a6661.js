import { aq as defineStore } from "./index.cc9bdf73.js";
const useLoanStore = defineStore("loan", {
  state: () => ({
    rows: [
      {
        referenceId: 1,
        deductionType: "Company Loan",
        type: "Partial to A/R",
        description: "Description 1",
        price: 1e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 2,
        deductionType: "Company Loan",
        type: "Product Loan",
        description: "Description 2",
        price: 2e3,
        payPeriod: "September 1-15 2023"
      },
      {
        referenceId: 3,
        deductionType: "Company Loan",
        type: "Partial to A/R",
        description: "Description 3",
        price: 3e3,
        payPeriod: "October 1-15 2023"
      },
      {
        referenceId: 4,
        deductionType: "Company Loan",
        type: "Product Loan",
        description: "Description 4",
        price: 4e3,
        payPeriod: "August 15-30 2023"
      },
      {
        referenceId: 5,
        deductionType: "Company Loan",
        type: "Product Loan",
        description: "Description 5",
        price: 5e3,
        payPeriod: "August 1-15 2023"
      }
    ]
  }),
  getters: {},
  actions: {}
});
export { useLoanStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hbi4yNTNhNjY2MS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9wYWdlcy9sb2FuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9hblN0b3JlID0gZGVmaW5lU3RvcmUoXCJsb2FuXCIsIHtcclxuICBzdGF0ZTogKCkgPT4gKHtcclxuICAgIHJvd3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAxLFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiQ29tcGFueSBMb2FuXCIsXHJcbiAgICAgICAgdHlwZTogXCJQYXJ0aWFsIHRvIEEvUlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDFcIixcclxuICAgICAgICBwcmljZTogMTAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiT2N0b2JlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAyLFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiQ29tcGFueSBMb2FuXCIsXHJcbiAgICAgICAgdHlwZTogXCJQcm9kdWN0IExvYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAyXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIlNlcHRlbWJlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiAzLFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiQ29tcGFueSBMb2FuXCIsXHJcbiAgICAgICAgdHlwZTogXCJQYXJ0aWFsIHRvIEEvUlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDNcIixcclxuICAgICAgICBwcmljZTogMzAwMCxcclxuICAgICAgICBwYXlQZXJpb2Q6IFwiT2N0b2JlciAxLTE1IDIwMjNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJlZmVyZW5jZUlkOiA0LFxyXG4gICAgICAgIGRlZHVjdGlvblR5cGU6IFwiQ29tcGFueSBMb2FuXCIsXHJcbiAgICAgICAgdHlwZTogXCJQcm9kdWN0IExvYW5cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiA0XCIsXHJcbiAgICAgICAgcHJpY2U6IDQwMDAsXHJcbiAgICAgICAgcGF5UGVyaW9kOiBcIkF1Z3VzdCAxNS0zMCAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICByZWZlcmVuY2VJZDogNSxcclxuICAgICAgICBkZWR1Y3Rpb25UeXBlOiBcIkNvbXBhbnkgTG9hblwiLFxyXG4gICAgICAgIHR5cGU6IFwiUHJvZHVjdCBMb2FuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gNVwiLFxyXG4gICAgICAgIHByaWNlOiA1MDAwLFxyXG4gICAgICAgIHBheVBlcmlvZDogXCJBdWd1c3QgMS0xNSAyMDIzXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pLFxyXG5cclxuICBnZXR0ZXJzOiB7XHJcbiAgICAvLyBkb3VibGVDb3VudChzdGF0ZSkge1xyXG4gICAgLy8gICByZXR1cm4gc3RhdGUuY291bnRlciAqIDI7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIC8vIGluY3JlbWVudCgpIHtcclxuICAgIC8vICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVZLE1BQUMsZUFBZSxZQUFZLFFBQVE7QUFBQSxFQUM5QyxPQUFPLE9BQU87QUFBQSxJQUNaLE1BQU07QUFBQSxNQUNKO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsZUFBZTtBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ1o7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsTUFDWjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGVBQWU7QUFBQSxRQUNmLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0w7QUFBQSxFQUVFLFNBQVMsQ0FJUjtBQUFBLEVBRUQsU0FBUyxDQUlSO0FBQ0gsQ0FBQzs7In0=
