import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import {
	faTshirt,
	faShoppingCart,
	faHome
} from "@fortawesome/free-solid-svg-icons";
import { grey } from "@material-ui/core/colors";

library.add(faTshirt, faShoppingCart, faHome);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		backgroundColor: grey[700],
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: "none"
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap"
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

function Navigation() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const iconSwitch = index => {
		if (index === 0) {
			return (
				<Link className="link" to="/">
					<FontAwesomeIcon icon="home" />
				</Link>
			);
		} else if (index === 1) {
			return (
				<Link className="link" to="shirts">
					<FontAwesomeIcon icon="tshirt" />
				</Link>
			);
		} else {
			return (
				<Link className="link" to="/cart">
					<FontAwesomeIcon icon="shopping-cart" />
				</Link>
			);
		}
	};
	return (
		<Box>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						INK AHEAD
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open
					})
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Home", "Shirts", "Cart"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{iconSwitch(index)}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
		</Box>
	);
}

export default Navigation;
