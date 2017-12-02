// SETTINGS ////////////////////////////////////////////////////////////////////
let cb = null
let options = {}

// ACTIONS /////////////////////////////////////////////////////////////////////
let download = (x, y) => pdfMake.createPdf(x).download(y, cb, options)
let open = x => pdfMake.createPdf(x).open(options, window.open('loading.html', '_blank'))
let print = x => pdfMake.createPdf(x).print(options, window)

// EVENT HANDLERS //////////////////////////////////////////////////////////////
function handlePdfClick() {
  let action = this.getAttribute('action'),
    doc = this.getAttribute('doc'),
    title = this.getAttribute('title')

  if (action === 'download') download(eval(doc), title)
  else if (action === 'open') open(eval(doc))
  else if (action === 'print') print(eval(doc))
}

let buttons = document.querySelectorAll('.pdf-link')
for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener('click', handlePdfClick, false)
}

// GLOBAL SETTINGS /////////////////////////////////////////////////////////////
let globalSettings = {
  // you can apply any logic and return any valid pdfmake element
  footer: function(currentPage, pageCount) {
    return currentPage.toString() + ' of ' + pageCount
  },
  header: function(currentPage, pageCount) {
    return { text: 'Current Section', alignment: currentPage % 2 ? 'left' : 'right' }
  },
  pageSize: 'letter', // letter, legal, A5 { width: number, height: number }
  pageOrientation: 'portrait', // portrait, landscape
  pageMargins: [40, 60, 40, 60] // [left, top, right, bottom], [horizontal, vertical], int
}

function globalSettingsOverride(lsettings) {
  for (let prop in lsettings) {
    if (lsettings.hasOwnProperty(prop)) {
      globalSettings[prop] = lsettings[prop]
    }
  }
}

// GLOBAL DATA /////////////////////////////////////////////////////////////////
let globalData = {
  testInterpolation: 'GLOBAL DATA INTERPOLATION',
  data2: 'ANOTHER GLOBAL VARIABLE',
  office: '222987 WALLABY WAY, SYDNEY, AUSTRALIA'
}

function globalDataOverride(ldata) {
  for (let prop in ldata) {
    if (ldata.hasOwnProperty(prop)) {
      globalData[prop] = ldata[prop]
    }
  }
}

// GLOBAL STYLES ///////////////////////////////////////////////////////////////
let globalStyles = {
  header: {
    fontSize: 18,
    bold: true
  },
  subheader: {
    fontSize: 15,
    bold: true
  },
  quote: {
    italics: true
  },
  small: {
    fontSize: 8
  }
}

function globalStylesOverride(lstyles) {
  for (let prop in lstyles) {
    if (lstyles.hasOwnProperty(prop)) {
      globalStyles[prop] = lstyles[prop]
    }
  }
}

// HANDLING OTHER DOC SOURCES //////////////////////////////////////////////////
// ASYNC EXAMPLE
// $scope.generatePdf = function() {
//   // create the window before the callback
//   let win = window.open('', '_blank')
//   $http.post('/someUrl', data).then(function(response) {
//     // pass the "win" argument
//     pdfMake.createPdf(docDefinition).open({}, win)
//   })
// }

// PUT THE PDF INTO YOUR OWN PAGE AS URL DATA
// const pdfDocGenerator = pdfMake.createPdf(docDefinition)
// pdfDocGenerator.getDataUrl(dataUrl => {
//   const targetElement = document.querySelector('#iframeContainer')
//   const iframe = document.createElement('iframe')
//   iframe.src = dataUrl
//   targetElement.appendChild(iframe)
// }, cb, options)

// GET THE PDF AS BASE64 DATA
// const pdfDocGenerator = pdfMake.createPdf(docDefinition)
// pdfDocGenerator.getBase64(data => {
//   alert(data)
// })

// GET THE PDF AS A BUFFER
// const pdfDocGenerator = pdfMake.createPdf(docDefinition);
// pdfDocGenerator.getBuffer((buffer) => {
// 	// ...
// })
