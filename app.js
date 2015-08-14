var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

// ffmpeg.ffprobe('media/sintel.mp4', function(err, metadata) {
//     console.dir(metadata);
// });

ffmpeg('media/sintel.mp4')
  .seekInput('0:10')
  .output('out.mp4')
  .duration("0:00.910")
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .run();

/* save */
/*
ffmpeg('/path/to/file.avi')
  .videoCodec('libx264')
  .audioCodec('libmp3lame')
  .size('320x240')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .save('/path/to/output.mp4');
*/

/* example running */
/*
ffmpeg('/path/to/file.avi')
  .output('screenshot.png')
  .noAudio()
  .seek('3:00')

  .output('small.avi')
  .audioCodec('copy')
  .size('320x200')

  .output('big.avi')
  .audioCodec('copy')
  .size('640x480')

  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .run();

*/


/*example  concat */
/*
ffmpeg('/path/to/part1.avi')
  .input('/path/to/part2.avi')
  .input('/path/to/part2.avi')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Merging finished !');
  })
  .mergeToFile('/path/to/merged.avi', '/path/to/tempDir');
*/




