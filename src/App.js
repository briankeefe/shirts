import React from "react";
import clsx from "clsx";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import {
	faTshirt,
	faShoppingCart,
	faHome,
	faQuoteRight
} from "@fortawesome/free-solid-svg-icons";
import { grey } from "@material-ui/core/colors";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import Shirts from "./ShirtsPage";
import Cart from "./Cart";
import Paragraphs from "./Paragraphs";
import GetQuote from "./GetQuote";
import "./style/style.scss";
import Splash from "./Splash";

library.add(faTshirt, faShoppingCart, faHome, faQuoteRight);
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

export default function MiniDrawer() {
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
					<FontAwesomeIcon className="faicon" icon="home" />
				</Link>
			);
		} else if (index === 1) {
			return (
				<Link className="link" to="shirts">
					<FontAwesomeIcon className="faicon" icon="quote-right" />
				</Link>
			);
		} else {
			return (
				<Link className="link" to="/cart">
					<FontAwesomeIcon className="faicon" icon="shopping-cart" />
				</Link>
			);
		}
	};

	return (
		<Router>
			<CssBaseline />
			<div className={classes.root}>
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
						<Typography variant="h3" noWrap>
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
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route exact path="/" component={Splash} />
						<Route path="/shirts" component={GetQuote} />
						<Route path="/cart" component={Cart} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}
