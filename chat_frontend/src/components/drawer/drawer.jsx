import { Box, Button, Input } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';



function SideDrawer(props) {
    const [state, setState] = React.useState({   
        left: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
  
    
   

  return (
    <>
    <div>
    {[''].map((anchor) => (
        <React.Fragment key={anchor}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}  style={{ backgroundColor:"rgb(133 53 118)"}} height={'12vh'} >
            <Button variant='ghost' onClick={toggleDrawer(anchor, true)}>{anchor}
            <SearchIcon/> <Input style={{border:"none", padding:"2px", marginRight:"10px" ,color:"white"}} placeholder='search user'> </Input>
            </Button>
            <div style={{marginRight:"120px", marginLeft:"20px"}}>
            <h1 style={{fontFamily:"fantasy", fontWeight:"bold" , color:"rgb(79 10 93)"}}>SANDESHA</h1>
            </div>
            <div style={{marginRight:"30px", marginTop:"10px"}}>
            <Avatar  />
            </div>
            <Drawer style={{display:"flex" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
          <b style={{margin:"25px 50px 0px", color:"darkmagenta", fontFamily:"cursive"}}> Search User</b>
          <Box display={'flex'} paddingBottom={2}>
           <Input placeholder='Search by name' style={{margin:"20px 20px 20px"}} />
           <Button style={{ backgroundColor:"lightgray", height:"30px", margin:"18px 10px 10px -10px"}}>GO</Button>
           </Box>
          </Drawer>
        </Box>
        </React.Fragment>
      ))}
        <div>

          
         
        
    </div>
        

    </div>
    </>
  )
}

export default SideDrawer;