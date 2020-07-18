const player = videojs('vid1', {
    controlBar: {
        chaptersButton: false,
        liveDisplay: false,
        playbackRateMenuButton: false,
        subtitlesButton: false
    },
});
document.body.onkeydown = function (e) {
    if (e && e.keyCode == 32) {//播放 && 暂停
        e.preventDefault();//去除滚动
        if (player.paused()) {//判断视频是否暂停
            player.play();
        } else {
            player.pause();
        }
    } else if (e && e.keyCode == 37) {//后退
        var currTime = player.currentTime();
        player.currentTime(currTime - 5);
    } else if (e && e.keyCode == 39) {//前进
        var currTime = player.currentTime();
        player.currentTime(currTime + 5);
    } else if (e && e.keyCode == 38) {//增加音量
        var volume = player.volume();
        if (volume < 1) {
            player.volume(volume + 0.1);
        }
    } else if (e && e.keyCode == 40) {//降低音量
        var volume = player.volume();
        if (volume > 0) {
            player.volume(volume - 0.1);
        }
    }
}