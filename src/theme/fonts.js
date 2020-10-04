import * as Font from 'expo-font'

export const fonts = {
  openSan: {
    regular: 'openSans_regular',
    regularItalic: 'openSans_regular_italic',
    semiBold: 'openSans_semiBold',
    semiBoldItalic: 'openSans_semiBold_italic',
    bold: 'openSans_bold',
    boldItalic: 'openSans_bold_italic',
  },
  NeuePlak: {
    Black: 'neuePlak_Black',
    Bold: 'neuePlak_Bold',
    CompBold: 'neuePlak_CompBold',
    CondExtraBlack: 'neuePlak_CondExtraBlack',
    Regular: 'neuePlak_Regular',
    WideExtraBlack: 'neuePlak_WideExtraBlack',
  },
}

// fonts preloading
export const fontsAll = [
  {
    openSans_regular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    openSans_regular_italic: require('../../assets/fonts/OpenSans-Italic.ttf'),
  },
  {
    openSans_semiBold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  },
  {
    openSans_semiBold_italic: require('../../assets/fonts/OpenSans-SemiboldItalic.ttf'),
  },
  {
    openSans_bold: require('../../assets/fonts/OpenSans-Bold.ttf'),
  },
  {
    openSans_bold_italic: require('../../assets/fonts/OpenSans-BoldItalic.ttf'),
  },
  {
    neuePlak_Black: require('../../assets/fonts/NeuePlak-Black.ttf'),
  },
  {
    neuePlak_Bold: require('../../assets/fonts/NeuePlak-Bold.ttf'),
  },
  {
    neuePlak_CompBold: require('../../assets/fonts/NeuePlak-CompBold.ttf'),
  },
  {
    neuePlak_CondExtraBlack: require('../../assets/fonts/NeuePlak-CondExtraBlack.ttf'),
  },
  {
    neuePlak_Regular: require('../../assets/fonts/NeuePlak-Regular.ttf'),
  },
  {
    neuePlak_WideExtraBlack: require('../../assets/fonts/NeuePlak-WideExtraBlack.ttf'),
  },
]
export const fontAssets = fontsAll.map((x) => Font.loadAsync(x))
