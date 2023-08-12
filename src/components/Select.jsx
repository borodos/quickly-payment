import "../style/Select.css";
import Button from "./Button";
import clsx from "clsx";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const Select = ({ className, contained, text, array }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectText, setSelectText] = useState("");
  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  return (
    <div
      className={clsx("select", className, {
        "select-contained": contained,
      })}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      <div className='select__text'>
        <span>{selectText || text}</span>
        {contained ? (
          <svg
            width='26'
            height='8'
            viewBox='0 0 26 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1.25L13 6.75002L25.5 1.25' stroke='white' stroke-width='2' />
          </svg>
        ) : (
          <svg
            width='26'
            height='9'
            viewBox='0 0 26 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1 1.5L13 7.00002L25.5 1.5' stroke='black' stroke-width='2' />
          </svg>
        )}
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
