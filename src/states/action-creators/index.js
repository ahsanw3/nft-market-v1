export const toggleTheme = (theme) => {
  return (dispach) => {
    dispach({
      type: 'toggle-theme',
      payload: theme,
    })
  }
}
