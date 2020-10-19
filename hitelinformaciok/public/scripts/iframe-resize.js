const isOldIE = navigator.userAgent.indexOf('MSIE') !== -1;

iFrameResize(
  {
    log: false,
    enablePublicMethods: true,
    heightCalculationMethod: 'grow',
  },
  '.iframe-to-resize',
);
