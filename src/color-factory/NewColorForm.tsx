import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = () => {
    const initialState: IColor = {
        color: "#000000"
    };
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(evt: SyntheticEvent) {
        evt.preventDefault();
        history.push("/colors", formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pick your color!
                <input
                    type="color"
                    required
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">
                Create
            </button>
        </form>
    );
};

export default NewColorForm;
