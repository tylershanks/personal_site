import { Box, Fade, IconButton, keyframes, Modal, Zoom } from '@mui/material'
import React, { useState } from 'react'
import { SvgIcon as MuiSvgIcon, SvgIconProps, styled } from '@mui/material';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import './InitialLoadAnimation.css'

function InitialLoadAnimation() {

    const [loadScreenVisible, setLoadScreenVisible] = useState(true)
    const [logoVisible, setLogoVisible] = useState(true)
    const [outlineVisible, setOutlineVisible] = useState(true)
    const [outlineVisible2, setOutlineVisible2] = useState(false)

    // sets the overlay on initial page load and makes it disappear after a time
    const runPageTransition = () => {
        setLoadScreenVisible(false)
    }
    setTimeout(runPageTransition, 2000)

    const runLogoTransition = () => {
        setLogoVisible(false)
    }
    setTimeout(runLogoTransition, 2000)

    const runOutlineTransition = () => {
        setOutlineVisible(false)
    }
    setTimeout(runOutlineTransition, 4000)
    
    const runOutlineTransition2 = () => {
        setOutlineVisible2(true)
    }
    setTimeout(runOutlineTransition2, 2000)

    //my logo
    const SvgIcon = styled(MuiSvgIcon, {
        name: 'MyLogo',
        shouldForwardProp: (prop) => prop !== 'fill',
    })<SvgIconProps>(() => ({
    }));
    SvgIcon.defaultProps = {
        fillOpacity: '100%',
        viewBox: '0 0 24 24',
        focusable: 'true',
        'aria-hidden': 'true',
    }

    
    const SvgIcon2 = styled(MuiSvgIcon, {
    })<SvgIconProps>(() => ({
    }));
    SvgIcon2.defaultProps = {
        fillOpacity: '0%'
    }

    const MyLogo: React.FunctionComponent<SvgIconProps> = (props) => {
        return (
                <SvgIcon {...props}>
                    <path d="M1.021 4.331c.009.048.21.846.444 1.779l.423 1.695 2.493.009 2.493.006.018.279c.009.15.093 3.186.186 6.741.093 3.555.171 6.468.171 6.468.024.021 3.57 1.692 3.576 1.686.003-.006-.093-3.363-.213-7.464-.12-4.101-.219-7.533-.222-7.629l0-.171 1.05 0c.579 0 1.05.009 1.05.021 0 .015-.081.165-.18.339-.354.615-.399.828-.402 1.83-.003.774.018.984.15 1.491.273 1.059.843 1.749 1.656 2.016.324.105.639.132 1.089.093.579-.048.96-.129 1.602-.345.69-.231 1.101-.324 1.485-.327.339-.003.486.051.714.264.231.216.315.432.33.858.012.297.003.372-.054.537-.216.645-.939 1.287-2.193 1.95-1.089.573-2.739 1.173-3.834 1.389l-.333.063 0 2.502 0 2.499.279-.147c.15-.081.633-.306 1.071-.498 2.256-.993 3.291-1.5 4.374-2.148 3.015-1.806 4.545-3.822 4.539-5.994 0-.606-.072-1.026-.276-1.635-.495-1.488-1.578-2.565-2.913-2.904-.219-.054-.303-.06-.684-.045-.24.012-.576.045-.75.078-.174.033-.498.093-.72.135-.222.039-.549.09-.726.108-.762.081-1.146-.129-1.221-.669-.078-.558.162-1.026.693-1.35l.189-.114 1.02.015c.561.009 1.878.027 2.928.036l1.908.018.06-.102c.192-.324.534-1.311.873-2.517.114-.402.219-.777.231-.831l.021-.096-11.208 0-11.208 0 .021.081z" />
                </SvgIcon>
            );
    };

    const SvgHexagon: React.FunctionComponent<SvgIconProps> = (props) => {
        return (
                <SvgIcon2 {...props}>
                    <path d="M12.25 3.75 19.178 7.75 19.178 15.75 12.25 19.75 5.322 15.75 5.322 7.75Z" />
                </SvgIcon2>
            );
    };
    
    

  return (
    <Fade in={loadScreenVisible} appear={false} timeout={1000} mountOnEnter unmountOnExit>
        <Box height='100vh' width='100vw' 
            sx={{ 
                position: 'fixed',
                zIndex: 'tooltip', 
                bgcolor: 'white', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <Fade in={logoVisible} timeout={1500}>
                <IconButton color='inherit' sx={{ position: 'fixed' }}>
                    <MyLogo sx={{ fontSize: 140, position: 'fixed' }}/>
                </IconButton>
            </Fade>
            {/* <Fade in={outlineVisible} timeout={1000}>
                <IconButton color='inherit' sx={{ position: 'fixed' }}>
                    <SvgHexagon className='hexagon' sx={{ fontSize: 280, position: 'fixed' }} />
                </IconButton>
            </Fade>
            
            <Fade in={outlineVisible2}>
                <IconButton color='inherit' sx={{ position: 'fixed' }}>
                    <SvgHexagon className='hexagon2' sx={{ fontSize: 280, position: 'fixed' }} />
                </IconButton>
            </Fade> */}

        </Box>
    </Fade>
  )
}

export default InitialLoadAnimation