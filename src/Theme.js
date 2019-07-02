export const colors = {
    foo: 'red',
    main: '#7955ff',
    dark: '#141414',
    light: 'rgb(240, 240, 240)',
    lightUsed: 'rgb(230, 230, 230)',
    ok: 'rgb(0, 198, 255)',
    alert: 'rgb(251, 99, 77)',
    notice: 'rgb(247, 197, 0)',
    success: 'rgb(151, 209, 41)',
    tomato: 'rgb(252,88,107)',
    mainDarkest: '#372873',
    mainDarker: '#49378f',
    mainDark: '#583eb9',
    mainLight: '#9176fe',
    mainLightest: '#a897fe',
    blog: 'rgb(0, 198, 255)',
    news: 'rgb(247, 197, 0)',
    article: 'rgb(255,200,9)',
    press: 'rgb(252,88,107)',
    pressRelease: 'rgb(252,88,107)',
    business: 'rgb(151, 209, 41)',
    technical: '#a897fe'
};

export const variables = {
    pageWidth: '1440px',
    pageWidthNarrow: '1240px'
};

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '576px',
    tablet: '768px',
    laptop: '992px',
    laptopM: '1240px',
    laptopL: '1440px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
