import { keyframes, styled } from "@stitches/react";

// Index Customs

export const Box = styled('div', {
    width: '100%'
});

export const AnimationTitle = keyframes({
    '0%': {
        color: '#8000FF'
    },
    '50%': {
        color: '#C58BFF'
    },
    '100%': {
        color: '#8000FF'
    }
});

export const Title = styled('h1', {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '10vmin',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    fontStyle: 'bold',
    marginTop: '15vmin',
    animation: `${AnimationTitle} 5s infinite`
});

export const Subtitle = styled('h2', {
    display: 'flex',
    justifyContent: 'center',
    color: '#C6C6C6',
    fontFamily: 'sans-serif',
    fontSize: '5vmin',
    background: 'linear-gradient(to right, #CFCFCF, #1E1E1E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '100'
});

export const BoxButton = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '17vmin'
});

export const LinkAuthor = styled('a', {
    display: 'flex',
    color: '#C6C6C6',
    marginTop: '15vmin',
    fontFamily: 'sans-serif',
    justifyContent: 'right',
    marginRight: '5vmin',
    fontWeight: '100',
    textDecoration: 'none'
})


// Calculator Customs

export const Img = styled('img', {
    display: 'flex',
    height: '100%',
    marginLeft: '2vmin'
});

export const BoxLogoNavbar = styled('div', {
    display: 'flex',
    alignContent: 'center'
});

export const Navbar = styled('nav', {
    display: 'flex',
    width: '100%',
    height: '10vmin',
    justifyContent: 'space-between'
});

export var BoxButtons = styled('div', {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    '@media(max-width : 600px)': {
        padding: '4vmin',
        gap: '2vmin'
    }
});

export const Button = styled('button', {
    backgroundColor: '#8000FF',
    border: 'none',
    width: '17%',
    height: '12vmin',
    borderRadius: '5px',
    color: 'white',
    transition: '0.3s',
    '&:hover': {
        backgroundColor: '#3d007a',
        border: '3px solid #8000FF',
        marginLeft: '5px'
    }
})

export const ContainerButtons = styled('div', {
    width: '72%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width : 600px)': {
        width: '100%'
    },
    '@media only screen and (min-width: 768px) and (max-width : 1024px)': {
        width: '85%'
    }
})

export const BoxInput = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vmin',
    padding: '10vmin',
    '@media (max-width:600px)': {
        padding: '10vmin 4vmin',
    }
});

export const Input = styled('input', {
    backgroundColor: '#1E1E1E',
    height: '15vmin',
    width: '85%',
    border: 'none',
    borderRadius: '5px',
    color: '#CFCFCF',
    fontSize: '4vmin',
    fontFamily: 'sans-serif',
    fontWeight: '700',
    paddingLeft: '5vmin',
    '@media (max-width:600px)': {
        width: '100%',
    }
})

export const ButtonWrap = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: '15vmin',
    backgroundColor: '#1E1E1E',
    borderRadius: '5px',

    gap: '2vmin',
    '@media (max-width : 600px)': {
        width: '100%'
    },
    '@media only screen and (min-width: 768px) and (max-width : 1024px)': {
        width: '100%'
    }
})

export const ButtonSubmit = styled('button', {
    width: '10%',
    height: '80%',
    backgroundColor: '#8000FF',
    border: 'none',
    color: 'white',
    borderRadius: '3px',
    transition: '0.3s',
    '&:hover': {
        backgroundColor: '#3d007a',
        border: '1px solid #8000FF',
        marginLeft: '1.5vmin'
    },
    '@media(max-width : 600px)': {
        width: '20%',
        marginRight: '2vmin'
    },
})

export const ImgOperationButton = styled('img', {
    width: '30%'
});

export const ImgSubmit = styled('img', {
    width: '50%'
});

export const BoxCalculation = styled('div', {
    width: '100%',
    height: '20vmin',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15vmin',
    '@media(max-width : 600px)': {
    }
});

export const OperationLabel = styled('label', {
    color: '#8000FF',
    fontFamily: 'sans-serif',
    fontSize: '5vmin',
    fontWeight: '900',
});

export const ContainerResults = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '5%',
});

export const BoxResult = styled('label', {
    display: 'flex',
    borderBottom: '5px solid #8000FF',
    width: '60%',
    fontSize: '7vmin',
    padding: '3vmin',
    fontFamily: 'sans-serif',
    fontWeight: '900',
    color: '#1E1E1E',
});

export var BoxClear = styled('btn', {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15vmin',
    height: '15vmin',
    borderRadius: '1vmin',
    backgroundColor: '#8000FF',
    //animation: `${opacityAnimation} 1s`,
    transition: '0.5s',
    '&:hover': {
        marginLeft: '3vmin',
        backgroundColor: '#440088',
        border: '2px solid #8000FF'
    },
    '@media (max-width : 600px)': {
        borderRadius: '5px'
    }
})

export const ImgClear = styled('img', {
    width: '10vmin',
    height: '10vmin'
});

export const opacityAnimation = keyframes({
    '0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '1'
    }
});

export const opacityReverseAnimation = keyframes({
    '0%': {
        opacity: '1'
    },
    '50%': {
        opacity: '0.5'
    },
    '100%': {
        opacity: '0'
    }
});

export const BoxValues = styled('div', {
    display: 'flex',
    width: '72%',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width : 600px)': {
        width: '90%'
    }
});