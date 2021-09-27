function CakeCard({cake, setSelectedCake}) {

    return (
        <div onClick={() => setSelectedCake(cake)}>
            <h1>Flavor:{cake.flavor}</h1>
            <p>Size:{cake.size}</p>
            <p>Price:{cake.price}</p>
        </div>
    );
}

export default CakeCard;