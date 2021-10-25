import { Redirect, useParams } from "react-router-dom";

const ColorDetail = ({colors}: any) => {
    let color = useParams<any>().color;
    if (color) color = color.replace(/s/i, "#");
    if (colors.every((c: any) => c !== color)) return <Redirect to="/colors" />
    
    return (
    <div>
        <h1 style={{color: color}}>The color {color}, looks like this.</h1>
    </div>
);
};

export default ColorDetail;
