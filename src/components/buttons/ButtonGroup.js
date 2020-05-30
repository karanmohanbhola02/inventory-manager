import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MaterialButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import './ButtonGroup.css';

class ButtonGroup extends React.Component {
    state = {
        open: false
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleClose = (event) => {
        if (this.anchorRef && this.anchorRef.contains(event.target)) {
            return;
          }
      
          this.handleToggle(false);
    }

    handleMenuItemClick = (option, index) => {
        this.props.handleButtonItemClick(option, index);
        this.handleToggle(false);
    }

    setAnchorRef = (ref) => {
        this.anchorRef = ref;
    }

    render() {
        const { open } = this.state;
        const { title, options } = this.props;
        return (
            <Grid container direction="column" alignItems="flex-end">
                <Grid item xs={12}>
                    <MaterialButtonGroup variant="contained" color="primary" ref={this.setAnchorRef}>
                        <Typography className="buttonGroup-container">{title}</Typography>
                        <Button
                            color="primary"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={this.handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </MaterialButtonGroup>
                    <Popper open={open} anchorEl={this.anchorRef} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList id="split-button-menu">
                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option.id}
                                                    onClick={() => this.handleMenuItemClick(option, index)}
                                                >
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Grid>
            </Grid>
        );
    }
}

export default ButtonGroup;