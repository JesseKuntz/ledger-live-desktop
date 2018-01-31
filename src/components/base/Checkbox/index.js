// @flow

import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'

import Box from 'components/base/Box'
import Icon from 'components/base/Icon'

const bounce = keyframes`
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.7, 1.7);
  }

  100% {
    transform: scale(1, 1);
  }
`

const Base = styled(Box).attrs({
  align: 'center',
  justify: 'center',
  relative: true,
})`
  background-color: ${p => (p.checked ? p.theme.colors.blue : p.theme.colors.white)};
  box-shadow: 0 0 0 ${p => (p.checked ? 4 : 1)}px
    ${p => (p.checked ? p.theme.colors.cream : p.theme.colors.argile)};
  font-size: 7px;
  height: 19px;
  width: 19px;
  transition: all ease-in-out 0.1s;

  input[type='checkbox'] {
    bottom: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 10;
  }
`

const IconWrapper = styled(Icon).attrs({
  color: 'white',
})`
  animation: ${bounce} ease-in-out 0.5s;
`

type Props = {
  checked: boolean,
  onChange?: Function,
}

type State = {
  checked: boolean,
}

class Checkbox extends PureComponent<Props, State> {
  static defaultProps = {
    checked: false,
  }

  state = {
    checked: this.props.checked,
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      checked: nextProps.checked,
    })
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const { checked } = e.target

    this.setState({
      checked,
    })

    if (onChange) {
      onChange(checked)
    }
  }

  render() {
    const { checked } = this.state
    const { onChange, ...props } = this.props

    return (
      <Base {...props} checked={checked}>
        <input type="checkbox" checked={checked} onChange={this.handleChange} />
        {checked && <IconWrapper name="check" />}
      </Base>
    )
  }
}

export default Checkbox
