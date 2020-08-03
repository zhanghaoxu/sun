import {getAll, getFinish, getUnFinish, add} from '@/apis/todoList';
import toast from '@/utils/toast';
import {
  ADD_ALL_LIST,
  ADD_FINISH_LIST,
  ADD_UNFINISH_LIST,
  ADD_TODO,
} from '../../constants/home';
const initialState = {
  finishList: [],
  unFinishList: [],
  allList: [],
};

export function fetchList(type = 'all') {
  console.log(type);
  const _type = String.prototype.toLowerCase.call(type);
  let requestFunc;
  let reducerType;
  return function(dispatch) {
    switch (_type) {
      case 'all':
        requestFunc = getAll;
        reducerType = ADD_ALL_LIST;
        break;
      case 'finish':
        requestFunc = getFinish;
        reducerType = ADD_FINISH_LIST;
        break;
      case 'unfinish':
        requestFunc = getUnFinish;
        reducerType = ADD_UNFINISH_LIST;
        break;
      default:
        return;
    }
    requestFunc()
      .then(v => {
        console.log(v);
        dispatch({
          type: reducerType,
          list: v,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function addTodo(todo) {
  return function(dispatch) {
    return add({
      name: todo,
    })
      .then(v => {
        toast.showSuccess('添加成功！');
        dispatch(fetchList('all'));
        dispatch(fetchList('unFinish'));
        return Promise.resolve(v);
      })
      .catch(e => {
        console.log(e);
        return Promise.reject();
      });
  };
}

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FINISH_LIST:
      return {
        ...state,
        finishList: action.list,
      };
    case ADD_UNFINISH_LIST:
      return {
        ...state,
        unFinishList: action.list,
      };
    case ADD_ALL_LIST:
      return {...state, allList: action.list};

    default:
      return state;
  }
};

export default HomeReducers;
