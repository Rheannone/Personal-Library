import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
    const { setThemeName, themeName } = useTheme();

    return (
        <div className={`theme-toggle ${themeName}`}>
            <div onClick={() => setThemeName('light')} className ='light'>
                Light
            </div>
            <div onClick={() => setThemeName('dark')} className ='dark'>
                Dark
            </div>
        </div>
    )
}

export default ThemeToggle;