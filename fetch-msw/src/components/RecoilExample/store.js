import { atom, selector } from 'recoil';

export const fontSizeState = atom({
  key: 'fontSizeState', // unique ID (with respect to other atoms/selectors)
  default: 14, // default value (aka initial value)
});

export const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({ get }) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize * 2}${unit}`;
  },
});
