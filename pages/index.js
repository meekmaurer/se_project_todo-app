import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
//const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    initialTodos.forEach((item) => {
      const todo = generateTodo(item);
      section.addItems(todo);
    });
  },
  containerSelector: "todos__list",
});
section.renderItems();

const openModal = (modal) => {
  modal.classList.add("popup_visible");
  // newTodoValidator._resetValidation();
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const values = { name, date, id, completed: false };
  const id = uuidv4();

  const todo = generateTodo(values);
  todosList.append(todo);
  closeModal(addTodoPopup);
  newTodoValidator.resetValidation();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
