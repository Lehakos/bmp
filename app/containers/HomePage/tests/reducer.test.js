import { fromJS } from 'immutable';
import homePageReducer, { initialState } from '../reducer';
import {
  loadData,
  loadDataSuccess,
  loadDataFailure,
  changeFilter,
  search,
  openModal,
  closeModal,
  addEntrySuccess,
  changePagination,
} from '../actions';

describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('возвращает начальное состояние по умолчанию', () => {
    const expected = state;
    expect(homePageReducer(undefined, {})).toEqual(expected);
  });

  it('после loadData очищает текущие данные и меняет loading на true', () => {
    const expected = state.set('loading', true).set('data', fromJS([]));
    expect(homePageReducer(undefined, loadData())).toEqual(expected);
  });

  it('после loadDataSuccess сохраняет их в data и меняет loading на false', () => {
    const data = fromJS([{ name: 'Маша' }, { name: 'Вася' }]);
    const expected = state.set('loading', false).set('data', data);
    expect(homePageReducer(undefined, loadDataSuccess(data))).toEqual(expected);
  });

  it('после loadDataFailure меняет loading на false и сохраняет текст ошибки в error', () => {
    const error = 'Не удалось сохранить данные';
    const expected = state.set('loading', false).set('error', error);
    expect(homePageReducer(undefined, loadDataFailure(error))).toEqual(expected);
  });

  it('после changeFilter сохраняет название фильтра в нижнем регистре, а также меняет currentPage на 1', () => {
    const filter = 'СССР';
    const expected = state.set('currentPage', 1).set('filter', filter.toLowerCase());
    expect(homePageReducer(undefined, changeFilter(filter))).toEqual(expected);
  });

  it('после search сохраняет поисковый запрос в нижнем регистре, а также меняет currentPage на 1', () => {
    const query = 'СССР';
    const expected = state.set('currentPage', 1).set('searchQuery', query.toLowerCase());
    expect(homePageReducer(undefined, search(query))).toEqual(expected);
  });

  it('после openModal сохраняет название попапа в modal', () => {
    const modal = 'newEntry';
    const expected = state.set('modal', modal);
    expect(homePageReducer(undefined, openModal(modal))).toEqual(expected);
  });

  it('после closeModal меняет modal на null', () => {
    const expected = state.set('modal', null);
    expect(homePageReducer(undefined, closeModal())).toEqual(expected);
  });

  it('после addEntrySuccess добавляет новую запись в начало списка', () => {
    state = state.set('data', fromJS([{ name: 'Вася' }]));

    const newEntry = fromJS({ name: 'Маша' });
    const expected = state
      .update('data', (data) => data.unshift(newEntry))
      .set('pendingNewEntry', false);

    expect(homePageReducer(state, addEntrySuccess(newEntry))).toEqual(expected);
  });

  it('после changePagination меняется currentPage', () => {
    const newPage = 2;
    const expected = state.set('currentPage', newPage);
    expect(homePageReducer(state, changePagination(newPage))).toEqual(expected);
  });
});
