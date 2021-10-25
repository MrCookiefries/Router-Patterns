import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import dogs from "./dogs";

interface Keyable {
    [key: string]: any;
}

const DogList = () => {
    const {name}: Keyable = useParams();
    const dogExists = name && dogs.find(d => d.name.toLowerCase() === name);

    return (
        <section className="DogList">
            <h1>List of Dogs</h1>
            {dogExists && <DogDetails data={dogExists} />}
        </section>
    );
};

export default DogList;
