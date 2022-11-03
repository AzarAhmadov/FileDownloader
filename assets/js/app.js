const input = document.querySelector('.input');
const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fechFiles(input.value)
    downloadBtn.innerHTML = 'Downloading file...'
})

async function fechFiles(url) {
    const Link = await fetch(url);
    const data = await Link.blob();
    let tempUrlLink = URL.createObjectURL(data)
    let aTag = document.createElement('a');
    aTag.href = tempUrlLink;
    aTag.download = url.replace(/^.*[\\\/]/, "");
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove()
    URL.revokeObjectURL(tempUrlLink);
    downloadBtn.innerHTML = 'Download file...'
}