import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "./redux/store"; //will be "single store", may need to clear or re-create

import App from "./components/App"; //import Components to test
import tasksSlice from "./redux/taskSlice";

describe("Integration:App", () => {
  test("renders without errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ); //render into testing DOM!

    //screen.debug(); //view rendered DOM/HTML in console (for debugging)

    expect(screen.getByText("To Do List")).toBeInTheDocument(); //assertion
  })

  test("shows new tasks on form submission", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ); //render into testing DOM!

    //enter text
    const formInput = screen.getByTestId("new-task-input");
    userEvent.type(formInput, "TEST TASK"); //type in two words

    //click button
    userEvent.click(screen.getByTestId("new-task-submit-button"));

    //assertion! text appears in list
    expect(screen.getByText("TEST TASK")).toBeInTheDocument();
  })

  test('completes a task', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    ); //render into testing DOM!

    const testTask = "Learn about React State";
    store.dispatch(tasksSlice.actions.addTask(testTask))

    const task = screen.getByText(testTask);
    userEvent.click(task);

    expect(task).toHaveClass('font-strike');
  });
})
