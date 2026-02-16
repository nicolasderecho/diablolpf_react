export const selectTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: '#3273dc',
  },
});

export const selectStyles = {
  option: (provided, state) => ({ ...provided, color: state.isFocused ? 'white' : '#4a4a4a' }),
};
