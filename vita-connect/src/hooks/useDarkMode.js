import { useTheme } from '../context/ThemeContext';

/**
 * Convenience wrapper around ThemeContext
 */
const useDarkMode = () => {
  const { isDark, toggleTheme } = useTheme();
  return { isDark, toggleTheme };
};

export default useDarkMode;