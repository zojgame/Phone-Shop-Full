import styles from "./styles.module.css";
import { COLORS_INITIAL_STATE, COLORS } from "../../const";
import { useStore } from "../../store/store";

const ColorsFilterComponent = () => {
  const { colors, setColors } = useStore();

  const handleOnColorClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const color = event.target.getAttribute("data-color");
    const updatedColors = {
      ...colors,
      [`${color}`]: isChecked,
    };
    setColors(updatedColors);
  };

  const handleResetColors = () => {
    setColors(COLORS_INITIAL_STATE);
  };

  return (
    <aside className={styles.colorsContainer}>
      <h2>Цвет</h2>
      <ul className={styles.colors}>
        {COLORS.map((color) => {
          return (
            <li
              className={`${styles.colorCheckbox} ${styles[color.value]}`}
              key={color.value}
            >
              <input
                onChange={handleOnColorClick}
                type="checkbox"
                id={`checkbox${color.value}`}
                data-color={`${color.value}`}
                checked={colors[color.value]}
              />
              <label htmlFor={`checkbox${color.value}`}></label>
              <div>{color.label}</div>
            </li>
          );
        })}
      </ul>
      <p className={styles.resetColorsBtn} onClick={handleResetColors}>
        Сбросить параметры
      </p>
    </aside>
  );
};
export { ColorsFilterComponent };
