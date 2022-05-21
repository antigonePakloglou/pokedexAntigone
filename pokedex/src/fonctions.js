//recupération des images
export function importImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  
  export function concatImgName(id) {
      let img;
    //concatenation du nom des images
    switch (id.toString().length) {
        case 1:
            img = '00'+id.toString()+'.png';  
            break;
        case 2:
            img = '0'+id.toString()+'.png';  
            break;
        case 3:
            img = id.toString()+'.png'; 
            break;
        default:
            img = '003.png';
    }
    return img;
  }
