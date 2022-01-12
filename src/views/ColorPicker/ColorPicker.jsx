import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useColorPicker from '../../hooks/useColorPicker';
import useAffirmation from '../../hooks/useAffirmation';

export default function ColorPicker() {
  const {formState, didChangeColor, handleChange} = useColorPicker({fgColor:'#ffcc00', bgColor:'#212121', content:'Hello, world!', didChangeColor: false })
  const { bgColor, fgColor, content } = formState;
  const { affirmation } = useAffirmation(bgColor, fgColor)

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
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
