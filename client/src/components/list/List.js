import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { style } from './List.style'

const List = () => {
  return (
    <Container>
        <Box>
            <TextField 
                fullWidth  
                id="fullWidth" 
                placeholder='Search music'
                focused
            />
            <Box sx={style.list}>
                <Box sx={style.list.item}>
                    <img src='https://lh3.googleusercontent.com/E-PxYbIjWegyZdl9ni0fWLjXfKUkvHVWcJ9eBpdIe383aFK7TG6aDrcXsnTboEWqpeKkmUsNV4rY_PQ=w544-h544-l90-rj'/>
                    <p>
                        Presenting Владимир Высоцкий
                    </p>
                </Box>
            
            </Box>
        </Box>
    </Container>
  )
}

export default List