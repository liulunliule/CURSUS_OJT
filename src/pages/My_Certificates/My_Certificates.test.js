// import React from "react";
// // Các hàm hỗ trợ từ thư viện Testing Library
// import { render, screen, waitFor } from "@testing-library/react";
// // Thư viện mô phỏng các hành vi của người dùng
// import userEvent from "@testing-library/user-event";
// // Cung cấp Redux store cho các component
// import { Provider } from "react-redux";
// // Tạo store Redux với cấu hình mặc định
// import { configureStore } from "@reduxjs/toolkit";
// // Cung cấp bối cảnh định tuyến cho các component
// import { MemoryRouter as Router } from "react-router-dom";
// // Component cần kiểm tra
// import My_Certificates from "../My_Certificates";
// // Các action để kiểm tra
// import { fetchCertificates, fetchUpdateMyCertificate } from "../../redux/features/myCertificateSlice";
// // Thư viện thông báo toast
// import { toast } from "react-toastify";
// // Thư viện mở rộng các matcher cho Jest
// import "@testing-library/jest-dom";

// // Mô phỏng các thông báo toast
// jest.mock("react-toastify", () => ({
//   toast: {
//     success: jest.fn(),
//     error: jest.fn(),
//   },
// }));

// // Mô phỏng các action từ Redux
// jest.mock("../../redux/features/myCertificateSlice", () => ({
//   fetchCertificates: jest.fn(),
//   fetchUpdateMyCertificate: jest.fn(),
// }));

// // Tạo một store giả định với dữ liệu mẫu
// const mockStore = {
//   certificate: {
//     mycertificate: [
//       {
//         id: "1",
//         title: "Certificate 1",
//         marks: "90",
//         outof: "100",
//         date: "2024-01-01",
//         statusCertificate: true,
//       },
//     ],
//     status: "succeeded",
//   },
//   savedCourse: {
//     isShowAll: false,
//   },
// };

// // Hàm tạo store Redux cho các bài kiểm tra
// const createTestStore = (initialState) => configureStore({
//   reducer: (state = initialState) => state,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });

// describe("Component My_Certificates", () => {
//   beforeEach(() => {
//     // Mô phỏng hành vi của fetchCertificates
//     fetchCertificates.mockImplementation(() => async (dispatch) => {
//       dispatch({ type: 'fetchCertificates/fulfilled' });
//       return Promise.resolve();
//     });

//     // Mô phỏng hành vi của fetchUpdateMyCertificate
//     fetchUpdateMyCertificate.mockImplementation(() => async (dispatch) => {
//       dispatch({ type: 'fetchUpdateMyCertificate/fulfilled' });
//       toast.success("Delete successfully!!!");
//       return Promise.resolve();
//     });
//   });

//   test("displays certificate data when loading is complete", async () => {
//     const store = createTestStore(mockStore);

//     const { asFragment } = render(
//       <Provider store={store}>
//         <Router>
//           <My_Certificates />
//         </Router>
//       </Provider>
//     );

//     // Kiểm tra xem dữ liệu chứng chỉ có hiển thị khi tải xong không
//     await waitFor(() => {
//       expect(screen.getByText("Certificate 1")).toBeInTheDocument();
//     });

//     // Kiểm tra xem snapshot của component có khớp không
//     expect(asFragment()).toMatchSnapshot();
//   });

//   test("calls fetchCertificates on component mount", async () => {
//     const store = createTestStore(mockStore);

//     render(
//       <Provider store={store}>
//         <Router>
//           <My_Certificates />
//         </Router>
//       </Provider>
//     );

//     // Kiểm tra xem fetchCertificates có được gọi khi component mount không
//     await waitFor(() => {
//       expect(fetchCertificates).toHaveBeenCalled();
//     });
//   });

//   test("calls fetchUpdateMyCertificate when delete button is clicked", async () => {
//     const store = createTestStore(mockStore);

//     render(
//       <Provider store={store}>
//         <Router>
//           <My_Certificates />
//         </Router>
//       </Provider>
//     );

//     // Kiểm tra xem nút xóa có hiển thị không
//     await waitFor(() => {
//       const deleteButton = screen.getByTitle("Delete");
//       expect(deleteButton).toBeInTheDocument();
//     });

//     // Mô phỏng hành vi nhấp chuột vào nút xóa
//     userEvent.click(screen.getByTitle("Delete"));

//     // Kiểm tra xem fetchUpdateMyCertificate có được gọi không
//     await waitFor(() => {
//       expect(fetchUpdateMyCertificate).toHaveBeenCalled();
//     });
//   });

//   // test("displays loading spinner while loading", () => {
//   //   const loadingStore = createTestStore({
//   //     ...mockStore,
//   //     certificate: { ...mockStore.certificate, status: "loading" },
//   //   });

//   //   render(
//   //     <Provider store={loadingStore}>
//   //       <Router>
//   //         <My_Certificates />
//   //       </Router>
//   //     </Provider>
//   //   );

//   //   // Kiểm tra xem spinner tải có hiển thị khi đang tải không
//   //   expect(screen.getByRole("status")).toBeInTheDocument();
//   // });
// });
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { store } from '../../redux/store';
import Certificate from '.';

test('View Certificate', () => {
  const tree = renderer.create(
    <Provider store={store}>
        <MemoryRouter>
            <Certificate/>
        </MemoryRouter>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
