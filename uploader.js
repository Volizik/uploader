function Uploader(obj) {

    this.input = document.querySelector(obj.input);
    const parent = document.querySelector(obj.parent);
    const block = document.querySelector(obj.blockClass);
    const imageSelector = obj.imageSelector || null;
    const imageNameSelector = obj.imageNameSelector || null;
    const imageWeightSelector = obj.imageWeightSelector || null;
    const imgTypeSelector = obj.imgTypeSelector || null;

    const arr = [];

    parent.innerHTML = '';

    this.input.onchange = function (event) {
        const files = event.target.files;

        for (let i = 0, f; i < files.length; i++) {
            f = files[i];
            if (!f.type.match('image.*')) continue;
            const reader = new FileReader();
            reader.onloadend = (function (file) {
                return function (e) {
                    arr.push({
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        lastModifiedDate: file.lastModifiedDate,
                        img: e.srcElement.result
                    })
                }
            })(files[i]);
            reader.readAsDataURL(f);
        }

        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                const _block = block.cloneNode(true);
                const img = _block.querySelector(imageSelector) || null;
                const name = _block.querySelector(imageNameSelector) || null;
                const size = _block.querySelector(imageWeightSelector) || null;
                const type = _block.querySelector(imgTypeSelector) || null;
                img.setAttribute('src', arr[i].img);
                name.innerText = arr[i].name;
                size.innerText = arr[i].size + 'kb';
                type.innerText = arr[i].type;
                parent.appendChild(_block);
            }
        }, 200)

    };






}