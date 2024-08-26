import React from 'react';
import PropTypes from 'prop-types';

import { BoxCalculation, BoxValues, OperationLabel } from '../../custom/custom';

const UiBoxCalculation = ({ lb1Ref, lb2Ref, operationRef }) => {
    return (
        <>
            <BoxCalculation>
                <BoxValues>
                    <label ref={lb1Ref} className='label1'></label>
                    <OperationLabel ref={operationRef}></OperationLabel>
                    <label ref={lb2Ref} className='label2'></label>
                </BoxValues>
            </BoxCalculation>
        </>
    )
}

UiBoxCalculation.PropTypes = {
    lb1Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    lb2Ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    operationRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}

export default UiBoxCalculation;