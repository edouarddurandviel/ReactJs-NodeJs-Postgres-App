import { useEffect, useRef, useState } from "react";
import {
  SelectedValue,
  SelectorCommand,
  SelectorHeader,
  SelectorLabel,
  SelectorList,
  SelectorListWrapper,
  SelectorStatus,
  SelectPlaceholder,
  InputError,
} from "./styles";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";

const Index = ({ control, data, name, label }: SelectorProps<any>) => {
  const {
    field,
    fieldState: { error },
  } = useController<any>({ name, control });

  const ref = useRef<any>(null);

  const [optionSate, setOption] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      {/* <input list="companies" id="company" name="company" />

      <datalist id="companies">
        <option value="Company">Company</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </datalist> */}

      <SelectPlaceholder>
        <SelectorLabel htmlFor="company">{label}</SelectorLabel>
        <SelectorHeader role="combobox" aria-expanded={open} ref={ref}>
          <SelectedValue
            tabIndex={0}
            auto-complete="off"
            aria-autocomplete="list"
            readOnly
            name={field.name}
            value={field.value !== "" ? field.value : "Select a value"}
            onFocus={() => {
              setOpen(true);
            }}
          />

          {open && (
            <SelectorListWrapper>
              {data &&
                data.map((option) => (
                  <SelectorList
                    role="option"
                    aria-checked={optionSate === option}
                    onClick={() => {
                      field.onChange(option);
                      setOpen(false);
                    }}
                    key={option}
                  >
                    {option}
                  </SelectorList>
                ))}
            </SelectorListWrapper>
          )}

          {field.value !== "" && (
            <SelectorStatus
              onClick={() => {
                field.onChange("");
                setOption(null);
              }}
            >
              X
            </SelectorStatus>
          )}

          {/* {spinner && "loader"} */}

          <SelectorCommand
            aria-label={open ? "Close options" : "Open options"}
            onClick={() => {
              setOpen((previous) => !previous);
              setOption(null);
            }}
          >
            {open ? "Close" : "Open"}
          </SelectorCommand>
        </SelectorHeader>

        {error && <InputError role="alert">{error.message}</InputError>}
      </SelectPlaceholder>
    </>
  );
};

interface SelectorProps<T extends FieldValues> {
  spinner: boolean;
  data: string[];
  name: Path<T>;
  control?: Control<T>;
  label?: string;
  type?: string;
  hidden?: boolean;
  style?: {};
}

export default Index;
