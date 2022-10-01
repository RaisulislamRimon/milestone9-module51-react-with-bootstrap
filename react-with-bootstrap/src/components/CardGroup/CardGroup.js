import React from "react";
import Card from "../Card/Card";

const cardGroup = () => {

    const products = [

        {
            id: 1,
            title: "Card Title 1",
            text: "Some quick example text to build on the card title and make up the bulk of the card content.",
        },
        {
            id: 2,
            title: "Card Title 2",
            text: "Some quick example text to build on the card title and make up the bulk of the card content.",
        },

        {
            id: 3,
            title: "Card Title 3",
            text: "Some quick example text to build on the card title and make up the bulk of the card content.",
        },

        {
            id: 4,
            title: "Card Title 4",
            text: "Some quick example text to build on the card title and make up the bulk of the card content.",
        },
    ];

    return (
        <div>
            <div className="card-group">
                {products.map((card) => (
                    <Card card={card}>

                    </Card>
                ))}
            </div>
        </div>
    );
};

export default cardGroup;
