// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar1 = new ProgressBar.Circle('#progressbar-years', {
  color: '#35c8bc',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#ffffff', width: 3 },
  to: { color: '#35c8bc', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

//    var value = Math.round(circle.value() * 100);
//    if (value === 0) {
//      circle.setText('');
//    } else {
//      circle.setText(value + '%');
//    }

  }
});
//bar1.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
//bar1.text.style.fontSize = '40px';

bar1.animate(0.9);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle('#progressbar-results', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#ffffff', width: 3 },
  to: { color: '#35c8bc', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

//    var value = Math.round(circle.value() * 100);
//    if (value === 0) {
//      circle.setText('');
//    } else {
//      circle.setText(value + '%');
//    }

  }
});
//bar2.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
//bar2.text.style.fontSize = '40px';

bar2.animate(0.75);  // Number from 0.0 to 1.0

var bar3 = new ProgressBar.Circle('#progressbar-euros', {
  color: '#dfe8ed',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 1400,
  text: {
      style: {
        color: '#3c4761',
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: 0,
        margin: 0,
        transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
      },
      autoStyleContainer: false    
  },
  from: { color: '#ffffff', width: 3 },
  to: { color: '#35c8bc', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

//    var value = Math.round(circle.value() * 100);
//    if (value === 0) {
//      circle.setText('');
//    } else {
//      circle.setText(value + '%');
//    }

  }
});
//bar3.text.style.fontFamily = '"Titillium Web", Helvetica, sans-serif';
//bar3.text.style.fontSize = '40px';

bar3.animate(0.70);  // Number from 0.0 to 1.0
//font-family: 'Titillium Web', sans-serif;