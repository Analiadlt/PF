import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginReset } from "../redux/actions";

export default function ProfileHome() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const userLogeado = useSelector((state) => state.userLogueado);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {}, [userLogeado]);
  let cambiarLogeo = () => {
    dispatch(loginReset());
  };

  return (
    <div classname="foto">
      <React.Fragment>
        <Box
          sx={{ display: "block", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              /* sx={{ ml: 2 }} */
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  fontSize: "2.5rem",
                  backgroundColor: "#f8bd279d",
                  ":hover": "rgba(0, 0, 0)",
                }}
              >
                {userLogeado !== [] ? userLogeado.nickName?.charAt(0) : "I"}
              </Avatar>
            </IconButton>
          </Tooltip>
          <p className="log-usuario">
            {userLogeado.nickName ? userLogeado.nickName : "Invitado"}
          </p>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            Typography: {
              fontSize: "2rem",
            },
            sx: {
              overflow: "visible",
              fontWeight: "5rem",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {userLogeado.nickName ? (
            <Link to={`/Detail/${userLogeado.id}`}>
              <MenuItem>
                <Avatar />{" "}
                <p className="menu" style={{ paddingRigth: "20px" }}>
                  {" "}
                  Mi Perfil{" "}
                </p>
              </MenuItem>
            </Link>
          ) : (
            <Link to="/Login">
              <MenuItem>
                <Avatar /> <p className="menu">Iniciar Sesion</p>
              </MenuItem>
            </Link>
          )}
          {userLogeado.nickName ? (
            <Link to={"/"}>
              <MenuItem>
                <Avatar />{" "}
                <p
                  className="menu"
                  onClick={cambiarLogeo}
                  style={{ paddingRigth: "20px" }}
                >
                  {" "}
                  Cerrar Sesion{" "}
                </p>
              </MenuItem>
            </Link>
          ) : (
            <Link to="/Registro">
              <MenuItem fontSize="2rem">
                <Avatar /> <p className="menu"> Crear Cuenta </p>
              </MenuItem>
            </Link>
          )}

          <Divider />
          <MenuItem fontSize="2rem">
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <p className="setting"> Settings </p>
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}
