const suggestions = [
  // start background color
  {
    label: '--bg-primary',
    sortText: '--bg-primary',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #FFFFFF\n\nexample: background-color: var(--bg-primary)'
  },
  {
    label: '--bg-secondary',
    sortText: '--bg-secondary',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #F9FAFB\n\nexample: background-color: var(--bg-secondary)'
  },
  {
    label: '--bg-neautral',
    sortText: '--bg-neautral',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #F0F3F7\n\nexample: background-color: var(--bg-neautral)'
  },
  {
    label: '--bg-neutral-alt',
    sortText: '--bg-neutral-alt',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #DFE3E8\n\nexample: background-color: var(--bg-neutral-alt)'
  },
  {
    label: '--bg-disabled',
    sortText: '--bg-disabled',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #F0F3F7\n\nexample: background-color: var(--bg-disabled)'
  },
  {
    label: '--bg-neutral-dark',
    sortText: '--bg-neutral-dark',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #919EAB\n\nexample: background-color: var(--bg-neutral-dark)'
  },
  {
    label: '--bg-scrim',
    sortText: '--bg-scrim',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #DB284E\nrgba: rgba(0,0,0,75)\n\nexample: background-color: var(--bg-scrim)'
  },
  {
    label: '--bg-cross-fd',
    sortText: '--bg-cross-fd',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #DB284E\n\nexample: background-color: var(--bg-cross-fd)'
  },
  {
    label: '--bg-cross-studio',
    sortText: '--bg-cross-studio',
    detail: 'Retinol (background color)',
    documentation: 'Hex: #49A09D\n\nexample: background-color: var(--bg-cross-studio)'
  },
  // thematic color
  {
    label: '--bg-accent',
    sortText: '--bg-accent',
    detail: 'Retinol (background color)',
    documentation: 'Hex (fd): #DB284E\nHex (gb): #1E4CE9\nHex (studio): #1B8884\n\nexample: background-color: var(--bg-accent)'
  },
  {
    label: '--bg-accent-hover',
    sortText: '--bg-accent-hover',
    detail: 'Retinol (background color)',
    documentation: 'Hex (fd): #C22046\nHex (gb): #193FC2\nHex (studio): #49A09D\n\nexample: background-color: var(--bg-accent-hover)'
  },
  {
    label: '--bg-accent-pressed',
    sortText: '--bg-accent-pressed',
    detail: 'Retinol (background color)',
    documentation: 'Hex (fd): #C22046\nHex (gb): #193FC2\nHex (studio): #49A09D\n\nexample: background-color: var(--bg-accent-pressed)'
  },
  {
    label: '--bg-accent-alt',
    sortText: '--bg-accent-alt',
    detail: 'Retinol (background color)',
    documentation: 'Hex (fd): #FCEFF2\nHex (gb): #D2DBFB\nHex (studio): #E8F3F3\n\nexample: background-color: var(--bg-accent-alt)'
  },
  {
    label: '--bg-accent-soft',
    sortText: '--bg-accent-soft',
    detail: 'Retinol (background color)',
    documentation: 'Hex (fd): #EB92A7\nHex (gb): #446AED\nHex (studio): #A4CFCE\n\nexample: background-color: var(--bg-accent-soft)'
  },
  // end background color
  // start text color
  {
    label: '--text-default',
    sortText: '--text-default',
    detail: 'Retinol (text color)',
    documentation: 'Hex: #13161A\n\nexample: color: var(--text-default)'
  },
  {
    label: '--text-sub',
    sortText: '--text-sub',
    detail: 'Retinol (text color)',
    documentation: 'Hex: #919EAB\n\nexample: color: var(--text-sub)'
  },
  {
    label: '--text-default-inverse',
    sortText: '--text-default-inverse',
    detail: 'Retinol (text color)',
    documentation: 'Hex: #FFFFFF\n\nexample: color: var(--text-default-inverse)'
  },
  {
    label: '--text-disabled',
    sortText: '--text-disabled',
    detail: 'Retinol (text color)',
    documentation: 'Hex: #C4CDD5\n\nexample: color: var(--text-disabled)'
  },
  // thematic
  {
    label: '--text-accent',
    sortText: '--text-accent',
    detail: 'Retinol (text color)',
    documentation: 'Hex (fd): #DB284E\nHex (gb): #1E4CE9\nHex (studio): #1B8884\n\nexample: color: var(--text-accent)'
  },
  {
    label: '--text-link',
    sortText: '--text-link',
    detail: 'Retinol (text color)',
    documentation: 'Hex (fd): #DB284E\nHex (gb): #1E4CE9\nHex (studio): #1B8884\n\nexample: color: var(--text-link)'
  },
  {
    label: '--text-link-hover',
    sortText: '--text-link-hover',
    detail: 'Retinol (text color)',
    documentation: 'Hex (fd): #C22046\nHex (gb): #193FC2\nHex (studio): #49A09D\n\nexample: color: var(--text-link-hover)'
  },
  // end text color
  // start icon color
  {
    label: '--icon-default',
    sortText: '--icon-default',
    detail: 'Retinol (icon color)',
    documentation: 'Hex: #13161A\n\nexample: stroke: var(--icon-default)'
  },
  {
    label: '--icon-sub',
    sortText: '--icon-sub',
    detail: 'Retinol (icon color)',
    documentation: 'Hex: #919EAB\n\nexample: stroke: var(--icon-sub)'
  },
  {
    label: '--icon-inverse',
    sortText: '--icon-inverse',
    detail: 'Retinol (icon color)',
    documentation: 'Hex: #FFFFFF\n\nexample: stroke: var(--icon-inverse)'
  },
  {
    label: '--icon-disabled',
    sortText: '--icon-disabled',
    detail: 'Retinol (icon color)',
    documentation: 'Hex: #C4CDD5\n\nexample: stroke: var(--icon-disabled)'
  },
  // thematic
  {
    label: '--icon-accent',
    sortText: '--icon-accent',
    detail: 'Retinol (icon color)',
    documentation: 'Hex (fd): #DB284E\nHex (gb): #1E4CE9\nHex (studio): #1B8884\n\nexample: stroke: var(--icon-accent)'
  },
  // end icon color
  // start border color
  {
    label: '--border-default',
    sortText: '--border-default',
    detail: 'Retinol (border color)',
    documentation: 'Hex: #DFE3E8\n\nexample: border-color: var(--border-default)'
  },
  {
    label: '--border-default-hover',
    sortText: '--border-default-hover',
    detail: 'Retinol (border color)',
    documentation: 'Hex: #919EAB\n\nexample: border-color: var(--border-default-hover)'
  },
  {
    label: '--border-sub',
    sortText: '--border-sub',
    detail: 'Retinol (border color)',
    documentation: 'Hex: #F0F3F7\n\nexample: border-color: var(--border-sub)'
  },
  {
    label: '--border-strong',
    sortText: '--border-strong',
    detail: 'Retinol (border color)',
    documentation: 'Hex: #13161A\n\nexample: border-color: var(--border-strong)'
  },
  // thematic
  {
    label: '--border-accent',
    sortText: '--border-accent',
    detail: 'Retinol (border color)',
    documentation: 'Hex (fd): #DB284E\nHex (gb): #1E4CE9\nHex (studio): #1B8884\n\nexample: border-color: var(--border-accent)'
  },
  // end border color
  // start divider color
  {
    label: '--divider-default',
    sortText: '--divider-default',
    detail: 'Retinol (divider color)',
    documentation: 'Hex: #DFE3E8\n\nexample: border-color: var(--divider-default)'
  },
  {
    label: '--divider-sub',
    sortText: '--divider-sub',
    detail: 'Retinol (divider color)',
    documentation: 'Hex: #F0F3F7\n\nexample: border-color: var(--divider-sub)'
  },
  // end divider color
  // start system color
  {
    label: '--system-bg-error',
    sortText: '--system-bg-error',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FFF1F0\n\nexample: background-color: var(--system-bg-error)'
  },
  {
    label: '--system-border-error',
    sortText: '--system-border-error',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FFC4C4\n\nexample: border-color: var(--system-border-error)'
  },
  {
    label: '--system-text-error',
    sortText: '--system-text-error',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FF4D4F\n\nexample: color: var(--system-text-error)'
  },
  {
    label: '--system-text-importance',
    sortText: '--system-text-importance',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FF4D4F\n\nexample: color: var(--system-text-importance)'
  },
  {
    label: '--system-bg-success',
    sortText: '--system-bg-success',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #F6FFED\n\nexample: background-color: var(--system-bg-success)'
  },
  {
    label: '--system-border-success',
    sortText: '--system-border-success',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #DCF3D1\n\nexample: border-color: var(--system-border-success)'
  },
  {
    label: '--system-text-success',
    sortText: '--system-text-success',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #F6FFED\n\nexample: color: var(--system-text-success)'
  },
  {
    label: '--system-bg-info',
    sortText: '--system-bg-info',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #E6F7FF\n\nexample: background-color: var(--system-bg-info)'
  },
  {
    label: '--system-border-info',
    sortText: '--system-border-info',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #B2DAFF\n\nexample: border-color: var(--system-border-info)'
  },
  {
    label: '--system-text-info',
    sortText: '--system-text-info',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #1060AA\n\nexample: color: var(--system-text-info)'
  },
  {
    label: '--system-bg-warning',
    sortText: '--system-bg-warning',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FFFBE6\n\nexample: background-color: var(--system-bg-warning)'
  },
  {
    label: '--system-border-warning',
    sortText: '--system-border-warning',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FFE58F\n\nexample: border-color: var(--system-border-warning)'
  },
  {
    label: '--system-text-warning',
    sortText: '--system-text-warning',
    detail: 'Retinol (system color)',
    documentation: 'Hex: #FAAD14\n\nexample: color: var(--system-text-warning)'
  },
  // end system color
  // start additional color
  {
    label: '--soft-pink',
    sortText: '--soft-pink',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #FCEFF2\n\nexample: border-color: var(--soft-pink)'
  },
  {
    label: '--soft-cream',
    sortText: '--soft-cream',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #FDFAF3\n\nexample: border-color: var(--soft-cream)'
  },
  {
    label: '--pink-beige',
    sortText: '--pink-beige',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #FFEFE7\n\nexample: color: var(--pink-beige)'
  },
  {
    label: '--soft-fuschia',
    sortText: '--soft-fuschia',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #F8CCFE\n\nexample: color: var(--soft-fuschia)'
  },
  {
    label: '--fuschia',
    sortText: '--fuschia',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #F262C1\n\nexample: color: var(--fuschia)'
  },
  {
    label: '--orenji',
    sortText: '--orenji',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #F27F48\n\nexample: color: var(--orenji)'
  },
  {
    label: '--olive',
    sortText: '--olive',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #D8DE22\n\nexample: color: var(--olive)'
  },
  {
    label: '--serenade',
    sortText: '--serenade',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #B8EB9A\n\nexample: color: var(--serenade)'
  },
  {
    label: '--forest',
    sortText: '--forest',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #186957\n\nexample: color: var(--forest)'
  },
  {
    label: '--blue-jeans',
    sortText: '--blue-jeans',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #626EA2\n\nexample: color: var(--blue-jeans)'
  },
  {
    label: '--cross-fd',
    sortText: '--cross-fd',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #DB284E\n\nexample: color: var(--cross-fd)'
  },
  {
    label: '--cross-studio',
    sortText: '--cross-studio',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #1B8884\n\nexample: color: var(--cross-studio)'
  },
  {
    label: '--rose',
    sortText: '--rose',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #F7526E\n\nexample: color: var(--rose)'
  },
  {
    label: '--sunflower',
    sortText: '--sunflower',
    detail: 'Retinol (additional color)',
    documentation: 'Hex: #FBF48C\n\nexample: color: var(--sunflower)'
  },
  // end addtional color
  // start radius
  {
    label: '--radius-0',
    sortText: '--radius-0',
    detail: 'Retinol (border radius)',
    documentation: 'Size: 0rem\n\nexample: border-radius: var(--radius-0)'
  },
  {
    label: '--radius-4',
    sortText: '--radius-4',
    detail: 'Retinol (border radius)',
    documentation: 'Size: 0.25rem\n\nexample: border-radius: var(--radius-4)'
  },
  {
    label: '--radius-8',
    sortText: '--radius-8',
    detail: 'Retinol (border radius)',
    documentation: 'Size: 0.5rem\n\nexample: border-radius: var(--radius-8)'
  },
  {
    label: '--radius-16',
    sortText: '--radius-16',
    detail: 'Retinol (border radius)',
    documentation: 'Size: 1rem\n\nexample: border-radius: var(--radius-16)'
  },
  {
    label: '--radius-24',
    sortText: '--radius-24',
    detail: 'Retinol (border radius)',
    documentation: 'Size: 1.5rem\n\nexample: border-radius: var(--radius-24)'
  },
  // end radius
  // start space
  {
    label: '--space-0',
    sortText: '--space-0',
    detail: 'Retinol (space)',
    documentation: 'Size: 0rem\n\nexample: margin-top: var(--space-0)'
  },
  {
    label: '--space-4',
    sortText: '--space-4',
    detail: 'Retinol (space)',
    documentation: 'Size: 0.25rem\n\nexample: margin-top: var(--space-4)'
  },
  {
    label: '--space-8',
    sortText: '--space-8',
    detail: 'Retinol (space)',
    documentation: 'Size: 0.5rem\n\nexample: margin-top: var(--space-8)'
  },
  {
    label: '--space-12',
    sortText: '--space-12',
    detail: 'Retinol (space)',
    documentation: 'Size: 0.75rem\n\nexample: margin-top: var(--space-12)'
  },
  {
    label: '--space-16',
    sortText: '--space-16',
    detail: 'Retinol (space)',
    documentation: 'Size: 1rem\n\nexample: margin-top: var(--space-16)'
  },
  {
    label: '--space-20',
    sortText: '--space-20',
    detail: 'Retinol (space)',
    documentation: 'Size: 1.25rem\n\nexample: margin-top: var(--space-20)'
  },
  {
    label: '--space-24',
    sortText: '--space-24',
    detail: 'Retinol (space)',
    documentation: 'Size: 1.5rem\n\nexample: margin-top: var(--space-24)'
  },
  {
    label: '--space-28',
    sortText: '--space-28',
    detail: 'Retinol (space)',
    documentation: 'Size: 1.75rem\n\nexample: margin-top: var(--space-28)'
  },
  {
    label: '--space-32',
    sortText: '--space-32',
    detail: 'Retinol (space)',
    documentation: 'Size: 2rem\n\nexample: margin-top: var(--space-32)'
  },
  {
    label: '--space-36',
    sortText: '--space-36',
    detail: 'Retinol (space)',
    documentation: 'Size: 2.25rem\n\nexample: margin-top: var(--space-36)'
  },
  {
    label: '--space-40',
    sortText: '--space-40',
    detail: 'Retinol (space)',
    documentation: 'Size: 2.5rem\n\nexample: margin-top: var(--space-40)'
  },
  {
    label: '--space-44',
    sortText: '--space-44',
    detail: 'Retinol (space)',
    documentation: 'Size: 2.75rem\n\nexample: margin-top: var(--space-44)'
  },
  {
    label: '--space-48',
    sortText: '--space-48',
    detail: 'Retinol (space)',
    documentation: 'Size: 3rem\n\nexample: margin-top: var(--space-48)'
  },
  {
    label: '--space-52',
    sortText: '--space-52',
    detail: 'Retinol (space)',
    documentation: 'Size: 3.25rem\n\nexample: margin-top: var(--space-52)'
  },
  {
    label: '--space-56',
    sortText: '--space-56',
    detail: 'Retinol (space)',
    documentation: 'Size: 3.5rem\n\nexample: margin-top: var(--space-56)'
  },
  {
    label: '--space-60',
    sortText: '--space-60',
    detail: 'Retinol (space)',
    documentation: 'Size: 3.75rem\n\nexample: margin-top: var(--space-60)'
  },
  {
    label: '--space-64',
    sortText: '--space-64',
    detail: 'Retinol (space)',
    documentation: 'Size: 4rem\n\nexample: margin-top: var(--space-64)'
  },
  {
    label: '--space-68',
    sortText: '--space-68',
    detail: 'Retinol (space)',
    documentation: 'Size: 4.25rem\n\nexample: margin-top: var(--space-68)'
  },
  {
    label: '--space-72',
    sortText: '--space-72',
    detail: 'Retinol (space)',
    documentation: 'Size: 4.5rem\n\nexample: margin-top: var(--space-72)'
  },
  {
    label: '--space-76',
    sortText: '--space-76',
    detail: 'Retinol (space)',
    documentation: 'Size: 4.75rem\n\nexample: margin-top: var(--space-76)'
  },
  {
    label: '--space-80',
    sortText: '--space-80',
    detail: 'Retinol (space)',
    documentation: 'Size: 5rem\n\nexample: margin-top: var(--space-80)'
  },
  {
    label: '--space-84',
    sortText: '--space-84',
    detail: 'Retinol (space)',
    documentation: 'Size: 5.25rem\n\nexample: margin-top: var(--space-84)'
  },
  {
    label: '--space-88',
    sortText: '--space-88',
    detail: 'Retinol (space)',
    documentation: 'Size: 5.5rem\n\nexample: margin-top: var(--space-88)'
  },
  {
    label: '--space-92',
    sortText: '--space-92',
    detail: 'Retinol (space)',
    documentation: 'Size: 5.75rem\n\nexample: margin-top: var(--space-92)'
  },
  {
    label: '--space-96',
    sortText: '--space-96',
    detail: 'Retinol (space)',
    documentation: 'Size: 6rem\n\nexample: margin-top: var(--space-96)'
  },
  {
    label: '--space-100',
    sortText: '--space-100',
    detail: 'Retinol (space)',
    documentation: 'Size: 6.25rem\n\nexample: margin-top: var(--space-100)'
  },
  // end space
  // start shadow
  {
    label: '--depth-low',
    sortText: '--depth-low',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-low)'
  },
  {
    label: '--depth-medium',
    sortText: '--depth-medium',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-medium)'
  },
  {
    label: '--depth-high',
    sortText: '--depth-high',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-high)'
  },
  {
    label: '--depth-higher',
    sortText: '--depth-higher',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-higher)'
  },
  {
    label: '--depth-pressed',
    sortText: '--depth-pressed',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-pressed)'
  },
  {
    label: '--depth-stickybottom',
    sortText: '--depth-stickybottom',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-stickybottom)'
  },
  {
    label: '--depth-popover',
    sortText: '--depth-popover',
    detail: 'Retinol (shadow)',
    documentation: 'Size: coming-soon\n\nexample: box-shadow: var(--depth-popover)'
  },
  // end shadow
  // start font family
  {
    label: '--gb-ff-default',
    sortText: '--gb-ff-default',
    detail: 'Retinol (font family)',
    documentation: 'value: AlbertSans, sans-serif\n\nexample: font-family: var(--gb-ff-default)'
  },
  {
    label: '--fd-ff-editorial',
    sortText: '--fd-ff-editorial',
    detail: 'Retinol (font family)',
    documentation: 'value: Butler, sans-serif\n\nexample: font-family: var(--fd-ff-editorial)'
  },
  {
    label: '--fd-ff-default',
    sortText: '--fd-ff-default',
    detail: 'Retinol (font family)',
    documentation: 'value: CreatoDisplay, sans-serif\n\nexample: font-family: var(--fd-ff-default)'
  },
  {
    label: '--gb-ff-heading',
    sortText: '--gb-ff-heading',
    detail: 'Retinol (font family)',
    documentation: 'value: Karla, sans-serif\n\nexample: font-family: var(--gb-ff-heading)'
  },
  // end font famoly
];

module.exports = suggestions