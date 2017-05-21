import { fromJS } from 'immutable';
import makeSelectHomePage, {
  makeCurrentPageData,
  makeCities,
} from '../selectors';
import { initialState } from '../reducer';

const data = fromJS([
  {
    name: 'Велосипед',
    city: 'Курск',
    country: 'Россия',
    organization: 'ОАО "Счетмаш"',
    description: 'Характеризует',
  },
  {
    name: 'Машина',
    city: 'Париж',
    country: 'Франция',
    organization: 'ОАО "Счетмаш"',
    description: 'Характеризует',
  },
  {
    name: 'Трактор',
    city: 'Москва',
    country: 'СССР',
    organization: 'ОАО "Счетмаш"',
    description: 'Характеризует',
  },
  {
    name: 'Валенок',
    city: 'Курск',
    country: 'Россия',
    organization: 'ОАО "Счетмаш"',
    description: 'Характеризует',
  },
]);

const globalState = fromJS({
  homePage: initialState.set('data', data),
});

describe('makeSelectHomePage', () => {
  const selector = makeSelectHomePage();

  it('Должен возвращать текущее состояние HomePage', () => {
    const homeState = initialState.toJS();
    const mockedState = fromJS({
      homePage: initialState,
    });

    expect(selector(mockedState)).toEqual(homeState);
  });
});

describe('makeCurrentPageData', () => {
  let state;
  const selector = makeCurrentPageData();
  const formatData = (items) => items.map((item) => ([
    item.name,
    `${item.city ? `${item.city}, ` : ''}${item.country}`,
    item.organization,
    item.description,
  ]));

  beforeEach(() => {
    state = globalState;
  });

  it('Должен фильтровать данные по выбранной стране', () => {
    const item = data.toJS()[2];
    const expected = formatData([item]);
    state = state.setIn(['homePage', 'filter'], 'ссср');

    expect(selector(state)).toEqual(expected);
  });

  it('Должен фильтровать данные по поисковому запросу', () => {
    const item = data.toJS()[0];
    const expected = formatData([item]);
    state = state.setIn(['homePage', 'searchQuery'], 'вело');

    expect(selector(state)).toEqual(expected);
  });

  it('Должен фильтровать данные по поисковому запросу и по выбранной стране', () => {
    const item = data.toJS()[3];
    const expected = formatData([item]);
    state = state
      .setIn(['homePage', 'searchQuery'], 'вале')
      .setIn(['homePage', 'filter'], 'россия');

    expect(selector(state)).toEqual(expected);
  });
});

describe('makeCities', () => {
  const selector = makeCities();

  it('Должен из таблицы данных составить список городов. Города не должны дублироваться', () => {
    const expected = ['Курск', 'Париж', 'Москва'];
    expect(selector(globalState)).toEqual(expected);
  });
});
