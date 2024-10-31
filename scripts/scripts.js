const closeViewer=()=>{
    document.getElementById('viewer').style.display='none'
    document.getElementsByTagName('body')[0].style.overflow='visible'
}

const openViewer=(url)=>{
    document.querySelector('#viewer img').setAttribute('src',url)
    document.getElementsByTagName('body')[0].style.overflow='hidden'
    document.getElementById('viewer').style.display='block'
}