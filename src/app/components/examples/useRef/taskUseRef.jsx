import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const TaskUseRef = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value = "text";
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "150px";
        inputRef.current.style.height = "80px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Решение упражнения
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Input
            </label>
            <input ref={inputRef} type="email" className="form-control" id="email" />
            <button className="btn btn-primary" onClick={handleClick}>Текст</button>
            <button className="btn btn-secondary m-lg-1" onClick={handleClickWidth}>Изменить ширину и высоту</button>
        </CardWrapper>
    );
};

export default TaskUseRef;
