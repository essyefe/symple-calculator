import React from 'react';
import PropTypes from 'prop-types';

import { ContainerResults, BoxResult, BoxClear, ImgClear } from '../../custom/custom';

import ClearIcon from '../../assets/clear-icon.png';

const UiContainerResults = ({ resultadoRef, clear }) => {
    return (
        <>
            <ContainerResults>
                <BoxResult className="resultadotext" ref={resultadoRef}></BoxResult>
                <BoxClear className="box-clear">
                    <ImgClear src={ClearIcon} onClick={clear} />
                </BoxClear>
            </ContainerResults>
        </>
    )
}

UiContainerResults.propTypes = {
    resultadoRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    clear: PropTypes.func.isRequired
}

export default UiContainerResults;