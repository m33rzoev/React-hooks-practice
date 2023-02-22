import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const fact = factorial(100);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result: {fact}</p>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
