import React from "react";
import PropTypes from "prop-types";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import SettingsIcon from "@mui/icons-material/Settings";
import Grid from "@mui/material/Grid2";
import Setting from "./Setting";
import image from "../assets/imge.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0
import Box from "@mui/material/Box"; // Import Box for layout

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "setting",
    title: "Setting",
    icon: <SettingsIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Services",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Static Site",
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/setting" && <Setting/>}
      {pathname === "/dashboard" && <h1>Dashboard Page</h1>}
      {pathname === "/orders" && <h1>Orders Page</h1>}
      {pathname === "/reports" && <h1>Reports Page</h1>}
      {pathname === "/sales" && <h1>Sales Page</h1>}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default function DashBoard(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img className="rounded-full" src={image} alt="MUI logo" />
        ),
        title: "HostStream",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <DemoPageContent pathname={router.pathname} />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}