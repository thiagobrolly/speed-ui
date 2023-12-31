/* eslint-disable @typescript-eslint/no-empty-interface */
// import 'styled-components';
// import { DefaultThemeProps } from '@speed-ui/theme';

// declare module 'styled-components' {
//   export interface DefaultTheme extends DefaultThemeProps {}
// }

// styled-components.d.ts

// Sobrescrevendo o módulo 'styled-components' para incluir o tema como prop
// import 'styled-components';

// import { Theme } from '../theme';

// declare module 'styled-components' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface DefaultTheme extends Theme {}
// }

/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { LightThemeProps } from '@speed-ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends LightThemeProps {}
}
