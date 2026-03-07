import type { CSSObjectWithLabel, Theme, ThemeConfig } from 'react-select';

export const selectTheme: ThemeConfig = (theme: Theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: '#3273dc',
  },
});

export const selectStyles = {
  option: (provided: CSSObjectWithLabel, state: { isFocused: boolean }) => ({
    ...provided,
    color: state.isFocused ? 'white' : '#4a4a4a',
  }),
};
