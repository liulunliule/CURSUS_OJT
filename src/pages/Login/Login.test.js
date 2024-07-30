import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import { store } from "../../redux/store";
import Login from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { toast } from "react-toastify";
import { fetchUserLoginSuccess } from "../../redux/features/userSlice";

// Mocking dependencies
jest.mock("axios");
jest.mock("react-toastify", () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
}));
jest.mock("../../redux/features/userSlice", () => ({
    fetchUserLoginSuccess: jest.fn(),
}));

test("renders Login Page correctly", () => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>
    );

    // Kiểm tra các phần tử trên trang login
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
});

test("handles user input and login process", async () => {
    // Mock API response
    const mockUser = { email: "huyngocnghech@gmail.com", password: "123" };
    axios.get.mockResolvedValue({ data: [mockUser] });

    render(
        <Provider store={store}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
        target: { value: "huyngocnghech@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
        target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Sign in"));

    expect(await screen.findByText("Login succeed")).toBeInTheDocument();

    expect(fetchUserLoginSuccess).toHaveBeenCalledWith(mockUser);
});
