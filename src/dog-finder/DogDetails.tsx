type DogDetailsProps = {
    data: DogData;
}

const DogDetails = ({
    data: {name, age, src, facts}
}: DogDetailsProps) => (
    <figure>
        <h2>{name} - {age} years old</h2>
        <img src={src} alt={name} />
        <ul>
            {facts.map(f => (
                <li key={f}>
                    {f}
                </li>
            ))}
        </ul>
    </figure>
);

export default DogDetails;
