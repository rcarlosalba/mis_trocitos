import { generateClasses } from '@formkit/themes';
import { genesisIcons } from '@formkit/icons';
import { createAutoAnimatePlugin } from '@formkit/addons';
import style from './tailwind-theme';

const theme = {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(style),
  },
  plugins: [createAutoAnimatePlugin()],
};

export default theme;
