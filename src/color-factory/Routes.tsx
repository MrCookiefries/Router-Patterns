import { Redirect, Route, Switch } from "react-router-dom";
import ColorDetail from "./ColorDetail";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

type RoutesProps = {
    colors: IColor[];
    addColor: any;
}

const Routes = ({colors, addColor}: RoutesProps) => (
    <Switch>
        <Route exact path="/colors">
            <ColorList addColor={addColor} colors={colors} />
        </Route>
        <Route exact path="/colors/new">
            <NewColorForm />
        </Route>
        <Route exact path="/colors/:color">
            <ColorDetail colors={colors} />
        </Route>
        <Redirect to="/colors"/>
    </Switch>
);

export default Routes;
