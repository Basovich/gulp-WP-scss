function test() {
    const links = document.querySelectorAll('.subtitle__link');

    links.forEach(function (link) {
        console.log(link.closest('.subtitle'));
    })


    const arr = [2,3 [3, 3 [4, 5]]];
    const flatArr = arr.flat(2);
    console.log(flatArr);
}

export { test};