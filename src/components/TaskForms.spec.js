import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddTaskForm } from "./TaskForms";

describe("Unit:Task Forms", () => {
  describe("Add Task Form", () => {
    test("clears content after submit", () => {
      const callback = jest.fn(); //empty

      //can render single element
      render(<AddTaskForm addTaskCallback={callback} />)

      //enter text
      const formInput = screen.getByTestId("new-task-input")
      userEvent.type(formInput, "TEST TASK"); //type in two words

      //shows typed input (controlled form!)
      expect(screen.getByDisplayValue("TEST TASK")).toBeInTheDocument();

      //click button
      userEvent.click(screen.getByTestId("new-task-submit-button"));

      //should also clear the form
      expect(screen.queryByDisplayValue("TEST TASK")).not.toBeInTheDocument();
    })
  })
})
