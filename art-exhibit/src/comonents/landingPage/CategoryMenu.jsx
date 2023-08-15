import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack, Typography } from "@mui/material";

const CategoryMenu = ({ typographyStyles }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack onClick={handleClick} alignItems={'center'} direction={'row'} style={{cursor: 'pointer'}}>
        <Typography  style={typographyStyles}>
          Category
        </Typography>
        <KeyboardArrowDownIcon style={{ transition: 'transform 0.3s ease-in-out', transform: anchorEl && 'rotate(180deg)', color: '#C786FF', marginTop: 2}}/>
      </Stack>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          More
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CategoryMenu;
