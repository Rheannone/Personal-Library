import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css'

function ThemeToggle() {
    const { setThemeName, themeName } = useTheme();

    const toggleTheme = () => themeName ==='light' ?  setThemeName('dark') : setThemeName('light')

    return (
        <div className={`theme-toggle ${themeName}`}>
            <div onClick={toggleTheme} className="themetoggle">
                
            </div>
        </div>
    )
}

export default ThemeToggle;