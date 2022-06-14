import { useState, useEffect } from "react"

// Images crop function
export const crop= (imgobj, aspectRatio, maxwidth, maxheight)=>{
        const imgURL=URL.createObjectURL(imgobj);
        const outptimg = document.createElement("canvas");
        const inptimg= new Image();
        var imagetempURL;
        return new Promise((resolve, reject)=>{
        inptimg.src=imgURL;
        inptimg.onload=()=>{
            const inptwidth=inptimg.naturalWidth
            const inptheight=inptimg.naturalHeight
            const inptaspectRatio=inptwidth/inptheight
            let outptWidth = inptwidth;
            let outptHeight = inptheight;
            if(maxwidth&&maxheight&&maxwidth<=inptwidth&&maxheight<=inptheight){
                    outptWidth=maxwidth
                    outptHeight=maxheight
            }
            else{
            if (inptaspectRatio > aspectRatio) {
                outptWidth = inptheight * aspectRatio;
              } else if (inptaspectRatio < aspectRatio) {
                outptHeight = inptwidth / aspectRatio;
              }
            }
            // calculate the position to draw the image at
            const outptX = (outptWidth - inptwidth) * 0.5;
            const outptY = (outptHeight - inptheight) * 0.5;

      // create a canvas that will present the output image

      // set it to the same size as the image
      outptimg.width = outptWidth;
      outptimg.height = outptHeight;

      // draw our image at position 0, 0 on the canvas
      const ctx = outptimg.getContext("2d");
      ctx.drawImage(inptimg, outptX, outptY);
      imagetempURL=outptimg.toDataURL('image/jpeg', 0.6)
      imagetempURL?resolve(imagetempURL):reject(Error("Image file is not cropable"));
    };
});
}

// InfiniteScroll function
export const InfiniteScroll=(fetchMore)=>{
  var time=0

  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching){ 
      return
    };
    fetchMore(()=>{
      
    })
  }, [isFetching]);

  function handleScroll() {
    clearTimeout(time)
    time=setTimeout(()=>{
    if (!isMax){
    const {scrollTop, scrollHeight, clientHeight}=document.documentElement;
    if (scrollTop+clientHeight<=scrollHeight-10) return;
    setIsFetching(true);
  }
  }, 2000)
}
  return [isFetching, setIsFetching];
}

// Validation Function

export const validate=(typ,val)=>{
  if (typ==='e') {
      return  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
  }
  else if (typ==='p'){
      return /^[6-9]\d{9}$/gi.test(val)
  }
}
export const numCheck=(val)=>{
  
}


export const color = [
  
  '#FB5607',
  '#8338EC',
  '#540B0E',
  '#3A86FF',
  '#FF006E',
  '#2C6E49',
  '#9E2A2B',
  '#E09F3E',
  '#463F3A',
  '#E63946',
  '#FFBE0B',
  '#2a9d8f',
  '#e9c46a',
  '#F15BB5',
  '#e76f51',
  '#457B9D',
  '#8A817C',
  '#00F5D4',
  '#E0AFA0',
  '#9B5DE5',
  '#f4a261',
  '#FEE440',
  '#00BBF9',
  '#BCB8B1',
  '#9C89B8',
  '#E56B6F'
]