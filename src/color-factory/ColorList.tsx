import { Link, useLocation } from "react-router-dom";

type ColorListProps = {
    colors: IColor[];
    addColor: any;
}

const ColorList = ({
    colors, addColor
}: ColorListProps) => {
    const locationState = useLocation<IColorO>().state;
    if (locationState?.color) addColor(locationState);

    return (
        <section>
            <h1>Welcome to the color factory!</h1>
            <Link to="/colors/new">
                <button type="button">
                    Create a color
                </button>
            </Link>
            <hr />
            {colors.length
                ? colors.map(c => <Link key={`${c}`} to={`/colors/${c}`.replace(/#/i, "s")}>{c}</Link>)
                : <p>Sorry, you have no saved colors yet.</p>
            }
        </section>
    );
};

export default ColorList;
