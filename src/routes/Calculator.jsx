import { useRef, useEffect, useState } from 'react';

import '../style/style.css';

// Custom
import { Box } from '../custom/custom';

// Animations
import { opacityAnimation } from '../custom/custom';

// Importando Componentes
import UiNavbar from '../components/calculator/navbar';
import UiBoxButtons from '../components/calculator/box-buttons';
import UiBoxCalculation from '../components/calculator/box-calculation';
import UiContainerResults from '../components/calculator/container-results';
import UiBoxInput from '../components/calculator/box-input';

function Calculator() {

    const numeroRef = useRef(null);
    const lb1Ref = useRef(null);
    const lb2Ref = useRef(null);
    const somaRef = useRef(null);
    const subRef = useRef(null);
    const multiRef = useRef(null);
    const divRef = useRef(null);
    const porcentRef = useRef(null);
    const resultadoRef = useRef(null);
    const operationRef = useRef(null);
    const [ultimoNumero, setUltimoNumero] = useState(null);

    function alterandoVisibilidade() {
        window.document.querySelector('.box-clear').style.display = 'flex';
        window.document.querySelector('.boxbutoes').style.display = 'flex';
        window.document.querySelector('.box-clear').style.animation = `${opacityAnimation} 1s`;
        window.document.querySelector('.boxbutoes').style.animation = `${opacityAnimation} 1s`;
    }

    const pegarNumero = () => {
        if (ultimoNumero !== null && lb1Ref.current) {
            lb1Ref.current.textContent = ultimoNumero;
        }
        if (ultimoNumero !== null && lb2Ref.current) {
            window.document.querySelector('.label2').style.display = 'block';
            window.document.querySelector('.label2').style.animation = `${opacityAnimation} 1s`
        }
        if (numeroRef.current && lb2Ref.current) {
            lb2Ref.current.textContent = numeroRef.current.value;
            setUltimoNumero(numeroRef.current.value);
        }
        if (lb2Ref.current?.textContent && lb1Ref.current.textContent) {
            const numeroValido = lb1Ref.current.textContent;
            console.log(numeroValido);
            console.log(lb1Ref.current.textContent);
            if (lb1Ref.current.textContent == numeroValido) {
                console.log('Sim os números são iguais, onde está o erro')
            }
            if (lb1Ref.current.textContent == lb2Ref.current.textContent) {
                lb1Ref.current.style.display = 'block';
                window.document.querySelector('.box-clear').style.display = 'flex';
                alterandoVisibilidade();
            }
            else if (lb1Ref.current.textContent !== lb2Ref.current.textContent) {
                lb1Ref.current.style.display = 'block';
                lb1Ref.current.style.animation = `${opacityAnimation} 1s`
                alterandoVisibilidade();
            }
        }
    }

    const limparUltimoNumero = () => {
        if (numeroRef.current) {
            numeroRef.current.value = '';
        }
    }

    function animationReflow() {
        resultadoRef.current.style.animation = 'none';
        operationRef.current.style.animation = 'none';
        void resultadoRef.current.offsetWidth;
        void operationRef.current.offsetWidth;
        resultadoRef.current.style.animation = `${opacityAnimation} 1s`;
        operationRef.current.style.animation = `${opacityAnimation} 1s`;
    }

    const soma = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current) {
            animationReflow();
            const opsoma = parseFloat(lb1Ref.current.textContent) + parseFloat(lb2Ref.current.textContent);
            resultadoRef.current.textContent = opsoma;
            operationRef.current.textContent = '+';
            console.log('Resultado da soma : ' + opsoma);
        }
    }

    const sub = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current) {
            const opsub = parseFloat(lb1Ref.current.textContent) - parseFloat(lb2Ref.current.textContent);
            animationReflow();
            resultadoRef.current.textContent = opsub;
            operationRef.current.textContent = '-';
            console.log('Resultado da subtração : ' + opsub);
        }
    }

    const multi = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current) {
            const opmulti = parseFloat(lb1Ref.current.textContent) * parseFloat(lb2Ref.current.textContent);
            animationReflow();
            resultadoRef.current.textContent = opmulti;
            operationRef.current.textContent = '*';
            console.log('Resultado da multiplicação : ' + opmulti);
        }
    }

    const divi = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current) {
            const opdivi = parseFloat(lb1Ref.current.textContent) / parseFloat(lb2Ref.current.textContent);
            animationReflow();
            resultadoRef.current.textContent = opdivi;
            operationRef.current.textContent = '/';
            console.log('Resultado da divisão : ' + opdivi);
        }
    }

    const porcent = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current) {
            const opporcent = parseFloat(lb1Ref.current.textContent) * parseFloat(lb2Ref.current.textContent) / 100;
            animationReflow();
            resultadoRef.current.textContent = opporcent;
            operationRef.current.textContent = '%';
            console.log('Resultado da porcentagem : ' + opporcent);
        }
    }

    const clear = () => {
        if (lb1Ref.current && lb2Ref.current && operationRef.current && resultadoRef.current && numeroRef.current) {
            operationRef.current.style.animation = 'none';
            resultadoRef.current.style.animation = 'none';
            window.document.querySelector('.boxbutoes').style.animation = 'none';
            window.document.querySelector('.box-clear').style.animation = 'none';
            setTimeout(() => {
                lb1Ref.current.textContent = '';
                lb2Ref.current.textContent = '';
                operationRef.current.textContent = '';
                resultadoRef.current.textContent = '';
                window.document.querySelector('.label1').style.display = 'none';
                window.document.querySelector('.label2').style.display = 'none';
                window.document.querySelector('.boxbutoes').style.display = 'none';
                window.document.querySelector('.box-clear').style.display = 'none';
            }, 100);
            console.log('//////////////////////////////////')
            console.log(lb1Ref.current.value);
            console.log(lb2Ref.current.value);
            console.log(numeroRef.current.value);
            console.log(setUltimoNumero(numeroRef.current.value));
        }
    }

    useEffect(() => {
        pegarNumero();
    }, [numeroRef, lb1Ref]);

    useEffect(() => {
        if (numeroRef.current && lb1Ref.current && lb2Ref.current) {
            console.log('Referências estão definidas');
        }
    }, []);

    return (
        <>
            <Box>
                <UiNavbar />
                <UiBoxButtons
                    somaRef={somaRef}
                    subRef={subRef}
                    multiRef={multiRef}
                    divRef={divRef}
                    porcentRef={porcentRef}
                    soma={soma}
                    sub={sub}
                    multi={multi}
                    divi={divi}
                    porcent={porcent}
                />
                <UiBoxInput
                    numeroRef={numeroRef}
                    lb1Ref={lb1Ref}
                    lb2Ref={lb2Ref}
                    pegarNumero={pegarNumero}
                    setUltimoNumero={setUltimoNumero}
                    limparUltimoNumero={limparUltimoNumero}
                    ultimoNumero={ultimoNumero}
                />
                <UiBoxCalculation
                    lb1Ref={lb1Ref}
                    lb2Ref={lb2Ref}
                    operationRef={operationRef}
                />
                <UiContainerResults
                    resultadoRef={resultadoRef}
                    clear={clear}
                />
            </Box>
        </>
    )
};

export default Calculator;
