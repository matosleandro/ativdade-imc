const resultado = document.querySelector('#resultado');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');

const calcIMC = () => {
    const alturaValor = parseFloat(altura.value);
    const pesoValor = parseFloat(peso.value);

    if (!isNaN(alturaValor) && !isNaN(pesoValor)) {
        const imc = pesoValor / (alturaValor * alturaValor);
        let classification = '';

        if (imc < 18.5) {
            classification = '<strong>Abaixo do normal</strong>, Procure um médico.<br><br> Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem.<br><br> Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.';
        } else if (imc < 25) {
            classification = '<strong>Normal</strong>, Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.';
        } else if (imc < 30) {
            classification = '<strong>Sobrepeso</strong>, Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão.<br><br> Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.';
        } else if (imc < 35) {
            classification = '<strong>Obesidade grau I</strong>, Sinal de alerta!<br><br> Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje!<br><br> Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.';
        } else if (imc < 41) {
            classification = '<strong>Obesidade grau II</strong>, Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.';
        } else {
            classification = '<strong>Obesidade grau III</strong>, Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.';
        }

        resultado.innerHTML = `IMC: ${imc.toFixed(2)} (${classification})`;
    } else {
        resultado.innerHTML = 'Preencha todos os campos';
    }
};
