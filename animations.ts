export const fadeInUp = {
    initial:{
      opacity:0,
      y:60
    },
    animate:{
      opacity:1,
      y:0
    },
  }

export const stagger = {
    initial:{

    },
    animate:{
        transition:{
            staggerChildren: 0.1,
        }
    },
  }

export const spring = {
    initial:{
        width:0
    },
    animate:{
        width:'auto',
        transition:{
            duration:0.4,
            type:'spring',
            damping:14,
            stiffness: 100,
        }
    }
}