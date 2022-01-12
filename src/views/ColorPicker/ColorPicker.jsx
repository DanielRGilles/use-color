import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useColorPicker from '../../hooks/useColorPicker';
import useAffirmation from '../../hooks/useAffirmation';

export default function ColorPicker() {
  const {formState, didChangeColor, handleChange} = useColorPicker({fgColor:'#ffcc00', bgColor:'#212121', content:'Hello, world!', didChangeColor: false })
  const { affirmation } = useAffirmation(formState.bgColor, formState.fgColor)

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={formState.fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={formState.bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={formState.content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={formState.content} bgColor={formState.bgColor} fgColor={formState.fgColor} />
    </>
  );
}
