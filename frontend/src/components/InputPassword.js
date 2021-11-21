// ** React Imports
import { Fragment, useState } from "react";

import classnames from "classnames";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Label,
} from "reactstrap";

const InputPasswordToggle = (props) => {
  // ** Props
  const {
    label,
    hideIcon,
    showIcon,
    visible,
    className,
    htmlFor,
    placeholder,
    iconSize,
    inputClassName,
    ...rest
  } = props;

  const [inputVisibility, setInputVisibility] = useState(visible);

  const renderIcon = () => {
    if (inputVisibility === false) {
      return hideIcon ? hideIcon : <div>Show</div>;
    } else {
      return showIcon ? showIcon : <div>Hide</div>;
    }
  };

  return (
    <Fragment>
      {label ? <Label for={htmlFor}>{label}</Label> : null}
      <InputGroup
        className={classnames({
          [className]: className,
        })}
      >
        <Input
          type={inputVisibility === false ? "password" : "text"}
          placeholder={placeholder ? placeholder : "············"}
          className={classnames({
            [inputClassName]: inputClassName,
          })}
          /*eslint-disable */
          {...(label && htmlFor
            ? {
                id: htmlFor,
              }
            : {})}
          {...rest}
          /*eslint-enable */
        />
        <InputGroupAddon
          addonType="append"
          onClick={() => setInputVisibility(!inputVisibility)}
        >
          <InputGroupText className="cursor-pointer">
            {renderIcon()}
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Fragment>
  );
};

export default InputPasswordToggle;
