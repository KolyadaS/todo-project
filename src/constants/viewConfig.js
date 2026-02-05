import { TASK_STATUS } from "./taskStatus";

export const VIEW_CONFIG = {
  [TASK_STATUS.TODAY]: {
    title: "Сегодня",
    emptyText: "На сегодня задач нет",
    showInput: true,
    showClearCompleted: false,
    editable: true,
  },
  [TASK_STATUS.LATER]: {
    title: "Не сегодня",
    emptyText: "Задач нет",
    showInput: false,
    showClearCompleted: false,
    editable: true,
  },
  [TASK_STATUS.COMPLETED]: {
    title: "Готово",
    emptyText: "Пока ничего не выполнено",
    showInput: false,
    showClearCompleted: true,
    editable: true,
  },
};
