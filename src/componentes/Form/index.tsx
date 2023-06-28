import { useTheme, VStack, Icon } from 'native-base';
import { Input } from "../Input";
import { Button } from "../Button";
import { Ruler, Scales } from 'phosphor-react-native';
import { useState } from 'react';


const Form = () => {
    const { colors } = useTheme();
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleAlturaChange = (text: string) => {
        const newAltura = text.replace(',', '.');
        setAltura(newAltura)
    }

    const handlePesoChange = (text: string) => {
        setPeso(text)

    }

    const handleResultadoIMC = () => {
        if (parseFloat(altura) > 0) {
            const valorAltura = parseFloat(altura);
            const valorPeso = parseFloat(peso);

            const calculoIMC = valorPeso / (valorAltura * valorAltura);
            setResultado(calculoIMC);
            alert(`O valor do IMC é ${calculoIMC.toFixed(2)}`)
        }
    }
    return (
        <VStack bg={"gray.600"} px={6} flex={1} >
            <Input
                placeholder="Altura"
                mt={4}
                keyboardType='decimal-pad'
                InputLeftElement={<Icon as={<Ruler color={colors.gray[300]} />} size={10} ml={4} />}
                w={"100%"}
                onChangeText={handleAlturaChange}
                value={altura.toString()}
            />
            <Input
                placeholder="Peso"
                mt={4}
                keyboardType='decimal-pad'
                InputLeftElement={<Icon as={<Scales color={colors.gray[300]} />} size={10} ml={4} />}
                onChangeText={handlePesoChange}
                value={peso.toString()}
            />

            <Button title='CALCULAR' mt={5} onPress={handleResultadoIMC} />
        </VStack>
    )
}



export default Form