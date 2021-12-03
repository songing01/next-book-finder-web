import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Fonts from "../theme/fonts";
import { ResultContextProvider } from "../src/context/context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./index";
import SearchResultPage from "./SearchResultPage";
import BookDescription from "./bookDescriptions/[bookDescription]";
export default function App({ Component }) {
    return (
        <ResultContextProvider>
            <ChakraProvider theme={theme}>
                <Component>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/SearchResultPage"
                                component={SearchResultPage}
                            />
                            <Route
                                exact
                                path="/bookDescriptions/:title"
                                component={BookDescription}
                            />
                        </Switch>
                    </Router>
                </Component>
            </ChakraProvider>
        </ResultContextProvider>
    );
}
