import { atom, atomFamily, selectorFamily } from 'recoil';
import { isSameDay } from '../../utils';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
  date: Date;
}

// todo 리스트 배열
export const todoListState = atom<Array<Todo>>({
  // 할 일 목록
  key: 'todoListState',
  default: [],
});

// 선택한 날짜
export const selectedDateState = atom<Date>({
  key: 'selectedDateState',
  default: new Date(),
});

// 선택한 Todo
export const selectedTodoState = atom<Todo | null>({
  key: 'selectedTodoState',
  default: null,
});

// 선택한 날짜의 Todo만 필터링한 리스트
export const filteredTodoListState = atomFamily<Array<Todo>, Date>({
  key: 'filteredTodoListState',
  default: selectorFamily({
    key: 'filteredTodoListState/default',
    get:
      (selectedDate) =>
      ({ get }) => {
        const todoList = get(todoListState);

        return todoList.filter((todo) => isSameDay(todo.date, selectedDate));
      },
  }),
});
