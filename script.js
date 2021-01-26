
    import VTTConverter from 'srt-webvtt';

    (function localFileVideoPlayer() {
        const player = new Plyr('#player', { captions: { active: true }});
        const URL = window.URL || window.webkitURL

        const inputNode = document.getElementById('video-upload');
        const subNode = document.getElementById('subtitle-upload');
        const subTrack = document.getElementById('sub');

        const playSelectedFile = function (event) {
            var file = this.files[0];
            var videoNode = document.querySelector('video');

            var fileURL = URL.createObjectURL(file);
            videoNode.src = fileURL;
        }

        const useSubtitle = function (e) {

            const vttConverter = new VTTConverter(this.files[0]);
            vttConverter.getURL()
                .then((url) => {

                    subTrack.src = url;
                })
        }

        inputNode.addEventListener('change', playSelectedFile, false);
        subNode.addEventListener('change', useSubtitle, false);
    })()
    