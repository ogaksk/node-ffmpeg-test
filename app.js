var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

ffmpeg.ffprobe('media/sintel.mp4', function(err, metadata) {
    console.dir(metadata);
});