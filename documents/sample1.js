// SETTINGS ////////////////////////////////////////////////////////////////////
let localSettings = {}
globalSettingsOverride(localSettings)

// LOCAL DATA///////////////////////////////////////////////////////////////////
let localData = {
  testInterpolation: '!!!TESTING LOCAL DATA INTERPOLATION!!!',
  data2: 'ANOTHER LOCAL VARIABLE',
  data3: 'A THIRD LOCAL VARIABLE'
}

globalDataOverride(localData)

// LOCAL STYLES ///////////////////////////////////
let localStyles = {
  header: {
    fontSize: 18,
    bold: true
  },
  header2: {
    fontSize: 50,
    bold: true
  }
}

globalStylesOverride(localStyles)

// DOCUMENT DEFINITION /////////////////////////////////////////////////////////
let sample1 = {
  footer: globalSettings.footer,
  header: globalSettings.header,
  pageSize: globalSettings.pageSize,
  pageOrientation: globalSettings.pageOrientation,
  pagesMargins: globalSettings.pagesMargins,
  images: globalImages,
  styles: globalStyles,

  content: [
    {
      text: 'This is a header, using header style',
      style: 'header',
      margin: 5 // All sides
    },
    `Lorem ipsum dolor sit amet, ${
      globalData.testInterpolation
    } consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n`,
    {
      text: 'Subheader 1 - using subheader style',
      style: 'subheader',
      margin: [5, 10, 20, 5] // Each side, left, top, right, bottom
    },
    {
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: ['*', 'auto', 100, '*'],
        body: [
          ['First', 'Second', 'Third', 'The last one'],
          ['Value 1', 'Value 2', 'Value 3', `${globalData.office}`],
          [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
        ]
      },
      margin: [10, 20] // x, y
    },
    'Bulleted list example:',
    {
      // to treat a paragraph as a bulleted list, set an array of items under the ul key
      ul: ['Item 1', 'Item 2', 'Item 3', { text: 'Item 4', bold: true }]
    },
    {
      columns: [
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              ['First', 'Second'],
              ['Value 1', 'Value 2'],
              [{ text: 'Bold value', bold: true }, 'Val 2']
            ]
          },
          margin: 20
        },
        {
          stack: [
            // second column consists of paragraphs
            'paragraph A',
            'paragraph B',
            {
              // you can also fit the image inside a rectangle
              image: 'img1',
              fit: [100, 100]
            },
            'these paragraphs will be rendered one below another inside the column'
          ],
          fontSize: 15
        }
      ]
    },
    'Numbered list example:',
    {
      // for numbered lists set the ol key
      ol: ['Item 1', 'Item 2', 'Item 3']
    },
    {
      // if you specify width, image will scale proportionally
      image: 'img1',
      width: 150
    },
    {
      // if you specify both width and height - image will be stretched
      image: 'img1',
      width: 150,
      height: 150
    },

    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
    `Lorem ${globalData.data2} ipsum dolor sit amet, ${
      globalData.data3
    } elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n`,
    {
      text: 'Subheader 2 - using subheader style',
      style: 'subheader'
    },
    {
      text: 'Subheader 2 - using subheader style',
      style: 'header2',
      pageBreak: 'before'
    },
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
    {
      text:
        'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
      style: ['quote', 'small']
    }
  ]
}
