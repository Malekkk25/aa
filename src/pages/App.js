import './App.css';
import BaseCard from '../components/baseCard/BaseCard';
import SalesOverview from '../components/dashboard/SalesOverview';
import Tables from './Tables';
import { SidebarDataAdmin } from '../components/layouts/sidebar/SidebarDataAdmin';
import Sidebar from '../components/layouts/sidebar/SidebarAdmin';
import SidebarUser from '../components/layouts/sidebar/SidebarUser';
import Header from '../components/layouts/header/Header';
import FullLayout from '../components/layouts/FullLayout';
import SidebarAdmin from '../components/layouts/sidebar/SidebarAdmin';
import UserTable from './UserTable';
import createEmotionCache from '../createEmotionCache';
import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from '../theme/theme';
import ProductTable from './ProductTable';
import CategoryTable from './CategoryTable';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <Router>
    <CacheProvider value={emotionCache}>
     
      <Head>
        <title>Flexy NextJs Starter kit page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
     <Routes>
     <Route path='/' element={<Tables/>}/>
     <Route path='/User' element={<UserTable/>}/>
     <Route path='/Product' element={<ProductTable/>}/>
      <Route path='/Categories' element={<CategoryTable/>}/>
      </Routes>
       </FullLayout>
      </ThemeProvider>
    </CacheProvider>
    </Router>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
