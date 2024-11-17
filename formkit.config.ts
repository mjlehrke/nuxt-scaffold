import { genesisIcons } from '@formkit/icons';
import { defineFormKitConfig } from '@formkit/vue';
import '@formkit/themes/genesis';

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
});
