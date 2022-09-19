import React from 'react'
import {Box, IconButton, FormControl, OutlinedInput,InputLabel, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  setFilter: any,
  filter: object
};

const SearchInput:React.FC<Props> = ({filter, setFilter}) => {
  return (
    <Box
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, my: 3 }}
    >
      <FormControl sx={{width: '35ch' }} variant="outlined" size='small'>
          <InputLabel htmlFor="outlined-adornment-search">Поиск....</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            onChange={(e)=>{
              return setFilter({...filter, query: e.target.value})
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle search visibility"
               
                  edge="end"
                >
                    <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="search"
          />
        </FormControl>
      
    </Box>
  )
}

export default SearchInput