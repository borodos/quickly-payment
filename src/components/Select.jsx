import "../style/Select.css";
import Arrow from "../../src/Arrow.svg";
import ArrowWhite from "../../src/ArrowWhite.svg";
import Button from "./Button";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Select = ({ className, contained, text, array }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectText, setSelectText] = useState("");

  return (
    <div
      className={clsx("select", className, {
        "select-contained": contained,
      })}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='select__text'>
        <span>{selectText || text}</span>
        <img src={contained ? ArrowWhite : Arrow} alt='Icon' />
      </div>
      <div
        className={`${contained ? "select__list select__list--contained" : "select__list"} ${
          isOpen ? (contained ? "select__list--open-contained" : "select__list--open") : "hidden"
        }`}
      >
        {array
          ? array.map((value, index) => (
              <div
                className={`${contained ? "contained-list-element" : "select__list-element"}`}
                key={`${index}-${value}`}
                onClick={() => setSelectText(value)}
              >
                {contained ? (
                  <>
                    <li>{value}</li>
                    <Button
                      className='select__button'
                      contained
                      onClick={(value) => setSelectText(value)}
                      type='button'
                    >
                      Make Payment
                    </Button>
                  </>
                ) : (
                  value
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Select;
