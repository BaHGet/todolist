import { render, screen, fireEvent, waitForElement, act, waitFor  } from '@testing-library/react';
import TodosPage from "../Components/main/todosPage";

const user = {
    created_at: "2024-06-27T23:43:44.000Z",
    email: "bahget@abdo.com",
    username: "bahget",
}
    

test("render todos page", () => {
        render(<TodosPage user={user} handelLogout={() => {}}/>);

        expect(screen.findByDisplayValue(`Welcome ${user.username}`)).toBeDefined();
        expect(screen.findByDisplayValue("Add")).toBeDefined();
        expect(screen.findByDisplayValue("Todos")).toBeDefined();
        expect(screen.findByDisplayValue("No Todos")).toBeDefined();
})

test("add todo", () => {
    render(<TodosPage user={user} handelLogout={() => {}}/>);
    fireEvent.click(screen.getByText("Add"));
    fireEvent.change(screen.getByPlaceholderText("Add Title"), { target: { value: "test title" } });
    fireEvent.change(screen.getByPlaceholderText("Add Description"), { target: { value: "test description" } });
    fireEvent.change(screen.getByPlaceholderText("Add Priority"), { target: { value: "test priority" } });
    fireEvent.change(screen.getByPlaceholderText("Due Date"), { target: { value: "2024-06-27" } });

    fireEvent.click(screen.getByTestId("submit"));
    setTimeout(() => {
        expect(screen.findByText("test title")).toBeDefined();
    }, 1000)
    expect(screen.findByText("test description")).toBeDefined();
    expect(screen.findByText("test priority")).toBeDefined();
    expect(screen.findByText("2024-06-27")).toBeDefined();
})
