function loadBinaryFile() {
    const fileElement = document.querySelector('#binaryFile');

    if (fileElement.files.length !== 0 && fileElement.files[0].type.match(/image.*/)) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.querySelector('#imageHolder').src = e.target.result;
        };
        reader.onerror = (e) => {
            document.queryselector('#errorMsg').innerText = 'Something went wrong loading the file: '+ e;
        };
        reader.readAsDataURL(fileElement.files[0]);
    } else {
        document.querySelector('#errorMsg').innerText = 'Only image files please';
    }
}