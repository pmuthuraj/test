
spectrumColor_A = $(flatSpectrum_a).spectrum({
  flat: true,
  showAlpha: true,
  allowAlpha: true,
  showPalette: true,
  showButtons: false,
  clickoutFiresChange: true
});

spectrumColor_B = $(flatSpectrum_b).spectrum({
  flat: true,
  showAlpha: true,
  allowAlpha: true,
  showPalette: true,
  showButtons: false,
  clickoutFiresChange: true
});


$(flatSpectrum_a).on('move.spectrum', function(e, tinyColor) {
  var hexVal = tinyColor.toHexString();
  var color_a = document.getElementById('Phonecolor');
  color_a.style.backgroundColor = hexVal;

});

$(flatSpectrum_b).on('move.spectrum', function(e, tinyColor) {
 
  var color_text = document.getElementById('Name');
  var colorVal = "rgba(" + tinyColor._r + ", " + tinyColor._g + ", " + tinyColor._b + ", " + tinyColor._a + ")";
  color_text.style.color = colorVal;
});

