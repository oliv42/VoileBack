const tempoUrl = [
    {
      name: 'Arcus_Rs',
      urls: [
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336782/paraglider/Arcus_Rs/rb4mfbzklhkpwlakmjvk.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336783/paraglider/Arcus_Rs/d0qeel4sueth4blclt7l.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336784/paraglider/Arcus_Rs/ijubgyoatpro0xkvwhit.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336784/paraglider/Arcus_Rs/vsvko94jswawjt2erfdf.jpg'
      ]
    },
    {
      name: 'Coden_Pro',
      urls: [
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336782/paraglider/Coden_Pro/mms4bvqwbyebfqa9oqci.jpg'
      ]
    },
    {
      name: 'Tonic_2',
      urls: [
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336782/paraglider/Tonic_2/llglvr9quzf1qcbtxngp.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336783/paraglider/Tonic_2/dmtgtz23e4cicjxn3t6k.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336783/paraglider/Tonic_2/mofmzdyty6fu72zeswgk.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336784/paraglider/Tonic_2/eahlsbll41uxog6kdlgc.jpg',
        'http://res.cloudinary.com/daqwgsko2/image/upload/v1675336785/paraglider/Tonic_2/asi0cbno4ehryitlphcl.jpg'
      ]
    }
  ];



const seedingPhoto = tempoUrl.reduce( (accu,urlsImages) => {
    // (null,null,null,null,null,null,4)
    const idValue = {
        Arcus_Rs : 2,
        Coden_Pro : 3,
        Tonic_2 : 1
    }
    let sqlEntry = '('

    for (let i=0; i < 6; i++) {
        urlsImages.urls[i] ? sqlEntry += urlsImages.urls[i] +',\n' : sqlEntry += 'null,';
    }
     sqlEntry += `${idValue[urlsImages.name]})\n`


    return accu += sqlEntry
}, '')

console.log(seedingPhoto);
