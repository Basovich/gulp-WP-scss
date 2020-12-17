function test() {
    const links = document.querySelectorAll('.subtitle__link');

    links.forEach(function (link) {
        console.log(link.closest('.subtitle'));
    })


};

export { test};