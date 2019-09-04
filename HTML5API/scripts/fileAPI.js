function loadTextFile() {
    const fileElement = document.querySelector('#textFile');

    if (fileElement.files.length !== 0 && fileElement.files[0].type.match(/text.*/)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.querySelector('#textArea').value = e.target.result;
        };
        reader.onerror = (e) => {
            document.queryselector('#textArea').value = 'Something went wrong loading the file';
        };
        reader.readAsText(fileElement.files[0], 'utf-8');
    } else {
        document.queryselector('#textArea').value = 'Only text files please';
    }
}