import React from 'react';
import PropTypes from 'prop-types';

import { BoxInput, ButtonWrap, Input, ButtonSubmit, ImgSubmit } from '../../custom/custom';

import EnviarIcon from '../../assets/enviar-icon.png';

const UiBoxInput = ({ numeroRef, lb1Ref, lb2Ref, pegarNumero, setUltimoNumero, limparUltimoNumero, ultimoNumero }) => {
    return (
        <>
            <BoxInput>
                <ButtonWrap>
                    <Input ref={numeroRef} className="inputnumber" type="number" />
                    <ButtonSubmit onClick={() => { pegarNumero(lb1Ref, lb2Ref, ultimoNumero, setUltimoNumero); limparUltimoNumero(); }}>
                        <ImgSubmit src={EnviarIcon}></ImgSubmit>
                    </ButtonSubmit>
                </ButtonWrap>
            </BoxInput>
        </>
    )
}

UiBoxInput.propTypes = {
    numeroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    lb1Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    lb2Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    pegarNumero: PropTypes.func.isRequired,
    limparUltimoNumero: PropTypes.func.isRequired,
    ultimoNumero: PropTypes.func.isRequired,
    setUltimoNumero: PropTypes.func.isRequired
}

export default UiBoxInput;