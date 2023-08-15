import "../style/Select.css";
import Button from "./Button";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const Select = ({ className, contained, text, array, language, inForm, setValue, bank, errors, touched }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectText, setSelectText] = useState("");
  const [selectBank, setSelectBank] = useState("");

  const [selectIcon, setSelectIcon] = useState("");
  const ref = useDetectClickOutside({ onTriggered: () => setIsOpen(false) });

  useEffect(() => {
    if (inForm) {
      setValue("bank", selectBank);
    }
  }, [selectBank]);

  useEffect(() => {
    if (inForm) {
      setValue("country", selectText);
    }
  }, [selectText]);

  const setText = (value) => {
    if (value.src) {
      setSelectIcon(value.src);
    } else {
      setSelectText(value);
    }
  };

  return (
    <div
      className={clsx("select", className, {
        "select-contained": contained,
        "select-bank": bank,
        "select-error": errors?.country && touched?.country && !bank,
        "select-error-bank": errors?.bank && touched?.bank && bank,
      })}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      <div className='select__text'>
        {selectIcon ? <img src={selectIcon} alt='Icon' /> : <span>{selectText || selectBank || text}</span>}
        {contained ? (
          <svg width='26' height='8' viewBox='0 0 26 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1.25L13 6.75002L25.5 1.25' stroke='white' stroke-width='2' />
          </svg>
        ) : (
          <svg width='26' height='9' viewBox='0 0 26 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1.5L13 7.00002L25.5 1.5' stroke='black' stroke-width='2' />
          </svg>
        )}
      </div>
      <div
        className={`${contained ? "select__list select__list--contained" : "select__list"} ${
          isOpen ? (contained ? "select__list--open-contained" : "select__list--open") : "hidden"
        } ${language ? (isOpen ? "language-list--open" : "language-list") : ""}`}
      >
        {array
          ? array.map((value, index) =>
              value.text ? (
                <div
                  className={`${contained ? "contained-list-element" : "select__list-element"} language-element`}
                  key={`${index}-${value}`}
                  onClick={() => setText(value)}
                >
                  {contained ? (
                    <div className='language'>
                      <span>{value.text}</span>
                      <img src={value.src} alt='Icon' />
                    </div>
                  ) : (
                    value
                  )}
                </div>
              ) : (
                <div
                  className={`${contained ? "contained-list-element" : "select__list-element"}`}
                  key={`${index}-${value}`}
                  onClick={() => (bank ? setSelectBank(value) : setSelectText(value))}
                >
                  {contained ? (
                    <>
                      <li>{value}</li>
                      <Button className='select__button' contained onClick={(value) => setSelectBank(value)} type='button'>
                        Make Payment
                      </Button>
                    </>
                  ) : (
                    value
                  )}
                </div>
              )
            )
          : null}
      </div>
    </div>
  );
};

export default Select;
