document.addEventListener('DOMContentLoaded', function () {
    console.log('app is loaded');

    const uploader = new Uploader({
        input: '#uploaderInput',
        parent: '.uploaderParent',
        blockClass: '.uploaderBlock',
        imageSelector: '.uploaderImg',
        imageNameSelector: '.uploaderImgName',
        imageWeightSelector: '.uploaderImgSize',
        imgTypeSelector: '.uploaderImgType'
    });
});