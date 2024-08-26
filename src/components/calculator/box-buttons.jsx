import React from 'react';
import PropTypes from 'prop-types';

import AdicaoIcon from '../../assets/adição-icon.png';
import SubtracaoIcon from '../../assets/subtração-icon.png';
import DivisaoIcon from '../../assets/divisão-icon.png';
import MultiplicacaoIcon from '../../assets/multiplicação-icon.png';
import PorcentagemIcon from '../../assets/porcentagem-icon.png';


import { BoxButtons, ContainerButtons, Button, ImgOperationButton } from '../../custom/custom';

const UiBoxButtons = ({ somaRef, subRef, multiRef, divRef, porcentRef, soma, sub, multi, divi, porcent }) => {
    return (
        <>
            <BoxButtons className='boxbutoes'>
                <ContainerButtons>
                    <Button onClick={soma}>
                        <ImgOperationButton src={AdicaoIcon} ref={somaRef}></ImgOperationButton>
                    </Button>
                    <Button onClick={sub}>
                        <ImgOperationButton src={SubtracaoIcon} ref={subRef}></ImgOperationButton>
                    </Button>
                    <Button onClick={multi}>
                        <ImgOperationButton src={MultiplicacaoIcon} ref={multiRef}></ImgOperationButton>
                    </Button>
                    <Button onClick={divi}>
                        <ImgOperationButton src={DivisaoIcon} ref={divRef}></ImgOperationButton>
                    </Button>
                    <Button onClick={porcent}>
                        <ImgOperationButton src={PorcentagemIcon} ref={porcentRef}></ImgOperationButton>
                    </Button>
                </ContainerButtons>
            </BoxButtons>
        </>
    )
};

UiBoxButtons.PropTypes = {
    somaRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    subRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    multi: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    divi: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    porcentRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    soma: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
    multi: PropTypes.func.isRequired,
    divi: PropTypes.func.isRequired,
    porcent: PropTypes.func.isRequired
}

export default UiBoxButtons;