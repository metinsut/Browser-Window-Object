export const pageScroolDetail = (dom) => {

    let docViewTop = window.scrollY || window.pageYOffset;
    let docViewBottom = docViewTop + window.innerHeight;

    let elemTop = dom.offsetTop;
    let elemOffSetHeight = dom.offsetHeight > window.innerHeight ? window.innerHeight - 100 : dom.offsetHeight;
    let elemBottom = elemTop + elemOffSetHeight;

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
        // console.log(dom)
    }
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));


};