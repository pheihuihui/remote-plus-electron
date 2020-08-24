navigator.mediaDevices.getUserMedia({
    video: {
        height: 2160,
        width: 3840,
        resizeMode: 'contain'
    }
}).then(x => {
    let media = document.getElementById('camera') as HTMLMediaElement

    // physical: 3840 * 2160
    // windows scaling: 1.5
    // macos scaling: 23.7 inch / 27 inch

    media.style.height = '1264px'
    media.style.width = '2247px'
    media.srcObject = x
})